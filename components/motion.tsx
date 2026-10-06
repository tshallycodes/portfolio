"use client";
import { MotionConfig } from "motion/react";
import { usePathname } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
const MotionContext = createContext({ motion: false, toggleMotion: () => {} });
export const useMotion = () => useContext(MotionContext);
export function MotionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [motion, setMotion] = useState(false);
  const cursor = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      let stored = "on";
      try {
        stored = localStorage.getItem("tshally-motion") || "on";
      } catch {}
      setMotion(!media.matches && stored !== "off");
    };
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  const toggleMotion = useCallback(
    () =>
      setMotion((current) => {
        try {
          localStorage.setItem("tshally-motion", current ? "off" : "on");
        } catch {}
        return !current;
      }),
    [],
  );
  useEffect(() => {
    document.documentElement.dataset.motion = motion ? "on" : "off";
    if (!motion) return;
    const move = (event: PointerEvent) => {
      if (cursor.current) {
        cursor.current.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
        cursor.current.dataset.active = String(
          !!(event.target as HTMLElement).closest("a,button"),
        );
        cursor.current.style.opacity = "1";
      }
    };
    const leave = () => {
      if (cursor.current) cursor.current.style.opacity = "0";
    };
    document.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", leave);
    let cleanup = () => {};
    let cancelled = false;
    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);
        const mm = gsap.matchMedia();
        mm.add("(prefers-reduced-motion: no-preference)", () => {
          gsap.from(".hero-headline h1 > span", {
            yPercent: 60,
            opacity: 0,
            stagger: 0.13,
            duration: 1.3,
            ease: "power3.out",
          });
          gsap.from(".hero-art", {
            opacity: 0,
            scale: 0.8,
            duration: 1.8,
            ease: "power2.out",
          });
          gsap.utils.toArray<HTMLElement>(".journey-line").forEach((line) =>
            gsap.from(line, {
              scaleX: 0,
              transformOrigin: "left",
              scrollTrigger: {
                trigger: line,
                start: "top 85%",
                end: "top 55%",
                scrub: 1,
              },
            }),
          );
        });
        cleanup = () => mm.revert();
      },
    );
    return () => {
      cancelled = true;
      cleanup();
      document.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
    };
  }, [motion, pathname]);
  return (
    <MotionContext.Provider value={{ motion, toggleMotion }}>
      <MotionConfig reducedMotion={motion ? "user" : "always"}>
        {children}
      </MotionConfig>
      <div ref={cursor} className="custom-cursor" aria-hidden="true" />
    </MotionContext.Provider>
  );
}
