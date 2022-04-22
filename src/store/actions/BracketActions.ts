import { ActionType } from "../ActionTypes";
import { BracketController } from "../../api/BracketController";

export const createBracket =
  (tree: SerializedBracket<Team>, loggedIn: boolean) =>
  (dispatch: (a: BracketCreateAction) => any, getState: () => RootState) => {
    if (!loggedIn) {
      return new Promise((resolve) => {
        dispatch({
          type: ActionType.CREATE_BRACKET,
          payload: {
            id: "_",
            tree,
          },
        });
        resolve("_");
      });
    }
    return new Promise((resolve, reject) => {
      BracketController.postBracket({
        bracketData: tree as unknown as JSON,
      })
        .then(({ bracketID }) => {
          // navigate to the bracket
          dispatch({
            type: ActionType.CREATE_BRACKET,
            payload: {
              id: `${bracketID}`,
              tree,
            },
          });
          resolve(bracketID);
        })
        .catch((e) => {
          reject(e);
        });
    });
  };

export const updateBracket =
  (tree: SerializedBracket<Team>, bracketId: string) =>
  (dispatch: (a: BracketCreateAction) => any, getState: () => RootState) => {
    return new Promise((resolve, reject) => {
      BracketController.updateBracket({
        bracketID: parseInt(bracketId),
        name: "",
        bracketData: tree as unknown as JSON,
      })
        .then(() => {
          resolve(true);
        })
        .catch((e) => {
          reject(false);
        });
    });
  };

export const getUserBrackets =
  (userId: number) =>
  (dispatch: (a: GetUsersBracketsAction) => any, getState: () => RootState) => {
    return new Promise((resolve, reject) => {
      BracketController.getUserBrackets({ userID: userId })
        .then((res) => {
          dispatch({
            type: ActionType.GET_USER_BRACKETS,
            payload: {
              userId,
              bracketIds: res.bracketIDs,
            },
          });
          resolve(res.bracketIDs);
        })
        .catch((e) => {
          reject(e);
        });
    });
  };

export const getBracket =
  (bracketId: string) =>
  (dispatch: (a: BracketGetAction) => any, getState: () => RootState) => {
    return new Promise((resolve, reject) => {
      BracketController.getBracket({ bracketID: parseInt(bracketId) })
        .then(({ bracketData }) => {
          dispatch({
            type: ActionType.GET_BRACKET,
            payload: {
              id: bracketId,
              tree: bracketData as unknown as SerializedBracket<Team>,
            },
          });
          resolve(bracketData);
        })
        .catch((e) => {
          reject(e);
        });
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
