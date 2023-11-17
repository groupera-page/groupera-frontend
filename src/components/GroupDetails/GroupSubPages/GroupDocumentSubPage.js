import React from "react";
import { BsDownload } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function GroupDocumentSubPage({ gruppe }) {
  return (
    <div>
      <div className="flex">
        <Link
          // to={testmanua}
          download="testManual-PDF-document"
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex items-center my-4">
            Depressions_Manual{" "}
            <BsDownload className="w-5 mx-5 text-PURPLE_PRIMARY" size={32} />
          </div>
        </Link>
      </div>
      <hr className=" border w-full" />
    </div>
  );
}
