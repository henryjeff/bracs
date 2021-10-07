declare type RootState = {
  Auth: AuthState;
};

declare type AuthState = {
  tokenData:
    | {
        accessToken: string;
        refreshToken: string;
      }
    | undefined;
};

/** ----------------------------------------------------------------------------
 *     Auth
 * -----------------------------------------------------------------------------
 */
declare type StateAction = AuthStateAction;

declare type AuthStateAction =
  | AuthLoginAction
  | AuthCreateUserAction
  | AuthLogoutAction
  | AuthRefreshAccessToken;

declare interface AuthLoginAction {
  type: typeof import("./ActionTypes").ActionType.LOG_IN;
  payload: { accessToken: string; refreshToken: string };
}

declare interface AuthCreateUserAction {
  type: typeof import("./ActionTypes").ActionType.CREATE_USER;
}

declare interface AuthLogoutAction {
  type: typeof import("./ActionTypes").ActionType.LOG_OUT;
}

declare interface AuthRefreshAccessToken {
  type: typeof import("./ActionTypes").ActionType.REFRESH_TOKEN;
}
