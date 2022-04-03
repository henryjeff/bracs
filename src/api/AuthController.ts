import { getConfigs, axios, IRequestOptions, IRequestConfig } from "./";

export class AuthController {
  /**
   * Create user
   */
  static create(
    params: {
      resource: UserCreateRequestDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<UserGetResponseDto> {
    return new Promise((resolve, reject) => {
      const url = "post_user";
      const configs: IRequestConfig = getConfigs(
        "post",
        "application/json",
        url,
        options
      );
      const data = params.resource;
      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  // /**
  //  * Login user to get our tokens
  //  */
  static login(
    params: {
      identifier: string;
      password: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<AuthTokenResponseDto> {
    return new Promise((resolve, reject) => {
      const url = "login";
      const configs: IRequestConfig = getConfigs(
        "post",
        "application/json",
        url,
        options
      );
      const data = {
        identifier: params.identifier,
        password: params.password,
      };
      configs.data = data;
      axios(configs, resolve, reject);
    });
  }

  // static getUser(
  //   params: {
  //     identifier: string;
  //     password: string;
  //   } = {} as any,
  //   options: IRequestOptions = {}
  // ): Promise<AuthTokenResponseDto> {
  //   return new Promise((resolve, reject) => {
  //     const url = "login";
  //     const configs: IRequestConfig = getConfigs(
  //       "post",
  //       "application/json",
  //       url,
  //       options
  //     );
  //     const data = {
  //       identifier: params.identifier,
  //       password: params.password,
  //     };
  //     configs.data = data;
  //     axios(configs, resolve, reject);
  //   });
  // }
  // /**
  //  * Refresh our token
  //  */
  // static refreshToken(
  //   params: {
  //     refreshToken: string;
  //   } = {} as any,
  //   options: IRequestOptions = {}
  // ): Promise<AuthTokenRefreshResponseDto> {
  //   return new Promise((resolve, reject) => {
  //     const url = "auth/token/refresh";
  //     const configs: IRequestConfig = getConfigs(
  //       "post",
  //       "application/json",
  //       url,
  //       options
  //     );
  //     const data = {
  //       refresh: params.refreshToken,
  //     };
  //     configs.data = data;
  //     axios(configs, resolve, reject);
  //   });
  // }
}
