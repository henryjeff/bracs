import { ActionType } from "../ActionTypes";

export function createInitialAuthState(): AuthState {
  return {
    tokenData: undefined,
  };
}

const initialState = createInitialAuthState();

const AuthReducer = (
  state = initialState,
  action: AuthStateAction
): AuthState => {
  switch (action.type) {
    case ActionType.LOG_IN:
      return {
        ...state,
        tokenData: {
          accessToken: action.payload.accessToken,
          refreshToken: action.payload.refreshToken,
        },
      };
    case ActionType.LOG_OUT:
      return {
        ...state,
        tokenData: undefined,
      };
    default:
      return state;
  }
};

export default AuthReducer;
