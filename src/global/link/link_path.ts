export const LinkPath = {
  // default
  Root: "/",
  Dashboard: "/dashboard",
  Home: "/home",

  // auth
  AuthLogin: "/auth/login",
  AuthLoginByEmailCode: "/auth/login-by-email-code",
  AuthSignup: "/auth/signup",
  AuthResetPassword: "/auth/reset-password",
  AuthForgotPassword: "/auth/forgot-password",

  // 404
  NotFound: "/404",
}

export const RedirectKey = () => {
  return "redirect";
}

export const GetCurrentURLPath = () => {
  return window.location.pathname;
}

export const GetCurrentURLQueryRaw = () => {
  return window.location.search;
}

export const GetCurrentURLHash = () => {
  return window.location.hash;
}

export const GetCurrentPathAndQuery = () => {
  return RedirectKey() + "=" + encodeURIComponent(GetCurrentURLPath() + GetCurrentURLQueryRaw())
}

export const GetRedirectFrom = () => {
  return new URLSearchParams(window.location.search).get(RedirectKey()) || LinkPath.Root;
}

