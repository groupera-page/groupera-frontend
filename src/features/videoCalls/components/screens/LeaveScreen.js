import {useNavigate} from "react-router-dom";

export function LeaveScreen({ setIsMeetingLeft }) {
  const navigate = useNavigate()
  return (
    <div className="bg-gray-800 h-screen flex flex-col flex-1 items-center justify-center">
      <h1 className="text-white text-4xl">You left the meeting!</h1>
      <div className="mt-12 flex gap-5">
        <button
          className="`w-full border border-purple-350 text-white px-16 py-3 rounded-lg text-sm"
          onClick={() => {
            setIsMeetingLeft(false);
          }}
        >
          Zurück zum Gruppentreffen
        </button>
        <button
          className="`w-full bg-purple-350 text-white px-16 py-3 rounded-lg text-sm"
          onClick={() => navigate("/")}
        >
          Zu meiner Gruppenübersicht
        </button>
      </div>
    </div>
  );
}
