export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d={diagonal ? "M5 19 19 5M5 5h14v14" : "M4 12h16M12 4l8 8-8 8"} />
    </svg>
  );
}
export function Download() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M12 3v12m-5-5 5 5 5-5M5 17v4h14v-4" />
    </svg>
  );
}
