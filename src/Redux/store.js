import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { CombinedReducer } from "./Combined_Reducer/CombinedReducer";





export const store = createStore(CombinedReducer,composeWithDevTools(applyMiddleware(thunk)))