import type { Metadata } from "next";
import { Geist_Mono, Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fathom.example.com"),
  title: {
    default: "Fathom — See what humans and agents ask about your product",
    template: "%s · Fathom",
  },
  description:
    "Fathom turns your website into an intelligent knowledge source and shows you exactly what people and connected AI agents are asking — and what they can't find.",
  keywords: [
    "website intelligence",
    "AI agents",
    "MCP",
    "WebMCP",
    "knowledge gaps",
    "website search",
    "Ask API",
  ],
  openGraph: {
    title: "Fathom — See what humans and agents ask about your product",
    description:
      "Connect your website in minutes. Discover what people and AI agents want to know, what they can't find, and what you should improve.",
    type: "website",
    siteName: "Fathom",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fathom — See what humans and agents ask about your product",
    description:
      "Your website is answering questions every day. Discover what people and AI agents want to know — and what they can't find.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${syne.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
