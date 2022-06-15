import { combineReducers } from "redux";

import allUsers from "./getAllUsers";
import userActivated from "./activateUser"

export default combineReducers({
 allUsers: allUsers,
 activatedUser:userActivated
});
