// import testManual from "../assets/manual.pdf";

// noinspection RegExpRedundantEscape
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line

export const isEmail = (value) => {
  // if(!value) return false
  return value && !!value.match(emailRegex);
};

export const required = (value) =>
  value ? undefined : "Das Feld darf nicht leer sein";
export const number = (value) =>
  value && isNaN(Number(value)) ? "Es muss eine Nummer sein" : undefined;
export const email = (value) =>
  // value && !isEmail(value) ? "Invalid email address" : undefined;
  value && !isEmail(value)
    ? "Bitte geben Sie eine gültige E-Mail Adresse ein"
    : undefined;

export const minLength = (value, length) =>
  value.length >= length
    ? undefined
    : `Muss mindestens ${length} Zeichen lang sein`;

export const maxLength = (value, length) =>
  value.length <= length
    ? undefined
    : `Darf maximum ${length} Zeichen lang sein`;

export const minArrayLength = (value, minLength) =>
  !value || value.length < minLength
    ? `Wähle mindestens ${minLength}`
    : undefined;

const containNumberRegex = /\d+/;
const containCapsLetterRegex = /[A-Z]/;
export const includeNumber = (value) =>
  containNumberRegex.test(value) ? undefined : " Es muss eine Zahl beinhalten";
export const includeCapital = (value) =>
  containCapsLetterRegex.test(value)
    ? undefined
    : "Ihr Passwort sollte ein Großbuchstaben";

export const passwordConfirmation = (value, allValues) =>
  value !== allValues.password
    ? "Die Passwörter stammen nicht überein"
    : undefined;

export const authFields = {
  firstName: {
    type: "text",
    name: "firstName",
    label: "Last name",
    placeholder: "firstName",
    hint: "Bitte gib hier Deinen Namen ein, mit dem Du in der Gruppe angesprochen werden möchtest und der für andere Mitglieder:innen angezeigt werden darf.",
    validate: [required],
  },
  lastName: {
    type: "text",
    name: "lastName",
    label: "First name",
    placeholder: "lastName",
    hint: "Bitte gib hier Deinen Namen ein, mit dem Du in der Gruppe angesprochen werden möchtest und der für andere Mitglieder:innen angezeigt werden darf.",
    validate: [required],
  },
  alias: {
    type: "text",
    name: "alias",
    label: "Alias",
    placeholder: "Dein Alias",
    hint: "Bitte gib hier Deinen Namen ein, mit dem Du in der Gruppe angesprochen werden möchtest und der für andere Mitglieder:innen angezeigt werden darf.",
    validate: [required],
  },
  email: {
    type: "email",
    name: "email",
    label: "Email",
    placeholder: "Email",
    validate: [required, email],
  },
  password: {
    type: "password",
    name: "password",
    label: "Password",
    placeholder: "Password",
    validate: [
      required,
      (value) => minLength(value, 8),
      includeNumber,
      includeCapital,
    ],
  },
  passwordConfirmation: {
    type: "password",
    name: "passwordConfirmation",
    label: "Password Confirmation",
    placeholder: "Password Confirmation",
    validate: [
      required,
      (value) => minLength(value, 8),
      includeNumber,
      includeCapital,
      passwordConfirmation,
    ],
  },
  authCode: {
    type: "authCode",
    name: "authCode",
    label: "Auth Code",
    hint: "Du findest den Code in deinen Emails",
    validate: [required, (value) => minLength(value, 4)],
  },
  gender: {
    type: "inlineSelect",
    name: "gender",
    label: "Gender",
    validate: [required],
    options: [
      {
        value: "male",
        label: "Männlich",
      },
      {
        value: "female",
        label: "Weiblich",
      },
      {
        value: "divers",
        label: "Divers",
      },
    ],
  },
};

const groupThemeOptions = [
  { label: "Depression", value: "Depression" },
  { label: "Stress und Burnout", value: "Stress und Burnout" },
  { label: "Panik- & Angststörung", value: "Panik- & Angststörung" },
  { label: "Trauer & Verlust", value: "Trauer & Verlust" },
  { label: "Essstörung", value: "Essstörung" },
  { label: "Sucht", value: "Sucht" },
  {
    label: "Angehörige/r von Menschen mit Erkrankungen",
    value: "Angehörige/r von Menschen mit Erkrankungen",
  },
  {
    label: "Chronische Erkrankungen, körperliche Einschränkungen",
    value: "Chronische Erkrankungen, körperliche Einschränkungen",
  },
  { label: "Andere*", value: "Andere*" },
];

