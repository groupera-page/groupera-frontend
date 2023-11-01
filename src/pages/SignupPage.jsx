import Funnel from "../components/FunnelCard";
import backgroundImage from "../assets/hands4.jpg";
export default function SignupPage() {
  return (
    <div className="">
      <div
        className="bg-cover bg-center h-screen flex items-center justify-center "
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <Funnel FunnelIndex={3} />
      </div>
    </div>
  );
}
