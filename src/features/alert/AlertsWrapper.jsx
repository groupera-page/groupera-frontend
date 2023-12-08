import React from "react";
import {useSelector} from "react-redux";

import {selectAlerts} from "./alertSlice";

import Alert from "./Alert";
import "./AlertsWrapper.css"

const AlertsWrapper = () => {
  const {items} = useSelector(selectAlerts)

  return (
    <div className="alertsWrapper">
      {
        items &&
        <div className="alertList">
          {items.map(({ id, header, desc, type, expiry }) => (
            <Alert id={id} key={id} type={type} header={header} desc={desc} expiry={expiry} />
          ))}
        </div>
      }
    </div>
  );
}

export default AlertsWrapper;
