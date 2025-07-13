import React from "react";

export const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const PhoneRegex = /^1[1-9]\d{9}$/;
export const PasswordRegex = /^.{6,}$/;
export const IDCardRegex = /^(\d{17}[\dX]|\d{15})$/;
export const PostCodeRegex = /^\d{6}$/;
export const VerificationCodeRegex = /^\d{4,6}$/;

export const SetInputValidateClass = (
  event: React.ChangeEvent<HTMLInputElement>,
  isValid: boolean,
) => {
  const input = event.target;
  if (isValid) {
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
  } else {
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');
  }
}

// CheckLoginAccount
export const CheckLoginAccount = (event: React.ChangeEvent<HTMLInputElement>) => {
  const value = event.target.value;
  SetInputValidateClass(event, EmailRegex.test(value) || PhoneRegex.test(value))
};

// CheckEmail
export const CheckEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
  SetInputValidateClass(event, EmailRegex.test(event.target.value))
};

// CheckPhone
export const CheckPhone = (event: React.ChangeEvent<HTMLInputElement>) => {
  SetInputValidateClass(event, PhoneRegex.test(event.target.value))
};

// CheckVerifyCode
export const CheckVerifyCode = (event: React.ChangeEvent<HTMLInputElement>) => {
  SetInputValidateClass(event, VerificationCodeRegex.test(event.target.value))
};

// CheckPassword
export const CheckPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
  SetInputValidateClass(event, PasswordRegex.test(event.target.value))
};