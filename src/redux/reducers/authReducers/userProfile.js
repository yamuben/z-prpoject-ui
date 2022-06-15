/* eslint-disable import/no-anonymous-default-export */
import {
  GET_USER_PROFILE,
  GET_USER_PROFILE_FAILED,
  LOADING_USER,
} from "../../actionTypes";

export const initialState = { status: null };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_PROFILE:
      return { ...state, ...payload };
    case GET_USER_PROFILE_FAILED:
      return { ...state, ...payload };
    case LOADING_USER:
      return { ...state, ...payload };

    default:
      return state;
  }
};
