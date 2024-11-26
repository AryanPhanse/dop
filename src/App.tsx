import React, { useState } from 'react';
import { Atom } from 'lucide-react';
import { SimulationForm } from './components/SimulationForm';
import { BandStructurePlot } from './components/BandStructurePlot';
import { BandgapDisplay } from './components/BandgapDisplay';
import type { SimulationParams } from './types/simulator';

function App() {
  const [params, setParams] = useState<SimulationParams>({
    dopant: 'Al',
    concentration: 0.05,
    latticeConstant: 3.25,
    functional: 'PBE'
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <Atom className="w-8 h-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-900">
              ZnO Band Structure Simulator
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <SimulationForm onParamsChange={setParams} />
          </div>
          <div className="lg:col-span-2">
            <BandgapDisplay params={params} />
            <div className="bg-white p-6 rounded-lg shadow-md">
              <BandStructurePlot params={params} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;