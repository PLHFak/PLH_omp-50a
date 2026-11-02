"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Sends a page view on each route change and a heartbeat every 15 s while the tab is visible.
export default function Tracker() {
  const path = usePathname();
  useEffect(() => {
    let sid = "";
    try { sid = sessionStorage.getItem("omp_sid") || ""; } catch {}
    if (!sid) {
      sid = crypto.randomUUID();
      try { sessionStorage.setItem("omp_sid", sid); } catch {}
    }
    const send = (sec: number, view: boolean) => {
      const body = JSON.stringify({ sid, path, sec, view });
      if (!view && navigator.sendBeacon) navigator.sendBeacon("/api/track", new Blob([body], { type: "application/json" }));
      else fetch("/api/track", { method: "POST", headers: { "Content-Type": "application/json" }, body, keepalive: true }).catch(() => {});
    };
    send(0, true);
    let last = Date.now();
    const flush = () => {
      const now = Date.now();
      const sec = Math.round((now - last) / 1000);
      last = now;
      if (sec > 0) send(Math.min(sec, 120), false);
    };
    const iv = setInterval(() => { if (document.visibilityState === "visible") flush(); else last = Date.now(); }, 15000);
    const onHide = () => { if (document.visibilityState === "hidden") flush(); else last = Date.now(); };
    document.addEventListener("visibilitychange", onHide);
    window.addEventListener("pagehide", flush);
    return () => { flush(); clearInterval(iv); document.removeEventListener("visibilitychange", onHide); window.removeEventListener("pagehide", flush); };
  }, [path]);
  return null;
}
