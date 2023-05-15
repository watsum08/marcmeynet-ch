"use client";
import { usePathname } from "next/navigation";

export default function CanonicalURL() {
  const siteUrl = "https://marcmeynet.ch";
  const path = usePathname();
  console.log("path: " + path);

  const cleanPath = path?.split("#")[0].split("?")[0];
  const canonicalUrl = `${siteUrl}` + (path === "/" ? "" : cleanPath);

  return <link rel="canonical" href={canonicalUrl} />;
}
