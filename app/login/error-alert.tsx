"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export function ErrorAlert() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  useEffect(() => {
    if (error) alert(error);
  }, [error]);

  return null;
}

