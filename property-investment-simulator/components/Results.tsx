"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { SimulationResult } from "@/types";

interface ResultsProps {
  data: SimulationResult;
}

export default function Results({ data }: ResultsProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleCreateBlueprint = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call / CRM tagging
    console.log("Sending to CRM:", { ...formData, ...data });
    setTimeout(() => setFormSubmitted(true), 1000);
  };

  // Generate dynamic content based on archetype
  const getArchetypeDetails = () => {
    switch (data.archetype) {
      case "The Legacy Builder":
        return {
          desc: "Your decisions favour long-term appreciation through scarce assets. Historically, this approach benefits from patience, early access, and selective positioning.",
          traits: ["Long-term Vision", "High Appreciation", "Scarcity Focus"],
          communities: ["Palm Jumeirah", "Emirates Hills", "Jumeirah Bay Island"]
        };
      case "The Yield Strategist":
        return {
          desc: "You prioritize consistent cash flow and liquidity. This strategy has historically outperformed in high-demand urban centers with strong rental markets.",
          traits: ["Passive Income", "High Liquidity", "Rental Demand"],
          communities: ["Downtown Dubai", "Dubai Marina", "Business Bay"]
        };
      case "The Capital Preserver":
        return {
          desc: "You value stability and risk management. This approach focuses on established communities with proven track records and lower volatility.",
          traits: ["Stability", "Wealth Preservation", "Low Volatility"],
          communities: ["Arabian Ranches", "The Springs", "Green Community"]
        };
      case "The Strategic Optimiser":
      default:
        return {
          desc: "You seek a balance between growth and income. This versatile strategy adapts to market cycles, capturing value from both appreciation and rental yields.",
          traits: ["Balanced Growth", "Flexible Strategy", "Moderate Risk"],
          communities: ["Dubai Hills Estate", "Jumeirah Golf Estates", "City Walk"]
        };
    }
  };

  const details = getArchetypeDetails();

  // Override communities based on asset preference if possible (simple override for now)
  const assetPref = data.assetPreference;
  let recommendedCommunities = details.communities;
  if (assetPref === "Villas" && !recommendedCommunities.some(c => c.includes("Ranches") || c.includes("Hills"))) {
     recommendedCommunities = ["Arabian Ranches III", "Dubai Hills Estate", "Tilal Al Ghaf"];
  } else if (assetPref === "Apartments" && !recommendedCommunities.some(c => c.includes("Marina") || c.includes("Downtown"))) {
     recommendedCommunities = ["Downtown Dubai", "Dubai Marina", "DIFC"];
  }

  if (!formSubmitted) {
    return (
      <div className="min-h-screen bg-bh-slate flex items-center justify-center p-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-xl w-full bg-white p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-bh-salmon"></div>
          
          <div className="text-center space-y-6 mb-10">
            <h2 className="text-3xl font-serif text-bh-slate">Your investment profile is ready.</h2>
            <p className="text-bh-slate/70">
              Receive your personalised 40-Year Investment Blueprint, including your investor archetype, strategy summary, and community alignment.
            </p>
          </div>

          <form onSubmit={handleCreateBlueprint} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-bh-slate/70 mb-1">Full Name</label>
              <input 
                required
                type="text"
                className="w-full p-4 bg-bh-mist/30 border border-bh-mist focus:border-bh-slate focus:outline-none transition-colors"
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-bh-slate/70 mb-1">Email Address</label>
              <input 
                required
                type="email"
                className="w-full p-4 bg-bh-mist/30 border border-bh-mist focus:border-bh-slate focus:outline-none transition-colors"
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-bh-slate/70 mb-1">Phone Number (Optional)</label>
              <input 
                type="tel"
                className="w-full p-4 bg-bh-mist/30 border border-bh-mist focus:border-bh-slate focus:outline-none transition-colors"
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-bh-salmon text-white font-medium hover:bg-bh-salmon/90 transition-colors shadow-lg"
            >
              Send My Blueprint
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bh-mist/30 py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="bg-white p-8 md:p-12 shadow-sm border-t-4 border-bh-slate">
          <div className="text-sm font-bold text-bh-salmon uppercase tracking-wider mb-2">Your Archetype</div>
          <h1 className="text-4xl md:text-5xl font-serif text-bh-slate mb-6">{data.archetype}</h1>
          <p className="text-xl text-bh-slate/80 leading-relaxed">
            {details.desc}
          </p>
          
          <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-bh-mist">
            {details.traits.map((trait, i) => (
              <div key={i} className="text-center">
                <div className="font-serif text-bh-slate font-bold">{trait}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Breakdown */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-bh-slate text-white p-8 md:p-12">
            <h3 className="text-2xl font-serif mb-6">Strategy Analysis</h3>
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <span className="opacity-80">Growth Potential</span>
                <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-bh-salmon" style={{ width: `${Math.min(100, (data.scores.Growth / 5) * 100)}%` }}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="opacity-80">Income Stability</span>
                <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                   <div className="h-full bg-bh-powder" style={{ width: `${Math.min(100, (data.scores.Income / 5) * 100)}%` }}></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="opacity-80">Risk Tolerance</span>
                <div className="w-32 h-2 bg-white/10 rounded-full overflow-hidden">
                   <div className="h-full bg-bh-denim" style={{ width: `${Math.min(100, (data.scores.RiskAppetite / 5) * 100 + 50)}%` }}></div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/10 text-sm opacity-60">
              Based on your answers across 40 years of market simulations.
            </div>
          </div>

          <div className="bg-white p-8 md:p-12">
            <h3 className="text-2xl font-serif text-bh-slate mb-6">Recommended Communities</h3>
            <p className="text-bh-slate/70 mb-6">
              Based on your preference for <strong>{data.assetPreference}</strong> and your {data.archetype} style, these areas align with your goals:
            </p>
            <ul className="space-y-4">
              {recommendedCommunities.map((comm, i) => (
                <li key={i} className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-bh-salmon flex-shrink-0 mt-1" />
                  <span className="text-lg text-bh-slate">{comm}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-bh-salmon text-white p-8 md:p-12 text-center">
          <h2 className="text-3xl font-serif mb-4">Discuss Your Perspective</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            This blueprint is just the start. Our advisors have the experience to turn this perspective into a concrete strategy.
          </p>
          <button className="bg-white text-bh-salmon px-8 py-3 font-bold hover:bg-bh-mist transition-colors">
            Book a Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
