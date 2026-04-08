import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, LayoutTemplate, Layers } from "lucide-react";

export default function AboutTab() {
  const doing = [
    {
      title: "React Development",
      description: "Building fast, responsive single-page applications using functional components and hooks.",
      icon: <Code2 size={24} className="text-primary" />
    },
    {
      title: "State Management",
      description: "Implementing scalable and predictable state architecture using Redux.",
      icon: <Layers size={24} className="text-primary" />
    },
    {
      title: "API Integration",
      description: "Connecting interfaces to backend services with Axios and modern Fetch APIs.",
      icon: <Database size={24} className="text-primary" />
    },
    {
      title: "Responsive UI",
      description: "Crafting precise, device-agnostic layouts with clean HTML, CSS, and modern utility frameworks.",
      icon: <LayoutTemplate size={24} className="text-primary" />
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-8"
    >
      <header>
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-4">
          About Me
          <div className="h-1 w-12 bg-primary rounded-full" />
        </h2>
        <p className="text-muted-foreground leading-relaxed text-base">
          Self-taught Front-End Developer with practical experience in building responsive and user-focused web applications. 
          Skilled in HTML, CSS, and JavaScript, with hands-on experience using React and Redux for scalable state management. 
          Experienced in integrating RESTful APIs using Axios and working with Supabase for authentication, database operations, and real-time data.
        </p>
      </header>

      <section>
        <h3 className="text-xl font-semibold mb-6">What I'm Doing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {doing.map((item, index) => (
            <div key={index} className="bg-background border border-border rounded-xl p-5 shadow-sm hover:border-primary/50 transition-colors flex gap-4 items-start">
              <div className="mt-1 shrink-0 p-2 bg-card rounded-lg border border-border">
                {item.icon}
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
