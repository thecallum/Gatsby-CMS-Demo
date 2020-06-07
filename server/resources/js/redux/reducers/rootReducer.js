import { combineReducers } from "redux";

import main from "./main";
import auth from "./auth";
import page from "./page";

export default combineReducers({ main, auth, page });
