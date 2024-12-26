import axiosInstanceApp from "../../axiosConfig";
import { CookieSet } from "../../utils/setCookie";

// Action Types
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const GET_LOGIN_REQUEST = "GET_LOGIN_REQUEST";
export const GET_LOGIN_SUCCESS = "GET_LOGIN_SUCCESS";
export const GET_LOGIN_FAILURE = "GET_LOGIN_FAILURE";

// Utility to handle token storage
const storeTokens = (accessToken, refreshToken, rememberMe) => {
  const storage = rememberMe ? localStorage : sessionStorage;
  storage.setItem("accessToken", accessToken);
  CookieSet(accessToken, refreshToken);
};

// Login Action
export const login = (userId, password, onSuccess, rememberMe = false) => {
  return async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      const response = await axiosInstanceApp.post("auth/login", { userId, password });
      console.log(response)
      const { accessToken, refreshToken } = response.data;

      // Dispatch success action
      dispatch({ type: LOGIN_SUCCESS, payload: response.data });

      // Store tokens
      storeTokens(accessToken, refreshToken, rememberMe);

      // Trigger callback if provided
      if (onSuccess) onSuccess(response.data);
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Login failed. Please try again.";
      console.error("Login Error:", error); // Log error during development
      dispatch({ type: LOGIN_FAILURE, payload: errorMsg });
    }
  };
};

// Fetch Profile Action
export const getLoginProfile = (onSuccess) => {
  return async (dispatch) => {
    dispatch({ type: GET_LOGIN_REQUEST });

    try {
      const response = await axiosInstanceApp.get("auth/profile");

      // Dispatch success action
      dispatch({ type: GET_LOGIN_SUCCESS, payload: response.data });

      // Trigger callback if provided
      if (onSuccess) onSuccess(response.data);
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Failed to fetch profile. Please try again.";
      console.error("Profile Fetch Error:", error); // Log error during development
      dispatch({ type: GET_LOGIN_FAILURE, payload: errorMsg });
    }
  };
};
