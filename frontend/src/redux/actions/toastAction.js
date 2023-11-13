import { toastActionTypes } from "../actionTypes"

export const successToastAction = (message) => dispatch => {
    dispatch({
        type: toastActionTypes.SUCCESS_TOAST,
        payload: message
    })
}

export const errorToastAction = (message) => dispatch => {
    dispatch({
        type: toastActionTypes.ERROR_TOAST,
        payload: message
    })
}

export const removeToastAction = () => dispatch => {
    dispatch({
        type: toastActionTypes.REMOVE_TOAST
    })
}