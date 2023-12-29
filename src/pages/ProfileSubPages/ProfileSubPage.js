import PrimaryButton from "../../components/Buttons/PrimaryButton";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth } from "./../../features/auth/authSlice";
import ProfileEditForm from "./../../features/profile/components/ProfileEditForm";
import { updateProfile } from "./../../features/profile/profileSlice";

export default function ProfileSubPage() {
  const { user } = useSelector(selectAuth);
  const dispatch = useDispatch();

  const handleUpdate = async (values) => {
    try {
      const response = await dispatch(
        updateProfile({
          alias: values.alias,
        })
      );
      if (!response) throw Error("something went wrong");
    } catch (e) {
      // handle the response
      // if an error than don't go to next step but show the error, otherwise proceed to next step.
      console.log("Error", e);
    }
  };

  return (
    <div className="flex flex-col p-4 ">
      <div className="flex flex-col my-4">
        <h5>Deine Information</h5>
        <div className="text-TEXT_LIGHTGRAY paragraph-sm">
          Ändere deine informationen hier
        </div>
      </div>
      <div className={"max-w-lg"}>
        <ProfileEditForm onSubmit={handleUpdate} user={user} />
      </div>
      {/* <hr className="border-l border-BORDER_PRIMARY my-4" />
      <div className="flex flex-col ">
        <div className="paragraph-lg">Passwort</div>
        <div className="text-TEXT_LIGHTGRAY paragraph-sm">
          Hier kannst du dein Password ändern
        </div>
      </div>
      <div className="flex my-2 gap-2">
        <PrimaryButton isInversed={true}>Passwort ändern</PrimaryButton>
      </div> */}
      <hr className="border-l border-BORDER_PRIMARY my-4" />
      <div className="flex flex-col">
        <div className="paragraph-lg ">Achtung!</div>

        <div className="text-TEXT_LIGHTGRAY paragraph-sm">
          Dieser Prozess kann nicht rückgängig gemacht werden.
        </div>
      </div>
      <div className="flex my-2 gap-2">
        <PrimaryButton isInversed={true}>
          <div className="text-red-600">Meinen Account löschen</div>
        </PrimaryButton>
      </div>
    </div>
  );
}
