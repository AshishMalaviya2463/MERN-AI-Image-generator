import { useEffect } from "react"
import toast, { Toaster } from "react-hot-toast"
import { useDispatch, useSelector } from "react-redux"
import { removeToastAction } from "../../redux/actions/toastAction"

const Toast = () => {
    const toastSate = useSelector(state => state.toastSate)
    const dispatch = useDispatch()
    useEffect(() => {
        if (toastSate?.type === "success") {
            toast.success(toastSate?.message)
            dispatch(removeToastAction())
        } else if (toastSate?.type === "error") {
            toast.error(toastSate?.message)
            dispatch(removeToastAction())
        }
    }, [toastSate])
    return (
        <Toaster
            position="top-center"
            toastOptions={
                {
                    duration: 2500,
                }
            }
        />
    )
}

export default Toast