import { FETCH_CITIES_ERROR, FETCH_CITIES_REQUEST, FETCH_CITIES_SUCCESS, UPLOAD_NEW_CITY_REQUEST } from "./cityTypes"

const initialState = {
    loading: false,
    cities: [],
    error: ""
}

const cityReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case FETCH_CITIES_REQUEST: {
            return {
                ...state,
                loading: true
            }
        }
        case FETCH_CITIES_SUCCESS: {
            return {
                ...state,
                cities: action.payload
            }
        }
        case FETCH_CITIES_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }

        default:
            return state
    }
}

export default cityReducer