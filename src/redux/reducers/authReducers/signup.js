/* eslint-disable import/no-anonymous-default-export */
import {
  SIGNUP_USER,
  SIGNUP_USER_FAILED,
  LOADING_USER
} from "../../actionTypes";

export const initialState = { status: null };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNUP_USER:
      return { ...state, ...payload };
    case SIGNUP_USER_FAILED:
      return { ...state, ...payload };
    case LOADING_USER:
      return { ...state, ...payload };

    default:
      return state;
  }
};
