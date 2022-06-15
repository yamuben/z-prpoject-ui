import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

import apiAuthService from "../../lib/apiAuth";

const checkEmail = async (body) => {
    try {
      return await apiAuthService.post("/email", body);
    } catch (error) {
      console.log("+++++++++++++++++++", error);
    }
  };

  const signinUser = async (body) => {
    try {
      return await apiAuthService.post("/signin", body);
    } catch (error) {
      console.log("+++++++++++++++++++", error);
    }
  };

  const signupUser = async (body) => {
    try {
      return await apiAuthService.post("/signup", body);
    } catch (error) {
      console.log("+++++++++++++++++++", error);
    }
  };

  const signinUserWithOTP = async (body) => {
    try {
      return await apiAuthService.post("/otpauth", body);
    } catch (error) {
      console.log("+++++++++++++++++++", error);
    }
  };
  const updateUserIdentity = async (body) => {
    try {
      return await apiAuthService.post("/createidentity", body);
    } catch (error) {
      console.log("+++++++++++++++++++", error);
    }
  };
  const getUserProfile = async () => {
    try {
      return await apiAuthService.get("/profile");
    } catch (error) {
      console.log("+++++++++++++++++++", error);
    }
  };
    
export default {
  checkEmail,signinUser,signinUserWithOTP,signupUser,getUserProfile,updateUserIdentity
};
