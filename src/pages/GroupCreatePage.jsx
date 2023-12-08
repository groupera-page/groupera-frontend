import FunnelCard from "../components/Signup/FunnelCard";

export default function GroupCreatePage() {
  return (
    <div className="flex w-full h-full md:justify-center md:mt-10 lg:mt-28 pb-24 bg-BG_PRIMARY md:bg-BG_GRAY">
      <FunnelCard funnelIndex={5} showLogo={false} />
    </div>
  );
}
