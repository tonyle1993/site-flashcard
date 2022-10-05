import { createStore } from "./core.js";
import reducer from "./reducer.js";

const { attach, connect, dispatch } = createStore(reducer);
window.attach = attach;
export {
  connect,
  dispatch
}