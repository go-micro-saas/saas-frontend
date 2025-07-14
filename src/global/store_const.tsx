export interface AuthToken {
  accessToken?: string;
  accessTokenExpires?: number;
  refreshToken?: string;
  refreshTokenExpires?: number;
}

export interface UserInfo {
  uid?: string
  name?: string
  avatar?: string
}

export interface EmployeeInfo {
  employeeId?: string
  name?: string
  avatar?: string
  role?: string
}

export interface CompanyInfo {
  companyId?: string
  name?: string
  avatar?: string
}

export interface VerifyCodeTime {
  loginVerifyCodeTime?: number
  signupVerifyCodeTime?: number
  resetPasswdVerifyCodeTime?: number
}

export type MyStore = {
  // token
  authToken: AuthToken
  setAuthToken: (token: AuthToken) => void

  // user
  userInfo: UserInfo
  setUserInfo: (info: UserInfo) => void

  // employee
  employeeInfo: EmployeeInfo
  setEmployeeInfo: (info: EmployeeInfo) => void

  // company
  companyInfo: CompanyInfo
  setCompanyInfo: (info: CompanyInfo) => void

  // verify code time
  verifyCodeTime: VerifyCodeTime
  setVerifyCodeTime: (info: VerifyCodeTime) => void
}