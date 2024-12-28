// reducers/paymentReducer.js
import {
    CREATE_PAYMENT_METHOD_REQUEST,
    CREATE_PAYMENT_METHOD_SUCCESS,
    CREATE_PAYMENT_METHOD_FAILURE,
    VERIFY_PAYMENT_REQUEST,
    VERIFY_PAYMENT_SUCCESS,
    VERIFY_PAYMENT_FAILURE,
  } from '../actions/PaymentAction';
  
  const initialState = {
    loading: false,
    order: null,
    paymentVerificationStatus: null,
    error: null,
  };
  
  const paymentReducer = (state = initialState, action) => {
    switch (action.type) {
      case CREATE_PAYMENT_METHOD_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case CREATE_PAYMENT_METHOD_SUCCESS:
        return {
          ...state,
          
          order: action.payload, // the created order data
          loading: false,
          error: null,
        };
  
      case CREATE_PAYMENT_METHOD_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload, // error message
        };
  
      case VERIFY_PAYMENT_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case VERIFY_PAYMENT_SUCCESS:
        return {
          ...state,
          paymentVerificationStatus: action.payload, // success message from server
          loading: false,
          error: null,
        };
  
      case VERIFY_PAYMENT_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload, // error message
        };
  
      default:
        return state;
    }
  };
  
  export default paymentReducer;
  