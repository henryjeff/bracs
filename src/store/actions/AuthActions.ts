import { AuthController } from "../../api/AuthController";
import { ActionType } from "../ActionTypes";

export const authLogin =
  (identifier: string, password: string) =>
  (dispatch: (a: AuthLoginAction) => any, getState: () => RootState) => {
    return new Promise((resolve, reject) => {
      AuthController.login({ identifier, password })
        .then((res) => {
          dispatch({
            type: ActionType.LOG_IN,
            payload: {
              userId: res.userID,
              accessToken: res.token,
            },
          });
          resolve(res);
        })
        .catch((e) => {
          reject(e);
        });
    });
  };

// export const authCreateUser =
//   (user: UserCreateRequestDto) =>
//   (dispatch: (a: AuthCreateUserAction) => any, getState: () => RootState) => {
//     return AuthController.create({ resource: user })
//       .then((userRes) => {
//         console.log("User created successfully");
//       })
//       .catch((err) => {
//         return err;
//       });
//   };

export const authLogout =
  () => (dispatch: (a: AuthLogoutAction) => any, getState: () => RootState) => {
    return dispatch({ type: ActionType.LOG_OUT });
  };

// export const authRefreshAccessToken =
//   (refreshToken: string) =>
//   (dispatch: (a: AuthRefreshAccessToken) => any, getState: () => RootState) => {
//     return;
//     // return dispatch({ type: ActionType.LOG_OUT, payload: {} });
//   };

// export default {;
