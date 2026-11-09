"use client";

import { AddWebsiteModal } from "@/components/AddWebsiteModal";
import { AgentsSection } from "@/components/AgentsSection";
import { AudienceSection } from "@/components/AudienceSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { ImproveSection } from "@/components/ImproveSection";
import { InsightsSection } from "@/components/InsightsSection";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { Navbar } from "@/components/Navbar";
import { ProblemSection } from "@/components/ProblemSection";
import { QuestionsSection } from "@/components/QuestionsSection";
import { useCallback, useState } from "react";

export function LandingPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [initialUrl, setInitialUrl] = useState("");

  const openAddWebsite = useCallback((url?: string) => {
    setInitialUrl(url ?? "");
    setModalOpen(true);
  }, []);

  const exploreDemo = useCallback(() => {
    document.getElementById("questions")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <Navbar onAddWebsite={() => openAddWebsite()} />
      <main>
        <Hero onAddWebsite={openAddWebsite} onExploreDemo={exploreDemo} />
        <ProblemSection />
        <QuestionsSection />
        <InsightsSection onExplore={exploreDemo} />
        <ImproveSection />
        <AgentsSection />
        <HowItWorks onConnect={openAddWebsite} />
        <IntegrationsSection />
        <AudienceSection />
        <FAQSection />
        <FinalCTA onAddWebsite={openAddWebsite} />
      </main>
      <Footer />
      <AddWebsiteModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        initialUrl={initialUrl}
      />
    </>
  );
}
