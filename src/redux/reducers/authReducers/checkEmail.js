/* eslint-disable import/no-anonymous-default-export */
import {
  CHECK_EMAIL,
  CHECK_EMAIL_FAILED,
  LOADING_USER,
} from "../../actionTypes";

export const initialState = { status: null };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHECK_EMAIL:
      return { ...state, ...payload };
    case CHECK_EMAIL_FAILED:
      return { ...state, ...payload };
    case LOADING_USER:
      return { ...state, ...payload };
    default:
      return state;
  }
};
