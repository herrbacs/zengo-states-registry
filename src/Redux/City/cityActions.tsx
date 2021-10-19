import axios from "axios"
import { UploadCityRequest } from "../State/stateTypes"

import {
    FETCH_CITIES_ERROR,
    FETCH_CITIES_REQUEST,
    FETCH_CITIES_SUCCESS,
    UPLOAD_NEW_CITY_ERROR,
    UPLOAD_NEW_CITY_REQUEST,
    UPLOAD_NEW_CITY_SUCCESS
} from "./cityTypes"


//SEND NEW CITY TO API
export const uploadNewCityRequest = () => {
    return { type: UPLOAD_NEW_CITY_REQUEST }
}
export const uploadNewCitySuccess = () => {
    return { type: UPLOAD_NEW_CITY_SUCCESS }
}
export const uploadNewCityFailure = () => {
    return { type: UPLOAD_NEW_CITY_ERROR }
}
export const uploadNewCity = (city: UploadCityRequest) => {
    return (dispatch: Function) => {

        dispatch(uploadNewCityRequest)

        axios.get("https://probafeladat-api.zengo.eu/api/city/", {
            headers: {
                'token': '5ed2c5de7e3f5f797b1e7ab5a8e01e43',
                'content-type': 'application/x-www-form-urlencoded'
            },
            data: {
                //SET BODY
            }
        })
            .then((response: any) => {
                //ADD NEW CITY 
            })
            .catch((error: any) => {
                //SET ERROR IF DUPLICATED CITY
            })

    }
}


//GET CITIES FROM API
export const fetchCitiesRequest = () => {
    return { type: FETCH_CITIES_REQUEST }
}
export const fetchCitiesSuccess = (cities: any) => {
    return { type: FETCH_CITIES_SUCCESS, payload: cities }
}
export const fetchCitiesFailure = (error: any) => {
    return { type: FETCH_CITIES_ERROR, payload: error }
}
export const fetchCities = (stateId: number) => {
    return (dispatch: Function) => {

        dispatch(fetchCitiesRequest)

        const form_data = new FormData();
        form_data.append('state_id', stateId.toString());

        axios.post(`https://probafeladat-api.zengo.eu/api/state_city`,
            form_data,
            {
                headers: {
                    'token': '5ed2c5de7e3f5f797b1e7ab5a8e01e43',
                    'content-type': 'form-data'
                }
            }).then((response: any) => {
                const citiesFromApi = response.data.data
                dispatch(fetchCitiesSuccess(citiesFromApi))
            })
            .catch((error: any) => {
                dispatch(fetchCitiesSuccess(error))
            })

    }
}