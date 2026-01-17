"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import gsap from "gsap";

const TRANSITION_DURATION = 1.5;

export default function TransitionLink({ href, children, className, ...props }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (event) => {
    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      props.target === "_blank"
    ) {
      return;
    }

    event.preventDefault();

    if (href === pathname) {
      return;
    }

    const content = document.querySelector(".page-content");
    const timeline = gsap.timeline({
      defaults: { ease: "power4.inOut" },
      onComplete: () => router.push(href),
    });

    timeline.fromTo(
      ".page-transition",
      { y: "-100%" },
      { y: "100%", duration: TRANSITION_DURATION }
    );

    timeline.fromTo(
      ".page-transition-second",
      { y: "-100%" },
      { y: "100%", duration: TRANSITION_DURATION },
      "-=1.4"
    );

    if (content) {
      timeline.fromTo(
        content,
        { opacity: 1 },
        { opacity: 0, duration: 0.5 },
        "-=1.1"
      );
    }
  };

  return (
    <Link href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </Link>
  );
}
