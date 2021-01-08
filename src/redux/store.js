import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducer";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();
let middleware = [sagaMiddleware];
const middlewareEnhancer = applyMiddleware(...middleware);
const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);

const logoutResetEnhancer = rootReducer => (state, action) => {
    if (action.type !== "LOGOUT_SUCCESS") return rootReducer(state, action);
    const newState = rootReducer(undefined, {});
    return newState;
};

const store = createStore(
    logoutResetEnhancer(rootReducer),
    composedEnhancers
);

store.sagaTask = sagaMiddleware.run(rootSaga);

export default store;