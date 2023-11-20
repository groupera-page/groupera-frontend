import React from "react";

export default function OverviewHeader({ title, text }) {
  return (
    <div>
      <div className="m-2 ">
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}
