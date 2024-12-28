import {
    CREATE_PROFILE_REQUEST,
    CREATE_PROFILE_SUCCESS,
    CREATE_PROFILE_FAILURE,


    GET_PROFILE_REQUEST,
    GET_PROFILE_SUCCESS,
    GET_PROFILE_FAILURE,

    GET_PROFILEID_REQUEST,
    GET_PROFILEID_SUCCESS,
    GET_PROFILEID_FAILURE,

    DELETE_PROFILE_REQUEST,
    DELETE_PROFILE_SUCCESS,
    DELETE_PROFILE_FAILURE,

    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_FAILURE,



    STAFF_SEARCH_REQUEST,
    STAFF_SEARCH_SUCCESS,
    STAFF_SEARCH_FAILURE
} from "../actions/StaffProfileAction";



const initialState = {
    loading: false,
    profile: null,
    userprofile:null,
    error: null,
};


export const ProfileReducer = (state = initialState, action) => {
    // console.log("Reducer action type: ", action.type);
    switch (action.type) {
        case CREATE_PROFILE_REQUEST:
            return { ...state, loading: false, error: null };

        case CREATE_PROFILE_SUCCESS:
            return { ...state, loading: false, profile: action.payload };

        case CREATE_PROFILE_FAILURE:
            return { ...state, loading: false, error: action.payload };



        case GET_PROFILE_REQUEST:
            return { ...state, loading: true };

        case GET_PROFILE_SUCCESS:
            // console.log("GET_PROFILE_SUCCESS", action.payload)
            return { ...state, loading: false, profile: action.payload, error: null };

        case GET_PROFILE_FAILURE:
            return { ...state, loading: false, error: action.payload };

            

        case GET_PROFILEID_REQUEST:
            return { ...state, loading: true };

        case GET_PROFILEID_SUCCESS:
            // console.log("GET_PROFILE_SUCCESS", action.payload)
            return { ...state, loading: false, userprofile: action.payload };

        case GET_PROFILEID_FAILURE:
            return { ...state, loading: false, error: action.payload };



        //   case 'UPDATE_PROFILE_SUCCESS':
        //         return {
        //           ...state,
        //           profile: state.profile.map((profile) =>
        //             profile.id === action.payload.id ? action.payload : profile
        //           ),
        //         };
        //       case 'UPDATE_PROFILE_FAILURE':
        //         return {
        //           ...state,
        //           error: action.payload,
        //         };
        //       default:
        //         return state;
        //     }
        //   };



        case UPDATE_PROFILE_REQUEST:
            return { ...state, loading: true, error: null };

        // case UPDATE_PROFILE_SUCCESS:
        //     return {
        //         ...state,
        //         loading: false,
        //         profile: { ...state.profile, ...action.payload }, // Update the profile data with the new data
        //     };

        case UPDATE_PROFILE_SUCCESS:
            return { ...state, loading: false, profile: action.payload };


        case UPDATE_PROFILE_FAILURE:
            return { ...state, loading: false, error: action.payload };



        case DELETE_PROFILE_REQUEST:
            return { ...state, loading: true, error: null };

        case DELETE_PROFILE_SUCCESS:
            return { ...state, loading: false, profile: null }; // Clear the profile after deletion

        case DELETE_PROFILE_FAILURE:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
}
export const SearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case STAFF_SEARCH_REQUEST:
            return { ...state, loading: false, error: null };

        case STAFF_SEARCH_SUCCESS:
            return { ...state, loading: false, profiledata: action.payload };

        case STAFF_SEARCH_FAILURE:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
}