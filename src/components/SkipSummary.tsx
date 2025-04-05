import React from "react";
import { SkipSummaryProps } from "./types";

export const SkipSummary: React.FC<SkipSummaryProps> = ({ skip }) => {
  return (
    <div className="flex items-center gap-6">
      <div>
        <h3 className="font-medium"></h3>
        <p className="text-sm text-gray-400">{skip.size}</p>
      </div>
      <div>
        <span className="text-2xl font-bold text-[#0037C1]">£</span>
        <span className="text-sm text-gray-400 ml-2">{skip.hire_period_days} day hire</span>
      </div>
    </div>
  );
};
