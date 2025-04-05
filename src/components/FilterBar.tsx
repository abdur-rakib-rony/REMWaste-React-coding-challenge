import React, { useState } from "react";
import { FilterBarProps } from "./types";
import { LayoutGrid, List, Truck, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const FilterBar: React.FC<FilterBarProps> = ({
  viewMode,
  setViewMode,
  filterRoadAllowed,
  setFilterRoadAllowed,
}) => {
  const [showViewOptions, setShowViewOptions] = useState(false);

  const handleViewToggle = (view: "grid" | "list") => {
    setViewMode(view);
    setShowViewOptions(false);
  };

  return (
    <div className="mb-4 w-full">
      <div className="flex flex-col md:flex-row gap-2 md:gap-4 md:items-center md:justify-end">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-lg bg-[#1C1C1C] overflow-hidden"
          >
            <div className="md:hidden">
              <button
                onClick={() => setShowViewOptions(!showViewOptions)}
                className="w-full py-3 px-4 flex items-center justify-between cursor-pointer text-white"
              >
                <div className="flex items-center">
                  {viewMode === "grid" ? (
                    <>
                      <LayoutGrid size={16} className="mr-2" />
                      <span className="text-sm font-medium">Grid View</span>
                    </>
                  ) : (
                    <>
                      <List size={16} className="mr-2" />
                      <span className="text-sm font-medium">List View</span>
                    </>
                  )}
                </div>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    showViewOptions ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {showViewOptions && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-gray-700 overflow-hidden"
                  >
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleViewToggle("grid")}
                      className={`w-full py-3 px-4 flex items-center cursor-pointer ${
                        viewMode === "grid"
                          ? "bg-[#0037C1] text-white"
                          : "text-gray-300"
                      }`}
                    >
                      <LayoutGrid size={16} className="mr-2" />
                      <span className="text-sm font-medium">Grid View</span>
                    </motion.button>

                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleViewToggle("list")}
                      className={`w-full py-3 px-4 flex items-center cursor-pointer ${
                        viewMode === "list"
                          ? "bg-[#0037C1] text-white"
                          : "text-gray-300"
                      }`}
                    >
                      <List size={16} className="mr-2" />
                      <span className="text-sm font-medium">List View</span>
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="hidden md:flex">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setViewMode("grid")}
                className={`py-3 px-4 flex items-center justify-center cursor-pointer ${
                  viewMode === "grid"
                    ? "bg-[#0037C1] text-white"
                    : "text-gray-300"
                }`}
              >
                <LayoutGrid size={16} className="mr-2" />
                <span className="text-sm font-medium">Grid View</span>
              </motion.button>

              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => setViewMode("list")}
                className={`py-3 px-4 flex items-center justify-center cursor-pointer ${
                  viewMode === "list"
                    ? "bg-[#0037C1] text-white"
                    : "text-gray-300"
                }`}
              >
                <List size={16} className="mr-2" />
                <span className="text-sm font-medium">List View</span>
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-lg bg-[#1C1C1C] py-3 px-4 flex items-center justify-between cursor-pointer"
          onClick={() => setFilterRoadAllowed(!filterRoadAllowed)}
        >
          <div className="flex items-center">
            <Truck size={16} className="text-gray-400 mr-2" />
            <span className="text-sm font-medium text-gray-300 md:mr-3">
              Road Placement Only
            </span>
          </div>

          <button
            onClick={() => setFilterRoadAllowed(!filterRoadAllowed)}
            className="relative focus:outline-none"
            aria-pressed={filterRoadAllowed}
          >
            <div
              className="w-12 h-6 rounded-full bg-gray-700 transition-colors duration-200"
              style={{
                backgroundColor: filterRoadAllowed ? "#0037C1" : "#333333",
              }}
            >
              <motion.div
                initial={false}
                animate={{
                  x: filterRoadAllowed ? 6 : 0,
                }}
                className={`absolute top-0.5 ${
                  filterRoadAllowed ? "right-0.5" : "left-0.5"
                } w-5 h-5 bg-white rounded-full shadow-md`}
              />
            </div>
          </button>
        </motion.div>
      </div>
    </div>
  );
};
