// import { useLocation } from "react-router-dom";
// import FunnelCard from "../components/Signup/FunnelCard";

// export default function SignupPage() {
//   const location = useLocation();
//   let funnelIndex;
//   // Funnels 1-4
//   switch (location.pathname) {
//     case "/signup-user":
//       funnelIndex = 1;
//       break;
//     case "/signup-option-join":
//       funnelIndex = 2;
//       break;
//     case "/signup-option-create":
//       funnelIndex = 3;
//       break;
//     case "/signup-user-group":
//       funnelIndex = 4;
//       break;
//     default:
//       console.log("No page");
//   }
//   return (
//     <div className="md:py-20">
//       <div className="bg-cover bg-center flex items-center justify-center">
//         <FunnelCard funnelIndex={funnelIndex} />
//       </div>
//     </div>
//   );
// }
