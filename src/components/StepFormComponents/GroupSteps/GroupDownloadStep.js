import testManual from "../../../assets/manual.pdf";
import { Link } from "react-router-dom";
import { BsDownload } from "react-icons/bs";

export default function GroupDownloadStep({ data, updateGroupFields }) {
  return (
    <div>
      <h2 className="my-2">
        Lade Dir jetzt das we.together Gruppenprogramm runter.
      </h2>
      <p>Du findest das Programm in der Gruppe auch unter “Unterlagen”.</p>
      <Link
        to={testManual}
        download="testManual-PDF-document"
        target="_blank"
        rel="noreferrer"
      >
        <div className="flex flex-between my-8 w-full cursor-pointer border border-primaryblue rounded-md text-xs p-2 pl-4 items-center">
          Groupera programm
          <BsDownload className="w-5 mx-5 text-primarypurple" size={32} />
        </div>
      </Link>
    </div>
  );
}
