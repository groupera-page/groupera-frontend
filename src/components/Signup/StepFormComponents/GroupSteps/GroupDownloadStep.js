import { BsDownload } from "react-icons/bs";
import StepHeader from "../StepHeader";
import { useSelector } from "react-redux";

export default function GroupDownloadStep({ data, updateGroupFields }) {
  const mockData = useSelector((state) => state.mockData.mockData);
  const groupTopic = "Depression";
  // 0 "Depression",
  // 1 "Sucht",
  // 2 "Angststörung",
  // 3 "Stress & Burnout",
  // 4 "Trauer",
  // 5 "chronische Erkrankungen",
  // 6 "Essstörung",
  // 7 "Angehörige",

  const topics = mockData.topics;
  let downloadLink;
  switch (groupTopic) {
    case topics[0]:
      downloadLink =
        "https://drive.google.com/uc?export=download&id=1Itf0fW1k5PDWePohGNLPhJtr-QLTv2KC";
      break;
    case topics[1]:
      downloadLink =
        "https://drive.google.com/uc?export=download&id=19_jk_FraBAjYc8c2J6p4hj9f_aN3jnRY";
      break;
    case topics[2]:
      downloadLink =
        "https://drive.google.com/uc?export=download&id=1kxWY4uvhNTcuRG26BtmubKwkGCE1irbl";
      break;
    case topics[3]:
      downloadLink =
        "https://drive.google.com/uc?export=download&id=1dKMW_q64TAymBgyq4_P2uu8c8WrBXr8S";
      break;
    case topics[4]:
      downloadLink =
        "https://drive.google.com/uc?export=download&id=1MxblzkBmzwc_zMKDvWmZplEQ47Ld2kUa";
      break;
    case topics[5]:
      downloadLink =
        "https://drive.google.com/uc?export=download&id=1HbArHcswi9qezNbTiyEmEAx1a8r187uy";
      break;
    case topics[6]:
      downloadLink =
        "https://drive.google.com/uc?export=download&id=1oTu9xUQSzigpAPBXurMJMi65gZNusZIw";
      break;
    case topics[7]:
      downloadLink =
        "https://drive.google.com/uc?export=download&id=1iacvuMd7zVMAdN0mucpwDEEutYnm5Ms_";
      break;
    default:
  }

  return (
    <div>
      <StepHeader
        title={"Lade Dir jetzt das Groupera Gruppenprogramm runter."}
        text={"Du findest das Programm in der Gruppe auch unter “Unterlagen”."}
      />
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
        <a href={downloadLink} download="Depressions_Manual.pdf">
          <div className="flex flex-row justify-between cursor-pointer border border-BORDER_PRIMARY rounded-md  p-4 items-center hover:shadow-md">
            <div>{groupTopic}_Manual</div>
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
