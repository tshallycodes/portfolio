import Link from "next/link";
import { Arrow } from "./icons";
const groups = [
  {
    title: "AI agents & interfaces",
    description: "Connecting models to tools and people.",
    tools: ["LangChain", "Ollama", "Claude", "Streamlit", "GitHub API"],
    projects: [
      { slug: "web-search-agent", name: "Web search agent" },
      { slug: "repo-analyser", name: "Repository analyser" },
      { slug: "ollama-chat", name: "Local chatbot" },
    ],
  },
  {
    title: "Machine learning & evaluation",
    description: "Preparing data, comparing models and examining errors.",
    tools: ["Python", "scikit-learn", "PyTorch", "NLTK", "Feature engineering"],
    projects: [
      { slug: "iot", name: "IoT anomaly detection" },
      { slug: "updrs", name: "Parkinson’s research prototype" },
      { slug: "var-sentiment", name: "VAR sentiment analysis" },
    ],
  },
  {
    title: "Data & application delivery",
    description: "Taking an experiment beyond the notebook.",
    tools: ["SQL", "pandas", "NumPy", "FastAPI", "MLflow", "Docker"],
    projects: [
      { slug: "voyage", name: "Railway price prediction" },
      { slug: "updrs", name: "Streamlit research application" },
    ],
  },
];
export function SkillsEvidence() {
  return (
    <section
      className="skills-evidence section-wrap"
      aria-labelledby="skills-title"
    >
      <div className="skills-heading">
        <h2 id="skills-title">
          A toolkit.
          <br />
          With something to show.
        </h2>
        <p>
          Explore the tools in context.
          <br />
          The projects are the evidence.
        </p>
      </div>
      <div className="skills-groups">
        {groups.map((group, i) => (
          <details key={group.title} open={i === 0}>
            <summary>
              <span>
                <strong>{group.title}</strong>
                <small>{group.description}</small>
              </span>
              <span className="skills-expand" aria-hidden="true">
                +
              </span>
            </summary>
            <div className="skills-panel">
              <ul aria-label={`${group.title} tools`}>
                {group.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
              <div className="skills-projects">
                {group.projects.map((project) => (
                  <Link key={project.slug} href={`/work/${project.slug}`}>
                    {project.name}
                    <Arrow diagonal />
                  </Link>
                ))}
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
