import { UserController } from "../../api/UserController";
import { ActionType } from "../ActionTypes";

export const getUser =
  (userID: number) =>
  (dispatch: (a: UserLoadAction) => any, getState: () => RootState) => {
    return new Promise((resolve, reject) => {
      console.log()
      UserController.getUser({ userID })
        .then((res) => {
          dispatch({
            type: ActionType.LOAD_USER,
            payload: {
              userID: userID,
              user: res,
            },
          });
          resolve(res);
        })
        .catch((e) => {
          reject(e);
        });
    });
  };
