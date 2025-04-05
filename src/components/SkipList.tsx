import React from "react";
import { SkipListProps } from "./types";
import { Check } from "lucide-react";

export const SkipList: React.FC<SkipListProps> = ({
  skips,
  selectedSkip,
  onSelectSkip,
}) => {
  return (
    <div className="bg-[#1C1C1C] rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-50/20">
          <thead>
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
              >
                Size
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
              >
                Hire Period
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
              >
                Price
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
              >
                Features
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-[#1C1C1C] divide-y divide-gray-50/20">
            {skips.map((skip) => (
              <tr key={skip.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="text-sm font-medium text-white">
                      {skip.size} Yard Skip
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-white">
                    {skip.hire_period_days} days
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {skip.total_price ? (
                    <div className="text-sm font-medium text-white">
                      £{skip.total_price}
                    </div>
                  ) : (
                    <div className="text-sm text-white">Quote required</div>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex space-x-2">
                    {skip.allowed_on_road ? (
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Road OK
                      </span>
                    ) : (
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-amber-100 text-amber-800">
                        Private Only
                      </span>
                    )}
                    {skip.allows_heavy_waste && (
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        Heavy Waste
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => onSelectSkip(skip)}
                    className={`py-1 px-4 rounded-md transition-colors flex items-center justify-center cursor-pointer ${
                      selectedSkip?.id === skip.id
                        ? "bg-[#0037C1] text-white"
                        : "bg-[#2A2A2A] text-white hover:bg-[#3A3A3A]"
                    }`}
                  >
                    {selectedSkip?.id === skip.id ? (
                      <>
                        <Check size={18} className="mr-2" /> Selected
                      </>
                    ) : (
                      "Select"
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
