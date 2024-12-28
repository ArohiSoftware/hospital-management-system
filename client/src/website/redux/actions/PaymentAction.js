import axiosInstanceWeb from "../../axiosConfig";


export const CREATE_PAYMENT_METHOD_REQUEST = 'CREATE_PAYMENT_METHOD_REQUEST';
export const CREATE_PAYMENT_METHOD_SUCCESS = 'CREATE_PAYMENT_METHOD_SUCCESS';
export const CREATE_PAYMENT_METHOD_FAILURE = 'CREATE_PAYMENT_METHOD_FAILURE';

export const VERIFY_PAYMENT_REQUEST = 'VERIFY_PAYMENT_REQUEST';
export const VERIFY_PAYMENT_SUCCESS = 'VERIFY_PAYMENT_SUCCESS';
export const VERIFY_PAYMENT_FAILURE = 'VERIFY_PAYMENT_FAILURE';


// Action to create payment method
export const createPaymentMethod = (paymentDetails) => async (dispatch) => {

console.log("createPaymentMethod paymentDetails",paymentDetails)

  dispatch({ type: CREATE_PAYMENT_METHOD_REQUEST });

  try {
    const token = localStorage.getItem('token');
    console.log("token", token)
    if (!token) {
      throw new Error('No token found');
    }

    const response = await axiosInstanceWeb.post(`/marketing/createpay`, paymentDetails, {
      headers: {
        "Authorization": `Bearer ${token}`
      }

    });
    console.log("createPaymentMethod",response)
    dispatch({
      type: CREATE_PAYMENT_METHOD_SUCCESS,
      payload: response.data, // the response from the server (order data)
    });
  } catch (error) {
    dispatch({
      type: CREATE_PAYMENT_METHOD_FAILURE,
      payload: error.response?.data?.error || error.message,
    });
  }
};

// Action to verify payment
export const verifyPayment = (paymentVerificationDetails) => async (dispatch) => {
console.log("verifyPayment",paymentVerificationDetails)

  dispatch({ type: VERIFY_PAYMENT_REQUEST });

  try {
    const response = await axiosInstanceWeb.post(`/marketing/verifyPayment`, paymentVerificationDetails);

    console.log("verifyPayment response",response)
    dispatch({
      type: VERIFY_PAYMENT_SUCCESS,
      payload: response.data, // success message
    });
  } catch (error) {
    dispatch({
      type: VERIFY_PAYMENT_FAILURE,
      payload: error.response?.data?.error || error.message,
    });
  }
};
