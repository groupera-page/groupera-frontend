import {email, includeCapital, includeNumber, length, required} from "./form.helper";
import testManual from "../assets/manual.pdf";

const userProfileStep = {
  header: "Erstelle jetzt Dein Nutzerprofil",
  desc: "Du kannst Deine Informationen jederzeit in den Einstellungen ändern.",
  fields: [
    {
      type: "text",
      name: "firstName",
      value: "",
      label: "Last name",
      placeholder: "firstName",
      hint: "Bitte gib hier Deinen Namen ein, mit dem Du in der Gruppe angesprochen werden möchtest und der für andere Mitglieder:innen angezeigt werden darf.",
      validate: [required],
    },
    {
      type: "text",
      name: "lastName",
      value: "",
      label: "First name",
      placeholder: "lastName",
      hint: "Bitte gib hier Deinen Namen ein, mit dem Du in der Gruppe angesprochen werden möchtest und der für andere Mitglieder:innen angezeigt werden darf.",
      validate: [required]
    },
    {
      type: "email",
      name: "email",
      value: "",
      label: "Email",
      placeholder: "Email",
      validate: [required, email]
    },
    {
      type: "password",
      name: "password",
      value: "",
      label: "Password",
      placeholder: "Password",
      validate: [required, length, includeNumber, includeCapital]
    },
    {
      type: "password",
      name: "password_confirmation",
      value: "",
      label: "Password Confirmation",
      placeholder: "Password Confirmation",
      validate: [required, length, includeNumber, includeCapital]
    }
  ],
  goBackOption: true,
  onSubmit: (fields) => console.log("fields", fields)
}

const authStep = {
  header: "Verifiziere deine Emailadresse",
  desc: "Wir haben Dir einen 4 stelligen Verifizierungscode per E-Mail geschickt. Bitte schau auch in deinem Spam nach.",
  fields: [
    {
      type: "number",
      name: "auth_code",
      // value: "",
      label: "Auth Code",
      hint: "You can find this code in your email.",
      validate: [required]
    }
  ],
  goBackOption: true
}

const themeOptions = [
  { label: "Depression", value: "Depression" },
  { label: "Stress und Burnout", value: "Stress und Burnout" },
  { label: "Panik- & Angststörung", value: "Panik- & Angststörung" },
  { label: "Trauer & Verlust", value: "Trauer & Verlust" },
  { label: "Essstörung", value: "Essstörung" },
  { label: "Sucht", value: "Sucht" },
  { label: "Angehörige/r von Menschen mit Erkrankungen", value: "Angehörige/r von Menschen mit Erkrankungen" },
  { label: "Chronische Erkrankungen, körperliche Einschränkungen", value: "Chronische Erkrankungen, körperliche Einschränkungen" },
  { label: "Andere*", value: "Andere*" },
];

const interestedInGroupsWithThemeStep = {
  header: "Für welche Themen suchst du Gruppen?",
  fields: [
    {
      type: "multiSelect",
      name: "interestedInGroupsWithTheme",
      value: [themeOptions[0].value, themeOptions[3].value],
      options: themeOptions
    },
  ],
  goBackOption: true
}


const groupInfoStep = {
  header: "Beschreibe Deine Gruppe",
  desc: "Du kannst alle Angaben jederzeit in den Gruppeneinstellungen ändern",
  fields: [
    {
      type: "name",
      name: "name",
      value: "",
      label: "Name",
      placeholder: "Name",
      hint: "Bitte gib den Gruppen Namen ein.",
      validate: [required]
    },
    {
      type: "textarea",
      name: "description",
      value: "",
      label: "Wie würdest du deine Gruppe beschreiben?",
      placeholder: "Wie würdest du deine Gruppe beschreiben?",
    },
  ],
  goBackOption: true
}

const moderatingOptions = [
  {label: "Ja", value: "Ja"},
  {label: "Ja, aber mit Unterstützung", value: "Ja, aber mit Unterstützung"},
  {label: "Nein", value: "Nein"},
]

const groupSettingsStep = {
  header: "Pass die Einstellungen deiner Gruppe an.",
  desc: "Du kannst diese Einstellung jederzeit in den Gruppeneinstellungen ändern.",
  fields: [
    {
      type: "simpleSelect",
      name: "selfModerated",
      value: moderatingOptions[0].value,
      label: "Name",
      placeholder: "Name",
      hint: "Bitte gib den Gruppen Namen ein.",
      options: moderatingOptions
    },
  ],
  goBackOption: true
}

const groupDownloadStep = {
  header: "Lade Dir jetzt das we.together Gruppenprogramm runter.",
  desc: "Du findest das Programm in der Gruppe auch unter “Unterlagen”.",
  fields: [
    {
      type: "pdf_download",
      name: "program",
      value: testManual,
      label: "Download Program",
      placeholder: "Download Program",
    },
  ],
  goBackOption: true
}


const experienceOptions = [
  {label: "Nein, ich hab noch nie an einer Gruppe teilgenommen.", value: "Nein, ich hab noch nie an einer Gruppe teilgenommen."},
  {label: "Ein wenig, ich habe schonmal an einer Gruppe teilgenommen.", value: "Ein wenig, ich habe schonmal an einer Gruppe teilgenommen."},
  {label: "Ja, ich habe regelmäßig an Gruppen teilgenommen.", value: "Ja, ich habe regelmäßig an Gruppen teilgenommen."},
  {label: "Ja, ich habe bereits Gruppen organisiert.", value: "Ja, ich habe bereits Gruppen organisiert."},
];

const experienceStep = {
  header: "Hast Du bereist Erfahrung mit Selbsthilfegruppen?",
  desc: "Du kannst alle Angaben jederzeit in den Gruppeneinstellungen ändern",
  fields: [
    {
      type: "simpleSelect",
      value: experienceOptions[0].value,
      label: "",
      name: "experience",
      options: experienceOptions
    },
  ],
  goBackOption: true
}

const getFunnelSteps = (search) => {
  switch (search){
    case "funnel1":
      return [
        userProfileStep,
        authStep,
        {
          ...experienceStep,
          goBackOption: false
        }
      ]
    case "funnel2":
      return [
        interestedInGroupsWithThemeStep,
        experienceStep,
        userProfileStep,
        authStep,
      ]
    case "funnel3":
      return [
        experienceStep,
        interestedInGroupsWithThemeStep,
        groupInfoStep,
        // groupPlanStep,
        userProfileStep,
        authStep,
        groupDownloadStep,
        groupSettingsStep,
      ]
    default:
      return [
        interestedInGroupsWithThemeStep,
        groupInfoStep,
        // groupPlanStep,
        userProfileStep,
        authStep,
        {
          ...groupDownloadStep,
          goBackOption: false
        },
        {
          ...groupSettingsStep,
          goBackOption: false
        },
      ]
  }
}

export default getFunnelSteps;