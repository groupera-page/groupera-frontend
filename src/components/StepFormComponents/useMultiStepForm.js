import { useState } from "react";

export default function useMultiStepForm(steps) {
  const startIndex = JSON.parse(localStorage.getItem("stepIndex")) || 0;
  const [currentStepIndex, setCurrentStepIndex] = useState(startIndex);

  function next(numberOfSteps) {
    setCurrentStepIndex((i) => {
      if (i >= steps.length - 1) {
        return i;
      }
      return i + numberOfSteps;
    });
  }

  function back(numberOfSteps) {
    setCurrentStepIndex((i) => {
      if (i <= 0) {
        return i;
      }
      return i - numberOfSteps;
    });
  }

  function goTo(index) {
    setCurrentStepIndex(index);
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    isLastStep: currentStepIndex === steps.length - 1,
    goTo,
    next,
    back,
    steps,
  };
}
