import { FETCH_CITIES_ERROR, FETCH_CITIES_REQUEST, FETCH_CITIES_SUCCESS, UPLOAD_NEW_CITY_ERROR, UPLOAD_NEW_CITY_REQUEST, UPLOAD_NEW_CITY_SUCCESS } from "./cityTypes"

const initialState = {
    loading: false,
    cities: [],
    error: ""
}

const cityReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        //FETCH NEW CITY AND SET IT
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
                error: action.payload
            }
        }

        //FETCH DATA FROM API
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