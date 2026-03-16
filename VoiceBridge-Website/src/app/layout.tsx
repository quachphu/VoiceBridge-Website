import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "VoiceBridge | Voice Productivity For Everyone",
    template: "%s | VoiceBridge",
  },
  description:
    "VoiceBridge is the voice-first productivity layer for cross-platform work. Join the waitlist for early access.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
