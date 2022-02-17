import { ActionType } from "../ActionTypes";

export function createInitialAuthState(): AuthState {
  return {
    tokenData: undefined,
    userId: -1,
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
        },
        userId: action.payload.userId,
      };
    case ActionType.LOG_OUT:
      return {
        ...state,
        tokenData: undefined,
        userId: -1,
      };
    default:
      return state;
  }
};

export default AuthReducer;
