const RegStepper = ({ currentStep, steps }) => (
  <div className="flex gap-1">
    {steps.map((step, idx) => <div
        key={idx}
        className={`${
          idx < currentStep ? "bg-primarypurple" : "bg-gray-200"
        } rounded-3xl h-4 w-10`}
      ></div>
    )}
  </div>
);

export default RegStepper;
