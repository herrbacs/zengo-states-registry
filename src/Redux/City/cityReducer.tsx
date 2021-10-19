import { UPLOAD_NEW_CITY_REQUEST } from "./cityTypes"

const initialState = {
    loading: false,
    cities : []
}

const cityReducer = (state:any = initialState, action:any ) => {
    switch(action.type){
        case UPLOAD_NEW_CITY_REQUEST : {
            return {
                ...state,
                loading: true
            }
        }

        default: 
            return state
    }
}

export default cityReducer