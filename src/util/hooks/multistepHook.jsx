import { useState } from "react"

const useMultistepForm = (steps, startIndex=0) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(localStorage.getItem("multiformStepIndex") ? parseInt(localStorage.getItem("multiformStepIndex")) : startIndex)

  const setLocalStorageStep = (newStepIndex) => {
    localStorage.setItem("multiformStepIndex", newStepIndex)
  }

  const next = () => {
    setCurrentStepIndex(i => {
      if (i >= steps.length - 1) {
        setLocalStorageStep(i)
        return i
      } else{
        setLocalStorageStep(i + 1)
        return i + 1
      }
    })
  }

  const back = (e) => {
    e.preventDefault()
    setCurrentStepIndex(i => {
      if (i <= 0) {
        setLocalStorageStep(i)
        return i
      } else{
        setLocalStorageStep(i - 1)
        return i - 1
      }
    })
  }

  const goTo = (index) => {
    setLocalStorageStep(index)
    setCurrentStepIndex(index)
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    goTo,
    next,
    back,
  }
}

export default useMultistepForm;
