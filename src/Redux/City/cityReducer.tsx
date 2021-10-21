import {
    City,
    CityReducerState,
    DELETE_CITY_ERROR,
    DELETE_CITY_REQUEST,
    DELETE_CITY_SUCCESS,
    FETCH_CITIES_ERROR,
    FETCH_CITIES_REQUEST,
    FETCH_CITIES_SUCCESS,
    UPDATE_CITY_ERROR,
    UPDATE_CITY_REQUEST,
    UPDATE_CITY_SUCCESS,
    UPLOAD_NEW_CITY_ERROR,
    UPLOAD_NEW_CITY_REQUEST,
    UPLOAD_NEW_CITY_SUCCESS
} from "./cityTypes"

const initialState = {
    loading: false,
    cities: [],
    uploadError: "",
    deleteError: "",
    fetchError: ""
}

const cityReducer = (state: CityReducerState = initialState, action: any) => {
    switch (action.type) {
        //UPLOAD NEW CITY AND SET IT
        case UPLOAD_NEW_CITY_REQUEST: {
            return {
                ...state,
                loading: true
            }
        }
        case UPLOAD_NEW_CITY_SUCCESS: {
            
            return {
                ...state,
                loading: false,
                uploadError: "",
                cities: state.cities && state.cities.length > 0 ? [
                    ...state.cities,
                    action.payload
                ]
                :[action.payload]
            }
        }
        case UPLOAD_NEW_CITY_ERROR: {
            return {
                ...state,
                loading: false,
                uploadError: action.payload
            }
        }

        //FETCH CITIES FROM API
        case FETCH_CITIES_REQUEST: {
            return {
                ...state,
                loading: true
            }
        }
        case FETCH_CITIES_SUCCESS: {
            return {
                ...state,
                loading: false,
                cities: action.payload,
            }
        }
        case FETCH_CITIES_ERROR: {
            return {
                ...state,
                loading: false,
                fetchError: action.payload,
            }
        }

        //DELETE CITY
        case DELETE_CITY_REQUEST: {
            return {
                ...state,
                loading: true,
                uploadError: "",
            }
        }
        case DELETE_CITY_SUCCESS: {
            return {
                ...state,
                loading: false,
                cities: state.cities.filter(
                    (city: City) => city.id !== action.payload)
            }
        }
        case DELETE_CITY_ERROR: {
            return {
                ...state,
                loading: false,
                deleteError: action.payload
            }
        }

        //UPDATE CITY
        case UPDATE_CITY_REQUEST: {
            return {
                ...state,
                loading: true,
                uploadError: "",
            }
        }
        case UPDATE_CITY_SUCCESS: {
            return {
                ...state,
                loading: false,
                cities: state.cities.map((city: City) => {
                    if (city.id === action.payload.id) {
                        return {
                            ...city,
                            name: action.payload.name
                        }
                    } else {
                        return city
                    }
                }
                )
            }
        }
        case UPDATE_CITY_ERROR: {
            return {
                ...state,
                loading: false,
                deleteError: action.payload
            }
        }

        default:
            return state
    }
}

export default cityReducer