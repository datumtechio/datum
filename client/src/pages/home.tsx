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
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/40 transition-all duration-300">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-serif font-bold tracking-tight">NexGen.</div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#work" className="hover:text-primary transition-colors">Work</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <Button variant="default" className="rounded-none px-6 shadow-none hover:opacity-90 transition-opacity">Get Started</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-[90vh] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Abstract Background" 
            className="w-full h-full object-cover opacity-20 dark:opacity-10 grayscale contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium leading-[0.95] tracking-tight mb-8">
              Digital <br/>
              <span className="text-muted-foreground italic">Excellence.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 leading-relaxed font-light border-l border-primary/20 pl-6">
              We craft minimalist digital experiences and data-driven marketing strategies that elevate brands above the noise. 
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-none text-base px-10 h-16 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 group">
                Start Project <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="rounded-none text-base px-10 h-16 border-primary/10 hover:bg-secondary/50 backdrop-blur-sm">
                View Portfolio
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6 border-b border-border pb-8">
            <div className="max-w-xl">
              <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4 block">Our Expertise</span>
              <h2 className="text-4xl md:text-5xl font-serif">Comprehensive digital solutions.</h2>
            </div>
            <Button variant="link" className="text-lg p-0 h-auto gap-2 group text-primary font-serif italic">
              See all services <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-border/30 border border-border/30">
            {[
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Web Development",
                desc: "Bespoke websites built with modern technologies. Fast, responsive, and designed to convert."
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Digital Marketing",
                desc: "Data-driven SEO, PPC, and social strategies that target your audience with precision."
              },
              {
                icon: <PenTool className="w-6 h-6" />,
                title: "Brand Strategy",
                desc: "Defining your voice and visual identity to create a lasting connection with your customers."
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-12 bg-background hover:bg-secondary/30 transition-colors duration-500"
              >
                <div className="mb-8 p-3 bg-secondary w-fit text-primary rounded-none">{service.icon}</div>
                <h3 className="text-2xl font-serif mb-4 group-hover:underline decoration-1 underline-offset-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-light">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Philosophy Section */}
      <section id="about" className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-[4/5] bg-secondary overflow-hidden group">
               <img 
                src={aboutImg} 
                alt="Minimalist Office" 
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700 ease-out scale-100 group-hover:scale-105" 
               />
               <div className="absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/10" />
            </div>
            <div>
              <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-4 block">Our Philosophy</span>
              <h2 className="text-5xl md:text-6xl font-serif mb-8 leading-tight">Less noise.<br/>More impact.</h2>
              <div className="space-y-8 text-xl text-muted-foreground font-light leading-relaxed">
                <p>
                  In a digital landscape cluttered with distractions, we believe in the power of simplicity. We strip away the inessential to reveal the core value of your brand.
                </p>
                <p>
                  Our team of designers, developers, and strategists work in unison to create digital products that are not only beautiful but also mathematically effective.
                </p>
              </div>
              
              <div className="mt-12 grid grid-cols-2 gap-y-6 gap-x-12">
                {['Strategic Design', 'Data-Driven', 'Minimalist Aesthetic', 'Global Reach'].map((item) => (
                  <div key={item} className="flex items-center gap-3 border-b border-border pb-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-serif text-lg text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote/Breaker Section */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <blockquote className="text-3xl md:text-5xl font-serif leading-tight italic opacity-90">
            "Simplicity is the ultimate sophistication."
          </blockquote>
          <cite className="block mt-8 text-sm font-sans tracking-widest uppercase opacity-60 not-italic">Leonardo da Vinci</cite>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-secondary/10">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Let's build something <br/>extraordinary.</h2>
              <p className="text-muted-foreground text-lg mb-12 max-w-md font-light">
                Ready to elevate your digital presence? Reach out to us and let's discuss your next project.
              </p>
              
              <div className="space-y-10">
                <div className="flex items-start gap-6 group">
                  <div className="p-3 bg-primary text-primary-foreground">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif mb-1 group-hover:underline">Email us</h4>
                    <p className="text-muted-foreground">hello@nexgen.digital</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                   <div className="p-3 bg-primary text-primary-foreground">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif mb-1 group-hover:underline">Call us</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                   <div className="p-3 bg-primary text-primary-foreground">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-serif mb-1 group-hover:underline">Visit us</h4>
                    <p className="text-muted-foreground">123 Design District<br/>New York, NY 10012</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background border border-border p-8 md:p-12 shadow-2xl shadow-black/5">
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">First Name</label>
                    <Input className="rounded-none border-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary shadow-none transition-colors" placeholder="John" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">Last Name</label>
                    <Input className="rounded-none border-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary shadow-none transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">Email</label>
                  <Input type="email" className="rounded-none border-0 border-b border-border bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary shadow-none transition-colors" placeholder="john@company.com" />
                </div>
                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-widest font-semibold text-muted-foreground">Message</label>
                  <Textarea className="rounded-none border-0 border-b border-border bg-transparent px-0 min-h-[100px] resize-none focus-visible:ring-0 focus-visible:border-primary shadow-none transition-colors" placeholder="Tell us about your project..." />
                </div>
                <Button className="w-full rounded-none h-14 text-base bg-primary text-primary-foreground hover:bg-primary/90" size="lg">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-3xl font-serif font-bold tracking-tight">NexGen.</div>
            <div className="text-sm text-neutral-400 font-light">
              © {new Date().getFullYear()} NexGen Digital. All rights reserved.
            </div>
            <div className="flex gap-8">
              <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm uppercase tracking-wider">Twitter</a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm uppercase tracking-wider">LinkedIn</a>
              <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm uppercase tracking-wider">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
