import React from "react";

export default function TextDetailContainer({
  title,
  subTitle,
  text,
  miniHeading,
}) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between mt-2">
        <div className="w-3/4 break-words">
          <h1 className="line-clamp-4">{title}</h1>
        </div>
        <div className="flex justify-end whitespace-nowrap">
          <p className="text-TEXT_LIGHTGRAY flex">{miniHeading}</p>
        </div>
      </div>
      <div className="paragraph-lead my-1">{subTitle}</div>
      <div className="break-words">
        <p className="line-clamp-5 paragraph-md lg:paragraph-lg">{text}</p>
      </div>
    </div>
  );
}
