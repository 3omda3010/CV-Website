import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

export default function PortfolioTab() {
  const projects = [
    {
      title: "Forever",
      category: "React App",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800&h=500",
      description: "In-progress React practice project under mentor guidance.",
      link: "#",
      github: "#"
    },
    {
      title: "usePopCorn",
      category: "React / Fetch API",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=800&h=500",
      description: "Movie search app with watched list functionality.",
      link: "#",
      github: "#"
    },
    {
      title: "Travel List",
      category: "React App",
      image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&q=80&w=800&h=500",
      description: "Manage travel destinations with add/edit/delete features.",
      link: "#",
      github: "#"
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
          Portfolio
          <div className="h-1 w-12 bg-primary rounded-full" />
        </h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="group relative rounded-xl overflow-hidden bg-background border border-border flex flex-col shadow-sm">
            <div className="aspect-[4/3] overflow-hidden relative border-b border-border">
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                <a href={project.link} className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-foreground hover:text-primary transition-colors shadow-lg scale-0 group-hover:scale-100 duration-200 delay-75">
                  <ExternalLink size={18} />
                </a>
                <a href={project.github} className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-foreground hover:text-primary transition-colors shadow-lg scale-0 group-hover:scale-100 duration-200 delay-150">
                  <Github size={18} />
                </a>
              </div>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-110" 
              />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-primary text-xs uppercase tracking-wider font-medium mt-1 mb-3">{project.category}</p>
              <p className="text-sm text-muted-foreground line-clamp-2 mt-auto">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
