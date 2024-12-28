import axiosInstanceApp from '../../axiosConfig'; // Adjust path if needed

// Action Types
export const TREATMENTOPD_REGISTER_REQUEST = 'PATIENT_REGISTER_REQUEST';
export const TREATMENTOPD_REGISTER_SUCCESS = 'PATIENT_REGISTER_SUCCESS';
export const TREATMENTOPD_REGISTER_FAIL = 'PATIENT_REGISTER_FAIL';
export const TreatmentOpd = (formData, onSuccess) => async (dispatch) => {
  dispatch({ type: TREATMENTOPD_REGISTER_REQUEST });

  try {
    const response = await axiosInstanceApp.post('/opdtreatment/opd-treatments', formData);
    
    dispatch({ type: TREATMENTOPD_REGISTER_SUCCESS, payload: response.data });
    
    // Call onSuccess with response data
    onSuccess(response.data);
  } catch (error) {
    dispatch({ type: TREATMENTOPD_REGISTER_FAIL, payload: error.message });
  }
};
