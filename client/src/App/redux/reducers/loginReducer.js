import {
LOGIN_FAILURE,
LOGIN_REQUEST,
LOGIN_SUCCESS,

GET_LOGIN_REQUEST,
GET_LOGIN_SUCCESS,
GET_LOGIN_FAILURE
} from "../actions/loginActions";

const initialState = {
  loading: false,
  patient: null,
  error: null,
};
export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null };

    case LOGIN_SUCCESS:
      return { ...state, loading: false, accountData: action.payload };

    case LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload };



      case GET_LOGIN_REQUEST:
        return { ...state, loading: true, error: null };
  
      case GET_LOGIN_SUCCESS:
        return { ...state, loading: false, profile: action.payload };
  
      case GET_LOGIN_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
    default:
      return state;
  }
};
