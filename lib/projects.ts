export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  category: "AI & interaction" | "Machine learning" | "Data systems";
  year: string;
  description: string;
  tags: string[];
  image?: string;
  caption?: string;
  color: string;
  role: string;
  team?: string;
  problem: string;
  contribution: string[];
  approach: string;
  outcome: string;
  limits: string;
  github?: string;
  live?: string;
  extraImage?: string;
};
export const projects: Project[] = [
  {
    slug: "iot",
    title: "Finding the outliers",
    subtitle: "Learning what unusual traffic looks like.",
    category: "Machine learning",
    year: "2026",
    description:
      "A Random Forest approach to separating benign and malicious IoT network traffic.",
    tags: ["Python", "scikit-learn", "Feature engineering"],
    color: "sage",
    role: "Data preparation, classifier development & evaluation",
    problem:
      "IoT devices produce connection logs full of patterns. This project explores whether those patterns can distinguish benign connections from malicious outbound traffic.",
    contribution: [
      "Built a Random Forest classifier for malicious IoT network-traffic detection.",
      "Applied categorical encoding, variance filtering and feature-importance selection.",
      "Evaluated the classifier to understand predictive performance and its limitations.",
    ],
    approach:
      "The repository uses one labelled CTU-IoT-Malware connection-log file. After cleaning and encoding the inputs, it selects 20 features using Random Forest importance and trains a balanced classifier on a stratified split.",
    outcome:
      "The selected file produced perfect reported test metrics. The useful lesson is what that result does not establish: a cleanly separable single file is not evidence of performance across new devices or unseen scenarios.",
    limits:
      "Evaluation uses one log file. Generalisation to other devices and scenarios is not established. The visual is an illustrative connection diagram, not captured traffic or a live detector.",
    github: "https://github.com/tshallycodes/IoT-Anomaly-Detection",
  },
  {
    slug: "updrs",
    title: "Reading the rhythm",
    subtitle: "Exploring Parkinson’s severity through movement.",
    category: "Machine learning",
    year: "2026",
    description:
      "Researching finger-tapping signals, comparing models and bringing predictions into a Streamlit app.",
    tags: ["Python", "scikit-learn", "PyTorch", "Streamlit"],
    image: "/projects/updrs-evaluation.png",
    caption: "Evaluation figure published in the project repository.",
    color: "lavender",
    role: "Symptom research, model evaluation & Streamlit application",
    team: "University of Bradford team project with Avyandra Shahi, Elvis Odinkor and Ryan Kioko",
    problem:
      "Could finger-tapping movement signals help a research team explore Parkinson’s motor severity? This university project investigates the relationship between movement features and UPDRS labels.",
    contribution: [
      "Researched Parkinson’s symptoms to understand the context behind the movement signals.",
      "Built the model evaluation work to compare predictive behaviour.",
      "Built the Streamlit application to make model outputs accessible through an interface.",
    ],
    approach:
      "The documented pipeline smooths and standardises signals, extracts features such as tap timing, amplitude decrement and pauses, then compares models for each hand. The application presents predictions from the candidate models together.",
    outcome:
      "The project produced a research workflow spanning signal preprocessing, model comparison and an interactive application. Evaluation also surfaced an important weakness: the documented models did not reliably predict the underrepresented severe class.",
    limits:
      "This is a university research prototype, not a clinically validated medical device. The dataset is small and private, and class imbalance limits generalisation. Repository metrics are reported results, not independently verified clinical evidence.",
    github: "https://github.com/tshallycodes/updrs-predictor",
  },
  {
    slug: "voyage",
    title: "Voyage",
    subtitle: "Taking a model beyond the notebook.",
    category: "Data systems",
    year: "2026",
    description:
      "A railway ticket-price prediction pipeline with model tracking, an API and a usable frontend.",
    tags: ["FastAPI", "MLflow", "Docker", "Streamlit"],
    color: "peach",
    role: "Repository project",
    problem:
      "A trained model needs a route to the person using it. Voyage explores that route for railway ticket-price prediction, connecting modelling, serving and an interactive frontend.",
    contribution: [
      "The repository documents regression-model training and evaluation.",
      "It connects a Streamlit frontend to FastAPI prediction endpoints.",
      "MLflow tracks model artefacts, with Docker packaging the services.",
    ],
    approach:
      "The documented architecture is Streamlit → FastAPI → MLflow models. Linear Regression, Random Forest and Gradient Boosting provide candidate predictions; MAE, RMSE and R² are listed as evaluation measures.",
    outcome:
      "A repository demonstrating an end-to-end machine learning deployment structure: model comparison, experiment tracking, REST API inference and a containerised interface.",
    limits:
      "This case study describes the published repository architecture. Individual contributions and quantitative results have not yet been confirmed. The diagram explains that architecture; it is not a screenshot of a live service.",
    github: "https://github.com/tshallycodes/voyage-ticket-prediction",
  },
  {
    slug: "repo-analyser",
    title: "A second pair of eyes",
    subtitle: "An AI agent for understanding repositories.",
    category: "AI & interaction",
    year: "2026",
    description:
      "From a GitHub repository to a structured technical report on its architecture and code.",
    tags: ["Python", "Claude", "GitHub API", "Rich"],
    image: "/projects/repo-analyser.png",
    caption: "Project image published in the GitHub Repo Analyser repository.",
    color: "blue",
    role: "Repository project",
    problem:
      "Understanding an unfamiliar codebase means finding the files that matter and connecting them into a useful picture. This agent explores how a language model can support that first pass.",
    contribution: [
      "The agent fetches repository metadata and its file tree through the GitHub API.",
      "It selects key files to inform its analysis.",
      "It produces a structured Markdown report covering architecture, stack, code quality and suggested improvements.",
    ],
    approach:
      "A Python command-line workflow gathers public repository context, calls Claude through the Anthropic SDK and saves the report locally. Rich provides readable terminal output.",
    outcome:
      "A practical agent workflow that turns repository context into a Markdown report. The published README documents setup and usage.",
    limits:
      "Generated reports require human review. This case study reflects the repository documentation; no independent quality benchmark or performance claim is made.",
    github: "https://github.com/tshallycodes/github-repo-analyser",
  },
];
