"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { COOKIES_NAME } from "@/lib/utils";

export function AuthRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Check if session cookie exists
    const checkAuth = () => {
      const cookies = document.cookie.split(";");
      const sessionCookie = cookies.find((cookie) =>
        cookie.trim().startsWith(`${COOKIES_NAME}=`)
      );

      if (sessionCookie) {
        // Session exists, redirect to home
        router.push("/");
        router.refresh();
      }
    };

    // Check immediately
    checkAuth();

    // Also check when the window regains focus (after OAuth redirect)
    const handleFocus = () => {
      checkAuth();
    };

    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("focus", handleFocus);
    };
  }, [router]);

  return null;
}
