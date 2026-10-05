import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main" className="not-found section-wrap">
      <p>A little detour.</p>
      <h1>This page wandered off.</h1>
      <Link className="button" href="/">
        Back to the portfolio
      </Link>
    </main>
  );
}
