import { FETCH_STATES_ERROR, FETCH_STATES_REQUEST, FETCH_STATES_SUCCESS } from "./stateTypes"

type StateReducerActionsType = {
    type: string,
    payload: any
}

type StatesStateType = {
    loading: boolean,
    error: String,
    states: Object[]
}

const initialState = {
    loading: false,
    error: "",
    states: []
}

const stateReducer = (state: StatesStateType = initialState, action: StateReducerActionsType) => {

    switch (action.type) {

        case FETCH_STATES_REQUEST: {
            return {
                ...state,
                loading: true
            }
        }

        case FETCH_STATES_SUCCESS: {
            return {
                ...state,
                states: action.payload
            }
        }

        case FETCH_STATES_ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }

        default: 
            return state
    }

}


export default stateReducer