import FunnelCard from "../components/Signup/FunnelCard";
import PageContainer from "../components/Globals/PageContainer";

export default function GroupCreatePage() {
  return (
    <div className="flex h-screen md:justify-center md:mt-10 lg:mt-32">
      <FunnelCard funnelIndex={5} showLogo={false} />
    </div>
  );
}
