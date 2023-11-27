import React from "react";

export default function OverviewHeader({ title, text }) {
  return (
    <div>
      <div className="mx-2 ">
        <h4>{title}</h4>
        <div className="paragraph-md lg:paragraph-sm">{text}</div>
      </div>
    </div>
  );
}
