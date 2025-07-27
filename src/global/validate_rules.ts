export const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const PhoneRegex = /^1[1-9]\d{9}$/;
export const PasswordRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;
export const IDCardRegex = /^(\d{17}[\dX]|\d{15})$/;
export const PostCodeRegex = /^\d{6}$/;
export const VerificationCodeRegex = /^\d{4,6}$/;

// CheckLoginAccount
export const CheckLoginAccount = (value: string) => {
  return EmailRegex.test(value) || PhoneRegex.test(value)
};

// CheckEmail
export const CheckEmail = (value: string) => {
  return EmailRegex.test(value)
};

// CheckPhone
export const CheckPhone = (value: string) => {
  return PhoneRegex.test(value)
};

// CheckVerifyCode
export const CheckVerifyCode = (value: string) => {
  return VerificationCodeRegex.test(value)
};

// CheckPassword
export const CheckPassword = (value: string) => {
  return PasswordRegex.test(value)
};