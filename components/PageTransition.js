"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export default function PageTransition() {
  const pathname = usePathname();

  useEffect(() => {
    const content = document.querySelector(".page-content");
    gsap.set([".page-transition", ".page-transition-second"], { y: "-100%" });
    if (content) {
      gsap.set(content, { opacity: 1 });
    }
  }, [pathname]);

  return (
    <>
      <div className="page-transition" />
      <div className="page-transition-second" />
    </>
  );
}
