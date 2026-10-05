"use client";
import Link from "next/link";
import { useState } from "react";
import { useMotion } from "./motion";
import { Arrow } from "./icons";
export function Navigation() {
  const [open, setOpen] = useState(false);
  const { motion, toggleMotion } = useMotion();
  return (
    <header className="navigation">
      <Link
        href="/"
        className="wordmark"
        aria-label="Tshally homepage"
        onClick={() => setOpen(false)}
      >
        tshally<span>✳</span>
      </Link>
      <nav
        className={open ? "nav-links is-open" : "nav-links"}
        aria-label="Main navigation"
      >
        <a href="/#work" onClick={() => setOpen(false)}>
          Work
        </a>
        <a href="/#about" onClick={() => setOpen(false)}>
          About
        </a>
        <button
          className="motion-toggle"
          onClick={toggleMotion}
          aria-pressed={!motion}
        >
          {motion ? "Motion on" : "Motion off"}
          <span className={motion ? "toggle is-on" : "toggle"} />
        </button>
        <a
          className="nav-contact"
          href="/#contact"
          onClick={() => setOpen(false)}
        >
          Let’s talk <Arrow diagonal />
        </a>
      </nav>
      <button
        className="menu-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? "Close" : "Menu"}
        <span>{open ? "−" : "+"}</span>
      </button>
    </header>
  );
}
