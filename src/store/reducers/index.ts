import { combineReducers } from "redux";
import AuthReducer, { createInitialAuthState } from "./AuthReducer";
import BracketReducer, { createInitialBracketState } from "./BracketReducer";

export function createInitialState(): RootState {
  return {
    auth: createInitialAuthState(),
    bracket: createInitialBracketState(),
  };
}

const appReducers = combineReducers<RootState, StateAction>({
  auth: AuthReducer,
  bracket: BracketReducer,
} as any);

export default appReducers;
