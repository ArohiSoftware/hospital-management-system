import { TREATMENTOPD_REGISTER_FAIL, TREATMENTOPD_REGISTER_REQUEST, TREATMENTOPD_REGISTER_SUCCESS } from "../actions/Treatment";


export const TREATMENTOPDReducer = (state = initialState, action) => {
    switch (action.type) {
        case TREATMENTOPD_REGISTER_REQUEST:
            return { ...state, loading: false, error: null };

        case TREATMENTOPD_REGISTER_SUCCESS:
            return { ...state, loading: false, profiledata: action.payload };

        case TREATMENTOPD_REGISTER_FAIL:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
}