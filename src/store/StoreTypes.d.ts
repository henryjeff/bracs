declare type RootState = {
  auth: AuthState;
  bracket: BracketState;
  user: UserState;
};

declare type StateAction = AuthStateAction | BracketStateAction;
/** ----------------------------------------------------------------------------
 *     Auth
 * -----------------------------------------------------------------------------
 */
declare type AuthState = {
  tokenData?: {
    accessToken: string;
  };
  userId: number;
};

declare type AuthStateAction =
  | AuthLoginAction
  | AuthCreateUserAction
  | AuthLogoutAction
  | AuthRefreshAccessToken;

declare interface AuthLoginAction {
  type: typeof import("./ActionTypes").ActionType.LOG_IN;
  payload: { accessToken: string; userId: number };
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
      updated: number;
    };
  };
  userBrackets: {
    [userId: string]: number[];
  };
};

declare type BracketStateAction =
  | BracketGetAction
  | GetUsersBracketsAction
  | BracketCreateAction
  | BracketDeclareMatchWinner;

declare interface GetUsersBracketsAction {
  type: typeof import("./ActionTypes").ActionType.GET_USER_BRACKETS;
  payload: {
    bracketIds: number[];
    userId: number;
  };
}

declare interface BracketGetAction {
  type: typeof import("./ActionTypes").ActionType.GET_BRACKET;
  payload: { id: string; tree: SerializedBracket<Team> };
}
declare interface BracketCreateAction {
  type: typeof import("./ActionTypes").ActionType.CREATE_BRACKET;
  payload: { id: string; tree: SerializedBracket<Team> };
}

declare interface BracketDeclareMatchWinner {
  type: typeof import("./ActionTypes").ActionType.DECLARE_MATCH_WINNER;
  payload: { teamId: string; bracketId: string };
}

/** ----------------------------------------------------------------------------
 *     User
 * -----------------------------------------------------------------------------
 */

declare type UserState = {
  users: {
    [userId: number]: UserResponseDto;
  };
};

declare type UserStateAction = UserLoadAction;

declare interface UserLoadAction {
  type: typeof import("./ActionTypes").ActionType.LOAD_USER;
  payload: { userID: number; user: UserResponseDto };
}
