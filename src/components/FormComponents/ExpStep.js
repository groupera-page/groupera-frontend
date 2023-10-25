export default function ExperienceForm({ experience, updateFields }) {
  return (
    <div className="">
      <h2 className="mb-6">
        Hast Du bereist Erfahrung mit Selbsthilfegruppen?
      </h2>
      <p>Wähle eine der folgenden Optionen.</p>
      <div className="flex flex-col gap-4 my-2 ">
        <label
          htmlFor="radioOption1"
          className="relative w-full cursor-pointer border border-primaryblue rounded-md text-xs p-2 pl-4 flex items-center gap-4"
        >
          <div>Nein, ich hab noch nie an einer Gruppe teilgenommen.</div>
          <input
            type="radio"
            id="radioOption1"
            name="options"
            value="Nein, ich hab noch nie an einer Gruppe teilgenommen."
            checked={
              experience ===
              "Nein, ich hab noch nie an einer Gruppe teilgenommen."
            }
            onChange={(e) => updateFields({ experience: e.target.value })}
            className="mr-1 absolute end-1 md:end-16"
          />
        </label>
        <label
          htmlFor="radioOption2"
          className="relative w-full cursor-pointer border border-primaryblue rounded-md text-xs p-2 pl-4 flex items-center gap-4"
        >
          <div> Ein wenig, ich habe schonmal an einer Gruppe teilgenommen.</div>
          <input
            type="radio"
            id="radioOption2"
            name="options"
            value="Ein wenig, ich habe schonmal an einer Gruppe teilgenommen."
            checked={
              experience ===
              "Ein wenig, ich habe schonmal an einer Gruppe teilgenommen."
            }
            onChange={(e) => updateFields({ experience: e.target.value })}
            className="mr-1 absolute end-1 md:end-16"
          />
        </label>
        <label
          htmlFor="radioOption3"
          className="relative w-full cursor-pointer border border-primaryblue rounded-md text-xs p-2 pl-4 flex items-center gap-4"
        >
          <div> Ja, ich habe regelmäßig an Gruppen teilgenommen.</div>
          <input
            type="radio"
            id="radioOption3"
            name="options"
            value="Ja, ich habe regelmäßig an Gruppen teilgenommen."
            checked={
              experience === "Ja, ich habe regelmäßig an Gruppen teilgenommen."
            }
            onChange={(e) => updateFields({ experience: e.target.value })}
            className="mr-1 absolute end-1 md:end-16"
          />
        </label>
        <label
          htmlFor="radioOption4"
          className="relative w-full cursor-pointer border border-primaryblue rounded-md text-xs p-2 pl-4 flex items-center gap-4"
        >
          <div> Ja, ich habe bereits Gruppen organisiert.</div>
          <input
            type="radio"
            id="radioOption4"
            name="options"
            value="Ja, ich habe bereits Gruppen organisiert."
            checked={experience === "Ja, ich habe bereits Gruppen organisiert."}
            onChange={(e) => updateFields({ experience: e.target.value })}
            className="mr-1 absolute end-1 md:end-16"
          />
        </label>
      </div>
    </div>
  );
}
