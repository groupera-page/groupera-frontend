import React from "react";

const MySelect = ({field}) => {
  return (
    <React.Fragment>
      <p>Wähle eine {field.type === "multiSelect" ? "oder mehrere " : ""}der folgenden Optionen.</p>
      <div className="flex flex-col gap-4 my-2">
        {field.options.map((option) => (
          <label
            key={option.value}
            htmlFor={`radioOption${option.value}`}
            className="relative w-full cursor-pointer border border-primaryblue rounded-md text-xs p-2 pl-4 flex items-center gap-4"
          >
            <div>{option.label}</div>
            <input
              type={field.type === "multiSelect" ? "checkbox" : "radio"}
              id={`radioOption${option.value}`}
              name={field.name}
              value={option.value}
              checked={field.type === "multiSelect" ? field.value.includes(option.value) : field.value === option.value}
              onChange={field.onChange}
              className="mr-1 absolute end-1 md:end-16"
            />
          </label>
        ))}
      </div>
    </React.Fragment>
  )
}

export default MySelect