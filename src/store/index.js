import { createStore, applyMiddleware } from "redux";
import rootReducers from "./reducers/index";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

export default function configureStore(preLoadedState) {
  return createStore(
    rootReducers,
    preLoadedState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}
