export default function RegStepper({ currentStep, steps }) {
  const stepIndicator = [];

  for (let i = 0; i < steps; i++) {
    stepIndicator.push(
      <div
        key={i}
        className={` ${
          i < currentStep ? "bg-primarypurple" : "bg-gray-200"
        } rounded-3xl h-4 w-10`}
      ></div>
    );
  }

  return <div className="flex gap-1">{stepIndicator}</div>;
}
