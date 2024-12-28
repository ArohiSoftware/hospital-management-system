import axiosInstanceWeb from "../../axiosConfig";

export const FETCH_AD_REQUEST = 'FETCH_AD_REQUEST';
export const FETCH_AD_SUCCESS = 'FETCH_AD_SUCCESS';
export const FETCH_AD_FAILURE = 'FETCH_AD_FAILURE';

export const UPDATE_AD_REQUEST = 'UPDATE_AD_REQUEST';
export const UPDATE_AD_SUCCESS = 'UPDATE_AD_SUCCESS';
export const UPDATE_AD_FAILURE = 'UPDATE_AD_FAILURE';

export const CREATE_AD_REQUEST = 'CREATE_AD_REQUEST';
export const CREATE_AD_SUCCESS = 'CREATE_AD_SUCCESS';
export const CREATE_AD_FAILURE = 'CREATE_AD_FAILURE';

export const DELETE_AD_REQUEST = 'DELETE_AD_REQUEST';
export const DELETE_AD_SUCCESS = 'DELETE_AD_SUCCESS';
export const DELETE_AD_FAILURE = 'DELETE_AD_FAILURE';


// Get all Data
export const fetchAdvertisement = () => async (dispatch) => {
  dispatch({ type: FETCH_AD_REQUEST });

  try {
   
    const response = await axiosInstanceWeb.get(`/advertisement/getall_ad`);
    
    dispatch({ type: FETCH_AD_SUCCESS, payload: response.data });
  } catch (error) {
    
    dispatch({
      type: FETCH_AD_FAILURE,
      payload: error.message || 'Something went wrong!',
    });
  }
};



// Update Ad
export const updateAdvertisement = (advertisementData) => async (dispatch) => {
  dispatch({ type: UPDATE_AD_REQUEST });
  try {
    const { id, title, description, advertise_img } = advertisementData;
    
    console.log("update id", id, advertisementData);
    
     const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('advertise_img', advertise_img);

    const response = await axiosInstanceWeb.put(`/advertisement/update_ad/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log("update ad", response);

    dispatch({ type: UPDATE_AD_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({
      type: UPDATE_AD_FAILURE,
      payload: error.message || 'Something went wrong!',
    });
  }
};


//Create Ad
export const createAdvertisement = (advertisementData) => async (dispatch) => {
  dispatch({ type: CREATE_AD_REQUEST });

  try {
    const response = await axiosInstanceWeb.post(`/advertisement/create_ad`, advertisementData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    dispatch({ type: CREATE_AD_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({
      type: CREATE_AD_FAILURE,
      payload: error.message || 'Something went wrong!',
    });
  }
};


//Delete Ad
export const deleteAdvertisement = (adId) => async (dispatch) => {
  dispatch({ type: DELETE_AD_REQUEST });

  try {
    const response = await axiosInstanceWeb.delete(`/advertisement/delete_ad/${adId}`);
    dispatch({ type: DELETE_AD_SUCCESS, payload:adId }); 
  } catch (error) {
    dispatch({
      type: DELETE_AD_FAILURE,
      payload: error.message || 'Something went wrong!',
    });
  }
};




