import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import Animation from "./AnimationStore";
import Renderer from "./RendererStore";

const combinedReducers = combineReducers({
  Animation,
  Renderer
});
const middleware = [];

let finalCreateStore;

if (process.env.DEBUG === "false") {
  finalCreateStore = applyMiddleware(...middleware)(createStore);
} else {
  /* eslint-disable global-require */
  finalCreateStore = compose(
    applyMiddleware(...middleware),
    require("redux-devtools-extension").devToolsEnhancer({
      actionsBlacklist: ["ANIMATION.TICK"]
    })
  )(createStore);
  /* eslint-enable global-require */
}

const store = finalCreateStore(combinedReducers);

if (process.env.DEBUG) {
  window.store = store;
}

export default store;
