/* eslint-disable import/no-anonymous-default-export */
import {
  SIGNIN_USER,
  SIGNIN_USER_FAILED,
  CHECK_EMAIL,
  LOADING_USER
} from "../../actionTypes";

export const initialState = { status: null };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNIN_USER:
      return { ...state, ...payload };
    case SIGNIN_USER_FAILED:
      return { ...state, ...payload };
    case LOADING_USER:
      return { ...state, ...payload };

    default:
      return state;
  }
};
