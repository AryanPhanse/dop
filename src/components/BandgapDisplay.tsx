import React from 'react';
import { calculateBandgap } from '../utils/bandCalculations';
import { DOPANTS } from '../utils/constants';
import type { SimulationParams } from '../types/simulator';

interface Props {
  params: SimulationParams;
}

export function BandgapDisplay({ params }: Props) {
  const bandgap = calculateBandgap(DOPANTS[params.dopant].k, params.concentration);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-xl font-bold mb-4">Bandgap Information</h2>
      <div className="flex items-center justify-between">
        <div className="space-y-2">
          <p className="text-gray-600">Current Configuration:</p>
          <ul className="text-sm text-gray-500">
            <li>Dopant: {params.dopant}</li>
            <li>Concentration: {(params.concentration * 100).toFixed(1)}%</li>
            <li>Functional: {params.functional}</li>
          </ul>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-indigo-600">
            {bandgap.toFixed(2)} eV
          </div>
          <p className="text-sm text-gray-500 mt-1">Calculated Bandgap</p>
        </div>
      </div>
    </div>
  );
}