import {
    FETCH_STATES_ERROR,
    FETCH_STATES_REQUEST,
    FETCH_STATES_SUCCESS,
    SET_SELECTED_STATE,
    StateReducerActionsType,
    StatesStateType
} from "./stateTypes"

const initialState = {
    loading: false,
    error: "",
    states: [],
    selectedState: null
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

        case SET_SELECTED_STATE: {
            return {
                ...state,
                selectedState: action.payload
            }
        }

        default:
            return state
    }

}


export default stateReducer