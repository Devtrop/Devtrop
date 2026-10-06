'use client'

import { useState, useEffect, useCallback } from 'react'
import { CALENDLY_OPEN_EVENT, type CalendlyOpenDetail } from '@/lib/booking'
import { CalendlyModal } from './CalendlyModal'

export function CalendlyModalProvider() {
  const [activeUrl, setActiveUrl] = useState<string | null>(null)

  const handleOpen = useCallback((e: Event) => {
    const { url } = (e as CustomEvent<CalendlyOpenDetail>).detail
    console.log('[CalendlyModalProvider] event received', { url })
    setActiveUrl(url)
  }, [])

  useEffect(() => {
    console.log('[CalendlyModalProvider] mounting, adding event listener')
    window.addEventListener(CALENDLY_OPEN_EVENT, handleOpen)
    return () => {
      console.log('[CalendlyModalProvider] unmounting')
      window.removeEventListener(CALENDLY_OPEN_EVENT, handleOpen)
    }
  }, [handleOpen])

  console.log('[CalendlyModalProvider] render', { activeUrl })

  if (!activeUrl) return null

  return <CalendlyModal url={activeUrl} onClose={() => setActiveUrl(null)} />
}
