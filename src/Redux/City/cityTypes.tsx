export const UPLOAD_NEW_CITY_REQUEST = "UPLOAD_NEW_CITY_REQUEST"
export const UPLOAD_NEW_CITY_SUCCESS = "UPLOAD_NEW_CITY_SUCCESS"
export const UPLOAD_NEW_CITY_ERROR = "UPLOAD_NEW_CITY_ERROR"

export const FETCH_CITIES_REQUEST= "FETCH_CITIES_REQUEST"
export const FETCH_CITIES_SUCCESS= "FETCH_CITIES_SUCCESS"
export const FETCH_CITIES_ERROR= "FETCH_CITIES_ERROR"

export const DELETE_CITY_REQUEST= "DELETE_CITY_REQUEST"
export const DELETE_CITY_SUCCESS= "DELETE_CITY_SUCCESS"
export const DELETE_CITY_ERROR= "DELETE_CITY_ERROR"

export type UploadCity = {
    name:String,
    state_id: number
}
export type City = {
    name:String,
    id: number
}