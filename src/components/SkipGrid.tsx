import React from 'react';
import { motion } from 'framer-motion';
import { SkipCard } from './SkipCard';
import { SkipGridProps } from './types';

export const SkipGrid: React.FC<SkipGridProps> = ({ skips, selectedSkip, onSelectSkip }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skips.map((skip) => (
        <motion.div
          key={skip.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <SkipCard 
            skip={skip}
            isSelected={selectedSkip?.id === skip.id}
            onSelect={() => onSelectSkip(skip)}
          />
        </motion.div>
      ))}
    </div>
  );
};