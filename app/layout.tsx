import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shahid — Technical Support Engineer | AI Portfolio",
  description:
    "Technical Support Engineer specializing in IT Service Management, enterprise support operations, ServiceNow, Active Directory, VPN, Citrix, and AI automation. Based in Bangalore, India.",
  keywords: [
    "Shahid",
    "Technical Support Engineer",
    "IT Service Management",
    "ServiceNow",
    "Active Directory",
    "Enterprise Support",
    "AI Portfolio",
    "Bangalore",
  ],
  authors: [{ name: "Shahid" }],
  openGraph: {
    title: "Shahid — Technical Support Engineer",
    description: "AI-powered portfolio showcasing enterprise IT support expertise",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
