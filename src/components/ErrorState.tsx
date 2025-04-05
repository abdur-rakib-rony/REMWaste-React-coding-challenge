import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { ErrorStateProps } from './types';

export const ErrorState: React.FC<ErrorStateProps> = ({ error, onRetry }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-[#1C1C1C] text-white p-6 rounded-lg shadow-md max-w-md w-full">
        <div className="flex items-center text-red-500 mb-4">
          <AlertTriangle size={24} />
          <h2 className="ml-2 text-xl font-bold">Error</h2>
        </div>
        <p className="text-gray-400">{error}</p>
        <button 
          className="mt-4 w-full py-2 bg-[#0037C1] cursor-pointer text-white rounded-md hover:bg-blue-700 transition-colors"
          onClick={onRetry}
        >
          Try Again
        </button>
      </div>
    </div>
  );
};