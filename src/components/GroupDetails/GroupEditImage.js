import React from "react";
import Carousel from "../Carousels/Carousel";

export default function GroupEditImage() {
  const imageData = [
    "Grouptitel%20pictures%20low_res/pexels-johannes-plenio-1690355_bj811s_e6dajb.jpg",
    "Grouptitel%20pictures%20low_res/pexels-taylor-hunt-2902440_xvgnuq_nueptp.jpg",
    "Grouptitel%20pictures%20low_res/pexels-pixabay-416117_hz1ccg_f4bssx.jpg",
    "Grouptitel%20pictures%20low_res/pexels-eberhard-grossgasteiger-6_abiqd5_r1jcey.jpg",
    "Grouptitel%20pictures%20low_res/pexels-akil-mazumder-1072824_1_hqufud_pjiaof.jpg",
    "Grouptitel%20pictures%20low_res/pexels-javier-gonzalez-108303_iwxfil_t8mk04.jpg",
    "Grouptitel%20pictures%20low_res/pexels-pixabay-273886_dygqro_wt5ega.jpg",
    "Grouptitel%20pictures%20low_res/pexels-nandhu-kumar-1661296_ttr2gf_ijeg4r.jpg",
  ];
  return (
    <div>
      <Carousel imageData={imageData} />
    </div>
  );
}
