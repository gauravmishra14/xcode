import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import userReducer from './reducers/userReducer';
import productReducer from 'reducers/productReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  user: userReducer,
  products: productReducer,
})

export type IAppState = ReturnType <typeof rootReducer>

export default rootReducer



