import React, { useState } from "react";

export default function GroupFinishStep({ updateGroupFields, moderator }) {
  const [isCopied, setIsCopied] = useState(false);

  function copyToClipboard() {
    const textToCopy = "https://groupera.de"; // Replace with actual group link

    const textarea = document.createElement("textarea");
    textarea.value = textToCopy;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";

    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand("copy");

    document.body.removeChild(textarea);

    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  }

  return (
    <>
      {moderator === "Ja" ? (
        <div>
          <h6 className="mb-4">
            Super, deine Gruppe ist eröffnet. Bringe jetzt Menschen zusammen!
          </h6>
          <div className="paragraph-md my-4">
            Klicke auf Link kopieren und schicke ihnen deinen Freunden und
            Bekannten um sie in die Gruppe einzuladen.
          </div>

          <div className="">
            <div
              className="flex flex-row items-center justify-center cursor-pointer border border-BORDER_PRIMARY rounded-md text-base p-2 hover:shadow-md bg-PURPLE_PRIMARY text-BG_PRIMARY font-bold"
              onClick={copyToClipboard}
            >
              Link Kopieren
            </div>
          </div>
          <div className="flex justify-center mt-1 text-sm opacity-75 text-PURPLE_PRIMARY">
            <div
              className={`flex transition-opacity ${
                isCopied ? "opacity-100" : "opacity-0"
              }`}
            >
              Link erfolgreich kopiert!
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h6 className="mb-4">
            Super, wir haben Deine Anfrage für eine neue Gruppe erhalten!
          </h6>

          <div className="paragraph-md my-4">
            Wir werden versuchen eine Moderation für die Gruppe zu organisieren.
            Die nächsten Schritte werden wir dir per Email zusenden. Bis dahin
            ist die Gruppe noch offline bis wir eine Moderation gefunden haben.
          </div>

          <div className="paragraph-md my-4">
            Du hast Fragen vorab? Schicke eine Email an{" "}
            <a href="mailto:help@groupera.de" className="text-PURPLE_PRIMARY">
              help@groupera.de
            </a>
          </div>
        </div>
      )}
    </>
  );
}
