import React from "react";
import { motion } from "framer-motion";
import { BookOpen, Briefcase, GraduationCap } from "lucide-react";

export default function ResumeTab() {
  const skills = [
    "React.js", "Redux", "Axios", "REST API", "HTML5", "CSS3", "JavaScript", "Supabase", "Git", "GitHub Pages"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-10"
    >
      <header>
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-4">
          Resume
          <div className="h-1 w-12 bg-primary rounded-full" />
        </h2>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_250px] gap-10 lg:gap-16">
        <div className="flex flex-col gap-10">
          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-primary shrink-0 shadow-sm">
                <GraduationCap size={20} />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            
            <div className="relative pl-6 border-l border-border ml-5 flex flex-col gap-8">
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
                <h4 className="font-semibold text-lg">Helwan University, Cairo</h4>
                <span className="text-primary text-sm font-medium mt-1 mb-2 inline-block">Present</span>
                <p className="text-muted-foreground text-sm">Bachelor's Degree</p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-primary shrink-0 shadow-sm">
                <Briefcase size={20} />
              </div>
              <h3 className="text-xl font-semibold">Projects</h3>
            </div>
            
            <div className="relative pl-6 border-l border-border ml-5 flex flex-col gap-8">
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
                <h4 className="font-semibold text-lg">Forever</h4>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  In-progress React practice project under mentor guidance. Built using functional components, JSX, props, and state. Deployed on GitHub Pages.
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
                <h4 className="font-semibold text-lg">usePopCorn</h4>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  Completed React app from Jonas Schmedtmann's Udemy course. Movie search via Fetch API, useState/useEffect, watched movies list. Deployed on GitHub Pages.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
                <h4 className="font-semibold text-lg">Travel List</h4>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  Completed React app for managing travel destinations. Add/edit/delete functionality, controlled forms, reusable components. Deployed on GitHub Pages.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="flex flex-col gap-10">
          <section>
            <h3 className="text-lg font-semibold mb-5 border-b border-border pb-3">My Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map(skill => (
                <span key={skill} className="bg-background border border-border text-foreground px-3 py-1.5 rounded-lg text-sm shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </section>
          
          <section>
            <h3 className="text-lg font-semibold mb-5 border-b border-border pb-3">Languages</h3>
            <div className="flex flex-col gap-4">
              <div>
                <div className="flex justify-between mb-1 text-sm font-medium">
                  <span>Arabic</span>
                  <span className="text-primary">Native</span>
                </div>
                <div className="h-2 w-full bg-background rounded-full overflow-hidden border border-border">
                  <div className="h-full bg-primary w-full rounded-full" />
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1 text-sm font-medium">
                  <span>English</span>
                  <span className="text-primary">Conversational</span>
                </div>
                <div className="h-2 w-full bg-background rounded-full overflow-hidden border border-border">
                  <div className="h-full bg-primary w-[75%] rounded-full" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
}
