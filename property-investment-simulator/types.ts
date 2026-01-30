export type Scores = {
  Growth: number;
  Income: number;
  Stability: number;
  Liquidity: number;
  Scarcity: number;
  RiskAppetite: number;
};

export type SimulationResult = {
  scores: Scores;
  answers: Record<string, string>;
  archetype: string;
  assetPreference: string;
};
