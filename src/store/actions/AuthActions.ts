// import { AuthController } from "../../api/AuthController";
// import { ActionType } from "../ActionTypes";

// export const authLogin =
//   (email: string, password: string) =>
//   (dispatch: (a: AuthLoginAction) => any, getState: () => RootState) => {
//     return AuthController.login({ email, password }).then((tokenRes) => {
//       dispatch({
//         type: ActionType.LOG_IN,
//         payload: {
//           accessToken: tokenRes.access,
//           refreshToken: tokenRes.refresh,
//         },
//       });
//     });
//   };

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

// export const authLogout =
//   () => (dispatch: (a: AuthLogoutAction) => any, getState: () => RootState) => {
//     return dispatch({ type: ActionType.LOG_OUT });
//   };

// export const authRefreshAccessToken =
//   (refreshToken: string) =>
//   (dispatch: (a: AuthRefreshAccessToken) => any, getState: () => RootState) => {
//     return;
//     // return dispatch({ type: ActionType.LOG_OUT, payload: {} });
//   };

export default {};
