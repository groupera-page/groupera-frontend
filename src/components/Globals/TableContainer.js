import React from "react";
import NavbarSub from "../Navigation/NavbarSub";

export default function TableContainer({ subPages, children }) {
  return (
    <div className="shadow-md border rounded-lg w-full ">
      <NavbarSub subPages={subPages} />
      {children}
    </div>
  );
}
