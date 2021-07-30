/* eslint-disable import/no-anonymous-default-export */
// import type

import { AUTH_USER, AUTH_USER_ERROR } from "../actions/type";

const INITIAL_STATE = {
  authenticated: '',
  authError: '',
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        authenticated: action.payload.token,
        user: action.payload.user, authError: '',
      };
    case AUTH_USER_ERROR:
      return { ...state, authError: action.payload };
    default:
      return state;
  }
};
