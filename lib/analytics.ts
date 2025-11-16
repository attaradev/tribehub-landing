import { track } from '@vercel/analytics'

type EventName =
  | 'contact_form_submit'
  | 'waitlist_click'
  | 'demo_click'
  | 'navigation_click'
  | 'theme_toggle'
  | 'social_link_click'

export function trackEvent(eventName: EventName, properties?: Record<string, string | number | boolean>) {
  try {
    track(eventName, properties)
  } catch (error) {
    // Silently fail if analytics is not available
    console.error('Analytics tracking error:', error)
  }
}
