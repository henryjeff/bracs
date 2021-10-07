import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import appReducers, { createInitialState } from "./reducers";
import { ActionType } from "./ActionTypes";

import storage from "redux-persist/lib/storage";

const initialState = createInitialState();

const reducers = (state = initialState, action: StateAction): RootState => {
  if (action.type === ActionType.LOG_OUT) {
    // for all keys defined in your persistConfig(s)
    storage.removeItem("persist:root");
    state = createInitialState();
  }
  return appReducers(state, action);
};

const persistConfig = {
  key: "root",
  storage,
  version: 1,
  // migrate: createMigrate(migrations, { debug: __DEV__ }),
};

const persistedReducer = persistReducer<RootState, StateAction>(
  persistConfig,
  reducers
);

export const store = createStore(
  persistedReducer,
  undefined,
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

export const persistor = persistStore(store);
