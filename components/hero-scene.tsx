"use client";
import { useRef, useState } from "react";
import { motion } from "motion/react";
import { useMotion } from "./motion";

const nodes = [
  {
    id: "python-toolkit",
    label: "Python",
    kind: "skill",
    x: 22,
    y: 18,
    detail:
      "A tool for exploring data, evaluating models and building AI workflows.",
    href: "#approach",
  },
  {
    id: "tshally",
    label: "Tshally",
    kind: "core",
    x: 50,
    y: 48,
    detail:
      "Chukwuebuka Stephen Tshally-Okeke. Curiosity is the connection between it all.",
  },
  {
    id: "curiosity",
    label: "Curiosity",
    kind: "story",
    x: 22,
    y: 18,
    detail:
      "It began with the fascination of a computer responding to a question.",
    href: "#about",
  },
  {
    id: "nigeria",
    label: "Nigeria",
    kind: "story",
    x: 12,
    y: 40,
    detail: "Where my curiosity about computers began.",
    href: "#about",
  },
  {
    id: "bradford",
    label: "Bradford",
    kind: "story",
    x: 53,
    y: 12,
    detail:
      "BSc (Hons) Applied AI at the University of Bradford. Graduating July 2027.",
    href: "#about",
  },
  {
    id: "ai",
    label: "Applied AI",
    kind: "skill",
    x: 83,
    y: 25,
    detail:
      "Learning how data becomes a prediction, and a model becomes an application.",
    href: "#work",
  },
  {
    id: "agents",
    label: "AI agents",
    kind: "skill",
    x: 87,
    y: 50,
    detail:
      "Connecting language models with tools, repository context and web search.",
    href: "#explore",
  },
  {
    id: "python",
    label: "Python",
    kind: "skill",
    x: 78,
    y: 78,
    detail:
      "A tool for exploring data, evaluating models and building AI workflows.",
    href: "#approach",
  },
  {
    id: "projects",
    label: "Projects",
    kind: "work",
    x: 48,
    y: 89,
    detail: "Public projects in AI, machine learning and data systems.",
    href: "#work",
  },
  {
    id: "github",
    label: "GitHub",
    kind: "link",
    x: 18,
    y: 80,
    detail: "Explore the public repositories behind the portfolio.",
    href: "https://github.com/tshallycodes",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    kind: "link",
    x: 12,
    y: 61,
    detail: "Find my professional profile and connect with me.",
    href: "https://www.linkedin.com/in/cstshally-okeke/",
  },
  {
    id: "oldham",
    label: "Oldham",
    kind: "story",
    x: 46,
    y: 71,
    detail: "My base in the United Kingdom, while studying at Bradford.",
    href: "#about",
  },
  {
    id: "ml",
    label: "Machine learning",
    kind: "skill",
    x: 12,
    y: 40,
    detail: "Training models, comparing predictions and investigating errors.",
    href: "#approach",
  },
  {
    id: "data-science",
    label: "Data science",
    kind: "skill",
    x: 53,
    y: 12,
    detail: "Turning questions and data into useful experiments and analysis.",
    href: "#approach",
  },
  {
    id: "sql",
    label: "SQL",
    kind: "skill",
    x: 83,
    y: 25,
    detail: "Working with structured data to answer practical questions.",
    href: "#approach",
  },
  {
    id: "pytorch",
    label: "PyTorch",
    kind: "skill",
    x: 87,
    y: 50,
    detail: "Exploring neural models in university machine learning projects.",
    href: "#approach",
  },
  {
    id: "sklearn",
    label: "scikit-learn",
    kind: "skill",
    x: 78,
    y: 78,
    detail: "Feature engineering, classifiers and model evaluation.",
    href: "#approach",
  },
  {
    id: "streamlit",
    label: "Streamlit",
    kind: "skill",
    x: 48,
    y: 89,
    detail:
      "Making model outputs accessible through an interactive application.",
    href: "#approach",
  },
  {
    id: "langchain",
    label: "LangChain",
    kind: "skill",
    x: 18,
    y: 80,
    detail: "Connecting a local language model to web-search tools.",
    href: "#approach",
  },
  {
    id: "ollama",
    label: "Ollama",
    kind: "skill",
    x: 12,
    y: 61,
    detail: "Running language models locally for agents and conversation.",
    href: "#approach",
  },
  {
    id: "docker",
    label: "Docker",
    kind: "skill",
    x: 46,
    y: 71,
    detail: "Packaging the services in the Voyage prediction pipeline.",
    href: "#approach",
  },
  {
    id: "web-search",
    label: "Web search",
    kind: "work",
    x: 22,
    y: 18,
    detail:
      "Explore the public Web search project, its approach, outcomes and limitations.",
    href: "/work/web-search-agent",
  },
  {
    id: "repo-report",
    label: "Repo analyser",
    kind: "work",
    x: 12,
    y: 40,
    detail:
      "Explore the public Repo analyser project, its approach, outcomes and limitations.",
    href: "/work/repo-analyser",
  },
  {
    id: "local-chat",
    label: "Local chat",
    kind: "work",
    x: 53,
    y: 12,
    detail:
      "Explore the public Local chat project, its approach, outcomes and limitations.",
    href: "/work/ollama-chat",
  },
  {
    id: "var",
    label: "VAR sentiment",
    kind: "work",
    x: 83,
    y: 25,
    detail:
      "Explore the public VAR sentiment project, its approach, outcomes and limitations.",
    href: "/work/var-sentiment",
  },
  {
    id: "iot-security",
    label: "IoT security",
    kind: "work",
    x: 87,
    y: 50,
    detail:
      "Explore the public IoT security project, its approach, outcomes and limitations.",
    href: "/work/iot",
  },
  {
    id: "parkinsons",
    label: "Parkinson’s",
    kind: "work",
    x: 78,
    y: 78,
    detail:
      "Explore the public Parkinson’s project, its approach, outcomes and limitations.",
    href: "/work/updrs",
  },
  {
    id: "voyage",
    label: "Voyage",
    kind: "work",
    x: 48,
    y: 89,
    detail:
      "Explore the public Voyage project, its approach, outcomes and limitations.",
    href: "/work/voyage",
  },
];
const worldIds = [
  "tshally",
  "curiosity",
  "nigeria",
  "bradford",
  "ai",
  "agents",
  "python",
  "projects",
  "github",
  "linkedin",
  "oldham",
];
const toolkitIds = [
  "tshally",
  "python-toolkit",
  "ml",
  "data-science",
  "sql",
  "pytorch",
  "sklearn",
  "streamlit",
  "langchain",
  "ollama",
  "docker",
];
const projectIds = [
  "tshally",
  "web-search",
  "repo-report",
  "local-chat",
  "var",
  "iot-security",
  "parkinsons",
  "voyage",
  "github",
  "linkedin",
];
const worldEdges = nodes
  .filter((node) => worldIds.includes(node.id))
  .slice(1)
  .map((node) => ["tshally", node.id])
  .concat([
    ["nigeria", "curiosity"],
    ["curiosity", "bradford"],
    ["bradford", "ai"],
    ["ai", "agents"],
    ["agents", "python"],
    ["python", "projects"],
    ["projects", "github"],
    ["linkedin", "github"],
    ["oldham", "bradford"],
  ]);
