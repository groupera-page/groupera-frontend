import {useLocation} from "react-router-dom";

// import Funnel from "../FunnelCard";
import backgroundImage from "../../assets/hands4.jpg";
import FormWrapper from "./FormWrapper";
import getFunnelSteps from "../../util/getFunnelSteps"
const SignupPage = () => {
  const location = useLocation()
  const steps = getFunnelSteps(location.search.slice(1))

  return (
    <div>
      <div
        className="bg-cover bg-center h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <FormWrapper steps={steps} />
        {/*<Funnel FunnelIndex={3} />*/}
      </div>
    </div>
  );
}

export default SignupPage;
