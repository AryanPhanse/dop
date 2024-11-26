export interface DopantInfo {
  name: string;
  k: number;
  effect: string;
}

export interface SimulationParams {
  dopant: string;
  concentration: number;
  latticeConstant: number;
  functional: string;
}