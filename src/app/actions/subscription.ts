"use server";

import { cookies } from 'next/headers';

export async function getUserSubscriptionStatus() {
  const cookieStore = await cookies();
  const isPremium = cookieStore.get('jagmarg_premium')?.value === 'true';
  const expiresAt = cookieStore.get('jagmarg_premium_expiry')?.value;

  // Lazy Evaluation: Check if expired right now!
  if (isPremium && expiresAt) {
    if (Date.now() > parseInt(expiresAt, 10)) {
      // Expired! No midnight cron needed. We catch it here lazily.
      return { isPremium: false, expired: true };
    }
  }

  return { isPremium, expired: false, expiresAt };
}

export async function subscribeUser() {
  const cookieStore = await cookies();
  // Set premium to true
  cookieStore.set('jagmarg_premium', 'true', { path: '/' });
  // Set expiry to 30 days from exactly NOW (Lazy Evaluation strategy)
  const expiryDate = Date.now() + 30 * 24 * 60 * 60 * 1000;
  cookieStore.set('jagmarg_premium_expiry', expiryDate.toString(), { path: '/' });
}

export async function cancelSubscription() {
  const cookieStore = await cookies();
  cookieStore.delete('jagmarg_premium');
  cookieStore.delete('jagmarg_premium_expiry');
}

export async function getFreeArticleCount() {
  const cookieStore = await cookies();
  const count = parseInt(cookieStore.get('jagmarg_free_reads')?.value || '0', 10);
  return count;
}

export async function incrementFreeArticleCount() {
  const cookieStore = await cookies();
  const current = parseInt(cookieStore.get('jagmarg_free_reads')?.value || '0', 10);
  
  // Keep cookie alive for 30 days
  cookieStore.set('jagmarg_free_reads', (current + 1).toString(), { 
    path: '/',
    maxAge: 30 * 24 * 60 * 60
  });
  return current + 1;
}
