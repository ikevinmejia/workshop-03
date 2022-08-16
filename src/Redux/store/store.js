import {
  applyMiddleware,
  combineReducers,
  createStore
} from "redux";
import {
  userReducer
} from "../Reducers/userReducer";
import thunk from "redux-thunk";
import {
  persistStore,
  persistReducer
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "main-root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  login: userReducer,
});

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export {
  persistor
};