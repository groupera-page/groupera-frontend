import Logincard from "../components/LoginCard";
import backgroundImage from "../assets/hands4.jpg";

export default function Login() {
  return (
    <div className="h-screen">
      <div
        className="bg-cover bg-center h-screen flex items-center justify-center"
        style={
          {
            // backgroundImage: `url(${backgroundImage})`,
          }
        }
      >
        <Logincard />
      </div>
    </div>
  );
}
