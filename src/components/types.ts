import { Skip } from '../../types/skip';

export type ViewMode = 'grid' | 'list';

export interface StepperProps {
  currentStep: number;
}

export interface SkipCardProps {
  skip: Skip;
  isSelected: boolean;
  onSelect: () => void;
}

export interface SkipGridProps {
  skips: Skip[];
  selectedSkip: Skip | null;
  onSelectSkip: (skip: Skip) => void;
}

export interface SkipListProps {
  skips: Skip[];
  selectedSkip: Skip | null;
  onSelectSkip: (skip: Skip) => void;
}

export interface FilterBarProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  filterRoadAllowed: boolean;
  setFilterRoadAllowed: (filter: boolean) => void;
}

export interface ActionBarProps {
  selectedSkip: Skip | null;
  onContinue: () => void;
}

export interface SkipSummaryProps {
  skip: Skip;
}

export interface ErrorStateProps {
  error: string;
  onRetry: () => void;
}