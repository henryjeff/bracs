declare type RootState = {
  auth: AuthState;
  bracket: BracketState;
};

declare type AuthState = {
  tokenData?: {
    accessToken: string;
    refreshToken: string;
  };
  userId: string;
};

declare type StateAction = AuthStateAction | BracketStateAction;
/** ----------------------------------------------------------------------------
 *     Auth
 * -----------------------------------------------------------------------------
 */

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

/** ----------------------------------------------------------------------------
 *     Bracket
 * -----------------------------------------------------------------------------
 */

declare type BracketState = {
  brackets: {
    [bracketId: string]: {
      bracket: SerializedBracket<Team>;
    };
  };
};

declare type BracketStateAction =
  | BracketCreateAction
  | BracketDeclareMatchWinner;

declare interface BracketCreateAction {
  type: typeof import("./ActionTypes").ActionType.CREATE_BRACKET;
  payload: { id: string; tree: SerializedBracket<Team> };
}

declare interface BracketDeclareMatchWinner {
  type: typeof import("./ActionTypes").ActionType.DECLARE_MATCH_WINNER;
  payload: { teamId: string; bracketId: string };
}
