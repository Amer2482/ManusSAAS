import { ObjectId } from "mongodb";

export interface User {
  _id?: ObjectId;
  id?: string;
  name?: string | null;
  email?: string | null;
  emailVerified?: Date | null;
  image?: string | null;
  createdAt?: Date;
  updatedAt?: Date;
  stripeCustomerId?: string;
  subscriptionStatus?: "active" | "inactive" | "canceled" | "past_due";
  subscriptionId?: string;
  priceId?: string;
  subscriptionCurrentPeriodEnd?: Date;
}

export interface Lead {
  _id?: ObjectId;
  email: string;
  name?: string;
  source?: string;
  createdAt: Date;
  subscribed: boolean;
}

export interface Analytics {
  _id?: ObjectId;
  userId?: string;
  event: string;
  properties?: Record<string, any>;
  timestamp: Date;
  sessionId?: string;
  userAgent?: string;
  ip?: string;
}

