import store from "store";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

// import { notification } from "antd";
import {
  SIGNIN_USER,
  SIGNIN_USER_FAILED,
  CHECK_EMAIL,
  CHECK_EMAIL_FAILED,
  OTP_AUTHENTICATION,
  OTP_AUTHENTICATION_FAILED,
  LOGOUT_USERS,
  LOGOUT_USERS_FAILED,
  LOADING_USER,
  SIGNUP_USER,
  SIGNUP_USER_FAILED,
  GET_USER_PROFILE,
  GET_USER_PROFILE_FAILED,
  UPDATE_IDENTIFICATION,
  UPDATE_IDENTIFICATION_FAILED,
} from "../../actionTypes";
import authService from "../../services/auth";

export const checkEmail = (payload) => async (dispatch) => {
  dispatch({ type: LOADING_USER, payload: { loading: true } });
  try {
    const user = await authService.checkEmail(payload);
    if (user?.status === 200) {
      // store.set("userPhone", payload.phone)
      dispatch({ type: LOADING_USER, payload: { loading: false } });
      dispatch({
        type: CHECK_EMAIL,
        payload: {
          status: user.status,
          message: "Email is exist",
          email: user.body.data.email,
        },
      });
    } else {
      dispatch({
        type: CHECK_EMAIL_FAILED,
        payload: { status: 400, message: "Email is not registered" },
      });
      dispatch({ type: LOADING_USER, payload: { loading: false } });
    }
  } catch (error) {
    dispatch({ type: LOADING_USER, payload: { loading: false } });
  }
};

export const signinUser = (payload) => async (dispatch) => {
  dispatch({ type: LOADING_USER, payload: { loading: true } });
  try {
    const user = await authService.signinUser(payload);

    if (user?.status === 200) {
      dispatch({ type: LOADING_USER, payload: { loading: false } });
      dispatch({
        type: SIGNIN_USER,
        payload: {
          status: user.status,
          message: "Email is exist",
          user: user.body.data.userLogedIn,
          token: user.body.data.token,
        },
      });
    } else {
      dispatch({
        type: SIGNIN_USER_FAILED,
        payload: { status: 400, message: "Password is Not correct" },
      });
      dispatch({ type: LOADING_USER, payload: { loading: false } });
    }
  } catch (error) {
    dispatch({ type: LOADING_USER, payload: { loading: false } });
  }
};

export const signupUser = (payload) => async (dispatch) => {
  dispatch({ type: LOADING_USER, payload: { loading: true } });
  try {
    // console.log("><>>>>>>>>>",payload)
    const user = await authService.signupUser(payload);

    if (user?.status === 201) {
      dispatch({ type: LOADING_USER, payload: { loading: false } });
      dispatch({
        type: SIGNUP_USER,
        payload: {
          status: user.status,
          message: "Email is created",
          user: user.body.data.user,
          token: user.body.data.token,
        },
      });
    } else {
      dispatch({
        type: SIGNUP_USER_FAILED,
        payload: { status: 400, message: "Failed to signup" },
      });
      dispatch({ type: LOADING_USER, payload: { loading: false } });
    }
  } catch (error) {
    dispatch({ type: LOADING_USER, payload: { loading: false } });
  }
};

export const registerUserIdentity = (payload) => async (dispatch) => {
  dispatch({ type: LOADING_USER, payload: { loading: true } });
  try {
    const user = await authService.updateUserIdentity(payload);
    if (user?.status === 201) {
      dispatch({ type: LOADING_USER, payload: { loading: false } });
      dispatch({
        type: UPDATE_IDENTIFICATION,
        payload: {
          status: user.status,
          message: "Identity is saved",
          user: user.body.data,
        },
      });
      dispatch({
        type: GET_USER_PROFILE,
        payload: {
          status: user.status,
          message: user.body.message,
          user: user.body.data,
        },
      });
    } else {
      dispatch({
        type: UPDATE_IDENTIFICATION_FAILED,
        payload: {
          status: 400,
          message: "Failed to save new Identity document",
        },
      });
      dispatch({ type: LOADING_USER, payload: { loading: false } });
    }
  } catch (error) {
    dispatch({ type: LOADING_USER, payload: { loading: false } });
  }
};

