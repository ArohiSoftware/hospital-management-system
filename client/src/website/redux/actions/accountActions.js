// accountActions.js
import axiosInstanceWeb from "../../axiosConfig";

// Action Types
export const CREATE_ACCOUNT_REQUEST = 'CREATE_ACCOUNT_REQUEST';
export const CREATE_ACCOUNT_SUCCESS = 'CREATE_ACCOUNT_SUCCESS';
export const CREATE_ACCOUNT_FAILURE = 'CREATE_ACCOUNT_FAILURE';

// Action Creator
export const createAccount = (formData, onSuccess) => async (dispatch) => {
  dispatch({ type: CREATE_ACCOUNT_REQUEST });

  try {
    const response = await axiosInstanceWeb.post('/marketing/create', formData);

    console.log("accountData",response)
    localStorage.setItem("token",response.data.token)
    
    dispatch({ type: CREATE_ACCOUNT_SUCCESS, payload: response.data });
    
    // If successful, call the onSuccess callback
    onSuccess();
  } catch (error) {
    dispatch({ type: CREATE_ACCOUNT_FAILURE, payload: error.message });
  }
};
