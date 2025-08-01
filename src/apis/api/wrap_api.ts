import type {AxiosError} from "axios";

export type ApiResult<T> = {
  resp: T | null;
  err: AxiosError | unknown;
};

export const WrapRequestAPI = async <T>(promise: Promise<T>): Promise<ApiResult<T>> => {
  try {
    const resp = await promise;
    return {resp, err: null};
  } catch (err) {
    return {resp: null, err: err};
  }
};