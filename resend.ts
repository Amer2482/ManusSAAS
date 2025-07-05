import { Resend } from "resend";

if (!process.env.RESEND_API_KEY) {
  console.warn("RESEND_API_KEY is not set. Email functionality will be disabled.");
}

const resend = new Resend(process.env.RESEND_API_KEY);

export interface EmailOptions {
  to: string | string[];
  subject: string;
  html?: string;
  text?: string;
  from?: string;
}

export async function sendEmail(options: EmailOptions) {
  if (!process.env.RESEND_API_KEY) {
    console.log("Email sending skipped - RESEND_API_KEY not configured");
    return { success: false, error: "Email service not configured" };
  }

  try {
    const { data, error } = await resend.emails.send({
      from: options.from || "SaaSFast <noreply@saasfast.com>",
      to: options.to,
      subject: options.subject,
      html: options.html,
      text: options.text,
    });

    if (error) {
      console.error("Email sending failed:", error);
      return { success: false, error: error.message };
    }

    console.log("Email sent successfully:", data);
    return { success: true, data };
  } catch (error) {
    console.error("Email sending error:", error);
    return { success: false, error: "Failed to send email" };
  }
}

export async function sendWelcomeEmail(email: string, name?: string) {
  const subject = "Welcome to SaaSFast!";
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #2563eb;">Welcome to SaaSFast!</h1>
      <p>Hi ${name || "there"},</p>
      <p>Thank you for signing up for SaaSFast! We're excited to have you on board.</p>
      <p>With SaaSFast, you can:</p>
      <ul>
        <li>Launch your SaaS in minutes, not months</li>
        <li>Use pre-built authentication and payment systems</li>
        <li>Focus on your unique value proposition</li>
        <li>Scale your business with confidence</li>
      </ul>
      <p>Get started by visiting your dashboard:</p>
      <a href="${process.env.NEXTAUTH_URL}/dashboard" style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
        Go to Dashboard
      </a>
      <p>If you have any questions, feel free to reach out to our support team.</p>
      <p>Best regards,<br>The SaaSFast Team</p>
    </div>
  `;

  return sendEmail({
    to: email,
    subject,
    html,
  });
}

export async function sendPasswordResetEmail(email: string, resetToken: string) {
  const subject = "Reset your SaaSFast password";
  const resetUrl = `${process.env.NEXTAUTH_URL}/auth/reset-password?token=${resetToken}`;
  
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #2563eb;">Reset Your Password</h1>
      <p>You requested to reset your password for your SaaSFast account.</p>
      <p>Click the button below to reset your password:</p>
      <a href="${resetUrl}" style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
        Reset Password
      </a>
      <p>This link will expire in 1 hour for security reasons.</p>
      <p>If you didn't request this password reset, you can safely ignore this email.</p>
      <p>Best regards,<br>The SaaSFast Team</p>
    </div>
  `;

  return sendEmail({
    to: email,
    subject,
    html,
  });
}

export async function sendSubscriptionConfirmationEmail(email: string, planName: string) {
  const subject = "Subscription Confirmed - Welcome to SaaSFast Pro!";
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #2563eb;">Subscription Confirmed!</h1>
      <p>Thank you for upgrading to SaaSFast ${planName}!</p>
      <p>Your subscription is now active and you have access to all premium features:</p>
      <ul>
        <li>Advanced components and templates</li>
        <li>Priority support</li>
        <li>Custom integrations</li>
        <li>Analytics dashboard</li>
        <li>Lifetime updates</li>
      </ul>
      <p>Access your premium features:</p>
      <a href="${process.env.NEXTAUTH_URL}/dashboard" style="background-color: #2563eb; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block;">
        Go to Dashboard
      </a>
      <p>If you have any questions about your subscription, please contact our support team.</p>
      <p>Best regards,<br>The SaaSFast Team</p>
    </div>
  `;

  return sendEmail({
    to: email,
    subject,
    html,
  });
}

