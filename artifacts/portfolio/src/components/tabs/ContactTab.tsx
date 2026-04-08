import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactTab() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-8"
    >
      <header>
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-4">
          Contact
          <div className="h-1 w-12 bg-primary rounded-full" />
        </h2>
      </header>

      <div className="h-[300px] w-full rounded-xl overflow-hidden border border-border relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d442654.5501861054!2d31.547146430346333!3d30.059296541578335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fa60b21beeb%3A0x79dfb296e8423bba!2sCairo%2C%20Cairo%20Governorate%2C%20Egypt!5e0!3m2!1sen!2sus!4v1709424700000!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Cairo Map"
        ></iframe>
      </div>

      <section className="mt-4">
        <h3 className="text-2xl font-bold mb-6">Contact Form</h3>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name" 
              required
              className="bg-background border border-border rounded-xl px-5 py-4 text-foreground outline-none focus:border-primary transition-colors shadow-sm"
            />
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address" 
              required
              className="bg-background border border-border rounded-xl px-5 py-4 text-foreground outline-none focus:border-primary transition-colors shadow-sm"
            />
          </div>
          
          <input 
            type="text" 
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject" 
            required
            className="bg-background border border-border rounded-xl px-5 py-4 text-foreground outline-none focus:border-primary transition-colors shadow-sm"
          />
          
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message" 
            required
            rows={5}
            className="bg-background border border-border rounded-xl px-5 py-4 text-foreground outline-none focus:border-primary transition-colors shadow-sm resize-none"
          />
          
          <div className="self-end">
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-card border border-border hover:border-primary hover:text-primary text-foreground transition-all duration-300 rounded-xl px-8 py-6 h-auto font-medium text-base shadow-sm group"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">Sending...</span>
              ) : isSuccess ? (
                <span className="flex items-center gap-2 text-green-500">Message Sent!</span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </span>
              )}
            </Button>
          </div>
        </form>
      </section>
    </motion.div>
  );
}
