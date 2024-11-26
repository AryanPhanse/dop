import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function ZnOInfo() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <div 
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="text-xl font-bold">ZnO and Dopants Information</h2>
        {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </div>

      {isExpanded && (
        <div className="mt-4 space-y-6">
          <section>
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">About ZnO</h3>
            <p className="text-gray-700">
              ZnO is a wide-bandgap semiconductor with a direct bandgap of approximately 3.37 eV at room temperature. 
              It has high exciton binding energy (60 meV) and exhibits properties like piezoelectricity, 
              photoconductivity, and catalytic activity, making it widely used in optoelectronics, gas sensors, 
              and photocatalysis.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">Dopant Effects</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dopant</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Effect on Bandgap</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applications</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Aluminum (Al)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">n-type</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Widens bandgap</td>
                    <td className="px-6 py-4 text-sm text-gray-500">TCOs, solar cells, UV photodetectors</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Gallium (Ga)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">n-type</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Similar to Al</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Transparent electronics, LEDs</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Indium (In)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">n-type</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Slight increase</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Transparent conducting films</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Copper (Cu)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">p-type</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Narrows bandgap</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Photocatalysis, p-n junctions</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Nitrogen (N)</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">p-type</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Reduces bandgap</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Visible-light photodetectors</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">Bandgap Tuning Summary</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
              <li><strong>n-type Dopants:</strong> Generally lead to bandgap widening due to the Burstein-Moss shift</li>
              <li><strong>p-type Dopants:</strong> Often cause bandgap narrowing by introducing acceptor states</li>
              <li><strong>Concentration Effects:</strong> Higher doping concentrations typically result in more pronounced bandgap changes</li>
            </ul>
          </section>
        </div>
      )}
    </div>
  );
}