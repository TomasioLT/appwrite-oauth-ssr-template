// src/app/oauth/route.js

import { createAdminClient } from "@/lib/server/appwrite";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { COOKIES_NAME } from "@/lib/utils";

export async function GET(request) {
  const userId = request.nextUrl.searchParams.get("userId");
  const secret = request.nextUrl.searchParams.get("secret");

  const { account } = await createAdminClient();
  const session = await account.createSession({
    userId,
    secret,
  });

  const cookieStore = await cookies();
  cookieStore.set(COOKIES_NAME, session.secret, {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: true,
  });

  // Return HTML with immediate client-side redirect
  return new Response(
    `
    <!DOCTYPE html>
    <html>
      <head>
        <meta http-equiv="refresh" content="0;url=/" />
      </head>
      <body>
        <script>
          window.location.replace('/');
        </script>
      </body>
    </html>
    `,
    {
      status: 200,
      headers: {
        "Content-Type": "text/html",
        "Cache-Control": "no-store, must-revalidate",
        Pragma: "no-cache",
      },
    }
  );
}
