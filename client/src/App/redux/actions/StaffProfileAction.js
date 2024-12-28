import axiosInstanceApp from "../../axiosConfig";

export const STAFF_SEARCH_REQUEST = 'APPOINTMENT_SEARCH_REQUEST';
export const STAFF_SEARCH_SUCCESS = 'APPOINTMENT_SEARCH_SUCCESS';
export const STAFF_SEARCH_FAILURE = 'APPOINTMENT_SEARCH_FAILURE';

export const CREATE_PROFILE_REQUEST = 'CREATE_PROFILE_REQUEST';
export const CREATE_PROFILE_SUCCESS = 'CREATE_PROFILE_SUCCESS';
export const CREATE_PROFILE_FAILURE = 'CREATE_PROFILE_FAILURE';

export const GET_PROFILE_REQUEST = 'GET_PROFILE_REQUEST';
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const GET_PROFILE_FAILURE = 'GET_PROFILE_FAILURE';

export const GET_PROFILEID_REQUEST = 'GET_PROFILEID_REQUEST';
export const GET_PROFILEID_SUCCESS = 'GET_PROFILEID_SUCCESS';
export const GET_PROFILEID_FAILURE = 'GET_PROFILEID_FAILURE';

export const UPDATE_PROFILE_REQUEST = 'UPDATE_PROFILE_REQUEST';
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
export const UPDATE_PROFILE_FAILURE = 'UPDATE_PROFILE_FAILURE';

export const DELETE_PROFILE_REQUEST = 'DELETE_PROFILE_REQUEST';
export const DELETE_PROFILE_SUCCESS = 'DELETE_PROFILE_SUCCESS';
export const DELETE_PROFILE_FAILURE = 'DELETE_PROFILE_FAILURE';


export const createProfile = (formData, onSuccess) => async (dispatch) => {
  dispatch({ type: CREATE_PROFILE_REQUEST });

  try {
    const response = await axiosInstanceApp.post('/staff/create', formData);
    dispatch({ type: CREATE_PROFILE_SUCCESS, payload: response.data });
    onSuccess(response.data);
  } catch (error) {
    dispatch({ type: CREATE_PROFILE_FAILURE, payload: error.message });
  }
}



export const getstaffdata = () => async (dispatch) => {
  dispatch({ type: GET_PROFILE_REQUEST });

  try {

    const response = await axiosInstanceApp.get(`/staff/getAll`);

    console.log("getstaff data", response)

    dispatch({ type: GET_PROFILE_SUCCESS, payload: response.data });
  } catch (error) {

    dispatch({
      type: GET_PROFILE_FAILURE,
      payload: error.message || 'Something went wrong!',
    });
  }
};

export const getprofile = () => async (dispatch) => {
  dispatch({ type: GET_PROFILEID_REQUEST });

  try {
    const token = localStorage.getItem('accessToken');
    console.log("token", token)
    if (!token) {
      throw new Error('No token found');
    }

    const response = await axiosInstanceApp.get(`/staff/profile`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }

    });


    console.log("get profile", response.data)

    dispatch({ type: GET_PROFILEID_SUCCESS, payload: response.data });
  } catch (error) {

    dispatch({
      type: GET_PROFILEID_FAILURE,
      payload: error.message || 'Something went wrong!',
    });
  }
};


export const deleteProfile = (id) => async (dispatch) => {
  dispatch({ type: DELETE_PROFILE_REQUEST });

  try {
    const response = await axiosInstanceApp.delete(`/staff/delete/${id}`);
    dispatch({ type: DELETE_PROFILE_SUCCESS, payload: id });
  } catch (error) {
    dispatch({
      type: DELETE_PROFILE_FAILURE,
      payload: error.message || 'Something went wrong!',
    });
  }
};


export const updateProfile = (formData, onSuccess) => async (dispatch) => {
  dispatch({ type: UPDATE_PROFILE_REQUEST });

  try {
    const response = await axiosInstanceApp.put(`/staff/update/${formData.id}`, formData);
    console.log('Updated Profile Data:', response.data);
    dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: response.data });
    onSuccess(response.data);
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAILURE,
      payload: error.message || 'Something went wrong!',
    });
  }

};




// export const updateProfile = (updatedProfile) => {
//     return async (dispatch) => {
//       try {
//         const response = await put(`/staff/update/${updatedProfile.id}`, {
//           method: 'PUT',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(updatedProfile),
//         });
//         const data = await response.json();
//         dispatch({
//           type: 'UPDATE_PROFILE_SUCCESS',
//           payload: data,
//         });
//       } catch (error) {
//         dispatch({
//           type: 'UPDATE_PROFILE_FAILURE',
//           payload: error,
//         });
//       }
//     };
//   };



export const StaffSearch = (name, onSuccess) => {
  console.log(name); // Corrected log
  return async (dispatch) => {
    dispatch({ type: STAFF_SEARCH_REQUEST });
    try {
      const response = await axiosInstanceApp.post('/staff/getByName', { name });

      dispatch({ type: STAFF_SEARCH_SUCCESS, payload: response.data });

      if (typeof onSuccess === 'function') {
        onSuccess(response.data);
      }
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Something went wrong. Please try again.";
      dispatch({ type: STAFF_SEARCH_FAILURE, payload: errorMsg });
      // Optionally log the error
      console.error("Error in StaffSearch:", errorMsg);
    }
  };
};

