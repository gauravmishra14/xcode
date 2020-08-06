import { Actions } from "./Actions";
import { IUser, IProduct } from "./InterfacePool";

const makeAction = <T extends Actions, P>(type: T) => (payload: P) => {
  return {
    type,
    payload,
  };
};

export const userLogOut = makeAction<Actions.USER_LOGOUT, "">(
  Actions.USER_LOGOUT
);

export const userLoggedIn = makeAction<Actions.USER_LOGGED_IN, IUser>(
  Actions.USER_LOGGED_IN
);

export const getProducts = makeAction<Actions.GET_PRODUCTS, IProduct>(Actions.GET_PRODUCTS)

interface IStringMap<T> {
  [key: string]: T;
}
type IAnyFunction = (...args: any[]) => any;
type IActionUnion<A extends IStringMap<IAnyFunction>> = ReturnType<A[keyof A]>;

const actions = {
  userLoggedIn,
  userLogOut,
  getProducts,
};

export type IAction = IActionUnion<typeof actions>;
