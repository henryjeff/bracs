import { ActionType } from "../ActionTypes";
import { declareMatchWinner } from "../../components/bracket/Tree";

export function createInitialBracketState(): BracketState {
  return {
    brackets: {},
  };
}

const initialState = createInitialBracketState();

const BracketReducer = (
  state = initialState,
  action: BracketStateAction
): BracketState => {
  switch (action.type) {
    case ActionType.CREATE_BRACKET:
      return {
        ...state,
        brackets: {
          ...state.brackets,
          [action.payload.id]: {
            bracket: action.payload.tree,
          },
        },
      };
    case ActionType.DECLARE_MATCH_WINNER:
      const bracket = state.brackets[action.payload.bracketId]!.bracket;
      const newBracket =
        declareMatchWinner(action.payload.teamId, bracket) || bracket;

      return {
        ...state,
        brackets: {
          ...state.brackets,
          [action.payload.bracketId]: {
            bracket: newBracket,
          },
        },
      };
    default:
      return state;
  }
};

export default BracketReducer;
