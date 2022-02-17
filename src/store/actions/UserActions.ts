import { UserController } from "../../api/UserController";
import { ActionType } from "../ActionTypes";

export const getUser =
  (userId: number) =>
  (dispatch: (a: UserLoadAction) => any, getState: () => RootState) => {
    return new Promise((resolve, reject) => {
      UserController.getUser({ userId })
        .then((res) => {
          dispatch({
            type: ActionType.LOAD_USER,
            payload: {
              userId: userId,
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
