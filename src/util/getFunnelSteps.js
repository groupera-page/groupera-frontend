import {
  authFields,
  chooseFunnelField,
  groupFields,
  groupExperienceField,
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
  desc: "Wir haben Dir einen 4 stelligen Verifizierungscode per E-Mail geschickt.",
  fields: [authFields.authCode],
  goBackOption: true
}

const chooseFunnelStep = {
  header: "Was trifft am ehesten auf Dich zu?",
  fields: [chooseFunnelField],
  goBackOption: false,
  showProgressBar: false
}

const interestedInGroupsWithThemeStep = {
  header: "Für welche Themen suchst du Gruppen?",
  fields: [
    groupFields.theme
  ],
  goBackOption: true
}

const groupThemeStep = {
  header: "Zu welchem Thema möchtest du eine Gruppe gründen?",
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
    groupExperienceField
  ],
  goBackOption: true
}

const getFunnelSteps = (searchParams) => {
  const funnelNumber = searchParams.get("funnel")
  const funnelType = searchParams.get("type")

  switch (funnelNumber){
    case "1": {
      switch (funnelType) {
        case "create":
          return [
            {
              ...experienceStep,
              goBackOption: false
            },
            groupThemeStep,
            groupInfoStep,
            // groupMeetingStep,
            userProfileStep,
            authStep,
            {
              ...groupSettingsStep,
              goBackOption: false
            },
            groupDownloadStep
          ]
        default:
          return [
            interestedInGroupsWithThemeStep,
            experienceStep,
            userProfileStep,
            authStep
          ]
      }
    }
    case "2":
      return [
        userProfileStep,
        authStep,
        {
          ...experienceStep,
          goBackOption: false
        }
      ]
    case "3":
      return [
        groupThemeStep,
        groupInfoStep,
        // groupMeetingStep,
        userProfileStep,
        authStep,
        {
          ...groupSettingsStep,
          goBackOption: false
        },
        groupDownloadStep
      ]
    default:
      return [
        chooseFunnelStep,
        interestedInGroupsWithThemeStep,
        experienceStep,
        userProfileStep,
        authStep
      ]
  }
}

export default getFunnelSteps;