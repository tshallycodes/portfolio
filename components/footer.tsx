import { Arrow } from "./icons";
export function Footer() {
  return (
    <footer className="footer section-wrap">
      <a href="/" className="wordmark">
        tshally<span>✳</span>
      </a>
      <p>Built with curiosity in Oldham, UK.</p>
      <div>
        <a
          href="https://www.linkedin.com/in/cstshally-okeke/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn <Arrow diagonal />
        </a>
        <a
          href="https://github.com/tshallycodes"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub <Arrow diagonal />
        </a>
      </div>
      <span>© 2026 Tshally</span>
    </footer>
  );
}
