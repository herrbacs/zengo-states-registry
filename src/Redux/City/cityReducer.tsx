import { City, DELETE_CITY_ERROR, DELETE_CITY_REQUEST, DELETE_CITY_SUCCESS, FETCH_CITIES_ERROR, FETCH_CITIES_REQUEST, FETCH_CITIES_SUCCESS, UPLOAD_NEW_CITY_ERROR, UPLOAD_NEW_CITY_REQUEST, UPLOAD_NEW_CITY_SUCCESS } from "./cityTypes"

const initialState = {
    loading: false,
    cities: [],
    uploadError: "",
    deleteError: "",
    fetchError: ""
}

const cityReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        //UPLOAD NEW CITY AND SET IT
        case UPLOAD_NEW_CITY_REQUEST : {
            return{
                ...state,
                loading:true
            }
        }
        case UPLOAD_NEW_CITY_SUCCESS : {
            return{
                ...state,
                loading:false,
                cities:[
                    ...state.cities,
                    action.payload
                ]
            }
        }
        case UPLOAD_NEW_CITY_ERROR : {
            return{
                ...state,
                loading:false,
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
                cities: action.payload
            }
        }
        case FETCH_CITIES_ERROR: {
            return {
                ...state,
                fetchError: action.payload
            }
        }

        //DELETE 
        case DELETE_CITY_REQUEST: {
            return {
                ...state,
                loading: true
            }
        }
        case DELETE_CITY_SUCCESS: {
            return {
                ...state,
                cities: state.cities.filter(
                    (city:City) => city.id !== action.payload)
            }
        }
        case DELETE_CITY_ERROR: {
            return {
                ...state,
                deleteError: action.payload
            }
        }

        default:
            return state
    }
}

export default cityReducer