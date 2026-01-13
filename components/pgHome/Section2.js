"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Section2() {
  const containerRef = useRef(null);
  const blocksRef = useRef([]);
  const textRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top center",
        end: "center center",
        scrub: 1,
        markers: false,
      },
    });

    // Animiere die 4 Klötze zu ihren Ecken
    tl.to(
      blocksRef.current[0], // oben-links
      { x: -336, y: -190, duration: 1 },
      0
    )
      .to(
        blocksRef.current[1], // oben-rechts
        { x: 336, y: -190, duration: 1 },
        0
      )
      .to(
        blocksRef.current[2], // unten-links
        { x: -336, y: 190, duration: 1 },
        0
      )
      .to(
        blocksRef.current[3], // unten-rechts
        { x: 336, y: 190, duration: 1 },
        0
      )
      .to(textRef.current, { opacity: 1, duration: 5 }, 0);

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center min-h-screen bg-[#fbfbfb]"
    >
      <div className="relative w-full max-w-[1440px] h-[400px]">
        {/* Container für die 4 Klötze */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Oben-links */}
          <div
            ref={(el) => (blocksRef.current[0] = el)}
            className="absolute w-5 h-5 bg-[rgba(18,8,2,0.75)]"
          />
          {/* Oben-rechts */}
          <div
            ref={(el) => (blocksRef.current[1] = el)}
            className="absolute w-5 h-5 bg-[rgba(18,8,2,0.75)]"
          />
          {/* Unten-links */}
          <div
            ref={(el) => (blocksRef.current[2] = el)}
            className="absolute w-5 h-5 bg-[rgba(18,8,2,0.75)]"
          />
          {/* Unten-rechts */}
          <div
            ref={(el) => (blocksRef.current[3] = el)}
            className="absolute w-5 h-5 bg-[rgba(18,8,2,0.75)]"
          />
        </div>

        {/* Text in der Mitte - wird nach Animation sichtbar */}
        <div
          ref={textRef}
          className="absolute inset-0 flex items-center justify-center opacity-0"
        >
          <div className="max-w-[545px] px-8">
            <p className="text-[36px] text-[#e66a1e] leading-[1.2] mb-0">
              Wir übernehmen Verantwortung für Planung, Ausführung und Ergebnis.
            </p>
            <p className="text-[36px] text-[#e66a1e] leading-[1.2] mb-0">
              Jeder Schritt ist dokumentiert, jedes Detail durchdacht.
            </p>
            <p className="text-[36px] text-[#e66a1e] leading-[1.2]">
              Diese Konsequenz macht unsere Arbeit verlässlich – und Räume
              dauerhaft funktional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
