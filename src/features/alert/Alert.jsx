import React, {useEffect, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {BsCheck2Circle, BsExclamationTriangle, BsInfoCircle, BsShieldExclamation, BsXCircle} from "react-icons/bs";

import {removeAlert} from "./alertSlice";

import "./Alert.css"

const AlertTypeIcon = ({type, classNames}) => {
  switch(type) {
    case "success":
      return <BsCheck2Circle className={classNames}/>
    case "error":
      return <BsShieldExclamation className={classNames}/>
    case "warning":
      return <BsExclamationTriangle className={classNames}/>
    default:
      return <BsInfoCircle className={classNames}/>
  }
}

const Alert = ({id, type, header, desc, expiry=8000}) => {
  const dispatch = useDispatch()
  const timeout = useRef();
  const [end, setEnd] = useState(null);
  const [milSecsLeft, setMilSecsLeft] = useState(expiry);

  const handleCloseAlert = () => {
    dispatch(removeAlert(id))

    clearTimeout(timeout.current)
  }

  useEffect(() => {
    timeout.current = setTimeout(() => {
      handleCloseAlert()
    }, expiry)

    setEnd(new Date().getTime() + expiry)

    return () => clearTimeout(timeout.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const stopTimeout = () => {
    setMilSecsLeft(Math.abs(end - new Date().getTime())/1000)
    clearTimeout(timeout.current)
  }

  const startTimeout = () => {
    timeout.current = setTimeout(() => {
      handleCloseAlert()
    }, milSecsLeft*1000)
    setEnd(new Date().getTime() + milSecsLeft*1000)
    setMilSecsLeft(null)
  }

  return(
    <div className={`alert ${type}`} onMouseEnter={stopTimeout} onMouseLeave={startTimeout}>
      <div className="alertTypeBanner"/>
      <div className="alertBody">
        <AlertTypeIcon type={type} classNames="alertIcon"/>
        <div className="alertContent">
          {
            header && <span className="header">{header}</span>
          }
          {
            desc && <span className="desc">{desc}</span>
          }
        </div>
        <BsXCircle
          className="remove-btn close"
          onClick={() => handleCloseAlert(id)}
        />
      </div>
    </div>
  )
}

export default Alert;
