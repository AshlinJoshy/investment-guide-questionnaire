"use client";

import { useState } from "react";
import LandingPage from "@/components/LandingPage";
import Simulator from "@/components/Simulator";
import Results from "@/components/Results";
import { SimulationResult } from "@/types";

export type ViewState = "landing" | "simulator" | "results";

export default function Home() {
  const [view, setView] = useState<ViewState>("landing");
  const [results, setResults] = useState<SimulationResult | null>(null);

  const startSimulator = () => setView("simulator");
  const finishSimulator = (data: SimulationResult) => {
    setResults(data);
    setView("results");
  };

  return (
    <main className="min-h-screen bg-white">
      {view === "landing" && <LandingPage onStart={startSimulator} />}
      {view === "simulator" && <Simulator onComplete={finishSimulator} />}
      {view === "results" && results && <Results data={results} />}
    </main>
  );
}
