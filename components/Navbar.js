"use client";

import { useEffect, useRef, useState } from "react";
import TransitionLink from "./TransitionLink";
import Image from "next/image";

export default function Navbar() {
  const [isHidden, setIsHidden] = useState(false);
  const lastScroll = useRef(0);
  const navRef = useRef(null);

  useEffect(() => {
    const updateNavbarHeight = () => {
      if (!navRef.current) return;
      const height = navRef.current.getBoundingClientRect().height;
      document.documentElement.style.setProperty(
        "--navbar-height",
        `${height}px`
      );
    };

    updateNavbarHeight();
    window.addEventListener("resize", updateNavbarHeight);

    return () => {
      window.removeEventListener("resize", updateNavbarHeight);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > lastScroll.current && currentScroll > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`site-navbar flex justify-between items-center py-8 px-12${
        isHidden ? " site-navbar-hidden" : ""
      }`}
    >
      <TransitionLink href="/">
        <Image src="/images/logo.svg" alt="Logo" width={180} height={180} />
      </TransitionLink>
      <div>
        <ul className="flex justify-between gap-20">
          <li className="nav-link">
            <div className="org-box"></div>
            <TransitionLink href="/ueber-uns">Über Uns</TransitionLink>
          </li>
          <li className="nav-link">
            <div className="org-box"></div>
            <TransitionLink href="/leistungen">Leistungen</TransitionLink>
          </li>
          <li className="nav-link">
            <div className="org-box"></div>
            <TransitionLink href="/gewerbe">Gewerbe</TransitionLink>
          </li>
          <li className="nav-link">
            <div className="org-box"></div>
            <TransitionLink href="/privat">Privat</TransitionLink>
          </li>
        </ul>
      </div>
      <div className="nav-link">
        <div className="org-box"></div>
        <TransitionLink href="/kontakt">Kontakt</TransitionLink>
      </div>
    </nav>
  );
}
