import { combineReducers } from "redux";
import AuthReducer, { createInitialAuthState } from "./AuthReducer";

export function createInitialState(): RootState {
  return {
    Auth: createInitialAuthState(),
  };
}

const appReducers = combineReducers<RootState, StateAction>({
  Auth: AuthReducer,
});

export default appReducers;
