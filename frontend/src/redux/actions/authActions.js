import axios from "axios"
import { errorToastAction, successToastAction } from "./toastAction"

export const loginAction = (data, handleSuccessLogin) => dispatch => {
    axios.post(`${import.meta.env.VITE_APP_API_BASE_URI}/api/auth/login`, data)
        .then(response => {
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("user", JSON.stringify(response.data.data))
            handleSuccessLogin()
            dispatch(successToastAction("Login successful"))
        })
        .catch(err => {
            console.log(err)
            dispatch(errorToastAction(err?.response?.data?.message || err?.message || err))
        })
}

export const registerAction = (data, handleSuccessSignUp) => dispatch => {
    axios.post(`${import.meta.env.VITE_APP_API_BASE_URI}/api/auth/register`, data)
        .then(() => {
            handleSuccessSignUp()
            dispatch(successToastAction("Registration successful"))
        })
        .catch(err => {
            dispatch(errorToastAction(err?.response?.data?.message || err?.message || err))
        })
}