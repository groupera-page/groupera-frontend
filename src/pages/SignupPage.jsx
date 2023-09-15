// import { useState, useRef } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import emailjs from "@emailjs/browser";
import Signup from "../components/Signup";

function SignupPage() {

  return (
    <div>
  <div className="pt-44">
      <Signup />
</div>
    </div>
  )
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");
  // const [email, setEmail] = useState("");
  // const [errorMessage, setErrorMessage] = useState(undefined);

  // const navigate = useNavigate();

  // const handleUsername = (e) => setUsername(e.target.value);
  // const handleEmail = (e) => setEmail(e.target.value);
  // const handlePassword = (e) => setPassword(e.target.value);


  // const form = useRef();
  // const sendEmail = (e) => {
  //   e.preventDefault(); // prevents the page from reloading when you hit “Send”

  //   emailjs
  //     .sendForm(
  //       "service_3u1x9eb",
  //       "template_uzyu37t",
  //       form.current,
  //       "mKQL8n09a1bZOZBVV"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result);
  //       },
  //       (error) => {
  //         console.log(error);
  //       }
  //     );

  //   const requestBody = { username, email, password };

  //   axios
  //     .post(`http://localhost:5005/auth/signup`, requestBody)
  //     .then((response) => {
  //       console.log(response);
  //       navigate("/login");
  //     })
  //     .catch((error) => {
  //       const errorDescription = error.response.data.message;
  //       setErrorMessage(errorDescription);
  //     });
  // };

  // // const handleSignupSubmit = (e) => {
  // //   e.preventDefault();

  // //   const requestBody = { username, email, password };
  // //   console.log(requestBody);

  // //   // Make an axios request to the API
  // //   // If the POST request is a successful redirect to the login page
  // //   // If the request resolves with an error, set the error message in the state
  // //   axios
  // //     .post(`http://localhost:5005/auth/signup`, requestBody)
  // //     .then((response) => {
  // //       navigate("/login");
  // //     })
  // //     .catch((error) => {
  // //       const errorDescription = error.response.data.message;
  // //       setErrorMessage(errorDescription);
  // //     });
  // //     sendEmail();
  // // };
  // return (
  //   <div className="SignupPage">
  //     <div className="pt-36">
  //       <form ref={form} onSubmit={sendEmail}>
  //         <label>Username</label>
  //         <input type="text" name="user_name" onChange={handleUsername} />
  //         <label>Email</label>
  //         <input type="email" name="user_email" onChange={handleEmail} />
  //         <label>Message</label>
  //         <input type="text" name="message"/>
  //         <input type="text" name="password" onChange={handlePassword} />
  //         <input type="submit" value="Send" />
  //       </form>
  //       {/* <form onSubmit={handleSignupSubmit}>
  //       <label>Username:</label>
  //       <input
  //         type="text"
  //         name="username"
  //         value={username}
  //         onChange={handleUsername}
  //       />
  //       <label>Email:</label>
  //       <input
  //         type="text"
  //         name="email"
  //         value={email}
  //         onChange={handleEmail}
  //       />
  //       <label>Password:</label>
  //       <input
  //         type="password"
  //         name="password"
  //         value={password}
  //         onChange={handlePassword}
  //       />

  //       <button type="submit">Sign Up</button>
  //     </form> */}
  //     </div>
  //     {errorMessage && <p className="error-message">{errorMessage}</p>}

  //     <p>Already have account?</p>
  //     <Link to={"/login"}> Login</Link>
  //   </div>
  // );
}

export default SignupPage;
