import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [goals, setGoals] = useState("");
  const [experience, setExperience] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleUsername = (e) => setUsername(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleGoals = (e) => setGoals(e.target.value);
  const handleExperience = (e) => setExperience(e.target.value);

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    const requestBody = { username, email, password, goals, experience };
    // console.log(requestBody);

    // Make an axios request to the API
    // If the POST request is a successful redirect to the login page
    // If the request resolves with an error, set the error message in the state
    axios
      .post(`http://localhost:5005/user/signup`, requestBody)
      .then((response) => {
        // console.log(response);
        navigate("/login");
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div>
      <form onSubmit={handleSignupSubmit}>
        <div>
          <label>Goals:</label>
          <input
            type="text"
            name="goals"
            value={goals}
            onChange={handleGoals}
          />
        </div>
        <div>
          <label>Experience:</label>
          <input
            type="text"
            name="experience"
            value={experience}
            onChange={handleExperience}
          />
        </div>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsername}
          />
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleEmail}
          />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
          />
          <button type="submit">Sign Up</button>
        </div>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}
