import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { MotionProvider } from "@/components/motion";
export const metadata: Metadata = {
  metadataBase: new URL("https://tshally.vercel.app"),
  title: {
    default: "Tshally — Applied AI, built with curiosity",
    template: "%s · Tshally",
  },
  description:
    "Chukwuebuka Stephen Tshally-Okeke. Applied AI student at the University of Bradford, building practical AI, machine learning and data systems. Graduating July 2027.",
  openGraph: {
    title: "Tshally — Applied AI, built with curiosity",
    description:
      "From a question to a working system. Explore my AI, ML and data projects.",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <MotionProvider>
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <Navigation />
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
