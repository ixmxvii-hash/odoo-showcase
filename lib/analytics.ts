export type GaParams = Record<string, string | number | boolean | undefined>;

/** Safe GA event wrapper */
export function trackEvent(action: string, params: GaParams = {}): void {
  if (typeof window === "undefined") return;
  const gtag = (window as any).gtag as
    | ((command: string, action: string, params?: Record<string, any>) => void)
    | undefined;
  if (!gtag) return;
  gtag("event", action, params);
}
