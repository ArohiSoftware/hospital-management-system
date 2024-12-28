// src/app/redux/loginActions.js

import axiosInstanceApp from '../../axiosConfig';
import { CookieSet } from '../../utils/setCookie';

// Action Types
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const GET_LOGIN_REQUEST = 'GET_LOGIN_REQUEST';
export const GET_LOGIN_SUCCESS = 'GET_LOGIN_SUCCESS';
export const GET_LOGIN_FAILURE = 'GET_LOGIN_FAILURE';

export const login = (userId, password, onSuccess) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      const response = await axiosInstanceApp.post('auth/login', { userId, password });
      dispatch({ type: LOGIN_SUCCESS, payload: response.data });
      console.log("Login response", response)
      localStorage.setItem("accessToken", response.data.accessToken)
      if (onSuccess) {
        CookieSet(response.data.accessToken, response.data.refreshToken)
        onSuccess(response.data);
      }
    } catch (error) {
      const errorMsg = error.response?.data?.message || error.message;
      dispatch({ type: LOGIN_FAILURE, payload: errorMsg });
    }
  };
};


export const getLoginProfile = (onSuccess) => {
  return async (dispatch) => {
    dispatch({ type: GET_LOGIN_REQUEST });

    try {

      const response = await axiosInstanceApp.get('auth/profile');

      dispatch({ type: GET_LOGIN_SUCCESS, payload: response.data });


      if (onSuccess) {
        onSuccess(response.data);
      }
    } catch (error) {
      const errorMsg = error.response?.data?.message || error.message;
      dispatch({ type: GET_LOGIN_FAILURE, payload: errorMsg });
    }
  };
};