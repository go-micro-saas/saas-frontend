import React from "react";

export const EmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const PhoneRegex = /^1[1-9]\d{9}$/;
export const PasswordRegex = /^.{6,}$/;
export const IDCardRegex = /^(\d{17}[\dX]|\d{15})$/;
export const PostCodeRegex = /^\d{6}$/;
export const VerificationCodeRegex = /^\d{4,6}$/;

export const setInputValidateClass = (
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

// checkLoginAccount
export const checkLoginAccount = (event: React.ChangeEvent<HTMLInputElement>) => {
  const value = event.target.value;
  setInputValidateClass(event, EmailRegex.test(value) || PhoneRegex.test(value))
};

// checkEmail
export const checkEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
  setInputValidateClass(event, EmailRegex.test(event.target.value))
};

// checkPhone
export const checkPhone = (event: React.ChangeEvent<HTMLInputElement>) => {
  setInputValidateClass(event, PhoneRegex.test(event.target.value))
};

// checkVerifyCode
export const checkVerifyCode = (event: React.ChangeEvent<HTMLInputElement>) => {
  setInputValidateClass(event, VerificationCodeRegex.test(event.target.value))
};

// checkPassword
export const checkPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
  setInputValidateClass(event, PasswordRegex.test(event.target.value))
};