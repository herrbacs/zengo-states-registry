export const FETCH_STATES_REQUEST= "FETCH_STATES_REQUEST"
export const FETCH_STATES_SUCCESS= "FETCH_STATES_SUCCESS"
export const FETCH_STATES_ERROR= "FETCH_STATES_ERROR"
export const SET_SELECTED_STATE= "SET_SELECTED_STATE"

export type StateReducerActionsType = {
    type: string,
    payload: any
}

export type StateObject = {
    id:number,
    name:String
}

export type StatesStateType = {
    loading: boolean,
    error: String,
    states: StateObject[],
    selectedState: Object | null
}

export type UploadCityRequest = {
    name:String,
    state_id: number
}