import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";

import Funnel from "../components/FunnelCard";
import backgroundImage from "../assets/hands4.jpg";
export default function RegistrationPage() {
  const location = useLocation();

  useEffect(() => {
    const currentURL = location.pathname;
    console.log(currentURL);
  }, [location]);

  return (
    <div className="">
      <div
        className="bg-cover bg-center h-screen flex items-center justify-center "
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <Funnel FunnelIndex={1} />
      </div>
    </div>
  );
}
