/* eslint-disable import/no-anonymous-default-export */
import {
  OTP_AUTHENTICATION,
  OTP_AUTHENTICATION_FAILED,
  LOADING_USER
} from "../../actionTypes";

export const initialState = { status: null };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case OTP_AUTHENTICATION:
      return { ...state, ...payload };
    case OTP_AUTHENTICATION_FAILED:
      return { ...state, ...payload };
    case LOADING_USER:
      return { ...state, ...payload };

    default:
      return state;
  }
};
