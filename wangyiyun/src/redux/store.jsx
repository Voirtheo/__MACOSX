import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk"
import api from "./middleware/api";
import rootReducer from "./modules"

//对store增强，若为生产环境则使用store增强，反之直接赋值
let store
if (process.env.NODE_ENV !== "production" && window.__REDUX_DEVTOOLS_EXTENSION__) {
    const composeEnhancers =
        window.__REDUX_DEVTOOLS_EXTENSION__;
    store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
} else {
    store = createStore(rootReducer, applyMiddleware(thunk,api))
}
export default store;