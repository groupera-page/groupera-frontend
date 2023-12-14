import React from "react";
import { BsDownload } from "react-icons/bs";
import {groupThemeOptions} from "../../../util/form.helper";

const GroupDocumentSubPage = ({ group }) => {
  const chosenTheme = groupThemeOptions.find(
    (opt) => opt.value === group.topic
  );

  return (
    <div>
      <div className="flex bg-BG_GRAY border-b border-TEXT_GRAY paragraph-lg mb-20">
        <a href={chosenTheme.program} download="Depressions_Manual.pdf">
          <div className="flex items-center my-4 font-bold">
            {group.topic}__Programm
            <BsDownload className="w-5 mx-5 text-PURPLE_PRIMARY" size={32} />
          </div>
        </a>
      </div>
    </div>
  );
}

export default GroupDocumentSubPage;
