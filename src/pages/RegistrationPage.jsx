import { useLocation } from "react-router-dom";
import RegistrationFunnelCard from "../components/RegistrationFunnelCard";
import backgroundImage from "../assets/hands4.jpg";

export default function RegistrationPage() {
  const location = useLocation();
  let funnelIndex;
  // Funnels 1-4
  switch (location.pathname) {
    case "/registration-user":
      funnelIndex = 1;
      break;
    case "/registration-option-join":
      funnelIndex = 2;
      break;
    case "/registration-option-create":
      funnelIndex = 3;
      break;
    case "/registration-user-group":
      funnelIndex = 4;
      break;
    default:
      console.log("No page");
  }
  return (
    <div className="md:py-20">
      <div
        className="bg-cover bg-center flex items-center justify-center"
        //  style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <RegistrationFunnelCard funnelIndex={funnelIndex} />
      </div>
    </div>
  );
}
