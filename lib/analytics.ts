export type GaParams = Record<string, string | number | boolean | undefined>;
type Gtag = (command: "event", action: string, params?: GaParams) => void;
type WindowWithGtag = Window & { gtag?: Gtag };

/** Safe GA event wrapper */
export function trackEvent(action: string, params: GaParams = {}): void {
  if (typeof window === "undefined") return;
  const gtag = (window as WindowWithGtag).gtag;
  if (!gtag) return;
  gtag("event", action, params);
}
