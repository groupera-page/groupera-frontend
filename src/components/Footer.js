import React, { Component } from "react";
import NavlinkItem from "./NavlinkItem";
import logo from "../assets/logo.png";

export default class Footer extends Component {
  render() {
    return (
      <div className="flex justify-between items-center p-10 text-gray-600 w-full">
        <img src={logo} alt="logo" />
        <ul>
          <li className="font-bold">Rechtliches</li>
          <li>
            <NavlinkItem title="Über Uns" route="/about" />
            <NavlinkItem title="Über Uns" route="/about" />
            <NavlinkItem title="Über Uns" route="/about" />
            <NavlinkItem title="Über Uns" route="/about" />
            <NavlinkItem title="Über Uns" route="/about" />
          </li>
        </ul>
      </div>
    );
  }
}
