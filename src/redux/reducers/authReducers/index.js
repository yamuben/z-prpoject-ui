import { combineReducers } from "redux";

import signin from "./signin";
import loadingUser from "./loadingUser";
import checkEmail from "./checkEmail";
import signinUserWithOTP from "./signinWithOTP";
import newUser from "./signup";
import profile from "./userProfile";
import identity from "./updateUserIdentity";

export default combineReducers({
  signin: signin,
  loadingUser: loadingUser,
  email: checkEmail,
  otpSignin: signinUserWithOTP,
  newUser: newUser,
  userProfile: profile,
  userIdentity: identity,
});
