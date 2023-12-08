import testManual from "../assets/manual.pdf";

// noinspection RegExpRedundantEscape
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line

export const isEmail = (value) => {
  // if(!value) return false
  return value && !!value.match(emailRegex);
};

export const required = (value) => (value ? undefined : "Can't be blank");
export const number = (value) =>
  value && isNaN(Number(value)) ? "Must be a number" : undefined;
export const email = (value) =>
  // value && !isEmail(value) ? "Invalid email address" : undefined;
  value && !isEmail(value)
    ? "Bitte geben Sie eine gültige E-Mail Adresse ein"
    : undefined;

export const length = (value, minLength) =>
  value.length >= minLength
    ? undefined
    : `Must be min ${minLength} characters long`;

export const minArrayLength = (value, minLength) =>
  !value || value.length < minLength
    ? `Choose at least ${minLength}`
    : undefined;

const containNumberRegex = /\d+/;
const containCapsLetterRegex = /[A-Z]/;
export const includeNumber = (value) =>
  containNumberRegex.test(value) ? undefined : "Must contain a number";
export const includeCapital = (value) =>
  containCapsLetterRegex.test(value)
    ? undefined
    : "Must contain a capital letter";

export const passwordConfirmation = (value, allValues) =>
  value !== allValues.password ? "Passwords don't match" : undefined;

export const authFields = {
  firstName: {
    type: "text",
    name: "firstName",
    value: "",
    label: "Last name",
    placeholder: "firstName",
    hint: "Bitte gib hier Deinen Namen ein, mit dem Du in der Gruppe angesprochen werden möchtest und der für andere Mitglieder:innen angezeigt werden darf.",
    validate: [required],
  },
  lastName: {
    type: "text",
    name: "lastName",
    value: "",
    label: "First name",
    placeholder: "lastName",
    hint: "Bitte gib hier Deinen Namen ein, mit dem Du in der Gruppe angesprochen werden möchtest und der für andere Mitglieder:innen angezeigt werden darf.",
    validate: [required],
  },
  alias: {
    type: "text",
    name: "alias",
    value: "",
    label: "Alias",
    placeholder: "Dein Alias",
    hint: "Bitte gib hier Deinen Namen ein, mit dem Du in der Gruppe angesprochen werden möchtest und der für andere Mitglieder:innen angezeigt werden darf.",
    validate: [required],
  },
  email: {
    type: "email",
    name: "email",
    value: "",
    label: "Email",
    placeholder: "Email",
    validate: [required, email],
  },
  password: {
    type: "password",
    name: "password",
    value: "",
    label: "Password",
    placeholder: "Password",
    validate: [
      required,
      (value) => length(value, 8),
      includeNumber,
      includeCapital,
    ],
  },
  passwordConfirmation: {
    type: "password",
    name: "passwordConfirmation",
    value: "",
    label: "Password Confirmation",
    placeholder: "Password Confirmation",
    validate: [
      required,
      (value) => length(value, 8),
      includeNumber,
      includeCapital,
      passwordConfirmation,
    ],
  },
  authCode: {
    type: "authCode",
    name: "authCode",
    // value: "",
    label: "Auth Code",
    hint: "You can find this code in your email.",
    validate: [required, (value) => length(value, 4)],
  },
  gender: {
    type: "inlineSelect",
    name: "gender",
    // value: "",
    label: "Gender",
    // hint: "",
    validate: [required],
    options: [
      {
        value: "male",
        label: "Male",
      },
      {
        value: "female",
        label: "Female",
      },
      {
        value: "other",
        label: "Other",
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

export const groupFields = {
  theme: {
    type: "inlineMultiSelect",
    name: "groupTheme",
    value: [],
    options: groupThemeOptions,
    validate: [(value) => minArrayLength(value, 1)],
  },
  name: {
    type: "name",
    name: "groupName",
    label: "Wie soll deine Gruppe heißen?",
    value: "",
    placeholder: "Name",
    hint: "Bitte gib den Gruppen Namen ein.",
    validate: [required],
  },
  description: {
    type: "textarea",
    name: "groupDescription",
    label: "Wie würdest du deine Gruppe beschreiben?",
    value: "",
    placeholder: "Kurze Gruppenbeschreibung",
  },
  selfModerated: {
    type: "inlineSelect",
    name: "groupSelfModerated",
    value: false,
    placeholder: "Name",
    // hint: "",
    options: moderatingOptions
  },
  downloadProgram: {
    type: "pdf_download",
    name: "groupProgram",
    value: testManual,
    label: "Download Program",
    placeholder: "Download Program",
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
  value: experienceOptions[0].value,
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
  value: experienceOptions[0].value,
  name: "chooseFunnel",
  options: chooseFunnelOptions,
  validate: [required],
};