const moderatingOptions = [
  { label: "Ja", value: true },
  { label: "Nein", value: false },
];

const imgOptions = [
  "Grouptitel%20pictures%20low_res/pexels-johannes-plenio-1690355_bj811s_e6dajb.jpg",
  "Grouptitel%20pictures%20low_res/pexels-taylor-hunt-2902440_xvgnuq_nueptp.jpg",
  "Grouptitel%20pictures%20low_res/pexels-pixabay-416117_hz1ccg_f4bssx.jpg",
  "Grouptitel%20pictures%20low_res/pexels-eberhard-grossgasteiger-6_abiqd5_r1jcey.jpg",
  "Grouptitel%20pictures%20low_res/pexels-akil-mazumder-1072824_1_hqufud_pjiaof.jpg",
  "Grouptitel%20pictures%20low_res/pexels-javier-gonzalez-108303_iwxfil_t8mk04.jpg",
  "Grouptitel%20pictures%20low_res/pexels-pixabay-273886_dygqro_wt5ega.jpg",
  "Grouptitel%20pictures%20low_res/pexels-nandhu-kumar-1661296_ttr2gf_ijeg4r.jpg",
];

export const groupFields = {
  theme: {
    type: "inlineMultiSelect",
    name: "groupTheme",
    options: groupThemeOptions,
    validate: [(value) => minArrayLength(value, 1)],
  },
  name: {
    type: "name",
    name: "groupName",
    label: "Wie soll deine Gruppe heißen?",
    placeholder: "Name",
    hint: "Bitte gib den Gruppen Namen ein.",
    validate: [required],
  },
  description: {
    type: "textarea",
    name: "groupDescription",
    label: "Wie würdest du deine Gruppe beschreiben?",
    placeholder: "Kurze Gruppenbeschreibung",
    maxLength: 500,
    validate: [required, (value) => maxLength(value, 500)],
  },
  selfModerated: {
    type: "inlineSelect",
    name: "groupSelfModerated",
    placeholder: "Name",
    options: moderatingOptions,
  },
  downloadProgram: {
    type: "pdfDownload",
    name: "groupProgram",
    label: "Download Program",
    placeholder: "Download Program",
  },
  img: {
    type: "imgCarousel",
    name: "groupImg",
    label: "Gruppenbild",
    options: imgOptions,
  },
};

const experienceOptions = [
  {
    label: "Nein, ich hab noch nie an einer Gruppe teilgenommen.",
    value: "never participated",
  },
  {
    label: "Ein wenig, ich habe schonmal an einer Gruppe teilgenommen.",
    value: "a little, I have participated before",
  },
  {
    label: "Ja, ich habe regelmäßig an Gruppen teilgenommen.",
    value: "Yes, I participate regularly",
  },
  {
    label: "Ja, ich habe bereits Gruppen organisiert.",
    value: "Yes, I have organised groups before",
  },
];

export const groupExperienceField = {
  type: "inlineSelect",
  name: "experience",
  options: experienceOptions,
  validate: [required],
};

const chooseFunnelOptions = [
  {
    label: "Ich möchte an einer Selbsthilfegruppe teilnehmen.",
    value: "find group",
    onClick: (navigate) =>
      navigate("/auth/signup?funnel=1&type=find", { replace: true }),
  },
  {
    label: "Ich möchte eine Selbsthilfegruppe eröffnen.",
    value: "create group",
    onClick: (navigate) =>
      navigate("/auth/signup?funnel=1&type=create", { replace: true }),
  },
  {
    label: "Ich kann mir beides vorstellen.",
    value: "both",
    onClick: (navigate) =>
      navigate("/auth/signup?funnel=1&type=find", { replace: true }),
  },
  {
    label: "Ich weiß es noch nicht.",
    value: "dont know",
    onClick: (navigate) =>
      navigate("/auth/signup?funnel=1&type=find, {replace: true}"),
  },
];

export const chooseFunnelField = {
  type: "inlineSelect",
  name: "chooseFunnel",
  options: chooseFunnelOptions,
  validate: [required],
};
