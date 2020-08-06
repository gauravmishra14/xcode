import { Actions } from "utils/Actions";
import { IUser } from "utils/InterfacePool";
import { IAction } from "utils/ActionDispatcher";

const initState: IUser = { fullName: "" };

const userReducer = (state = initState, action: IAction): IUser => {
  switch (action.type) {
    case Actions.USER_LOGGED_IN:
      return action.payload;
    case Actions.USER_LOGOUT:
      return initState;
    default:
      return state;
  }
};

export default userReducer;
