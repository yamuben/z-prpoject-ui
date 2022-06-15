import { combineReducers } from "redux";

import auth from "./authReducers";
import admin from "./adminReducers";

export default combineReducers({ auth: auth, admin: admin});
