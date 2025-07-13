import {ProjectStore} from "./store.tsx";

export const getAuthToken = () => {
  return ProjectStore((state) => state.userInfo);
}