import { ImageResponse } from "next/og";
export const alt = "Tshally — I build things that think.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#fff0e3",
        color: "#ad3e08",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "65px",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 30,
        }}
      >
        <span>tshally ✳</span>
        <span>Applied AI · Bradford</span>
      </div>
      <div
        style={{
          fontSize: 105,
          lineHeight: 1.05,
          letterSpacing: "-6px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <span>I build things</span>
        <span>that think.</span>
      </div>
      <div style={{ fontSize: 24 }}>
        AI, machine learning & data. Built with curiosity.
      </div>
    </div>,
    size,
  );
}
