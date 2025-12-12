import React from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, ChevronRight, Globe, BarChart3, PenTool, Layout, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Generated assets
import heroBg from "@assets/generated_images/abstract_elegant_black_and_white_fluid_waves.png"; 
import aboutImg from "@assets/generated_images/minimalist_modern_office_workspace_black_and_white.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border/40 transition-all duration-300">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-serif font-bold tracking-tight">DatumTech.</div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#about" className="hover:text-primary transition-colors">Philosophy</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <Button variant="default" className="rounded-none px-6 shadow-none hover:opacity-90 transition-opacity">Get Started</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[85vh] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Abstract Background" 
            className="w-full h-full object-cover opacity-20 dark:opacity-10 grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium leading-[0.95] tracking-tight mb-8">
              Data Driven. <br/>
              <span className="text-muted-foreground italic">Design Led.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 leading-relaxed font-light border-l border-primary/20 pl-6">
              DatumTech transforms complex data into elegant digital experiences. We bridge the gap between analytical marketing and minimalist design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-none text-base px-10 h-16 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 group">
                Start Project <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section - More Organized Layout */}
      <section id="services" className="py-32 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <div className="max-w-xl">
              <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4 block">Our Expertise</span>
              <h2 className="text-4xl md:text-5xl font-serif">Structured for success.</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Analytics & Strategy",
                items: ["Data Analysis", "Market Research", "Growth Strategy", "Conversion Optimization"]
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Web Development",
                items: ["Custom Development", "React Applications", "Performance Tuning", "SEO Technicals"]
              },
              {
                icon: <PenTool className="w-6 h-6" />,
                title: "Brand Identity",
                items: ["Visual Design", "UI/UX Design", "Brand Guidelines", "Content Strategy"]
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group border-t border-border pt-8 hover:border-primary transition-colors duration-500"
              >
                <div className="mb-6 text-primary opacity-80">{service.icon}</div>
                <h3 className="text-2xl font-serif mb-6">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, j) => (
                    <li key={j} className="text-muted-foreground font-light flex items-center gap-2 text-sm">
                      <span className="w-1 h-1 bg-primary/40 rounded-full" /> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Philosophy Section - Cleaner Layout */}
      <section id="about" className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-5 relative aspect-[3/4] bg-secondary overflow-hidden group">
               <img 
                src={aboutImg} 
                alt="Minimalist Office" 
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700 ease-out" 
               />
            </div>
            <div className="lg:col-span-7">
              <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4 block">The DatumTech Way</span>
              <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">Clarity in <br/>complexity.</h2>
              <div className="space-y-8 text-xl text-muted-foreground font-light leading-relaxed max-w-2xl">
                <p>
                  We believe that data without design is noise, and design without data is art. DatumTech exists at the intersection, creating tools that work as beautifully as they look.
                </p>
                <p>
                  Our process is stripped of the unnecessary. We focus purely on metrics that matter and aesthetics that endure.
                </p>
              </div>
              
              <div className="mt-12 grid grid-cols-2 gap-8">
                 <div className="border-l border-border pl-6">
                   <h4 className="text-lg font-serif mb-2">Precision</h4>
                   <p className="text-sm text-muted-foreground">Every pixel and data point has a purpose.</p>
                 </div>
                 <div className="border-l border-border pl-6">
                   <h4 className="text-lg font-serif mb-2">Elegance</h4>
                   <p className="text-sm text-muted-foreground">Sophistication through simplicity.</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-secondary/10 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-serif mb-6">Start your transformation.</h2>
             <p className="text-muted-foreground text-lg font-light">
                Reach out to discuss how we can elevate your digital presence.
             </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 max-w-5xl mx-auto">
            <div className="space-y-12 py-8">
                <div className="flex items-start gap-6 group">
                  <div className="p-3 bg-primary text-primary-foreground">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif mb-1">Email</h4>
                    <p className="text-muted-foreground">hello@datumtech.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                   <div className="p-3 bg-primary text-primary-foreground">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif mb-1">Phone</h4>
                    <p className="text-muted-foreground">+1 (555) 000-0000</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                   <div className="p-3 bg-primary text-primary-foreground">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif mb-1">Office</h4>
                    <p className="text-muted-foreground">123 Tech Boulevard<br/>San Francisco, CA 94105</p>
                  </div>
                </div>
            </div>

            <div className="bg-background border border-border p-8 md:p-12 shadow-2xl shadow-black/5">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">Name</label>
                  <Input className="rounded-none border-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary shadow-none transition-colors" placeholder="Jane Smith" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">Email</label>
                  <Input type="email" className="rounded-none border-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary shadow-none transition-colors" placeholder="jane@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">Message</label>
                  <Textarea className="rounded-none border-0 border-b border-border bg-transparent px-0 min-h-[80px] resize-none focus-visible:ring-0 focus-visible:border-primary shadow-none transition-colors" placeholder="How can we help?" />
                </div>
                <Button className="w-full rounded-none h-12 text-base bg-primary text-primary-foreground hover:bg-primary/90 mt-4" size="lg">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-2xl font-serif font-bold tracking-tight">DatumTech.</div>
            <div className="text-sm text-neutral-400 font-light">
              © {new Date().getFullYear()} DatumTech. All rights reserved.
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm uppercase tracking-wider">LinkedIn</a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm uppercase tracking-wider">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
