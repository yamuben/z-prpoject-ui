/* eslint-disable import/no-anonymous-default-export */
import {
  UPDATE_IDENTIFICATION,
  UPDATE_IDENTIFICATION_FAILED,
  LOADING_USER
} from "../../actionTypes";

export const initialState = { status: null };

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_IDENTIFICATION:
      return { ...state, ...payload };
    case UPDATE_IDENTIFICATION_FAILED:
      return { ...state, ...payload };
    case LOADING_USER:
      return { ...state, ...payload };

    default:
      return state;
  }
};
