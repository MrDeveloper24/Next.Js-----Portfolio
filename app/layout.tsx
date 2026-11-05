import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Naseem Barkat | MERN Stack Developer",
  description:
    "MERN Stack Developer in Lahore, Pakistan, with internship experience in full-stack development and QA testing.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
  },
  openGraph: {
    title: "Muhammad Naseem Barkat | MERN Stack Developer",
    description:
      "Responsive web applications, practical full-stack development, and a quality-first approach to software.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" data-theme="light">
      <body>{children}</body>
    </html>
  );
}
