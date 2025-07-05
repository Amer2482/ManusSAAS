// Email templates and spam prevention guidelines

export const SPAM_PREVENTION_CHECKLIST = {
  // Domain and Authentication
  domainAuthentication: [
    "Set up SPF record: v=spf1 include:_spf.resend.com ~all",
    "Set up DKIM record (provided by Resend)",
    "Set up DMARC record: v=DMARC1; p=quarantine; rua=mailto:dmarc@yourdomain.com",
    "Use a dedicated sending domain (e.g., mail.yourdomain.com)",
  ],
  
  // Content Guidelines
  contentGuidelines: [
    "Avoid spam trigger words (FREE, URGENT, ACT NOW, etc.)",
    "Use proper text-to-HTML ratio (60% text, 40% HTML)",
    "Include clear unsubscribe link",
    "Use legitimate sender name and address",
    "Avoid excessive use of capital letters",
    "Include physical mailing address",
  ],
  
  // List Management
  listManagement: [
    "Use double opt-in for subscriptions",
    "Honor unsubscribe requests immediately",
    "Regularly clean inactive subscribers",
    "Segment your email lists",
    "Monitor bounce rates and complaints",
  ],
  
  // Technical Best Practices
  technicalBestPractices: [
    "Use consistent From name and email",
    "Include alt text for images",
    "Test emails across different clients",
    "Monitor sender reputation",
    "Use proper email headers",
  ],
};

export function getEmailTemplate(type: "welcome" | "reset" | "subscription", data: any) {
  const baseStyle = `
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    line-height: 1.6;
    color: #333;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  `;

  const buttonStyle = `
    background-color: #2563eb;
    color: white;
    padding: 12px 24px;
    text-decoration: none;
    border-radius: 6px;
    display: inline-block;
    font-weight: 600;
    margin: 16px 0;
  `;

  switch (type) {
    case "welcome":
      return `
        <div style="${baseStyle}">
          <div style="text-align: center; margin-bottom: 32px;">
            <h1 style="color: #2563eb; margin-bottom: 8px;">Welcome to SaaSFast!</h1>
            <p style="color: #666; font-size: 16px;">Launch your SaaS in minutes, not months</p>
          </div>
          
          <p>Hi ${data.name || "there"},</p>
          
          <p>Thank you for joining SaaSFast! We're excited to have you on board and help you build your next successful SaaS business.</p>
          
          <div style="background-color: #f8fafc; padding: 24px; border-radius: 8px; margin: 24px 0;">
            <h3 style="margin-top: 0; color: #1e293b;">What you get with SaaSFast:</h3>
            <ul style="margin: 16px 0; padding-left: 20px;">
              <li>Complete Next.js SaaS boilerplate</li>
              <li>Authentication with NextAuth.js</li>
              <li>Stripe payment integration</li>
              <li>MongoDB database setup</li>
              <li>Email automation with Resend</li>
              <li>Beautiful UI components</li>
              <li>Deployment-ready code</li>
            </ul>
          </div>
          
          <div style="text-align: center; margin: 32px 0;">
            <a href="${process.env.NEXTAUTH_URL}/dashboard" style="${buttonStyle}">
              Access Your Dashboard
            </a>
          </div>
          
          <p>Need help getting started? Check out our documentation or reach out to our support team.</p>
          
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 32px 0;">
          
          <div style="text-align: center; color: #64748b; font-size: 14px;">
            <p>Best regards,<br>The SaaSFast Team</p>
            <p>
              <a href="${process.env.NEXTAUTH_URL}" style="color: #2563eb;">SaaSFast</a> |
              <a href="${process.env.NEXTAUTH_URL}/unsubscribe" style="color: #64748b;">Unsubscribe</a>
            </p>
            <p>123 SaaS Street, Tech City, TC 12345</p>
          </div>
        </div>
      `;

    case "reset":
      return `
        <div style="${baseStyle}">
          <div style="text-align: center; margin-bottom: 32px;">
            <h1 style="color: #2563eb;">Reset Your Password</h1>
          </div>
          
          <p>Hi there,</p>
          
          <p>You requested to reset your password for your SaaSFast account. Click the button below to create a new password:</p>
          
          <div style="text-align: center; margin: 32px 0;">
            <a href="${data.resetUrl}" style="${buttonStyle}">
              Reset Password
            </a>
          </div>
          
          <div style="background-color: #fef3c7; padding: 16px; border-radius: 8px; border-left: 4px solid #f59e0b;">
            <p style="margin: 0; color: #92400e;">
              <strong>Security Notice:</strong> This link will expire in 1 hour for your security. 
              If you didn't request this password reset, you can safely ignore this email.
            </p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 32px 0;">
          
          <div style="text-align: center; color: #64748b; font-size: 14px;">
            <p>Best regards,<br>The SaaSFast Team</p>
            <p>123 SaaS Street, Tech City, TC 12345</p>
          </div>
        </div>
      `;

    case "subscription":
      return `
        <div style="${baseStyle}">
          <div style="text-align: center; margin-bottom: 32px;">
            <h1 style="color: #2563eb;">Welcome to SaaSFast ${data.planName}!</h1>
            <p style="color: #16a34a; font-size: 18px; font-weight: 600;">🎉 Subscription Confirmed</p>
          </div>
          
          <p>Congratulations! Your subscription to SaaSFast ${data.planName} is now active.</p>
          
          <div style="background-color: #f0fdf4; padding: 24px; border-radius: 8px; margin: 24px 0; border-left: 4px solid #16a34a;">
            <h3 style="margin-top: 0; color: #15803d;">Your Premium Features:</h3>
            <ul style="margin: 16px 0; padding-left: 20px; color: #166534;">
              <li>Advanced UI components and templates</li>
              <li>Priority email and chat support</li>
              <li>Custom integration assistance</li>
              <li>Advanced analytics dashboard</li>
              <li>Lifetime updates and new features</li>
              <li>White-label licensing options</li>
            </ul>
          </div>
          
          <div style="text-align: center; margin: 32px 0;">
            <a href="${process.env.NEXTAUTH_URL}/dashboard" style="${buttonStyle}">
              Access Premium Features
            </a>
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px;">
            <h4 style="margin-top: 0;">Subscription Details:</h4>
            <p style="margin: 8px 0;"><strong>Plan:</strong> ${data.planName}</p>
            <p style="margin: 8px 0;"><strong>Billing:</strong> ${data.interval || "One-time"}</p>
            <p style="margin: 8px 0;"><strong>Next Billing:</strong> ${data.nextBilling || "N/A"}</p>
          </div>
          
          <p>Questions about your subscription? Our support team is here to help!</p>
          
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 32px 0;">
          
          <div style="text-align: center; color: #64748b; font-size: 14px;">
            <p>Best regards,<br>The SaaSFast Team</p>
            <p>
              <a href="${process.env.NEXTAUTH_URL}" style="color: #2563eb;">SaaSFast</a> |
              <a href="${process.env.NEXTAUTH_URL}/account" style="color: #64748b;">Manage Subscription</a>
            </p>
            <p>123 SaaS Street, Tech City, TC 12345</p>
          </div>
        </div>
      `;

    default:
      throw new Error(`Unknown email template type: ${type}`);
  }
}