import { combineReducers } from "redux";
import AuthReducer, { createInitialAuthState } from "./AuthReducer";
import BracketReducer, { createInitialBracketState } from "./BracketReducer";
import UserReducer, { createInitialUserState } from "./UserReducer";

export function createInitialState(): RootState {
  return {
    auth: createInitialAuthState(),
    bracket: createInitialBracketState(),
    user: createInitialUserState(),
  };
}

const appReducers = combineReducers<RootState, StateAction>({
  auth: AuthReducer,
  bracket: BracketReducer,
  user: UserReducer,
} as any);

export default appReducers;
