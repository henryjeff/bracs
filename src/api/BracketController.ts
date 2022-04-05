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
        const data = {
            userID: params.userID,
        };
        configs.data = data;
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