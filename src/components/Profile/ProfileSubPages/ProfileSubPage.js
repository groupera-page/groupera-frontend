import { useState } from "react";
import TextInput from "../../UserInputs/TextInput";
import PrimaryButton from "../../Buttons/PrimaryButton";
import { useSelector } from "react-redux";

export default function ProfileSubPage() {
  const mockData = useSelector((state) => state.mockData.mockData);
  const userName = mockData.user[0].alias;
  const [inputValue, setInputValue] = useState(userName);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="flex flex-col p-4">
      <div className="flex flex-col my-4">
        <h5>Deine Information</h5>
        <div className="text-TEXT_LIGHTGRAY paragraph-sm">
          Ändere deine informationen hier
        </div>
      </div>
      <div className="flex flex-col md:w-1/4">
        <div className="paragraph-lg ">Name</div>
        <TextInput value={inputValue} onChange={handleInputChange} />
      </div>
      <div className="flex my-2 gap-2">
        {/* <PrimaryButton isInversed={true}>Abbrechen</PrimaryButton> */}
        <PrimaryButton>Speichern</PrimaryButton>
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
