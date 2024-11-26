import React from 'react';
import { DOPANTS, FUNCTIONALS, DEFAULT_LATTICE_CONSTANT } from '../utils/constants';
import { ZnOInfo } from './ZnOInfo';
import type { SimulationParams } from '../types/simulator';

interface Props {
  onParamsChange: (params: SimulationParams) => void;
}

export function SimulationForm({ onParamsChange }: Props) {
  const [params, setParams] = React.useState<SimulationParams>({
    dopant: 'Al',
    concentration: 0.05,
    latticeConstant: DEFAULT_LATTICE_CONSTANT,
    functional: 'PBE'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const newParams = {
      ...params,
      [name]: name === 'concentration' || name === 'latticeConstant' 
        ? parseFloat(value) 
        : value
    };
    setParams(newParams);
    onParamsChange(newParams);
  };

  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">Simulation Parameters</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Dopant</label>
            <select
              name="dopant"
              value={params.dopant}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              {Object.entries(DOPANTS).map(([name, info]) => (
                <option key={name} value={name}>
                  {name} ({info.effect})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Concentration (0-0.2)
            </label>
            <input
              type="range"
              name="concentration"
              min="0"
              max="0.2"
              step="0.01"
              value={params.concentration}
              onChange={handleChange}
              className="mt-1 block w-full"
            />
            <span className="text-sm text-gray-500">{params.concentration}</span>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Lattice Constant (Å)
            </label>
            <input
              type="range"
              name="latticeConstant"
              min="3.0"
              max="3.5"
              step="0.01"
              value={params.latticeConstant}
              onChange={handleChange}
              className="mt-1 block w-full"
            />
            <span className="text-sm text-gray-500">{params.latticeConstant} Å</span>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Functional</label>
            <select
              name="functional"
              value={params.functional}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              {FUNCTIONALS.map(func => (
                <option key={func} value={func}>{func}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <ZnOInfo />
    </div>
  );
}