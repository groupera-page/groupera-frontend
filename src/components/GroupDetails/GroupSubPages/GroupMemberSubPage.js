import React from "react";

export default function GroupMemberSubPage({
  members = ["marie", "Jan", "Rida"],
}) {
  return <div>{members.map((member) => console.log("Hey"))}</div>;
}
