"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";
import { useCountDown } from "@/hooks/useCountDown";
import { useLocalStorage } from "@uidotdev/usehooks";
import { NEW_REGISTER_LOCAL_STORAGE } from "@/utils/constants";

export function CompletedRegistrationScreen() {
  const router = useRouter();
  const countdown = useCountDown(5);
  const [isNewRegister, setIsNewRegister] = useLocalStorage(NEW_REGISTER_LOCAL_STORAGE, "");

  useLayoutEffect(() => {
    if (!isNewRegister) {
      router.push("/");
    } else {
      setIsNewRegister("");
    }
  }, []);

  useEffect(() => {
    if (countdown <= 0) {
      router.push("/");
    }
  }, [countdown]);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl -mt-8">🎉 Completed Registration 🎉</h1>
      <p>Redirecting in {countdown} seconds...</p>
      <br />
      <Link href="/">Go to Home Page</Link>
    </div>
  );
}
