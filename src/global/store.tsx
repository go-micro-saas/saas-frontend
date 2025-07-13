import {create} from 'zustand'
import {persist, createJSONStorage} from 'zustand/middleware'
import type {
  AuthToken, UserInfo,
  EmployeeInfo, CompanyInfo,
  MyStore
} from "@src/global/store_const.tsx";


export const useStore = create<MyStore>()(
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
    }),
    {
      name: 'saas_platform',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
)
