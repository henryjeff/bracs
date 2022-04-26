import { getConfigs, axios, IRequestOptions, IRequestConfig } from "./";

export class BracketController {
  static postBracket(
    params: {
      bracketData: JSON;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<BracketCreateResponseDto> {
    return new Promise((resolve, reject) => {
      const url = "post_bracket";
      const configs: IRequestConfig = getConfigs(
        "post",
        "application/json",
        url,
        options
      );
      const data = {
        bracketData: params.bracketData,
      };
      configs.data = data;
      axios(configs, resolve, reject);
    });
  }

  static updateBracket(
    params: {
      bracketID: number;
      name?: string;
      bracketData: JSON;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<BracketUpdateResponseDto> {
    return new Promise((resolve, reject) => {
      const url = "modify_bracket";
      const configs: IRequestConfig = getConfigs(
        "put",
        "application/json",
        url,
        options
      );
      const data: any = {
        bracketID: params.bracketID,
        bracketData: params.bracketData,
      };

      if (params.name) {
        data.name = params.name;
      }
      configs.data = data;
      axios(configs, resolve, reject);
    });
  }

  static getUserBrackets(
    params: {
      userID: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<BracketGetListResponseDto> {
    return new Promise((resolve, reject) => {
      const url = `get_user_brackets/${params.userID}`;
      const configs: IRequestConfig = getConfigs(
        "get",
        "application/json",
        url,
        options
      );
      axios(configs, resolve, reject);
    });
  }

  static getBracket(
    params: {
      bracketID: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<BracketGetResponseDto> {
    return new Promise((resolve, reject) => {
      const url = `bracket/${params.bracketID}`;
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
