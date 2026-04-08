import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import AboutTab from "@/components/tabs/AboutTab";
import ResumeTab from "@/components/tabs/ResumeTab";
import PortfolioTab from "@/components/tabs/PortfolioTab";
import ContactTab from "@/components/tabs/ContactTab";

type Tab = "About" | "Resume" | "Portfolio" | "Contact";

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("About");

  const renderTab = () => {
    switch (activeTab) {
      case "About": return <AboutTab />;
      case "Resume": return <ResumeTab />;
      case "Portfolio": return <PortfolioTab />;
      case "Contact": return <ContactTab />;
      default: return <AboutTab />;
    }
  };

  return (
    <div className="min-h-screen w-full bg-background text-foreground font-sans p-4 md:p-8 flex justify-center items-start">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-6">
        <Sidebar />
        
        <div className="flex-1 flex flex-col gap-6">
          <nav className="bg-card border border-border rounded-xl p-4 md:px-8 md:py-6 flex flex-wrap gap-4 md:gap-8 justify-center lg:justify-end items-center shadow-md ml-auto w-full lg:w-fit">
            {(["About", "Resume", "Portfolio", "Contact"] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-medium transition-colors duration-200 ${
                  activeTab === tab ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </nav>

          <main className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-md relative overflow-hidden">
            {renderTab()}
          </main>
        </div>
      </div>
    </div>
  );
}
