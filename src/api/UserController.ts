import { getConfigs, axios, IRequestOptions, IRequestConfig } from "./";

export class UserController {
  static getUser(
    params: {
      userID: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<UserGetResponseDto> {
    return new Promise((resolve, reject) => {
      const url = `user/${params.userID}`;
      const configs: IRequestConfig = getConfigs(
        "get",
        "application/json",
        url,
        options
      );
      console.log(configs);
      axios(configs, resolve, reject);
    });
  }
}
