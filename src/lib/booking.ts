export interface ScopePrefill {
  projectType?: string
  speed?: string
  estimatedTimeline?: string
  squad?: string
  architecture?: string
}

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void
    }
  }
}

// Custom event name used to signal CalendlyModal to open
export const CALENDLY_OPEN_EVENT = 'devtrop:open-calendly'

export interface CalendlyOpenDetail {
  url: string
}

let scriptLoadingPromise: Promise<void> | null = null

export function loadCalendlyScript(): Promise<void> {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('Window not available'))
  }

  // Already loaded — resolve immediately
  if (window.Calendly) {
    return Promise.resolve()
  }

  // Return in-flight promise if we already started loading
  if (scriptLoadingPromise) {
    return scriptLoadingPromise
  }

  scriptLoadingPromise = new Promise((resolve, reject) => {
    // Inject Calendly CSS (required for initPopupWidget)
    if (!document.querySelector('link[href*="calendly.com"][rel="stylesheet"]')) {
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = 'https://assets.calendly.com/assets/external/widget.css'
      document.head.appendChild(link)
    }

    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    )

    if (existingScript) {
      // Script tag exists but may have already fired — poll for window.Calendly
      if (window.Calendly) {
        resolve()
        return
      }
      // Still loading — wait for it
      existingScript.addEventListener('load', () => resolve())
      existingScript.addEventListener('error', () => reject(new Error('Calendly script failed')))
      return
    }

    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true

    const timeout = setTimeout(() => {
      scriptLoadingPromise = null
      reject(new Error('Calendly script loading timed out'))
    }, 8000)

    script.onload = () => {
      clearTimeout(timeout)
      resolve()
    }

    script.onerror = () => {
      clearTimeout(timeout)
      scriptLoadingPromise = null
      reject(new Error('Calendly script failed to load'))
    }

    document.head.appendChild(script)
  })

  return scriptLoadingPromise
}

function buildMailtoFallback(prefill?: ScopePrefill): string {
  const email = 'info.devtrop@gmail.com'
  const subject = encodeURIComponent('Discovery Call & Architecture Review')
  const lines: string[] = ['Hello Devtrop Team,\n\nI would like to schedule a discovery call.']

  if (prefill) {
    lines.push('\n--- Scope Details ---')
    if (prefill.projectType) lines.push(`Project Type: ${prefill.projectType}`)
    if (prefill.speed) lines.push(`Delivery Speed: ${prefill.speed}`)
    if (prefill.estimatedTimeline) lines.push(`Estimated Timeline: ${prefill.estimatedTimeline}`)
    if (prefill.squad) lines.push(`Squad: ${prefill.squad}`)
    if (prefill.architecture) lines.push(`Architecture: ${prefill.architecture}`)
  }

  const body = encodeURIComponent(lines.join('\n'))
  return `mailto:${email}?subject=${subject}&body=${body}`
}

// Accent color from design tokens — passed to Calendly so the calendar
// primary color matches the project theme (hex without #)
const ACCENT_COLOR = 'ff3000'

const CALENDLY_BASE_URL = `${process.env.NEXT_PUBLIC_CALENDLY_URL}`

export async function openBooking(prefill?: ScopePrefill): Promise<void> {
  console.log('[openBooking] called', { prefill })
  try {
    await loadCalendlyScript()
    console.log('[openBooking] script loaded, window.Calendly:', !!window.Calendly)

    let finalUrl = CALENDLY_BASE_URL
    if (prefill) {
      const notes = [
        prefill.projectType && `Type: ${prefill.projectType}`,
        prefill.speed && `Speed: ${prefill.speed}`,
        prefill.estimatedTimeline && `Timeline: ${prefill.estimatedTimeline}`,
        prefill.squad && `Squad: ${prefill.squad}`,
        prefill.architecture && `Stack: ${prefill.architecture}`,
      ]
        .filter(Boolean)
        .join(' | ')
        .slice(0, 500)

      finalUrl = `${finalUrl}&a1=${encodeURIComponent(notes)}`
    }

    console.log('[openBooking] calling initPopupWidget', { finalUrl })
    // Use Calendly's own popup — no custom modal wrapper
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: finalUrl })
    }
  } catch (err) {
    console.error('[openBooking] error:', err)
    window.location.href = buildMailtoFallback(prefill)
  }
}
