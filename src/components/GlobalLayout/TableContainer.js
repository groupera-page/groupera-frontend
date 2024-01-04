import React from "react";
import NavbarSub from "../Navigation/NavbarSub";

export default function TableContainer({ subPages, children, hasBorder }) {
  return (
    <div className={`${hasBorder ? "shadow-md border rounded-lg w-full" : ""}`}>
      <NavbarSub subPages={subPages} />
      {children}
    </div>
  );
}
