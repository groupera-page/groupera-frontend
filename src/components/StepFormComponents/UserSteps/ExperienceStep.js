export default function ExperienceForm({ experience, updateFields }) {
  const experienceOptions = [
    "Nein, ich hab noch nie an einer Gruppe teilgenommen.",
    "Ein wenig, ich habe schonmal an einer Gruppe teilgenommen.",
    "Ja, ich habe regelmäßig an Gruppen teilgenommen.",
    "Ja, ich habe bereits Gruppen organisiert.",
  ];

  return (
    <div className="">
      <h2 className="mb-6">
        Hast Du bereist Erfahrung mit Selbsthilfegruppen?
      </h2>
      <p>Wähle eine der folgenden Optionen.</p>
      <div className="flex flex-col gap-4 my-2">
        {experienceOptions.map((option, index) => (
          <label
            key={index}
            htmlFor={`radioOption${index + 1}`}
            className="relative w-full cursor-pointer border border-primaryblue rounded-md text-xs p-2 pl-4 flex items-center gap-4"
          >
            <div>{option}</div>
            <input
              type="radio"
              id={`radioOption${index + 1}`}
              name="options"
              value={option}
              checked={experience === option}
              onChange={(e) => updateFields({ experience: e.target.value })}
              className="mr-1 absolute end-1 md:end-0 lg:end-16"
            />
          </label>
        ))}
      </div>
    </div>
  );
}
