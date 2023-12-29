// UnderConstructionOverlay.js

import React from "react";
import logoSvg from "../assets/imgLogos/logoNoBg.svg";

export default function EMGSlate() {
  return (
    <div className="h-screen">
      <div className="bg-center h-screen flex flex-col items-center justify-center px-2 md:px-20">
        <img src={logoSvg} alt="logo" className="w-60 mb-12" />
        {/* <h2>Under Construction</h2> */}
        <p className="paragraph-md md:paragraph-lg">
          Groupera ist aufgrund von Wartungsarbeiten aktuell nicht verfügbar.
          Bitte versuchen Sie es später erneut.
        </p>
      </div>
    </div>
  );
}
