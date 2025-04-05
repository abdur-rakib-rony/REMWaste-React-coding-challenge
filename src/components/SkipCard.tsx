import React from "react";
import { AlertTriangle, Calendar, Check, ArrowRight } from "lucide-react";
import { SkipCardProps } from "./types";

export const SkipCard: React.FC<SkipCardProps> = ({
  skip,
  isSelected,
  onSelect,
}) => {
  return (
    <div
      onClick={onSelect}
      className={`group bg-[#1C1C1C] text-white cursor-pointer rounded-lg shadow-md overflow-hidden border-2 h-full flex flex-col p-4 md:p-6 transition-all ${
        isSelected
          ? "border-[#0037C1]"
          : "border-[#2a2a2a] hover:border-[#0037C1]/50"
      }`}
    >
      <div className="relative">
        <div className="h-48 relative">
          <img
            src="https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=800"
            alt={`${skip.size} Yard Skip`}
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute top-4 right-4 bg-[#0037C1] text-white px-3 py-1 rounded-full font-medium">
            {skip.size} Yards
          </div>
          {!skip.allowed_on_road && (
            <div className="absolute bottom-4 left-4 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-medium flex items-center">
              <AlertTriangle size={16} className="mr-1" /> Private Property Only
            </div>
          )}
        </div>
      </div>

      <div className="py-4 flex-grow flex flex-col">
        <h3 className="text-lg md:text-xl font-bold mb-2 text-white">
          {skip.size} Yard Skip
        </h3>

        <div className="flex items-center text-sm text-gray-400 mb-4 md:mb-6">
          <Calendar size={18} className="mr-2" />
          <span>{skip.hire_period_days} day hire period</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div>
            {skip.total_price ? (
              <div className="flex items-baseline">
                <span className="text-xl md:text-2xl font-bold text-[#0037C1]">
                  £{skip.total_price}
                </span>
                <span className="text-sm text-gray-400 ml-2">per week</span>
              </div>
            ) : (
              <div className="text-gray-500">Quote required</div>
            )}
          </div>

          {skip.allows_heavy_waste && (
            <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
              Heavy Waste
            </div>
          )}
        </div>

        <div className="mt-auto">
          <button
            onClick={onSelect}
            className={`w-full py-2 px-4 rounded-md transition-colors flex items-center justify-center cursor-pointer ${
              isSelected
                ? "bg-[#0037C1] text-white"
                : "bg-[#2A2A2A] text-white group-hover:bg-[#3A3A3A]"
            }`}
          >
            {isSelected ? (
              <>
                <Check size={18} className="mr-2" /> Selected
              </>
            ) : (
              <>
                Select This Skip <ArrowRight size={16} className="ml-1" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
