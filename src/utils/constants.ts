export const DOPANTS: Record<string, { k: number; effect: string }> = {
  'Al': { k: 1.0, effect: 'Increases bandgap' },
  'Ga': { k: 0.8, effect: 'Increases bandgap' },
  'In': { k: 0.5, effect: 'Increases bandgap' },
  'N': { k: -1.0, effect: 'Reduces bandgap' },
  'Cu': { k: -0.5, effect: 'Reduces bandgap' },
};

export const PURE_ZNO_BANDGAP = 3.3; // eV
export const ELECTRON_MASS = 0.28; // relative to free electron mass
export const HOLE_MASS = 0.59; // relative to free electron mass
export const HBAR = 6.582119569e-16; // eV⋅s
export const DEFAULT_LATTICE_CONSTANT = 3.25; // Å

export const FUNCTIONALS = [
  'PBE',
  'HSE06',
  'PBE0',
];