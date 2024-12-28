// src/redux/actions/authActions.js
import axios from "axios";

// Action Types
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

// Action Creator for login
export const loginUser = (credentials) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const response = await axios.post("/api/auth/login", credentials);

    // On success, dispatch LOGIN_SUCCESS and store the token/user info
    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data, // Response from the backend
    });

    // Save token in localStorage
    localStorage.setItem("token", response.data.token);
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response ? error.response.data.message : error.message,
    });
  }
};
