// src/lib/server/oauth.js
"use server";

import { createAdminClient } from "@/lib/server/appwrite";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { OAuthProvider } from "node-appwrite";

export async function signUpWithGoogle() {
  const { account } = await createAdminClient();

  const headersList = await headers();
  const origin = headersList.get("origin");

  const redirectUrl = await account.createOAuth2Token({
    provider: OAuthProvider.Google,
    success: `${origin}/oauth`,
    failure: `${origin}/signup`,
  });

  return redirect(redirectUrl);
}
