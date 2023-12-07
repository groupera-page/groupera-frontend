import {authFields, chooseFunnelField, groupExperienceField, groupFields} from "../../../util/form.helper";
import {registerUser, verifyEmail} from "../authSlice";

export const userProfileStep = {
	header: "Erstelle jetzt Dein Nutzerprofil",
	desc: "Du kannst Deine Informationen jederzeit in den Einstellungen ändern.",
	fields: [
		authFields.alias,
		authFields.email,
		authFields.gender,
		authFields.password,
		authFields.passwordConfirmation,
	],
	goBackOption: true,
	onSubmit: (values) => registerUser({
		alias: values.alias,
		email: values.email,
		password: values.password,
		gender: values.gender,
		questions: {
			experience: values.experience,
			groupTheme: values.groupTheme,
			chooseFunnel: values.chooseFunnel
		}
	})
}

export const authStep = {
	header: "Verifiziere deine Emailadresse",
	desc: "Wir haben Dir einen 4 stelligen Verifizierungscode per E-Mail geschickt.",
	fields: [authFields.authCode],
	goBackOption: true,
	onSubmit: (values) => verifyEmail({
		authCode: values.authCode,
		email: values.email
	})
}

export const chooseFunnelStep = {
	header: "Was trifft am ehesten auf Dich zu?",
	fields: [chooseFunnelField],
	goBackOption: false,
	showProgressBar: false
}

export const interestedInGroupsWithThemeStep = {
	header: "Für welche Themen suchst du Gruppen?",
	fields: [
		groupFields.theme
	],
	goBackOption: true
}

export const groupThemeStep = {
	header: "Zu welchem Thema möchtest du eine Gruppe gründen?",
	fields: [
		groupFields.theme
	],
	goBackOption: true
}

export const groupInfoStep = {
	header: "Beschreibe Deine Gruppe",
	desc: "Du kannst alle Angaben jederzeit in den Gruppeneinstellungen ändern",
	fields: [
		groupFields.name, groupFields.description
	],
	goBackOption: true
}

export const groupSettingsStep = {
	header: "Pass die Einstellungen deiner Gruppe an.",
	desc: "Du kannst diese Einstellung jederzeit in den Gruppeneinstellungen ändern.",
	fields: [
		groupFields.selfModerated
	],
	goBackOption: true
}

export const groupDownloadStep = {
	header: "Lade Dir jetzt das we.together Gruppenprogramm runter.",
	desc: "Du findest das Programm in der Gruppe auch unter “Unterlagen”.",
	fields: [
		groupFields.downloadProgram
	],
	goBackOption: true
}

export const experienceStep = {
	header: "Hast Du bereist Erfahrung mit Selbsthilfegruppen?",
	desc: "Du kannst alle Angaben jederzeit in den Gruppeneinstellungen ändern",
	fields: [
		groupExperienceField
	],
	goBackOption: true
}