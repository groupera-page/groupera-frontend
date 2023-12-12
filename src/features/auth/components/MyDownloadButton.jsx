import React from "react";
import { BsDownload } from "react-icons/bs";

export default function MyDownloadButton({ downloadLink, groupTopic }) {
  return (
    <div className="bg-BG_PRIMARY my-4 paragraph-lg">
      <a href={downloadLink} download="">
        <div className="flex flex-row justify-between cursor-pointer border border-BORDER_PRIMARY rounded-md  p-4 items-center hover:shadow-md">
          <div>{groupTopic}_Programm</div>
          <BsDownload className=" text-PURPLE_PRIMARY" size={22} />
        </div>
      </a>
    </div>
  );
}
