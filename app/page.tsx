import { projects } from "@/lib/projects";
import { HeroScene } from "@/components/hero-scene";
import { ProjectGrid } from "@/components/project-grid";
import { Arrow, Download } from "@/components/icons";
import { Footer } from "@/components/footer";
export default function Home() {
  return (
    <main id="main">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-top">
          <p>
            Chukwuebuka Stephen
            <br />
            Tshally-Okeke
          </p>
          <p className="hero-location">
            Applied AI student
            <br />
            Oldham, United Kingdom
          </p>
        </div>
        <div className="hero-art">
          <HeroScene />
        </div>
        <div className="hero-headline">
          <p className="hero-intro">Curiosity, turned into code.</p>
          <h1 id="hero-title">
            <span>I build things</span>
            <span>
              that think<span className="period">.</span>
            </span>
          </h1>
        </div>
        <div className="hero-bottom">
          <p>
            AI, machine learning & data.
            <br />
            Built to do something useful.
          </p>
          <a className="scroll-link" href="#work">
            Explore my work{" "}
            <span className="circle-arrow">
              <Arrow />
            </span>
          </a>
          <p className="hero-graduation">
            <span className="status-dot" />
            Graduating July 2027
          </p>
        </div>
        <span className="hero-side">
          A little human curiosity. A lot of possibilities.
        </span>
      </section>
      <section className="intro section-wrap" id="about">
        <div className="section-kicker">
          <span className="small-star">✳</span>
          <span>The person behind the projects</span>
        </div>
        <div className="intro-content">
          <h2>
            It started with a<br />
            computer talking back.
          </h2>
          <div className="intro-copy">
            <p>
              Growing up in Nigeria, I was fascinated by a simple thing: you
              could ask a computer a question, and it would respond.
            </p>
            <p>
              That curiosity brought me to the University of Bradford to study
              Applied Artificial Intelligence. Today, I explore how data becomes
              a prediction, how a model becomes an application, and how an idea
              becomes something people can use.
            </p>
            <p className="intro-signoff">
              Still curious. Just building better questions.
            </p>
          </div>
        </div>
        <div className="journey">
          <div>
            <span className="journey-place">Nigeria</span>
            <span>Where the curiosity began</span>
          </div>
          <div className="journey-line">
            <i />
            <span>Learning by building</span>
            <i />
          </div>
          <div>
            <span className="journey-place">Bradford</span>
            <span>BSc (Hons) Applied AI · July 2027</span>
          </div>
        </div>
      </section>
      <section className="work section-wrap" id="work">
        <div className="section-heading">
          <div>
            <div className="section-kicker">
              <span className="small-star">✳</span>
              <span>Selected work</span>
            </div>
            <h2>
              Questions worth
              <br />
              building for.
            </h2>
          </div>
          <p>
            A few ways I turn curiosity
            <br />
            into working systems.
          </p>
        </div>
        <ProjectGrid projects={projects} />
      </section>
      <section className="craft section-wrap" id="approach">
        <div className="craft-heading">
          <div className="section-kicker">
            <span className="small-star">✳</span>
            <span>How I work</span>
          </div>
          <h2>
            From messy data
            <br />
            to useful decisions.
          </h2>
          <p>The interesting part is connecting the pieces.</p>
        </div>
        <div className="craft-steps">
          <article>
            <span className="step-number">01</span>
            <h3>Understand the question.</h3>
            <p>
              Research the problem, explore the data and work out what a useful
              answer would actually look like.
            </p>
            <div className="tool-list">Python / SQL / Pandas / NumPy</div>
          </article>
          <article>
            <span className="step-number">02</span>
            <h3>Test the possibilities.</h3>
            <p>
              Engineer features, compare models and investigate the errors. An
              honest evaluation matters more than an impressive number.
            </p>
            <div className="tool-list">scikit-learn / PyTorch / MLflow</div>
          </article>
          <article>
            <span className="step-number">03</span>
            <h3>Make it usable.</h3>
            <p>
              Bring the result into an application, a dashboard or an API.
              Explain what it can do, and where its limits are.
            </p>
            <div className="tool-list">
              Streamlit / FastAPI / React / Three.js
            </div>
          </article>
        </div>
      </section>
      <section className="experience section-wrap" id="experience">
        <div className="section-heading">
          <div>
            <div className="section-kicker">
              <span className="small-star">✳</span>
              <span>Beyond the notebook</span>
            </div>
            <h2>
              Learning in
              <br />
              the real world.
            </h2>
          </div>
          <a
            className="text-link"
            href="/chukwuebuka-tshally-okeke-cv.pdf"
            download
          >
            Get the full CV <Download />
          </a>
        </div>
        <div className="experience-list">
          <article>
            <div>
              <h3>Data Science Intern</h3>
              <p>Amdari · Remote, UK</p>
            </div>
            <p>
              Model development, feature engineering, SQL and exploratory
              analysis.
            </p>
            <span>Dec 2025 — Jun 2026</span>
          </article>
          <article>
            <div>
              <h3>Peer Assisted Learning Leader</h3>
              <p>University of Bradford</p>
            </div>
            <p>
              Helping first-year students find their way through programming and
              problem solving.
            </p>
            <span>Sep 2025 — Present</span>
          </article>
          <article>
            <div>
              <h3>Data & Business Analyst Intern</h3>
              <p>Tshabron Limited · Remote, Nigeria</p>
            </div>
            <p>
              Python and SQL reporting workflows, with Tableau dashboards for
              business analysis.
            </p>
            <span>Mar — May 2025</span>
          </article>
          <article>
            <div>
              <h3>Data Analyst Intern</h3>
              <p>Quantum Analytics · Remote, UK</p>
            </div>
            <p>
              Excel and PostgreSQL data preparation, with Power BI visual
              reporting.
            </p>
            <span>Oct 2023 — Jan 2024</span>
          </article>
        </div>
      </section>
      <section className="contact section-wrap" id="contact">
        <div className="contact-top">
          <span className="status-dot" />
          <p>
            Interested in AI engineering, ML engineering,
            <br />
            data science & data analysis opportunities.
          </p>
        </div>
        <h2>
          Let’s build
          <br />
          something useful<span>.</span>
        </h2>
        <div className="contact-bottom">
          <a className="contact-email" href="mailto:bubutshally@gmail.com">
            bubutshally@gmail.com <Arrow />
          </a>
          <a
            className="button button-outline"
            href="/chukwuebuka-tshally-okeke-cv.pdf"
            download
          >
            Download my CV <Download />
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
