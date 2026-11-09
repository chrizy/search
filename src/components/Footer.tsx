import { Logo } from "@/components/ui/Logo";

const LINKS = [
  { href: "#product", label: "Product" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#for-ai-agents", label: "AI agent integrations" },
  { href: "#faq", label: "Documentation" },
  { href: "#privacy", label: "Privacy" },
  { href: "#terms", label: "Terms" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white py-12">
      <div className="section-pad mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm text-muted">
            See what humans and agents ask about your product.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Footer">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted transition hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="section-pad mx-auto mt-10 max-w-7xl border-t border-black/5 pt-6">
        <p className="text-xs text-muted">
          © 2026 Fathom. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
