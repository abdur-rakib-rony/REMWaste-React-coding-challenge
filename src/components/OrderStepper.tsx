import React from "react";
import {
  MapPin,
  Trash2,
  TruckIcon,
  Shield,
  Calendar,
  CreditCard,
} from "lucide-react";
import { StepperProps } from "./types";

export const OrderStepper: React.FC<StepperProps> = ({ currentStep = 3 }) => {
  const steps = [
    {
      id: 1,
      label: "Postcode",
      icon: <MapPin size={18} />,
      isCompleted: currentStep > 1,
      isActive: currentStep === 1,
    },
    {
      id: 2,
      label: "Waste Type",
      icon: <Trash2 size={18} />,
      isCompleted: currentStep > 2,
      isActive: currentStep === 2,
    },
    {
      id: 3,
      label: "Select Skip",
      icon: <TruckIcon size={18} />,
      isCompleted: currentStep > 3,
      isActive: currentStep === 3,
    },
    {
      id: 4,
      label: "Permit Check",
      icon: <Shield size={18} />,
      isCompleted: currentStep > 4,
      isActive: currentStep === 4,
    },
    {
      id: 5,
      label: "Choose Date",
      icon: <Calendar size={18} />,
      isCompleted: currentStep > 5,
      isActive: currentStep === 5,
    },
    {
      id: 6,
      label: "Payment",
      icon: <CreditCard size={18} />,
      isCompleted: currentStep > 6,
      isActive: currentStep === 6,
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="hidden md:flex items-center justify-between relative">
        <div className="absolute top-4 left-8 right-8 h-0.5 bg-gray-700">
          <div
            className="h-full bg-blue-600 transition-all duration-300"
            style={{
              width: `${
                (Math.max(0, currentStep - 1) / (steps.length - 1)) * 100
              }%`,
            }}
          />
        </div>

        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center z-10">
            <div
              className={`relative flex items-center justify-center w-8 h-8 rounded-full ${
                step.isActive
                  ? "bg-blue-600 text-white"
                  : step.isCompleted
                  ? "bg-blue-600 text-white"
                  : "bg-gray-700 text-gray-400"
              }`}
            >
              {step.icon}
            </div>
            <span
              className={`mt-2 text-xs font-medium text-center ${
                step.isActive
                  ? "text-white"
                  : step.isCompleted
                  ? "text-blue-400"
                  : "text-gray-500"
              }`}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>

      <div className="flex md:hidden relative">
        <div className="absolute top-4 left-0 right-0 h-0.5 bg-gray-700">
          <div
            className="h-full bg-blue-600 transition-all duration-300"
            style={{
              width: `${
                (Math.max(0, currentStep - 1) / (steps.length - 1)) * 100
              }%`,
            }}
          />
        </div>

        <div className="w-full grid grid-cols-6 gap-0">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center z-10">
              <div
                className={`relative flex items-center justify-center w-8 h-8 rounded-full ${
                  step.isActive
                    ? "bg-blue-600 text-white"
                    : step.isCompleted
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-400"
                }`}
              >
                {step.icon}
              </div>
              <span
                className={`mt-1 text-[10px] font-medium text-center ${
                  step.isActive
                    ? "text-white"
                    : step.isCompleted
                    ? "text-blue-400"
                    : "text-gray-500"
                }`}
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
