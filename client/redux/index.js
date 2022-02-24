import { combineReducers } from "redux";
import kittensReducer from "./kittens";
import puppiesReducer from "./puppies";
import usersReducer from "./users";


const appReducer = combineReducers({
  kittens: kittensReducer,
  puppies: puppiesReducer,
  users: usersReducer,
});

export default appReducer;
