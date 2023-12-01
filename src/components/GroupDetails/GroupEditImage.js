import React from "react";
import Carousel from "../Carousels/Carousel";
import { useSelector } from "react-redux";

export default function GroupEditImage({ updatePreviewImage }) {
  const images = useSelector((state) => state.mockData.mockData.imageData);

  return (
    <div>
      <Carousel imageData={images} updatePreviewImage={updatePreviewImage} />
    </div>
  );
}
