// import React from "react";

// export default function RadioButton({
//   id,
//   title,
//   checkedVariable,
//   onChange,
//   name,
// }) {
//   return (
//     <label
//       htmlFor={id}
//       className={`relative cursor-pointer border whitespace-nowrap ${
//         checkedVariable === title
//           ? "border-PURPLE_PRIMARY"
//           : "border-BORDER_PRIMARY "
//       }   rounded-md text-base py-3 px-4 flex items-center gap-4 hover:shadow-md`}
//     >
//       <div className="mr-12">{title}</div>
//       <input
//         className="mx-1 absolute end-1 md:end-5 h-5 w-5 appearance-none rounded-full border before:pointer-events-none before:rounded-full checked:border-PURPLE_PRIMARY hover:cursor-pointer hover:before:opacity-[0.07] checked:border-4 focus:outline-none focus:ring-0 border-BORDER_PRIMARY "
//         type="radio"
//         id={id}
//         name={name}
//         value={title}
//         checked={checkedVariable === title}
//         onChange={onChange}
//       />
//     </label>
//   );
// }
