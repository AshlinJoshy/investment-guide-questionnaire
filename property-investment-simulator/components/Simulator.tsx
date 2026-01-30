"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Scores, SimulationResult } from "@/types";

interface SimulatorProps {
  onComplete: (results: SimulationResult) => void;
}

type Question = {
  id: string;
  type: "profile" | "era";
  title: string;
  description?: string;
  options: {
    label: string;
    value: string;
    effects?: Partial<Scores>;
  }[];
};

const initialScores: Scores = {
  Growth: 0,
  Income: 0,
  Stability: 0,
  Liquidity: 0,
  Scarcity: 0,
  RiskAppetite: 0,
};

const questions: Question[] = [
  // SECTION A — INITIAL PROFILING
  {
    id: "q1",
    type: "profile",
    title: "Your investment horizon",
    description: "How do you typically approach property investment?",
    options: [
      { label: "Medium-term (5–10 years)", value: "A", effects: { Liquidity: 1, Income: 1 } },
      { label: "Long-term (10–20 years)", value: "B", effects: { Growth: 1, Stability: 1 } },
      { label: "Generational (20+ years)", value: "C", effects: { Growth: 2, Scarcity: 1 } },
    ],
  },
  {
    id: "q2",
    type: "profile",
    title: "Primary objective",
    description: "What matters most to you?",
    options: [
      { label: "Reliable income", value: "A", effects: { Income: 2 } },
      { label: "Capital growth", value: "B", effects: { Growth: 2 } },
      { label: "A balance of both", value: "C", effects: { Income: 1, Growth: 1 } },
    ],
  },
  {
    id: "q3",
    type: "profile",
    title: "Risk comfort",
    description: "How do you view risk?",
    options: [
      { label: "Prefer predictability", value: "A", effects: { Stability: 2, RiskAppetite: -1 } },
      { label: "Comfortable with calculated risk", value: "B", effects: { RiskAppetite: 1 } },
      { label: "Confident navigating volatility", value: "C", effects: { RiskAppetite: 2, Growth: 1 } },
    ],
  },
  {
    id: "q4",
    type: "profile",
    title: "Asset preference",
    description: "Which do you instinctively lean toward?",
    options: [
      { label: "Villas / landed homes", value: "Villas" },
      { label: "Apartments", value: "Apartments" },
      { label: "A mix", value: "Mix" },
    ],
  },
  // SECTION B — THE 40-YEAR SIMULATION
  {
    id: "era1",
    type: "era",
    title: "ERA 1 — Early Growth Phase",
    description: "Dubai is entering an early phase of expansion. Infrastructure is developing, and population growth is accelerating. Which opportunity do you prioritise?",
    options: [
      { label: "A family villa in an emerging residential community", value: "A", effects: { Growth: 1, Scarcity: 1 } },
      { label: "A centrally located apartment with steady rental demand", value: "B", effects: { Income: 1, Liquidity: 1 } },
    ],
  },
  {
    id: "era2",
    type: "era",
    title: "ERA 2 — Expansion & Speculation Phase",
    description: "New master communities and waterfront developments attract global attention. Where do you allocate capital?",
    options: [
      { label: "Early entry into a landmark waterfront development", value: "A", effects: { Growth: 1, RiskAppetite: 1, Scarcity: 1 } },
      { label: "Multiple mid-market apartments across established districts", value: "B", effects: { Income: 1, Stability: 1 } },
    ],
  },
  {
    id: "era3",
    type: "era",
    title: "ERA 3 — Market Maturity Phase",
    description: "The city matures. Residents stay longer. Community quality becomes a key driver.",
    options: [
      { label: "A villa in a family-led master community", value: "A", effects: { Stability: 1, Growth: 1 } },
      { label: "A branded urban residence in a prime location", value: "B", effects: { Liquidity: 1, Income: 1 } },
    ],
  },
  {
    id: "era4",
    type: "era",
    title: "ERA 4 — Resilience & Reset Phase",
    description: "The market corrects, then stabilises. Informed investors focus on fundamentals.",
    options: [
      { label: "Hold assets and prioritise long-term positioning", value: "A", effects: { Stability: 1 } },
      { label: "Reallocate into high-demand rental assets", value: "B", effects: { Income: 1, Liquidity: 1 } },
    ],
  },
  {
    id: "era5",
    type: "era",
    title: "ERA 5 — The Future (Next 20 Years)",
    description: "Sustainability, scarcity, and lifestyle integration define the next phase.",
    options: [
      { label: "Green master-planned communities with long-term liveability", value: "A", effects: { Stability: 1, Growth: 1 } },
      { label: "Ultra-prime waterfront or limited-supply locations", value: "B", effects: { Scarcity: 1, Growth: 1 } },
    ],
  },
];

