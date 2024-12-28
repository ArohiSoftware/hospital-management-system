import {
    APPOINTMENT_REGISTER_REQUEST,
    APPOINTMENT_REGISTER_SUCCESS,
    APPOINTMENT_REGISTER_FAIL,
    GET_APPOINTMENT_REQUEST,
    GET_APPOINTMENT_SUCCESS,
    GET_APPOINTMENT_FAILURE,
  } from "../actions/Appointment.js";
  
  const initialState = {
    loading: false,
    patient: null,
    error: null,
  };
  export const AppointmentSearchReducer = (state = initialState, action) => {
    switch (action.type) {
      case APPOINTMENT_REGISTER_REQUEST:
        return { ...state, loading: true, error: null };
  
      case APPOINTMENT_REGISTER_SUCCESS:
        return { ...state, loading: false, accountData: action.payload };
  
      case APPOINTMENT_REGISTER_FAIL:
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  export const GetAllAppointmentReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_APPOINTMENT_REQUEST:
        return { ...state, loading: true, error: null };
  
      case GET_APPOINTMENT_SUCCESS:
        return { ...state, loading: false, accountData: action.payload };
  
      case GET_APPOINTMENT_FAILURE:
        return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  