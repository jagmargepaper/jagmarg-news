"use server";

import { cookies } from 'next/headers';

export async function loginUser(email: string) {
  const cookieStore = await cookies();
  
  // Set persistent login cookie (e.g., valid for 30 days)
  cookieStore.set('jagmarg_logged_in', 'true', { 
    path: '/',
    maxAge: 30 * 24 * 60 * 60 // 30 days
  });
  
  // Store user email
  cookieStore.set('jagmarg_user_email', email, {
    path: '/',
    maxAge: 30 * 24 * 60 * 60
  });

  return { success: true };
}

export async function logoutUser() {
  const cookieStore = await cookies();
  cookieStore.delete('jagmarg_logged_in');
  cookieStore.delete('jagmarg_user_email');
  cookieStore.delete('jagmarg_premium');
  cookieStore.delete('jagmarg_premium_expiry');
  return { success: true };
}

export async function getUserSession() {
  const cookieStore = await cookies();
  const isLoggedIn = cookieStore.get('jagmarg_logged_in')?.value === 'true';
  const email = cookieStore.get('jagmarg_user_email')?.value || null;
  return { isLoggedIn, email };
}
