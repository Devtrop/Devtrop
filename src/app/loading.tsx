/**
 * Root loading UI — shown by Next.js App Router during page segment transitions.
 * Must hold the same min-height as a real page so <main> never collapses to
 * zero height, which would expose the bottom border of the last section and
 * cause the "border blink" artifact on navigation.
 */
export default function Loading() {
  return <div className="flex-1 min-h-screen" aria-hidden="true" />;
}
