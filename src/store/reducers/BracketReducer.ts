import { ActionType } from "../ActionTypes";
import { declareMatchWinner } from "../../components/bracket/Tree";

export function createInitialBracketState(): BracketState {
  return {
    brackets: {},
    userBrackets: {},
  };
}

const initialState = createInitialBracketState();

const BracketReducer = (
  state = initialState,
  action: BracketStateAction
): BracketState => {
  console.log("BracketReducer: ", action);
  switch (action.type) {
    case ActionType.CREATE_BRACKET:
      return {
        ...state,
        brackets: {
          ...state.brackets,
          [action.payload.id]: {
            updated: Date.now(),
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
            updated: Date.now(),
            bracket: newBracket,
          },
        },
      };
    case ActionType.GET_BRACKET:
      const { id, tree } = action.payload;
      return {
        ...state,
        brackets: {
          ...state.brackets,
          [id]: {
            updated: Date.now(),
            bracket: tree,
          },
        },
      };
    case ActionType.GET_USER_BRACKETS:
      const { userId, bracketIds } = action.payload;
      return {
        ...state,
        userBrackets: {
          ...state.userBrackets,
          [userId]: bracketIds,
        },
      };

    default:
      return state;
  }
};

export default BracketReducer;
