import axiosStatic, { AxiosInstance } from "axios";

import { authRefreshAccessToken } from "../store/actions/AuthActions";
import { store } from "../store";

const basePath = "http://127.0.0.1:8000/api/";

export interface IRequestOptions {
  headers?: any;
  baseURL?: string;
  responseType?: string;
}

export interface IRequestConfig {
  method?: any;
  headers?: any;
  url?: any;
  data?: any;
  params?: any;
}

// Add options interface
export interface ServiceOptions {
  axios?: AxiosInstance;
}

// Add default options
export const serviceOptions: ServiceOptions = {
  axios: axiosStatic,
};

// Instance selector
export function axios(
  configs: IRequestConfig,
  resolve: (p: any) => void,
  reject: (p: any) => void
): Promise<any> {
  if (serviceOptions.axios) {
    const {
      Auth: { tokenData },
    } = (<unknown>store.getState()) as RootState;

    if (tokenData) {
      configs.headers.Authorization = `Bearer ${tokenData.accessToken}`;
    }

    return serviceOptions.axios
      .request(configs)
      .then((res: any) => {
        console.log(res);
        resolve(res.data);
      })
      .catch((err: any) => {
        console.log(err.message);
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
          // Had a token but expired, refresh it and remake intended api call
          if (
            err.response.status === 401 &&
            tokenData &&
            tokenData.refreshToken
          ) {
            //@ts-ignore
            return authRefreshAccessToken(tokenData.refreshToken).then(() => {
              return new Promise((r) => setTimeout(r, 500)).then(() =>
                axios(configs, resolve, reject)
              );
            });
          }
        }
        reject(err);
      });
  } else {
    throw new Error("No axios instance");
  }
}

export function getConfigs(
  method: string,
  contentType: string,
  url: string,
  options: any
): IRequestConfig {
  url = basePath + url;
  const configs: IRequestConfig = { ...options, method, url };
  configs.headers = {
    ...options.headers,
    "Content-Type": contentType,
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE, PUT",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "append,delete,entries,foreach,get,has,keys,set,values,Authorization",
  };
  return configs;
}
