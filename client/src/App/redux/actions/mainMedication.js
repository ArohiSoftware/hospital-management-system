import axiosInstanceApp from '../../axiosConfig'; // Adjust path if needed

// Action Types
export const MEDICATION_CREATE_REQUEST = 'MEDICATION_CREATE_REQUEST';
export const MEDICATION_CREATE_SUCCESS = 'MEDICATION_CREATE_SUCCESS';
export const MEDICATION_CREATE_FAIL = 'MEDICATION_CREATE_FAIL';

export const createMedication = (formData, onSuccess) => async (dispatch) => {
  dispatch({ type: MEDICATION_CREATE_REQUEST });

  try {
    
    const response = await axiosInstanceApp.post('/medication_file/main-medications', formData);
    
    dispatch({ type: MEDICATION_CREATE_SUCCESS, payload: response.data });
    
    // Call onSuccess with response data
    onSuccess(response.data);
  } catch (error) {
    dispatch({ type: MEDICATION_CREATE_FAIL, payload: error.message });
  }
};