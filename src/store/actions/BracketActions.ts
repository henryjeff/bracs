import { ActionType } from "../ActionTypes";

export const createBracket =
  (id: string, tree: SerializedBracket<Team>) =>
  (dispatch: (a: BracketCreateAction) => any, getState: () => RootState) => {
    return dispatch({
      type: ActionType.CREATE_BRACKET,
      payload: {
        id,
        tree,
      },
    });
  };

export const declareMatchWinner =
  (teamId: string, bracketId: string) =>
  (
    dispatch: (a: BracketDeclareMatchWinner) => any,
    getState: () => RootState
  ) => {
    return dispatch({
      type: ActionType.DECLARE_MATCH_WINNER,
      payload: {
        teamId,
        bracketId,
      },
    });
  };
