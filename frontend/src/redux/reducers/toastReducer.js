import { toastActionTypes } from "../actionTypes"

const initVal = {
    type: null,
    message: "",

}

export default (state = initVal, action) => {
    switch (action.type) {
        case toastActionTypes.SUCCESS_TOAST:
            return {
                ...state,
                type: "success",
                message: action.payload
            }
        case toastActionTypes.ERROR_TOAST:
            return {
                ...state,
                type: "error",
                message: action.payload
            }
        case toastActionTypes.REMOVE_TOAST:
            return {
                ...state,
                type: null,
                message: ""
            }
        default:
            return state
    }
}