// TODO extend the String class...
// and have these functions in an instance or inside a wrapper object
export const validateDigit = string => !/(?=.*\d)/.test(string);
export const validateEmail = email => !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
export const validateEmailLength = email => email.length > 120;
export const validateLowerCase = string => !/(?=.*[a-z])/.test(string);
export const validateMaxLength = (string, maxLength) => string.length > (maxLength || 252);
export const validateMinLength = (string, minLength) => string.length < (minLength || 2);
export const validateOnlyDigits = string => !/^[0-9]+$/.test(string);
export const validatePhone = string => !/^(?:\+?\d{1,3}\s*[- .])?\(?(?:\d{1,4})?\)?[- .]?\d{1,4}[- ]?\d{1,4}\s*[a-z]*\d*$/.test(string);
export const validateSpecialCharacters = string => !/[~!@#$%^&*()_+.]/.test(string);
export const validateString = email => !/^[a-zA-Z].*[\s.]*[^\s]$/.test(email);
export const validateUpperCase = string => !/(?=.*[A-Z])/.test(string);
export const validatePostalCode = string => !/^(?!.*[DFIOQU])[A-VXY][0-9][A-Z]\s?[0-9][A-Z][0-9]$/.test(string);
