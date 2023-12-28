// import React from "react";
// import RadioButton from "../../../UserInputs/RadioButton";
// import StepHeader from "../StepHeader";
// import { useSelector } from "react-redux";

// // const themeOptions = [
// //   { title: "Depression", value: "Depression" },
// //   { title: "Stress und Burnout", value: "Stress und Burnout" },
// //   { title: "Panik- & Angststörung", value: "Panik- & Angststörung" },
// //   { title: "Trauer & Verlust", value: "Trauer & Verlust" },
// //   { title: "Essstörung", value: "Essstörung" },
// //   { title: "Sucht", value: "Sucht" },
// //   {
// //     title: "Angehörige/r von Erkrankten",
// //     value: "Angehörige/r von Erkrankten",
// //   },
// //   {
// //     title: "Chronische Erkrankungen",
// //     value: "Chronische Erkrankungen",
// //   },
// //   { title: "Sonstige", value: "Sonstige" },
// // ];

// export default function GroupThemesStep({ theme, updateGroupFields }) {
//   const topics = useSelector((state) => state.mockData.mockData.topics);

//   return (
//     <div>
//       <StepHeader title={"Zu welchem Thema möchtest du eine Gruppe gründen?"} />
//       <p className="paragraph-md text-TEXT_LIGHTGRAY ">
//         Wähle eine der folgenden Optionen.
//       </p>
//       <div className="flex flex-col gap-2.5 mt-2">
//         {topics.map((option) => (
//           <RadioButton
//             key={option}
//             id={`radioOption${option}`}
//             title={option}
//             checkedVariable={theme}
//             onChange={(e) => updateGroupFields({ theme: e.target.value })}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
