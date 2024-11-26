import { PURE_ZNO_BANDGAP, ELECTRON_MASS, HOLE_MASS, HBAR } from './constants';

export function calculateBandgap(dopantK: number, concentration: number): number {
  return PURE_ZNO_BANDGAP + dopantK * concentration;
}

export function generateKPoints(latticeConstant: number, numPoints: number = 100): number[] {
  const kMax = Math.PI / latticeConstant;
  const step = (2 * kMax) / (numPoints - 1);
  return Array.from({ length: numPoints }, (_, i) => -kMax + i * step);
}

export function calculateBands(kPoints: number[], bandgap: number): {
  conductionBand: number[];
  valenceBand: number[];
} {
  const conductionBand = kPoints.map(k => {
    const term = (HBAR * HBAR * k * k) / (2 * ELECTRON_MASS);
    return bandgap + term;
  });

  const valenceBand = kPoints.map(k => {
    const term = (HBAR * HBAR * k * k) / (2 * HOLE_MASS);
    return -term;
  });

  return { conductionBand, valenceBand };
}