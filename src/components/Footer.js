import React, { Component } from "react";
import NavlinkItem from "./NavlinkItem";
import logo from "../assets/logo.png";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <hr className="border-t border-gray-400 my-4" />
        <div className="flex justify-between items-center px-10 lg:px-60 md:px-20 text-gray-600 w-full mb-10 ">
          <img src={logo} alt="logo" />
          <ul>
            <li className="font-bold text-xl mb-2">Rechtliches</li>
            <li>
              <NavlinkItem title="Über Uns" route="/about" />
              <NavlinkItem title="Impressum" route="/about" />
              <NavlinkItem title="Datenschutz" route="/about" />
              <NavlinkItem title="AGB" route="/about" />
              <NavlinkItem title="Wiederufsrecht" route="/about" />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
