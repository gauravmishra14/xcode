import { Actions } from "utils/Actions";
import { IProduct } from "utils/InterfacePool";
import { IAction } from "utils/ActionDispatcher";

interface IState {
    allProducts: IProduct | [];
}

const initState: IState = {
  allProducts: [],
};

const productReducer = (state = initState, action: IAction): IState => {
  switch (action.type) {
    case Actions.GET_PRODUCTS:
      return { ...state, allProducts: action.payload };
    default:
      return state;
  }
};

export default productReducer;
