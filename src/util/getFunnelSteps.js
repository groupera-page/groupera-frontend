import {
  authFields,
  groupFields,
  questionnaireFields,
} from "./form.helper";
import { registerUser } from "../features/auth/authSlice";

const userProfileStep = {
  header: "Erstelle jetzt Dein Nutzerprofil",
  desc: "Du kannst Deine Informationen jederzeit in den Einstellungen ändern.",
  fields: [
    authFields.firstName,
    authFields.lastName,
    authFields.email,
    authFields.gender,
    authFields.password,
    authFields.passwordConfirmation,
  ],
  goBackOption: true,
  onSubmit: registerUser
}

const authStep = {
  header: "Verifiziere deine Emailadresse",
  desc: "Wir haben Dir einen 4 stelligen Verifizierungscode per E-Mail geschickt. Bitte schau auch in deinem Spam nach.",
  fields: [authFields.authCode],
  goBackOption: true
}

const interestedInGroupsWithThemeStep = {
  header: "Für welche Themen suchst du Gruppen?",
  fields: [
    groupFields.theme
  ],
  goBackOption: true
}

const groupInfoStep = {
  header: "Beschreibe Deine Gruppe",
  desc: "Du kannst alle Angaben jederzeit in den Gruppeneinstellungen ändern",
  fields: [
    groupFields.name, groupFields.description
  ],
  goBackOption: true
}

const groupSettingsStep = {
  header: "Pass die Einstellungen deiner Gruppe an.",
  desc: "Du kannst diese Einstellung jederzeit in den Gruppeneinstellungen ändern.",
  fields: [
    groupFields.moderationType
  ],
  goBackOption: true
}

const groupDownloadStep = {
  header: "Lade Dir jetzt das we.together Gruppenprogramm runter.",
  desc: "Du findest das Programm in der Gruppe auch unter “Unterlagen”.",
  fields: [
    groupFields.downloadProgram
  ],
  goBackOption: true
}

const experienceStep = {
  header: "Hast Du bereist Erfahrung mit Selbsthilfegruppen?",
  desc: "Du kannst alle Angaben jederzeit in den Gruppeneinstellungen ändern",
  fields: [
    questionnaireFields.groupExperience
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