const initialPositions = Object.fromEntries(
  nodes.map((node) => [node.id, { x: node.x, y: node.y }]),
);

export function HeroScene() {
  const { motion: enabled } = useMotion();
  const [view, setView] = useState("world");
  const visibleIds =
    view === "toolkit"
      ? toolkitIds
      : view === "projects"
        ? projectIds
        : worldIds;
  const visibleNodes = visibleIds.map((id) =>
    nodes.find((node) => node.id === id)!,
  );
  const edges =
    view === "world"
      ? worldEdges
      : visibleIds.slice(1).map((id) => ["tshally", id]);
  const [positions, setPositions] = useState(initialPositions);
  const [selected, setSelected] = useState("tshally");
  const [dragging, setDragging] = useState<string | null>(null);
  const map = useRef<HTMLDivElement>(null);
  const drag = useRef<{
    id: string;
    pointer: number;
    x: number;
    y: number;
    startX: number;
    startY: number;
    width: number;
    height: number;
    moved: boolean;
  } | null>(null);
  const suppressClick = useRef(false);
  const current = nodes.find((node) => node.id === selected)!;
  const neighbours = new Set(
    edges.filter((edge) => edge.includes(selected)).flat(),
  );
  const clamp = (value: number) => Math.min(89, Math.max(11, value));
  function start(event: React.PointerEvent<HTMLElement>, id: string) {
    if (event.button !== 0 || !map.current) return;
    const box = map.current.getBoundingClientRect();
    suppressClick.current = false;
    drag.current = {
      id,
      pointer: event.pointerId,
      x: positions[id].x,
      y: positions[id].y,
      startX: event.clientX,
      startY: event.clientY,
      width: box.width,
      height: box.height,
      moved: false,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
    setSelected(id);
  }
  function move(event: React.PointerEvent<HTMLElement>) {
    const state = drag.current;
    if (!state || state.pointer !== event.pointerId) return;
    const dx = event.clientX - state.startX,
      dy = event.clientY - state.startY;
    if (!state.moved && Math.hypot(dx, dy) < 5) return;
    state.moved = true;
    setDragging(state.id);
    setPositions((previous) => ({
      ...previous,
      [state.id]: {
        x: clamp(state.x + (dx / state.width) * 100),
        y: clamp(state.y + (dy / state.height) * 100),
      },
    }));
  }
  function end(event: React.PointerEvent<HTMLElement>) {
    if (drag.current?.pointer !== event.pointerId) return;
    suppressClick.current = drag.current.moved;
    drag.current = null;
    setDragging(null);
  }
  function keyboard(event: React.KeyboardEvent<HTMLElement>, id: string) {
    if (
      !event.altKey ||
      !["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)
    )
      return;
    event.preventDefault();
    const dx =
      event.key === "ArrowLeft" ? -3 : event.key === "ArrowRight" ? 3 : 0;
    const dy = event.key === "ArrowUp" ? -3 : event.key === "ArrowDown" ? 3 : 0;
    setPositions((previous) => ({
      ...previous,
      [id]: { x: clamp(previous[id].x + dx), y: clamp(previous[id].y + dy) },
    }));
  }
  return (
    <div
      className="life-graph"
      aria-label="An interactive graph of Tshally’s life and work"
    >
      <div className="graph-views" aria-label="Explore graph views">
        {[
          { id: "world", label: "My world" },
          { id: "toolkit", label: "Toolkit" },
          { id: "projects", label: "Projects" },
        ].map((group) => (
          <button
            key={group.id}
            type="button"
            aria-pressed={view === group.id}
            onClick={() => {
              setView(group.id);
              setSelected("tshally");
            }}
          >
            {group.label}
          </button>
        ))}
      </div>
      <div className="graph-map" ref={map}>
        <svg
          className="graph-edges"
          viewBox="0 0 1000 700"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {edges.map(([from, to]) => (
            <line
              key={`${from}-${to}`}
              x1={positions[from].x * 10}
              y1={positions[from].y * 7}
              x2={positions[to].x * 10}
              y2={positions[to].y * 7}
              className={
                selected === "tshally" || [from, to].includes(selected)
                  ? "graph-edge is-connected"
                  : "graph-edge"
              }
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>
        {visibleNodes.map((node) => {
          const external = node.href?.startsWith("https:");
          const shared = {
            className: `graph-node ${node.kind} ${selected === node.id ? "is-selected" : ""} ${neighbours.has(node.id) ? "is-neighbour" : ""} ${dragging === node.id ? "is-dragging" : ""}`,
            onPointerDown: (event: React.PointerEvent<HTMLElement>) =>
              start(event, node.id),
            onPointerMove: move,
            onPointerUp: end,
            onPointerCancel: end,
            onMouseEnter: () => {
              if (!drag.current) setSelected(node.id);
            },
            onFocus: () => setSelected(node.id),
            onKeyDown: (event: React.KeyboardEvent<HTMLElement>) =>
              keyboard(event, node.id),
            onClick: (event: React.MouseEvent<HTMLElement>) => {
              if (suppressClick.current) {
                event.preventDefault();
                suppressClick.current = false;
              } else setSelected(node.id);
            },
            "aria-describedby": "graph-help",
          };
          return (
            <motion.div
              className="graph-node-position"
              key={node.id}
              style={{
                left: `${positions[node.id].x}%`,
                top: `${positions[node.id].y}%`,
              }}
              whileHover={enabled && !dragging ? { scale: 1.06 } : undefined}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
            >
              {node.href ? (
                <a
                  {...shared}
                  href={node.href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                >
                  <span className="graph-node-dot" aria-hidden="true" />
                  <span>{node.label}</span>
                  {external && (
                    <span className="graph-external" aria-hidden="true">
                      ↗
                    </span>
                  )}
                </a>
              ) : (
                <button {...shared} type="button">
                  <span className="graph-core-mark" aria-hidden="true">
                    ✳
                  </span>
                  <strong>{node.label}</strong>
                  <span className="graph-core-sub">Applied AI student</span>
                </button>
              )}
            </motion.div>
          );
        })}
      </div>
      <div className="graph-caption">
        <p className="graph-description" aria-live="polite">
          {current.detail}
        </p>
        <div>
          <span id="graph-help">Drag nodes · Alt + arrows with keyboard</span>
          <button
            type="button"
            onClick={() => {
              setPositions(initialPositions);
              setSelected("tshally");
            }}
          >
            Reset graph <span aria-hidden="true">↺</span>
          </button>
        </div>
      </div>
    </div>
  );
}
