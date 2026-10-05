"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/projects";
import { Arrow } from "./icons";
export function Pipeline({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={compact ? "pipeline compact" : "pipeline"}
      aria-label="Architecture: Streamlit sends requests to FastAPI, which loads MLflow model artefacts"
    >
      <span className="pipeline-label">From interface to inference</span>
      <div className="pipeline-flow">
        <div>
          <span className="pipeline-symbol">◫</span>
          <strong>Streamlit</strong>
          <small>Ask a question</small>
        </div>
        <span className="pipeline-connector">→</span>
        <div>
          <span className="pipeline-symbol">⌘</span>
          <strong>FastAPI</strong>
          <small>Serve a prediction</small>
        </div>
        <span className="pipeline-connector">→</span>
        <div>
          <span className="pipeline-symbol">◇</span>
          <strong>MLflow</strong>
          <small>Track the models</small>
        </div>
      </div>
      <span className="pipeline-bottom">Python · scikit-learn · Docker</span>
    </div>
  );
}
export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState("All work");
  const categories = [
    "All work",
    "AI & interaction",
    "Machine learning",
    "Data systems",
  ];
  useEffect(() => {
    const read = () => {
      const value = new URLSearchParams(window.location.search).get("category");
      setFilter(
        value &&
          ["AI & interaction", "Machine learning", "Data systems"].includes(
            value,
          )
          ? value
          : "All work",
      );
    };
    read();
    window.addEventListener("popstate", read);
    return () => window.removeEventListener("popstate", read);
  }, []);
  const chooseFilter = (category: string) => {
    setFilter(category);
    const url = new URL(window.location.href);
    if (category === "All work") url.searchParams.delete("category");
    else url.searchParams.set("category", category);
    window.history.replaceState({}, "", url);
  };
  const visible =
    filter === "All work"
      ? projects
      : projects.filter((p) => p.category === filter);
  return (
    <>
      <div className="project-filters" aria-label="Filter projects">
        {categories.map((category) => (
          <button
            key={category}
            aria-pressed={filter === category}
            onClick={() => chooseFilter(category)}
          >
            {category}
          </button>
        ))}
        <span aria-live="polite">{visible.length} projects</span>
      </div>
      <div className="project-grid">
        {visible.map((project) => (
          <Link
            href={`/work/${project.slug}`}
            className={`project-card ${project.color}`}
            key={project.slug}
          >
            <div className="project-visual">
              {project.image ? (
                <div className={`project-image ${project.slug}`}>
                  <Image
                    src={project.image}
                    alt={project.caption || project.title}
                    width={1440}
                    height={1000}
                    sizes="(max-width: 700px) 100vw, 48vw"
                  />
                </div>
              ) : project.slug === "iot" ? (
                <TrafficVisualization />
              ) : (
                <Pipeline compact />
              )}
              <span className="project-open" aria-hidden="true">
                <Arrow diagonal />
              </span>
            </div>
            <div className="project-meta">
              <span>{project.category}</span>
              <span>{project.year}</span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export function TrafficVisualization() {
  return (
    <div className="traffic-visual">
      <span>Patterns in the noise.</span>
      <svg
        viewBox="0 0 500 230"
        role="img"
        aria-label="Illustrative diagram of network connections and an outlying connection"
      >
        <defs>
          <linearGradient id="traffic-grad">
            <stop stopColor="#47735d" />
            <stop offset="1" stopColor="#88af9b" />
          </linearGradient>
        </defs>
        {Array.from({ length: 13 }, (_, i) => (
          <g key={i}>
            <path
              d={`M60 115 C210 115 265 ${20 + i * 15} 430 ${20 + i * 15}`}
              fill="none"
              stroke={i === 9 ? "#bf6946" : "url(#traffic-grad)"}
              strokeWidth={i === 9 ? 2.8 : 1}
              opacity={i === 9 ? 1 : 0.5}
            />
            <circle
              cx="430"
              cy={20 + i * 15}
              r={i === 9 ? 6 : 3}
              fill={i === 9 ? "#bf6946" : "#6b9481"}
            />
          </g>
        ))}
        <circle cx="60" cy="115" r="21" fill="#f7fcf8" stroke="#729b86" />
        <circle cx="60" cy="115" r="6" fill="#4b7963" />
      </svg>
      <div>
        <span>Connection features</span>
        <span className="outlier-label">An outlier worth investigating</span>
      </div>
      <small>Illustrative network diagram</small>
    </div>
  );
}
