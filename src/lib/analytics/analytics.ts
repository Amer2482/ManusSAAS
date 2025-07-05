// Analytics utility for tracking user events and behavior

export interface AnalyticsEvent {
  event: string;
  properties?: Record<string, any>;
  userId?: string;
  sessionId?: string;
  timestamp?: Date;
}

class Analytics {
  private isEnabled: boolean;
  private sessionId: string;

  constructor() {
    this.isEnabled = typeof window !== "undefined";
    this.sessionId = this.generateSessionId();
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  private async sendEvent(event: AnalyticsEvent) {
    if (!this.isEnabled) return;

    try {
      await fetch("/api/analytics/track", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...event,
          sessionId: this.sessionId,
          timestamp: new Date(),
          userAgent: navigator.userAgent,
          url: window.location.href,
          referrer: document.referrer,
        }),
      });
    } catch (error) {
      console.error("Analytics tracking error:", error);
    }
  }

  // Page view tracking
  track(event: string, properties?: Record<string, any>, userId?: string) {
    this.sendEvent({
      event,
      properties,
      userId,
    });
  }

  // Page view tracking
  page(pageName?: string, properties?: Record<string, any>) {
    this.track("page_view", {
      page: pageName || window.location.pathname,
      title: document.title,
      ...properties,
    });
  }

  // User identification
  identify(userId: string, traits?: Record<string, any>) {
    this.track("user_identified", {
      userId,
      traits,
    });
  }

  // Conversion tracking
  conversion(event: string, value?: number, currency?: string) {
    this.track("conversion", {
      event,
      value,
      currency: currency || "usd",
    });
  }

  // Button click tracking
  button(buttonName: string, location?: string) {
    this.track("button_click", {
      button: buttonName,
      location: location || window.location.pathname,
    });
  }

  // Form submission tracking
  form(formName: string, success: boolean, errorMessage?: string) {
    this.track("form_submission", {
      form: formName,
      success,
      errorMessage,
    });
  }

  // Newsletter signup tracking
  newsletter(email: string, source?: string) {
    this.track("newsletter_signup", {
      email,
      source: source || "website",
    });
  }

  // Purchase tracking
  purchase(planName: string, amount: number, currency: string = "usd") {
    this.track("purchase", {
      plan: planName,
      amount,
      currency,
    });
  }

  // Sign up tracking
  signup(method: string, userId?: string) {
    this.track("user_signup", {
      method,
      userId,
    });
  }

  // Sign in tracking
  signin(method: string, userId?: string) {
    this.track("user_signin", {
      method,
      userId,
    });
  }

  // Feature usage tracking
  feature(featureName: string, action: string) {
    this.track("feature_usage", {
      feature: featureName,
      action,
    });
  }

  // Error tracking
  error(errorMessage: string, errorCode?: string, context?: Record<string, any>) {
    this.track("error", {
      message: errorMessage,
      code: errorCode,
      context,
    });
  }
}

// Create singleton instance
export const analytics = new Analytics();

// React hook for analytics
export function useAnalytics() {
  return {
    track: analytics.track.bind(analytics),
    page: analytics.page.bind(analytics),
    identify: analytics.identify.bind(analytics),
    conversion: analytics.conversion.bind(analytics),
    button: analytics.button.bind(analytics),
    form: analytics.form.bind(analytics),
    newsletter: analytics.newsletter.bind(analytics),
    purchase: analytics.purchase.bind(analytics),
    signup: analytics.signup.bind(analytics),
    signin: analytics.signin.bind(analytics),
    feature: analytics.feature.bind(analytics),
    error: analytics.error.bind(analytics),
  };
}