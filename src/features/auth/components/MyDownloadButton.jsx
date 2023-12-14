import React from "react";
import { BsDownload } from "react-icons/bs";
import { groupThemeOptions } from "../../../util/form.helper";

export default function MyDownloadButton({ input }) {
  const chosenTheme = groupThemeOptions.find(
    (opt) => opt.value === input.value
  );

  return (
    <div>
      <div className="paragraph-md font-semibold mt-4 text-TEXT_PRIMARY">
        Das Programm:
      </div>
      <div className="paragraph-md text-TEXT_PRIMARY">
        Groupera hat für euch ein 12- Schritte Programm entwickelt, dass ihr
        innerhalb der Gruppe nutzen könnt. In diesem Programm sind unsere Regeln
        sowie der Ablauf beschrieben. Alle Infos findet ihr im Download.
      </div>
      <div className="paragraph-md font-semibold mt-4 text-TEXT_PRIMARY">
        ModeratorIn:
      </div>
      <div className="paragraph-md text-TEXT_PRIMARY">
        Als Rolle des Moderators liest du das Programm vor und nimmst die
        Menschen dran, wenn sie was sagen wollen und achtest drauf, dass die
        Regeln eingehalten werden.
      </div>
      <div className="bg-BG_PRIMARY my-4 paragraph-lg">
        <a href={chosenTheme.program} download="Depressions_Manual.pdf">
          <div className="flex flex-row justify-between cursor-pointer border border-BORDER_PRIMARY rounded-md  p-4 items-center hover:shadow-md">
            <div>
              {chosenTheme.label === "Sonstige"
                ? "Groupera"
                : chosenTheme.label}
              _Programm
            </div>

            <BsDownload className=" text-PURPLE_PRIMARY" size={22} />
          </div>
        </a>
      </div>

      {/* <Link
        to={testManual}
        download="testManual-PDF-document"
        target="_blank"
        rel="noreferrer"
      >
        <div className="flex flex-between my-8 w-full cursor-pointer border border-BLUE_PRIMARY rounded-md text-xs p-2 pl-4 items-center">
          Groupera programm
          <BsDownload className="w-5 mx-5 text- PURPLE_PRIMARY" size={32} />
        </div>
      </Link> */}
    </div>
  );
}
