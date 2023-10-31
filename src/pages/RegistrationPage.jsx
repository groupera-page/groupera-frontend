import Funnel from "../components/FunnelCard";
import backgroundImage from "../assets/hands4.jpg";
import {useLocation} from "react-router-dom";
import MultiStepForm from "../components/FormWrapper";
import getFunnelSteps from "../util/getFunnelSteps"
const SignupPage = () => {
  const location = useLocation()
  const steps = getFunnelSteps()

  return (
    <div>
      <div
        className="bg-cover bg-center h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <MultiStepForm>
          
        </MultiStepForm>
        {/*<Funnel FunnelIndex={3} />*/}
      </div>
    </div>
  );
}

export default SignupPage;
