import React from "react";

export default function OverviewHeader({ title, text }) {
  return (
    <div>
      {" "}
      <div className="m-2 ">
        <h5>{title}</h5>
        <p>{text}</p>
      </div>
    </div>
  );
}
