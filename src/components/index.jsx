import { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EmailVerify = () => {
  const [validUrl, setValidUrl] = useState(false);
  const param = useParams();

  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const url = `http://localhost:8080/user/${param.id}/verify/${param.token}`;
        const { data } = await axios.get(url);
        console.log(data);
        setValidUrl(true);
      } catch (error) {
        console.log(error);
        setValidUrl(false);
      }
    };
    verifyEmailUrl();
  }, [param]);
  return (
    <Fragment>
      {validUrl ? (
        <div>
          <img
            src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt="Fack"
          />
        </div>
      ) : (
        <h1>404 Not Found</h1>
      )}
    </Fragment>
  );
};

export default EmailVerify;
