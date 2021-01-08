import { combineReducers } from "redux";
import users from "./user/reducer";
import services from "./services/reducer";

const rootReducer = combineReducers({
  services: services(),
  users: users(),
});

export default rootReducer;
