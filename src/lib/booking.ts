export interface ScopePrefill {
  projectType?: string;
  speed?: string;
  estimatedTimeline?: string;
  squad?: string;
  architecture?: string;
}

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

let scriptLoadingPromise: Promise<void> | null = null;

function loadCalendlyScript(): Promise<void> {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("Window not available"));
  }

  if (window.Calendly) {
    return Promise.resolve();
  }

  if (!scriptLoadingPromise) {
    scriptLoadingPromise = new Promise((resolve, reject) => {
      const existingScript = document.querySelector<HTMLScriptElement>(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );

      if (existingScript) {
        existingScript.addEventListener("load", () => resolve());
        existingScript.addEventListener("error", () =>
          reject(new Error("Failed to load Calendly script"))
        );
        return;
      }

      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;

      const timeout = setTimeout(() => {
        reject(new Error("Calendly script loading timed out"));
      }, 5000);

      script.onload = () => {
        clearTimeout(timeout);
        resolve();
      };

      script.onerror = () => {
        clearTimeout(timeout);
        reject(new Error("Calendly script failed to load"));
      };

      document.head.appendChild(script);
    });
  }

  return scriptLoadingPromise;
}

function buildMailtoFallback(prefill?: ScopePrefill): string {
  const email = "founders@devtrop.com";
  const subject = encodeURIComponent("Discovery Call & Architecture Review");
  const lines: string[] = ["Hello Devtrop Team,\n\nI would like to schedule a discovery call."];

  if (prefill) {
    lines.push("\n--- Scope Details ---");
    if (prefill.projectType) lines.push(`Project Type: ${prefill.projectType}`);
    if (prefill.speed) lines.push(`Delivery Speed: ${prefill.speed}`);
    if (prefill.estimatedTimeline) lines.push(`Estimated Timeline: ${prefill.estimatedTimeline}`);
    if (prefill.squad) lines.push(`Squad: ${prefill.squad}`);
    if (prefill.architecture) lines.push(`Architecture: ${prefill.architecture}`);
  }

  const body = encodeURIComponent(lines.join("\n"));
  return `mailto:${email}?subject=${subject}&body=${body}`;
}

export async function openBooking(prefill?: ScopePrefill): Promise<void> {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  // Fallback to mailto if no Calendly URL is configured
  if (!calendlyUrl) {
    window.location.href = buildMailtoFallback(prefill);
    return;
  }

  try {
    await loadCalendlyScript();

    if (window.Calendly && typeof window.Calendly.initPopupWidget === "function") {
      let finalUrl = calendlyUrl;
      if (prefill) {
        const notes = [
          prefill.projectType && `Type: ${prefill.projectType}`,
          prefill.speed && `Speed: ${prefill.speed}`,
          prefill.estimatedTimeline && `Timeline: ${prefill.estimatedTimeline}`,
          prefill.squad && `Squad: ${prefill.squad}`,
          prefill.architecture && `Stack: ${prefill.architecture}`,
        ]
          .filter(Boolean)
          .join(" | ")
          .slice(0, 500);

        const separator = finalUrl.includes("?") ? "&" : "?";
        finalUrl = `${finalUrl}${separator}a1=${encodeURIComponent(notes)}`;
      }

      window.Calendly.initPopupWidget({ url: finalUrl });
    } else {
      window.location.href = buildMailtoFallback(prefill);
    }
  } catch {
    window.location.href = buildMailtoFallback(prefill);
  }
}