export const getUserProfile = () => async (dispatch) => {
  dispatch({ type: LOADING_USER, payload: { loading: true } });
  try {
    // console.log("><>>>>>>>>>",payload)
    const user = await authService.getUserProfile();

    if (user?.status === 200) {
      dispatch({ type: LOADING_USER, payload: { loading: false } });
      dispatch({
        type: GET_USER_PROFILE,
        payload: {
          status: user.status,
          message: user.body.message,
          user: user.body.data,
        },
      });
    } else {
      dispatch({
        type: GET_USER_PROFILE_FAILED,
        payload: { status: 400, message: "Failed to get data from backend" },
      });
      dispatch({ type: LOADING_USER, payload: { loading: false } });
    }
  } catch (error) {
    dispatch({ type: LOADING_USER, payload: { loading: false } });
  }
};

export const signinUserWithOTP = (payload) => async (dispatch) => {
  dispatch({ type: LOADING_USER, payload: { loading: true } });
  try {
    const user = await authService.signinUserWithOTP(payload);

    if (user?.status === 200) {
      store.set("x-auth-token", user?.body.data.token);
      dispatch({ type: LOADING_USER, payload: { loading: false } });
      dispatch({
        type: OTP_AUTHENTICATION,
        payload: {
          status: user.status,
          message: user.body.message,
          user: user.body.data.userLogedIn,
          token: user.body.data.token,
        },
      });
    } else {
      dispatch({
        type: OTP_AUTHENTICATION_FAILED,
        payload: { status: 400, message: "OTP is Not correct" },
      });
      dispatch({ type: LOADING_USER, payload: { loading: false } });
    }
  } catch (error) {
    dispatch({ type: LOADING_USER, payload: { loading: false } });
  }
};

// export const signinAdminAction = (payload) => async (dispatch) => {
//   dispatch({ type: LOADING_USER, payload: { loading: true } });
//   try {
//     const user = await authService.signinAdminService(payload);
//     if (user?.status === 200) {
//       store.set("x-auth-token", user?.body.data.token);
//       dispatch({ type: LOADING_USER, payload: { loading: false } });
//       dispatch({
//         type: SIGNIN_ADMIN,
//         payload: {
//           status: user.status,
//           Message: user.body.message,
//           user: user.body.data.user,
//         },
//       });
//       // notification.success({
//       //   message: "Welcome to VRUUM Dashboard!",
//       // });

//       dispatch({ type: RESPONSE_STATUS, payload: { status: user.status } });
//     } else {
//       // notification.error({
//       //   message: "Failed to login! Please verify your credentials",
//       // });
//       dispatch({
//         type: SIGNIN_ADMIN_FAILED,
//         payload: { status: user.status },
//       });
//     }
//     dispatch({ type: LOADING_USER, payload: { loading: false } });
//   } catch (error) {
//     console.log(error);
//     dispatch({ type: SIGNIN_ADMIN_FAILED, payload: { status: 401 } });
//     dispatch({ type: LOADING_USER, payload: { loading: false } });
//   }
// };

// export const getAdminProfileAction = (payload) => async (dispatch) => {
//   dispatch({ type: LOADING_USER, payload: { loading: true } });
//   try {
//     const user = await authService.getUserProfileService(payload);
//     if (user?.status === 200) {
//       dispatch({ type: LOADING_USER, payload: { loading: false } });
//       dispatch({
//         type: GET_ADMIN_PROFILE,
//         payload: {
//           status: user.status,
//           Message: user.body.message,
//           user: user.body.data,
//         },
//       });
//       // notification.success({
//       //   message: "Welcome to VRUUM Dashboard!",
//       // });

//       dispatch({ type: RESPONSE_STATUS, payload: { status: user.status } });
//     } else {
//       // notification.error({
//       //   message: "Failed to login! Please verify your credentials",
//       // });
//       dispatch({
//         type: SIGNIN_ADMIN_FAILED,
//         payload: { status: user.status },
//       });
//     }
//     dispatch({ type: LOADING_USER, payload: { loading: false } });
//   } catch (error) {
//     console.log(error);
//     dispatch({ type: SIGNIN_ADMIN_FAILED, payload: { status: 401 } });
//     dispatch({ type: LOADING_USER, payload: { loading: false } });
//   }
// };

export const logoutUser = () => async (dispatch) => {
  dispatch({ type: LOADING_USER, payload: { loading: true } });
  store.remove("x-auth-token");
  dispatch({
    type: LOGOUT_USERS,
    payload: { status: null, Message: "User logged out" },
  });
  dispatch({
    type: SIGNIN_USER_FAILED,
    payload: { status: null, message: "Password is Not correct" },
  });

  dispatch({ type: LOADING_USER, payload: { loading: false } });
};
// 0783786384 sarah