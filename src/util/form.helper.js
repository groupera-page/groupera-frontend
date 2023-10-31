const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ // eslint-disable-line

export const isEmail = value => {
  // if(!value) return false
  return value && !!value.match(emailRegex);

}

export const required = value => value ? undefined : "Can't be blank"
export const number = value => value && isNaN(Number(value)) ? "Must be a number" : undefined
export const email = value => value && !isEmail(value) ? "Invalid email address" : undefined
export const length = value => value.length >= 8 ? undefined : "Must be 8 characters long"
const containNumberRegex = /\d+/
const containCapsLetterRegex = /[A-Z]/
export const includeNumber = value => containNumberRegex.test(value) ? undefined : "Must contain a number"
export const includeCapital = value => containCapsLetterRegex.test(value) ? undefined : "Must contain a capital letter"

// export const passwordConfirmation = (value, allValues) => value !== allValues.password ? "Passwords don't match" : undefined

