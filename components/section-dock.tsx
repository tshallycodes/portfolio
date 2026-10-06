"use client";
import { useEffect, useState } from "react";
import { motion, useScroll } from "motion/react";
import { useMotion } from "./motion";
const sections = [
  { id: "about", name: "Story" },
  { id: "explore", name: "Explore" },
  { id: "work", name: "Work" },
  { id: "contact", name: "Contact" },
];
export function SectionDock() {
  const { scrollYProgress } = useScroll();
  const { motion: enabled, toggleMotion } = useMotion();
  const [active, setActive] = useState("");
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      setVisible(window.scrollY > window.innerHeight * 0.65);
      let current = "";
      for (const section of sections) {
        const node = document.getElementById(section.id);
        if (
          node &&
          node.getBoundingClientRect().top <= window.innerHeight * 0.4
        )
          current = section.id;
      }
      setActive(current);
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return (
    <>
      <motion.div
        className="reading-progress"
        style={{ scaleX: scrollYProgress }}
        aria-hidden="true"
      />
      {visible && (
        <motion.nav
          className="section-dock"
          aria-label="Page sections"
          initial={enabled ? { y: 20, opacity: 0 } : false}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: enabled ? 0.25 : 0 }}
        >
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              aria-current={active === section.id ? "location" : undefined}
            >
              {section.name}
            </a>
          ))}
          <button
            onClick={toggleMotion}
            aria-label={enabled ? "Turn motion off" : "Turn motion on"}
            aria-pressed={enabled}
          >
            {enabled ? "Ⅱ" : "▷"}
          </button>
          <a href="#main" aria-label="Back to top">
            ↑
          </a>
        </motion.nav>
      )}
    </>
  );
}
