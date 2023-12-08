import React from "react";

export default function OverviewHeader({ title, text }) {
  return (
    <div>
      <h4>{title}</h4>
      <div className="paragraph-sm lg:paragraph-sm text-TEXT_GRAY">{text}</div>
    </div>
  );
}
