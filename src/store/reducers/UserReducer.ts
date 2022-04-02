import { ActionType } from "../ActionTypes";

export function createInitialUserState(): UserState {
  return {
    users: {},
  };
}

const initialState = createInitialUserState();

const UserReducer = (
  state = initialState,
  action: UserStateAction
): UserState => {
  switch (action.type) {
    case ActionType.LOAD_USER:
      return {
        ...state,
        users: {
          ...state.users,
          [action.payload.userID]: action.payload.user,
        },
      };
    default:
      return state;
  }
};

export default UserReducer;
