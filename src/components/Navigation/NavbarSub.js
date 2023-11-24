import React from "react";
import { NavLink, useLocation, useParams } from "react-router-dom";

export default function NavbarSub({ subPages }) {
  const { pathname } = useLocation();
  const { groupId } = useParams();

  return (
    <div className="">
      <ul className="flex">
        {subPages.map((page, index) => (
          <li className="flex relative hover:shadow-md rounded-md" key={index}>
            <NavLink to={page.toLocaleLowerCase()}>
              {({ isActive }) => (
                <div className="flex flex-row items-center">
                  {/* GROUP ID IS SET TO 123 BUT GET THE REAL SLUG LATER FROM REDUX */}
                  <div
                    className={`p-2 rounded-t-md font-light
                    
                      ${
                        (pathname === `/groups/123` && index == 0) || isActive
                          ? "bg-PURPLE_PRIMARY text-BG_PRIMARY"
                          : ""
                      }
                    `}
                  >
                    <div>{page}</div>
                  </div>
                </div>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ${isActive ? "bg-PURPLE_PRIMARY text-BG_PRIMARY" : ""}`}

// import React from "react";
// import { NavLink } from "react-router-dom";

// export default function NavbarSub({ subPages }) {
//   console.log();
//   return (
//     <div className="">
//       <ul className="flex">
//         {subPages.map((page) => (
//           <li className="flex relative hover:shadow-md rounded-md " key={page}>
//             <NavLink to={page.toLocaleLowerCase()}>
//               {({ isActive }) => (
//                 <div className="flex flex-row items-center ">
//                   <div
//                     className={`p-2 rounded-t-md font-light
//                     ${isActive ? ||   pathname === `/groups/123/` && index == 0 "bg-PURPLE_PRIMARY text-BG_PRIMARY" : ""}`
//                   }
//                   >
//                     <div className="">{page}</div>
//                   </div>
//                 </div>
//               )}
//             </NavLink>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
