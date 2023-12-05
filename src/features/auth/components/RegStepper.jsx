const RegStepper = ({ currentStepIdx, totalStepsCounts=3 }) => {
  return (
    <div className="flex gap-1">
      {
        [...Array(totalStepsCounts)].map((step, idx) => (
          <div
            key={idx}
            className={`${idx <= currentStepIdx ? "bg-PURPLE_SECONDARY" : "bg-gray-200"} rounded-3xl h-4 w-10`}
          />
        ))
      }
    </div>
  )
}
export default RegStepper;
