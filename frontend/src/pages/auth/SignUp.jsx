import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerAction } from "../../redux/actions/authActions";

const SignUp = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [signUpFormData, setSignUpFormData] = useState({
        username: "",
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({})

    const handleChangeInput = (e) => {
        setSignUpFormData(prev => ({
            ...prev,

            [e.target.name]: e.target.value,
        }))
        setErrors({})
    }

    const handleValidate = () => {
        let valid = false
        if (signUpFormData.username.trim() === "") {
            setErrors({
                username: "Please enter username"
            })
        } else if (signUpFormData.email.trim() === "") {
            setErrors({
                email: "Please enter email"
            })
        } else if (signUpFormData.password.trim() === "") {
            setErrors({
                password: "Please enter password"
            })
        } else if (signUpFormData.password.length < 6) {
            setErrors({
                password: "Password must be at least 6 characters"
            })
        } else {
            setErrors({})
            valid = true
        }
        return valid
    }

    const handleSuccessSignUp = () => {
        navigate("/login")
        setSignUpFormData({
            username: "",
            email: "",
            password: ""
        })
        setErrors({})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const valid = handleValidate()
        if (valid) {
            dispatch(registerAction(signUpFormData, handleSuccessSignUp))
        }

    }

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                <a
                    href="#"
                    className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
                >
                    <img
                        className="w-8 h-8 mr-2"
                        src="/assets/images/logo2.png"
                        alt="logo"
                    />
                    AI-IMG
                </a>
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create a new account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label
                                    htmlFor="username"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Username
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    id="username"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Username"
                                    value={signUpFormData.username}
                                    onChange={handleChangeInput}
                                />
                                {errors.username && (
                                    <p className="text-red-500 text-xs italic">
                                        {errors.username}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com"
                                    value={signUpFormData.email}
                                    onChange={handleChangeInput}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-xs italic">
                                        {errors.email}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    onChange={handleChangeInput}
                                    value={signUpFormData.password}
                                />
                                {errors.password && (
                                    <p className="text-red-500 text-xs italic">
                                        {errors.password}
                                    </p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Sign up
                            </button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Allready have an account?{" "}
                                <Link
                                    to="/login"
                                    className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                                >
                                    Sign in
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default SignUp