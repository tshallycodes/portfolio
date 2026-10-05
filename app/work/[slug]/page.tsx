import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/projects";
import {
  AgentDiagram,
  Pipeline,
  TrafficVisualization,
} from "@/components/project-grid";
import { Arrow } from "@/components/icons";
import { Footer } from "@/components/footer";
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  return {
    title: project?.title || "Project",
    description: project?.description,
  };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <main id="main" className="case-study">
      <section className="case-heading section-wrap">
        <Link href="/#work" className="back-link">
          ← All work
        </Link>
        <div className="case-category">
          {project.category} / {project.year}
        </div>
        <h1>{project.title}</h1>
        <p className="case-subtitle">{project.subtitle}</p>
        <div className="case-meta">
          <div>
            <span>My role</span>
            <p>{project.role}</p>
          </div>
          <div>
            <span>Built with</span>
            <p>{project.tags.join(", ")}</p>
          </div>
          {project.team ? (
            <div>
              <span>Collaboration</span>
              <p>{project.team}</p>
            </div>
          ) : null}
        </div>
        <div className="case-links">
          {project.github ? (
            <a
              className="button"
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              View repository <Arrow diagonal />
            </a>
          ) : null}
          {project.live ? (
            <a
              className="button"
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore prototype <Arrow diagonal />
            </a>
          ) : null}
        </div>
      </section>
      <figure className={`case-figure ${project.color}`}>
        {project.image ? (
          <Image
            src={project.image}
            alt={project.caption || project.title}
            width={1440}
            height={1000}
            priority
            sizes="(max-width: 900px) 100vw, 85vw"
          />
        ) : project.flow ? (
          <AgentDiagram project={project} />
        ) : project.slug === "iot" ? (
          <TrafficVisualization />
        ) : (
          <Pipeline />
        )}
        <figcaption>
          {project.caption ||
            (project.slug === "iot"
              ? "Illustrative network diagram, not captured traffic."
              : "Architecture diagram based on the published repository.")}
        </figcaption>
      </figure>
      <div className="case-body section-wrap">
        <section>
          <h2>The question</h2>
          <p>{project.problem}</p>
        </section>
        <section>
          <h2>
            {project.slug === "voyage" || project.slug === "repo-analyser"
              ? "What the project does"
              : "My contribution"}
          </h2>
          <ul>
            {project.contribution.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2>Connecting the pieces</h2>
          <p>{project.approach}</p>
        </section>
        {project.extraImage ? (
          <figure className="extra-image">
            <Image
              src={project.extraImage}
              alt="Braddy's illustrative 3D library exploration interface"
              width={1440}
              height={900}
              sizes="(max-width: 900px) 100vw, 70vw"
            />
            <figcaption>
              Actual prototype screenshot: exploring the illustrative study
              space.
            </figcaption>
          </figure>
        ) : null}
        <section>
          <h2>What came out of it</h2>
          <p>{project.outcome}</p>
        </section>
        <section className="case-limits">
          <h2>What to keep in mind</h2>
          <p>{project.limits}</p>
        </section>
      </div>
      <section className="next-project section-wrap">
        <span>Keep exploring</span>
        <Link href={`/work/${next.slug}`}>
          {next.title}
          <Arrow diagonal />
        </Link>
      </section>
      <Footer />
    </main>
  );
}
