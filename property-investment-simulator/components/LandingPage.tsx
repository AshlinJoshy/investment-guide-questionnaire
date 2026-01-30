"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Diamond, TrendingUp, Clock, Eye } from "lucide-react";

interface LandingPageProps {
  onStart: () => void;
}

export default function LandingPage({ onStart }: LandingPageProps) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-bh-slate selection:bg-bh-salmon selection:text-white">
      {/* Navigation / Header */}
      <header className="absolute top-0 w-full z-10 p-6 md:p-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-serif font-bold tracking-tight text-bh-slate">Betterhomes</div>
          <button className="hidden md:block px-6 py-2 border border-bh-slate text-bh-slate hover:bg-bh-slate hover:text-white transition-colors duration-300">
            Enquire now
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 bg-bh-mist overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
           {/* Abstract background pattern could go here */}
           <div className="absolute top-1/4 right-0 w-96 h-96 bg-bh-sand rounded-full blur-3xl opacity-50"></div>
           <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-bh-powder rounded-full blur-3xl opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <p className="text-bh-slate/80 font-medium tracking-wide uppercase text-sm">
              A considered investment journey, guided by four decades of market insight.
            </p>
            
            <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] text-bh-slate">
              Every investor story is different.<br />
              <span className="italic text-bh-denim">40 years of experience</span> help shape yours.
            </h1>
            
            <p className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl text-bh-slate/80">
              This experience helps you understand how your investment decisions would have played out across 40 years of Dubai’s property market, giving you clearer perspective on the strategy, risk level, and opportunities that best suit you.
            </p>
            
            <div className="pt-8">
              <button 
                onClick={onStart}
                className="group relative inline-flex items-center justify-center px-8 py-4 bg-bh-salmon text-white font-medium tracking-wide hover:bg-bh-salmon/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <span>Explore your investment perspective</span>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What This Page Will Do for You */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif text-bh-slate">Clarity before commitment</h2>
              <div className="w-16 h-1 bg-bh-salmon"></div>
              <p className="text-lg leading-relaxed text-bh-slate/80">
                In a market filled with options, investors are often given more information — but less clarity. This experience is designed to help you pause, reflect, and better understand your own investment approach before making decisions.
              </p>
              <p className="text-lg leading-relaxed text-bh-slate/80">
                By stepping through key moments from Dubai’s property history, you’ll see how different choices tend to perform over time. The outcome isn’t a recommendation — it’s perspective. Perspective that helps you move forward with greater confidence and intent.
              </p>
            </div>
            <div className="relative h-full min-h-[400px] bg-bh-slate/5 p-8 flex items-center justify-center">
              {/* Abstract Visual Representation */}
              <div className="grid grid-cols-2 gap-4">
                <div className="w-32 h-48 bg-bh-slate rounded-lg opacity-90 transform translate-y-4"></div>
                <div className="w-32 h-48 bg-bh-denim rounded-lg opacity-80 transform -translate-y-4"></div>
                <div className="w-32 h-48 bg-bh-sand rounded-lg opacity-70 transform translate-y-2"></div>
                <div className="w-32 h-48 bg-bh-powder rounded-lg opacity-60 transform -translate-y-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How the Experience Works */}
      <section className="py-24 bg-bh-slate text-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif">How the Experience Works</h2>
            <div className="w-12 h-1 bg-bh-salmon mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { 
                step: "01", 
                title: "Understand Your Priorities", 
                desc: "Answer high-level questions to frame the experience around your goals and risk comfort.",
                icon: <Eye className="w-8 h-8 text-bh-salmon" />
              },
              { 
                step: "02", 
                title: "Explore Real Paths", 
                desc: "Move through realistic investment scenarios inspired by Dubai’s property market history.",
                icon: <Clock className="w-8 h-8 text-bh-salmon" />
              },
              { 
                step: "03", 
                title: "See Alignment", 
                desc: "Your choices reveal the investment strategy you naturally gravitate toward and its trade-offs.",
                icon: <TrendingUp className="w-8 h-8 text-bh-salmon" />
              },
              { 
                step: "04", 
                title: "Decide Next Step", 
                desc: "Receive a private summary of your perspective and continue the conversation with an advisor.",
                icon: <ArrowRight className="w-8 h-8 text-bh-salmon" />
              }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 p-8 border border-white/10 hover:border-bh-salmon/50 transition-colors duration-300">
                <div className="mb-6 flex justify-between items-start">
                  <span className="text-4xl font-serif opacity-20">{item.step}</span>
                  {item.icon}
                </div>
                <h3 className="text-xl font-serif mb-4">{item.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is Designed For */}
      <section className="py-24 bg-bh-mist/30">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="bg-white p-12 shadow-xl border-l-4 border-bh-salmon">
            <h2 className="text-3xl font-serif text-bh-slate mb-8">Who This Is Designed For</h2>
            <ul className="grid md:grid-cols-1 gap-4">
              {[
                "Want clarity before committing capital",
                "Prefer understanding their options rather than being sold to",
                "Take a long-term view of property investment",
                "Value discretion, transparency, and experience",
                "Expect advice shaped around their personal objectives"
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-4 text-lg text-bh-slate/80">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-bh-mist flex items-center justify-center">
                    <Check className="w-3 h-3 text-bh-slate" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why This Exists */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-4xl font-serif text-bh-slate mb-8">Built on experience, not assumptions</h2>
          <p className="text-xl leading-relaxed text-bh-slate/80 max-w-3xl mx-auto mb-12">
            Over the past 40 years, we’ve guided investors through growth cycles, corrections, and reinvention in Dubai’s property market. That experience allows us to recognise patterns, understand trade-offs, and ask the right questions — not to direct decisions, but to support them.
          </p>
          <div className="inline-block p-8 border border-bh-mist bg-bh-mist/10">
            <p className="text-bh-slate font-serif italic text-lg">
              &quot;This experience reflects our philosophy: helping investors think more clearly, based on insight earned over time.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* What You’ll Take Away & CTA */}
      <section className="py-24 bg-bh-denim text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-10">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-bh-powder rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-12">What You’ll Take Away</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-16 text-left">
            {[
              "A clearer understanding of your investment style",
              "Insight into how your decisions typically perform over time",
              "Perspective on risk, growth, and stability",
              "A foundation for more confident conversations"
            ].map((item, i) => (
              <div key={i} className="flex items-center space-x-4 bg-white/10 p-6 rounded border border-white/10">
                <Diamond className="w-5 h-5 text-bh-salmon flex-shrink-0" />
                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>

          <button 
            onClick={onStart}
            className="group relative inline-flex items-center justify-center px-10 py-5 bg-bh-salmon text-white font-medium text-lg tracking-wide hover:bg-bh-salmon/90 transition-all duration-300 shadow-xl hover:-translate-y-1"
          >
            <span>Explore your investment perspective</span>
            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bh-slate text-white/40 py-12 text-center text-sm">
        <div className="container mx-auto px-6">
          <p>© {new Date().getFullYear()} Betterhomes. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
