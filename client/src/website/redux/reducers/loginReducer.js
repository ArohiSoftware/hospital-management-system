// src/redux/reducers/authReducer.js
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from "../actions/loginAction";

const initialState = {
  loading: false,
  userInfo: null,
  token: null,
  error: null,
};

export const loginUserAccount = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: action.payload.data, // User information
        token: action.payload.token,
        error: null,
      };

    case LOGIN_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
