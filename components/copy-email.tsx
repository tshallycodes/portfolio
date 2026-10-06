"use client";
import { useEffect, useRef, useState } from "react";
export function CopyEmail() {
  const [status, setStatus] = useState("Copy email");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);
  async function copy() {
    try {
      await navigator.clipboard.writeText("bubutshally@gmail.com");
      setStatus("Email copied");
    } catch {
      setStatus("Use the email link above");
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus("Copy email"), 3500);
  }
  return (
    <button className="button button-outline copy-email" onClick={copy}>
      <span aria-live="polite">{status}</span>
      <span aria-hidden="true">{status === "Email copied" ? "✓" : "⧉"}</span>
    </button>
  );
}