export default function Simulator({ onComplete }: SimulatorProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState<Scores>(initialScores);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const currentQuestion = questions[currentIndex];
  const progress = ((currentIndex) / questions.length) * 100;

  const handleOptionSelect = (option: typeof currentQuestion.options[0]) => {
    // Update scores
    if (option.effects) {
      setScores((prev) => {
        const newScores = { ...prev };
        (Object.keys(option.effects!) as (keyof Scores)[]).forEach((key) => {
          newScores[key] = (newScores[key] || 0) + (option.effects![key] || 0);
        });
        return newScores;
      });
    }

    // Save answer
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: option.value }));

    // Advance
    if (currentIndex < questions.length - 1) {
      setTimeout(() => setCurrentIndex((prev) => prev + 1), 300);
    } else {
      // Calculate and Finish
      setTimeout(() => {
        // Calculate Logic here to avoid stale closure if we called a function
        
        let archetype = "The Strategic Optimiser"; // Default
    
        const { Growth, Income, Stability, Liquidity, Scarcity, RiskAppetite } = scores;
        
        // Simple heuristic based on prompt logic
        if (Growth >= 3 && Scarcity >= 2) {
          archetype = "The Legacy Builder";
        } else if (Income >= 3 && Liquidity >= 2) {
          archetype = "The Yield Strategist";
        } else if (Stability >= 3 && RiskAppetite <= 1) {
          archetype = "The Capital Preserver";
        } else if (Growth >= 2 && Income >= 2) {
          archetype = "The Strategic Optimiser";
        } else {
            // Fallback logic
            const maxScore = Math.max(Growth, Income, Stability);
            if (maxScore === Growth) archetype = "The Legacy Builder";
            else if (maxScore === Income) archetype = "The Yield Strategist";
            else archetype = "The Capital Preserver";
        }

        onComplete({
          scores,
          answers: { ...answers, [currentQuestion.id]: option.value }, // Include current answer
          archetype,
          assetPreference: answers["q4"] || (currentQuestion.id === "q4" ? option.value : "Mix"),
        });
      }, 500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-bh-slate text-white">
      {/* Progress Bar */}
      <div className="h-2 bg-white/10 w-full">
        <motion.div 
          className="h-full bg-bh-salmon"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-6 md:p-12">
        <div className="max-w-2xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <span className="text-bh-salmon font-serif text-lg tracking-wider uppercase">
                    {currentQuestion.type === "era" ? "Scenario" : `Question ${currentIndex + 1} of ${questions.length}`}
                </span>
                <h2 className="text-3xl md:text-5xl font-serif leading-tight">
                  {currentQuestion.title}
                </h2>
                <p className="text-xl text-white/70 leading-relaxed">
                  {currentQuestion.description}
                </p>
              </div>

              <div className="grid gap-4 pt-8">
                {currentQuestion.options.map((option, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionSelect(option)}
                    className="group text-left p-6 md:p-8 bg-white/5 border border-white/10 hover:border-bh-salmon hover:bg-white/10 transition-all duration-300 rounded-sm flex items-center justify-between"
                  >
                    <span className="text-lg md:text-xl font-light group-hover:text-white transition-colors">
                      {option.label}
                    </span>
                    <ArrowRight className="w-5 h-5 text-bh-salmon opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
