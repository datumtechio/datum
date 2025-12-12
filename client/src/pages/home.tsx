import React from "react";
import { ArrowRight, Mail, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

// Generated assets
import heroBg from "@assets/generated_images/abstract_elegant_black_and_white_fluid_waves.png"; 

const XLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

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

      {/* TOP BAR */}
      <header className="absolute top-0 left-0 w-full p-8 md:p-12 z-50 flex justify-between items-start">
        <div className="text-2xl font-serif font-bold tracking-tight">DatumTech.</div>
      </header>

      {/* Services List - Top Center */}
      <div className="absolute top-24 md:top-32 left-0 w-full z-40 flex justify-center pointer-events-none">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium tracking-wide text-muted-foreground uppercase pointer-events-auto">
          <span>Web Development</span>
          <span className="hidden md:inline text-border">•</span>
          <span>Digital Marketing</span>
          <span className="hidden md:inline text-border">•</span>
          <span>Brand Identity</span>
        </div>
      </div>

      {/* LEFT: Socials (Vertical) */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 p-8 z-50 hidden md:flex flex-col gap-8 items-center">
        <div className="h-24 w-px bg-border"></div>
        <a href="#" className="hover:text-primary transition-colors text-muted-foreground hover:scale-110 duration-200"><Linkedin className="w-5 h-5" /></a>
        <a href="#" className="hover:text-primary transition-colors text-muted-foreground hover:scale-110 duration-200"><XLogo className="w-4 h-4" /></a>
        <a href="mailto:hello@datumtech.com" className="hover:text-primary transition-colors text-muted-foreground hover:scale-110 duration-200"><Mail className="w-5 h-5" /></a>
        <div className="h-24 w-px bg-border"></div>
      </div>

      {/* BOTTOM BAR */}
      <footer className="absolute bottom-0 left-0 w-full p-8 md:p-12 z-50 flex flex-col md:flex-row justify-between items-end gap-8">
        
        {/* Address */}
        <div className="text-sm text-muted-foreground font-light flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="uppercase tracking-widest font-medium text-foreground">Beirut, Lebanon</span>
          </div>
          <span className="opacity-60">© {new Date().getFullYear()} DatumTech</span>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-start md:items-end gap-1">
          <a href="mailto:hello@datumtech.com" className="text-lg font-medium hover:underline underline-offset-4">
            hello@datumtech.com
          </a>
          <a href="tel:+96100000000" className="text-muted-foreground font-light hover:text-foreground transition-colors">
            +961 3 000 000
          </a>
        </div>
      </footer>

      {/* CENTER: Hero Content */}
      <main className="relative z-10 max-w-5xl px-6 text-center mt-[-2rem]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-12"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-[0.95] tracking-tight">
            Smart Solutions <br/>
            <span className="text-muted-foreground italic">for Every Brand.</span>
          </h1>
          
          {/* Main CTA */}
          <div className="flex justify-center">
             <Button size="lg" className="rounded-none text-lg px-12 h-20 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 group shadow-2xl shadow-primary/20">
                Build My Website <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
          </div>
        </motion.div>
      </main>

    </div>
  );
}
