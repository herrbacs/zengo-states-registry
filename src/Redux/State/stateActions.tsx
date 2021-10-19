import axios from "axios"
import { FETCH_STATES_ERROR, FETCH_STATES_SUCCESS, FETCH_STATES_REQUEST, SET_SELECTED_STATE } from "./stateTypes"

//FETCH STATES FROM API
export const fetchStatesRequest = () => {
    return {type:FETCH_STATES_REQUEST}
}
export const fetchStatesSuccess = (states:any) => {
    return {type:FETCH_STATES_SUCCESS, payload:states}
}
export const fetchStatesError = (error:any) => {
    return {type:FETCH_STATES_ERROR,payload:error}
}
export const fetchStates = () => {
    return (dispatch:Function) => {

        dispatch(fetchStatesRequest)
        
        axios.get("https://probafeladat-api.zengo.eu/api/all_states",{
            headers:{
                'token': '5ed2c5de7e3f5f797b1e7ab5a8e01e43',
                'content-type' : 'application/x-www-form-urlencoded'
            },
        })
        .then((response:any) => {
            const users = response.data.data
            dispatch(fetchStatesSuccess(users))
        })
        .catch((error:any) => {
            const errorMsg = error.message
            dispatch(fetchStatesSuccess(errorMsg))
        })

    }
}

//SET SELECTED STATE
export const setSelectedState = (stateId:number,name:string) => {
    console.log(stateId)
    return {type:SET_SELECTED_STATE, payload:{id:stateId,name:name}}
}