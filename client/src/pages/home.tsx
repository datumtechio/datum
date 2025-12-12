import React from "react";
import { ArrowRight, Mail, Instagram, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// Generated assets
import heroBg from "@assets/generated_images/abstract_elegant_black_and_white_fluid_waves.png"; 

export default function Home() {
  return (
    <div className="h-screen w-screen bg-background text-foreground overflow-hidden relative flex items-center justify-center selection:bg-primary selection:text-primary-foreground">
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Background" 
          className="w-full h-full object-cover opacity-10 grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      {/* TOP: Brand */}
      <header className="absolute top-0 left-0 w-full p-8 z-50 flex justify-between items-start">
        <div className="text-2xl font-serif font-bold tracking-tight">DatumTech.</div>
        <div className="hidden md:flex flex-col items-end text-sm text-muted-foreground font-light">
          <span>San Francisco, CA</span>
          <span>EST. 2024</span>
        </div>
      </header>

      {/* LEFT: Socials (Vertical) */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 p-8 z-50 hidden md:flex flex-col gap-8 items-center">
        <div className="h-24 w-px bg-border"></div>
        <a href="#" className="hover:text-primary transition-colors text-muted-foreground"><Linkedin className="w-5 h-5" /></a>
        <a href="#" className="hover:text-primary transition-colors text-muted-foreground"><Instagram className="w-5 h-5" /></a>
        <a href="#" className="hover:text-primary transition-colors text-muted-foreground"><Mail className="w-5 h-5" /></a>
        <div className="h-24 w-px bg-border"></div>
      </div>

      {/* RIGHT: Navigation (Vertical) */}
      <nav className="absolute right-0 top-1/2 -translate-y-1/2 p-8 z-50 hidden md:flex flex-col gap-12 text-sm font-medium tracking-widest uppercase [writing-mode:vertical-rl] rotate-180 items-center">
        <a href="#services" className="hover:text-primary text-muted-foreground transition-colors py-2">Services</a>
        <a href="#work" className="hover:text-primary text-muted-foreground transition-colors py-2">Work</a>
        <a href="#philosophy" className="hover:text-primary text-muted-foreground transition-colors py-2">Philosophy</a>
        <a href="#contact" className="hover:text-primary text-muted-foreground transition-colors py-2">Contact</a>
      </nav>

      {/* BOTTOM: Contact/Status */}
      <footer className="absolute bottom-0 left-0 w-full p-8 z-50 flex justify-between items-end">
        <div className="text-xs text-muted-foreground uppercase tracking-widest hidden md:block">
          © {new Date().getFullYear()} DatumTech
        </div>
        <a href="mailto:hello@datumtech.com" className="text-sm font-medium hover:underline underline-offset-4">
          hello@datumtech.com
        </a>
      </footer>

      {/* CENTER: Hero Content */}
      <main className="relative z-10 max-w-5xl px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-12"
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium leading-[0.9] tracking-tight">
            Data Driven. <br/>
            <span className="text-muted-foreground italic">Design Led.</span>
          </h1>
          
          {/* Main CTA */}
          <div className="flex justify-center">
             <Button size="lg" className="rounded-none text-lg px-12 h-20 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 group shadow-2xl shadow-primary/20">
                Start Your Project <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
          </div>
        </motion.div>
      </main>

    </div>
  );
}
