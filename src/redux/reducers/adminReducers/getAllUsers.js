/* eslint-disable import/no-anonymous-default-export */
import {
  GET_ALL_USER_INFOS,GET_ALL_USER_INFOS_FAILED,LOADING_USER
} from "../../actionTypes";

export const initialState = {loading:true};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_USER_INFOS:
      return { ...state, ...payload };

    case GET_ALL_USER_INFOS_FAILED:
      return { ...state, ...payload };

    case LOADING_USER:
      return { ...state, ...payload };

    default:
      return state;
  }
};
