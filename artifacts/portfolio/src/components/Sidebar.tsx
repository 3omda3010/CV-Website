import React, { useState } from "react";
import { Mail, Phone, MapPin, ChevronDown, ChevronUp, Linkedin, Github } from "lucide-react";
import mainPhoto from '../assets/PicsArt_03-06-04.57.38.jpg'
export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <aside className="bg-sidebar border border-sidebar-border rounded-xl p-6 shadow-md flex flex-col items-center lg:w-72 lg:h-[calc(100vh-4rem)] lg:sticky lg:top-8 z-10 shrink-0">
      <div className="w-full flex lg:flex-col items-center gap-6 lg:gap-0 relative">
        <div className="w-24 h-24 lg:w-36 lg:h-36 rounded-2xl bg-card border border-border flex items-center justify-center overflow-hidden shrink-0">
          <span className="text-4xl font-bold text-muted-foreground tracking-widest">
            <img src={mainPhoto} alt={'main photo'}/>
          </span>
        </div>
        
        <div className="flex-1 lg:flex-initial lg:w-full lg:text-center lg:mt-6">
          <h1 className="text-xl lg:text-2xl font-bold text-foreground">Mohamed Emad</h1>
          <div className="bg-card border border-border text-xs px-3 py-1.5 rounded-md mt-2 inline-block text-muted-foreground uppercase tracking-wider font-medium">
            Front End Developer
          </div>
        </div>

        <button 
          className="lg:hidden absolute top-0 right-0 p-2 text-primary hover:bg-card rounded-md border border-border transition-colors"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      <div className={`w-full transition-all duration-300 overflow-hidden lg:h-auto lg:opacity-100 ${isExpanded ? "h-auto opacity-100 mt-6" : "h-0 opacity-0 lg:mt-8"}`}>
        <div className="w-full h-px bg-border mb-6 hidden lg:block" />
        
        <ul className="flex flex-col gap-6 w-full">
          <li className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-primary shrink-0 shadow-sm">
              <Mail size={18} />
            </div>
            <div className="overflow-hidden">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Email</p>
              <a href="mailto:memad7628@gmail.com" className="text-sm font-medium hover:text-primary transition-colors truncate block w-full">
                memad7628@gmail.com
              </a>
            </div>
          </li>
          
          <li className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-primary shrink-0 shadow-sm">
              <Phone size={18} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Phone</p>
              <a href="tel:+201155793240" className="text-sm font-medium hover:text-primary transition-colors">
                +20 115 579 3240
              </a>
            </div>
          </li>

          <li className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-primary shrink-0 shadow-sm">
              <MapPin size={18} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Location</p>
              <address className="text-sm font-medium not-italic">
                Cairo, Egypt
              </address>
            </div>
          </li>
        </ul>

        <div className="w-full h-px bg-border my-6" />

        <div className="flex justify-center gap-4 w-full">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2">
            <Github size={20} />
          </a>
        </div>
      </div>
    </aside>
  );
}
