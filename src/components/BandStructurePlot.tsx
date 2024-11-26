import React, { useEffect, useRef } from 'react';
import Plotly from 'plotly.js-dist';
import { generateKPoints, calculateBands, calculateBandgap } from '../utils/bandCalculations';
import { DOPANTS } from '../utils/constants';
import type { SimulationParams } from '../types/simulator';

interface Props {
  params: SimulationParams;
}

export function BandStructurePlot({ params }: Props) {
  const plotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!plotRef.current) return;

    const kPoints = generateKPoints(params.latticeConstant);
    const bandgap = calculateBandgap(DOPANTS[params.dopant].k, params.concentration);
    const { conductionBand, valenceBand } = calculateBands(kPoints, bandgap);

    const data = [
      {
        x: kPoints,
        y: conductionBand,
        name: 'Conduction Band',
        type: 'scatter',
        mode: 'lines',
        line: { color: '#2563eb' }
      },
      {
        x: kPoints,
        y: valenceBand,
        name: 'Valence Band',
        type: 'scatter',
        mode: 'lines',
        line: { color: '#dc2626' }
      }
    ];

    const layout = {
      title: 'ZnO Band Structure',
      xaxis: {
        title: 'k-vector (Å⁻¹)',
        zeroline: true,
        zerolinewidth: 2
      },
      yaxis: {
        title: 'Energy (eV)',
        zeroline: true,
        zerolinewidth: 2
      },
      showlegend: true,
      legend: {
        x: 1,
        xanchor: 'right',
        y: 1
      }
    };

    Plotly.newPlot(plotRef.current, data, layout);

    return () => {
      if (plotRef.current) {
        Plotly.purge(plotRef.current);
      }
    };
  }, [params]);

  return <div ref={plotRef} className="w-full h-[600px]" />;
}