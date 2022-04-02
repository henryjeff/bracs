import { getConfigs, axios, IRequestOptions, IRequestConfig } from "./";

export class UserController {
  static getUser(
    params: {
      userID: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<UserGetResponseDto> {
    return new Promise((resolve, reject) => {
      const url = 'user';
      const configs: IRequestConfig = getConfigs(
        "post",
        "application/json",
        url,
        options
      );
      const data = {
        userID: params.userID,
      }
      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}
