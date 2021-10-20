import axios from "axios"

import {
    DELETE_CITY_ERROR,
    DELETE_CITY_REQUEST,
    DELETE_CITY_SUCCESS,
    FETCH_CITIES_ERROR,
    FETCH_CITIES_REQUEST,
    FETCH_CITIES_SUCCESS,
    UploadCity,
    UPLOAD_NEW_CITY_ERROR,
    UPLOAD_NEW_CITY_REQUEST,
    UPLOAD_NEW_CITY_SUCCESS
} from "./cityTypes"


//SEND NEW CITY TO API
export const uploadNewCityRequest = () => {
    return { type: UPLOAD_NEW_CITY_REQUEST }
}
export const uploadNewCitySuccess = (city: UploadCity) => {
    return { type: UPLOAD_NEW_CITY_SUCCESS, payload: city }
}
export const uploadNewCityError = (error: String) => {
    return { type: UPLOAD_NEW_CITY_ERROR, payload: error }
}
export const uploadNewCity = (stateId: number, newCityName: String) => {
    return (dispatch: Function) => {

        dispatch(uploadNewCityRequest)

        const params = new URLSearchParams();
        params.append('name', newCityName.toString());
        params.append('state_id', stateId.toString());

        axios.put("https://probafeladat-api.zengo.eu/api/city",
            params,
            {
                headers: {
                    'token': '5ed2c5de7e3f5f797b1e7ab5a8e01e43',
                    'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
                }
            }
        )
            .then((response: any) => {
                let errorMsg = ""
                //CHECK ERROR MESSAGE IN RESPONSE
                if (typeof response.data.errorMessage === 'object') {
                    errorMsg = response.data.errorMessage.name[0]
                    dispatch(uploadNewCityError(errorMsg))
                } else {
                    const newCityObject = response.data.data
                    dispatch(uploadNewCitySuccess(newCityObject))
                }

            })
            .catch((error: any) => {
                console.log(error)
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

//DELETE CITY
export const deleteCityRequest = () => {
    return { type: DELETE_CITY_REQUEST }
}
export const deleteCitySuccess = (cityId:number) => {
    return { type: DELETE_CITY_SUCCESS, payload: cityId}
}
export const deleteCityFailure = (error: any) => {
    return { type: DELETE_CITY_ERROR, payload: error }
}
export const deleteCity = (cityId: number) => {
    return (dispatch: Function) => {
        dispatch(deleteCityRequest)

        const params = new URLSearchParams();
        params.append('city_id', cityId.toString());

        axios.delete(`https://probafeladat-api.zengo.eu/api/city`,
            {
                headers: {
                    'token': '5ed2c5de7e3f5f797b1e7ab5a8e01e43',
                    'content-type': 'application/x-www-form-urlencoded'
                },
                params
            }).then((response: any) => {
                console.log(response)
                if(response.data.success){
                    dispatch(deleteCitySuccess(cityId))
                }
            })
            .catch((error: any) => {
                console.log(error)
            })

    }
}