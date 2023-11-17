import React from "react";

export default function HoverUnderline() {
  return (
    <div
      className={`absolute bottom-0 left-0 w-full border-t border-PURPLE_PRIMARY transform origin-bottom scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out`}
    ></div>
  );
}
