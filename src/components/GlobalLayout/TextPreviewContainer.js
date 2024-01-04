import React from "react";
export default function TextPreviewContainer({
  clamp,
  title,
  subTitle,
  text,
  miniHeading,
}) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between mt-2">
        <div className="w-3/4 break-words">
          <h4 className="line-clamp-2">{title}</h4>
        </div>
        <div className="flex justify-end whitespace-nowrap">
          <p className="text-TEXT_LIGHTGRAY flex">{miniHeading}</p>
        </div>
      </div>
      <div className="lg:text-PURPLE_PRIMARY text-TEXT_LIGHTGRAY paragraph-md my-1">
        {subTitle}
      </div>
      <div className="break-words">
        <p className={` ${clamp ? "line-clamp-5" : ""} paragraph-md`}>{text}</p>
      </div>
    </div>
  );
}
