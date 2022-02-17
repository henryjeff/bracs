import { getConfigs, axios, IRequestOptions, IRequestConfig } from "./";

export class UserController {
  static getUser(
    params: {
      userId: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<UserResponseDto> {
    return new Promise((resolve, reject) => {
      const url = `user/${params.userId}`;
      const configs: IRequestConfig = getConfigs(
        "get",
        "application/json",
        url,
        options
      );
      axios(configs, resolve, reject);
    });
  }
}
