"use client";
import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useMotion } from "./motion";
import { Arrow } from "./icons";

const paths = [
  {
    name: "Search the web",
    slug: "web-search-agent",
    title: "From a question to context.",
    intro:
      "A tool-using agent connects live search with a local language model.",
    steps: ["Ask", "Retrieve", "Reason"],
    detail: [
      "A question starts the interactive terminal workflow.",
      "DuckDuckGo supplies fresh web results to the agent.",
      "Ollama processes the results through LangChain. The answer still needs source checking.",
    ],
    labels: ["Your question", "Search results", "Local model"],
    tags: "Python / LangChain / Ollama / DuckDuckGo",
  },
  {
    name: "Understand a repo",
    slug: "repo-analyser",
    title: "From files to a first impression.",
    intro:
      "A repository analyser assembles context for a structured technical report.",
    steps: ["Discover", "Read", "Report"],
    detail: [
      "The GitHub API supplies repository metadata and its file tree.",
      "Selected files give Claude a focused view of the codebase.",
      "A Markdown report covers architecture and suggested improvements. Human review remains essential.",
    ],
    labels: ["Public repository", "Selected files", "Technical report"],
    tags: "Python / GitHub API / Claude / Rich",
  },
  {
    name: "Chat locally",
    slug: "ollama-chat",
    title: "From a prompt to a conversation.",
    intro:
      "A conversational application makes a local language model usable in the browser.",
    steps: ["Choose", "Prompt", "Respond"],
    detail: [
      "Select a downloaded Ollama model in Streamlit.",
      "Enter a prompt while the interface maintains session history.",
      "The model responds locally. Speed and answer quality depend on the model and hardware.",
    ],
    labels: ["Local model", "Conversation", "Response"],
    tags: "Python / Streamlit / Ollama",
  },
];

export function AgentExplorer() {
  const [selected, setSelected] = useState(0);
  const [step, setStep] = useState(0);
  const { motion: enabled } = useMotion();
  const project = paths[selected];
  return (
    <section
      className="agent-explorer section-wrap"
      id="explore"
      aria-labelledby="explore-title"
    >
      <div className="explorer-heading">
        <div>
          <p className="explorer-eyebrow">Inside the AI projects</p>
          <h2 id="explore-title">
            See how the
            <br />
            pieces connect.
          </h2>
        </div>
        <p>
          Choose a workflow.
          <br />
          Follow the idea through.
        </p>
      </div>
      <div className="explorer-shell">
        <div className="explorer-options" aria-label="Choose an AI workflow">
          {paths.map((path, i) => (
            <button
              key={path.slug}
              aria-pressed={selected === i}
              onClick={() => {
                setSelected(i);
                setStep(0);
              }}
            >
              <span>{path.name}</span>
              <span aria-hidden="true">↗</span>
            </button>
          ))}
        </div>
        <div className="explorer-stage">
          <div className="explorer-note">
            <span className="status-dot" />
            Interactive project walkthrough
            <span>Illustration · no live model</span>
          </div>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={project.slug}
              initial={enabled ? { opacity: 0, y: 12 } : false}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: enabled ? 0.22 : 0 }}
            >
              <h3>{project.title}</h3>
              <p className="explorer-intro">{project.intro}</p>
              <div className="signal-map" aria-hidden="true">
                <svg
                  viewBox="0 0 600 150"
                  preserveAspectRatio="none"
                  className="signal-connections"
                >
                  <path d="M85 75 H515" />
                  <motion.path
                    d="M85 75 H515"
                    initial={false}
                    animate={{ pathLength: (step + 1) / 3 }}
                    transition={{ duration: enabled ? 0.6 : 0 }}
                  />
                </svg>
                {project.labels.map((label, i) => (
                  <div
                    key={label}
                    className={`signal-node ${i <= step ? "is-lit" : ""}`}
                  >
                    <motion.div
                      className="node-orbit"
                      animate={{ rotate: enabled && i === step ? 90 : 0 }}
                      transition={{ duration: enabled ? 0.6 : 0 }}
                    >
                      <svg viewBox="0 0 80 80">
                        <rect x="15" y="15" width="50" height="50" rx="16" />
                        <path d="M25 40h30M40 25v30" />
                        <circle cx="40" cy="40" r="8" />
                      </svg>
                    </motion.div>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
              <div className="explorer-steps" aria-label="Workflow stages">
                {project.steps.map((label, i) => (
                  <button
                    key={label}
                    aria-pressed={step === i}
                    onClick={() => setStep(i)}
                  >
                    <span>{i + 1}</span>
                    {label}
                  </button>
                ))}
              </div>
              <div className="explorer-detail" aria-live="polite">
                <p>{project.detail[step]}</p>
                <button onClick={() => setStep((step + 1) % 3)}>
                  {step === 2 ? "Start again" : "Next stage"} <Arrow />
                </button>
              </div>
              <div className="explorer-bottom">
                <span>{project.tags}</span>
                <Link href={`/work/${project.slug}`}>
                  Read the case study <Arrow diagonal />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
