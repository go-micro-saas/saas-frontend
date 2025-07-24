import {create} from 'zustand'
import {persist, createJSONStorage} from 'zustand/middleware'
import {useShallow} from 'zustand/react/shallow'
import type {
  AuthToken, UserInfo,
  EmployeeInfo, CompanyInfo,
  VerifyCodeTime,
  MyStore,
} from "@src/global/store_const.ts";

const ProjectStore = create<MyStore>()(
  persist(
    (set) => ({
      // token
      authToken: {},
      setAuthToken: (token: AuthToken) => set({authToken: token},),

      // user
      userInfo: {},
      setUserInfo: (info: UserInfo) => set({userInfo: info},),

      // employee
      employeeInfo: {},
      setEmployeeInfo: (info: EmployeeInfo) => set({employeeInfo: info},),

      // company
      companyInfo: {},
      setCompanyInfo: (info: CompanyInfo) => set({companyInfo: info},),

      // get verify code time
      verifyCodeTime: {},
      setVerifyCodeTime: (info: VerifyCodeTime) => set({verifyCodeTime: info},),
      setLoginVerifyCodeNextTime: (time: number) => set((state) => ({
        verifyCodeTime: {
          ...state.verifyCodeTime,
          loginVerifyCodeNextTime: time,
        }
      })),
      setSignupVerifyCodeNextTime: (time: number) => set((state) => ({
        verifyCodeTime: {
          ...state.verifyCodeTime,
          signupVerifyCodeNextTime: time,
        }
      })),
      setResetPasswdVerifyCodeNextTime: (time: number) => set((state) => ({
        verifyCodeTime: {
          ...state.verifyCodeTime,
          resetPasswdVerifyCodeNextTime: time,
        }
      })),
    }),
    {
      name: "saas-frontend",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)

export const MyProjectStore = () => {
  return ProjectStore(
    useShallow((state) => ({...state})),
  )
}
