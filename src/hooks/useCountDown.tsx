"use client";
import { useEffect, useState } from "react";

export function useCountDown(start: number) {
  const [countdown, setCountdown] = useState(start);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [countdown]);

  return countdown;
}
