import React from "react";

export default function NavMobileMenu({ openMenu }) {
  return (
    <div>
      {" "}
      <div
        className={`transition-all duration-300 ${
          openMenu ? "opacity-100 left-0" : "opacity-50 -left-full"
        } absolute   bg-grayBg z-10`}
      >
        <hr className="border-t border-gray-300 my-3 lg:hidden" />
        <div className="bg-grayBg h-screen w-screen flex-col justify-between">
          <ul className="list-none ">
            <li className="">Übersicht</li>
            <li className="">Gruppen</li>
          </ul>
          <div>Ausloggen</div>
        </div>
      </div>
    </div>
  );
}
