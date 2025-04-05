import React from "react";
import { ArrowRight } from "lucide-react";
import { SkipSummary } from "./SkipSummary";
import { ActionBarProps } from "./types";

export const ActionBar: React.FC<ActionBarProps> = ({
  selectedSkip,
  onContinue,
}) => {
  if (!selectedSkip) return null;
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1C1C1C] border-t border-[#2A2A2A] flex flex-col md:flex-row md:justify-between items-center gap-4 md:gap-0 px-4 py-4 sm:px-6 lg:px-8 animate-slideUp z-10">
      <SkipSummary skip={selectedSkip} />

      <div className="flex items-center w-full md:w-auto gap-4">
        <button className="py-2 px-4 bg-[#2A2A2A] md:bg-transparent hover:bg-[#333333] cursor-pointer text-white font-medium rounded-md transition-colors w-1/2 md:w-auto">
          Back
        </button>
        <button
          onClick={onContinue}
          className="py-2 px-4 bg-[#0037C1] hover:bg-[#0040DB] text-white font-medium cursor-pointer rounded-md shadow-md transition-colors w-1/2 md:w-auto flex items-center justify-center"
        >
          Continue <ArrowRight size={16} className="ml-2" />
        </button>
      </div>
    </div>
  );
};
