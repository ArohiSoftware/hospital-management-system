import axiosInstanceApp from "../../axiosConfig";

export const GET_APPOINTMENT_REQUEST = 'GET_APPOINTMENT_REQUEST';
export const GET_APPOINTMENT_SUCCESS = 'GET_APPOINTMENT_SUCCESS';
export const GET_APPOINTMENT_FAILURE = 'GET_APPOINTMENT_FAILURE';
export const APPOINTMENT_SEARCH_REQUEST = 'APPOINTMENT_SEARCH_REQUEST';
export const APPOINTMENT_SEARCH_SUCCESS = 'APPOINTMENT_SEARCH_SUCCESS';
export const APPOINTMENT_SEARCH_FAILURE = 'APPOINTMENT_SEARCH_FAILURE';

export const AppointmentSearch = (searchTerm, filterBy, onSuccess) => {
    console.log(searchTerm, filterBy,)
    return async (dispatch) => {
      dispatch({ type: APPOINTMENT_SEARCH_REQUEST });
      try {
        const response = await axiosInstanceApp.post('opdAppointment/search',{searchTerm, filterBy});
       
        dispatch({ type: APPOINTMENT_SEARCH_SUCCESS, payload: response.data });
   
        if (onSuccess) {
          onSuccess(response.data.data);
        } 
      } catch (error) {
        const errorMsg = error.response?.data?.message || error.message;
        dispatch({ type: APPOINTMENT_FAILURE, payload: errorMsg });
      }
    };
  };

export const GetAllAppointment = (onSuccess) => {

  return async (dispatch) => {
    dispatch({ type: GET_APPOINTMENT_REQUEST });
    try {
      const response = await axiosInstanceApp.get('/opdAppointment/AllAppointment');
     
      dispatch({ type: GET_APPOINTMENT_SUCCESS, payload: response.data });
 
      if (onSuccess) {
        onSuccess(response.data.data);
      } 
    } catch (error) {
      const errorMsg = error.response?.data?.message || error.message;
      dispatch({ type: GET_APPOINTMENT_FAILURE, payload: errorMsg });
    }
  };
};