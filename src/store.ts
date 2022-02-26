import { TypedUseSelectorHook, useSelector } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

import { SagaMiddleware } from "./sagas";
import { dataReducer } from "./reducers/dataReducer";
import { watchAll } from "./sagas/data.sagas";

const reducer = combineReducers({
  data: dataReducer,
});

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(SagaMiddleware))
);

SagaMiddleware.run(watchAll);

export type AppState = ReturnType<typeof reducer>;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
