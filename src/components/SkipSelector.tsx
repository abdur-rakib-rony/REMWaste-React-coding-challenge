import React, { useState, useEffect } from "react";
import { fetchSkipsByLocation } from "../services/skipService";
import { SkipGrid } from "./SkipGrid";
import { SkipList } from "./SkipList";
import { LoadingState } from "./LoadingState";
import { ErrorState } from "./ErrorState";
import { FilterBar } from "./FilterBar";
import { ActionBar } from "./ActionBar";
import { Skip } from "../../types/skip";
import { ViewMode } from "./types";
import { OrderStepper } from "./OrderStepper";
import { motion, AnimatePresence } from "framer-motion";

export const SkipSelector: React.FC = () => {
  const [skips, setSkips] = useState<Skip[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSkip, setSelectedSkip] = useState<Skip | null>(null);
  const [filterRoadAllowed, setFilterRoadAllowed] = useState<boolean>(false);
  const [viewMode, setViewMode] = useState<ViewMode>("grid");

  useEffect(() => {
    const loadSkips = async (): Promise<void> => {
      try {
        setLoading(true);
        const data = await fetchSkipsByLocation();
        setSkips(data);
      } catch (err) {
        const errorMessage =
          err instanceof Error
            ? err.message
            : "Failed to load skip options. Please try again later.";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    loadSkips();
  }, []);

  const handleSelectSkip = (skip: Skip): void => {
    setSelectedSkip(skip);
  };

  const handleContinue = (): void => {
    if (selectedSkip) {
      alert(
        `Selected ${selectedSkip.size} Yard Skip with ID: ${selectedSkip.id}`
      );
    }
  };

  const filteredSkips = filterRoadAllowed
    ? skips.filter((skip) => skip.allowed_on_road)
    : skips;

  if (loading) return <LoadingState />;
  if (error)
    return (
      <ErrorState error={error} onRetry={() => window.location.reload()} />
    );

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="py-6 px-4 sm:px-6 lg:px-12"
      >
        <OrderStepper currentStep={3} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="space-y-28 md:space-y-28"
      >
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <h1 className="text-2xl font-bold text-center mb-4">
              Choose Your Skip Size
            </h1>
            <p className="text-gray-400 text-center mb-8">
              Select the skip size that best suits your needs
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <FilterBar
              viewMode={viewMode}
              setViewMode={setViewMode}
              filterRoadAllowed={filterRoadAllowed}
              setFilterRoadAllowed={setFilterRoadAllowed}
            />
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={viewMode}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {viewMode === "grid" ? (
                <SkipGrid
                  skips={filteredSkips}
                  selectedSkip={selectedSkip}
                  onSelectSkip={handleSelectSkip}
                />
              ) : (
                <SkipList
                  skips={filteredSkips}
                  selectedSkip={selectedSkip}
                  onSelectSkip={handleSelectSkip}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {selectedSkip && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <ActionBar
                selectedSkip={selectedSkip}
                onContinue={handleContinue}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};
