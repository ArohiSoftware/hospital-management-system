import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  GET_LOGIN_REQUEST,
  GET_LOGIN_SUCCESS,
  GET_LOGIN_FAILURE,
} from "../actions/loginActions";

const initialState = {
  loading: false, // Tracks whether a request is in progress
  accountData: null, // Stores logged-in user data
  profile: null, // Stores user profile data (if fetched separately)
  error: null, // Stores error messages
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    // Login actions
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null };

    case LOGIN_SUCCESS:
      return { ...state, loading: false, accountData: action.payload };

    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: typeof action.payload === "string" ? action.payload : "Login failed. Please try again.",
      };

    // Fetch profile actions
    case GET_LOGIN_REQUEST:
      return { ...state, loading: true, error: null };

    case GET_LOGIN_SUCCESS:
      return { ...state, loading: false, profile: action.payload };

    case GET_LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: typeof action.payload === "string" ? action.payload : "Failed to fetch profile. Please try again.",
      };

    default:
      return state;
  }
};
