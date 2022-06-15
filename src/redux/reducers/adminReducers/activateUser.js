/* eslint-disable import/no-anonymous-default-export */
import {
  ACTIVATE_USER,ACTIVATE_USER_FAILED,LOADING_USER
} from "../../actionTypes";

export const initialState = {loading:true};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTIVATE_USER:
      return { ...state, ...payload };

    case ACTIVATE_USER_FAILED:
      return { ...state, ...payload };

    case LOADING_USER:
      return { ...state, ...payload };

    default:
      return state;
  }
};
