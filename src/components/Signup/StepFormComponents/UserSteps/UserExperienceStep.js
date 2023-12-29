// import RadioButton from "../../../UserInputs/RadioButton";

// export default function UserExperienceStep({ experience, updateFields }) {
//   const experienceOptions = [
//     "Nein, ich hab noch nie an einer Gruppe teilgenommen.",
//     "Ein wenig, ich habe schonmal an einer Gruppe teilgenommen.",
//     "Ja, ich habe regelmäßig an Gruppen teilgenommen.",
//     "Ja, ich habe bereits Gruppen organisiert.",
//   ];

//   return (
//     <div className="">
//       <h2 className="mb-6">
//         Hast Du bereist Erfahrung mit Selbsthilfegruppen?
//       </h2>
//       <p>Wähle eine der folgenden Optionen.</p>
//       <div className="flex flex-col gap-4 my-2 ">
//         {experienceOptions.map((option, index) => (
//           <RadioButton
//             key={index}
//             id={`radioOption${index + 1}`}
//             title={option}
//             checkedVariable={experience}
//             onChange={(e) => updateFields({ experience: e.target.value })}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
