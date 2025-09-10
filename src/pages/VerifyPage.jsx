import { useDispatch, useSelector } from "react-redux";
import { selectEmail, selectOtp, setEmail, setOtp } from "../redux/features/auth/verifySlice"
import { useNavigate } from "react-router";
import authServices from "../services/authServices"
import { toast } from "react-toastify";
import { useState } from "react";

const VerifyPage = () => {

    const email = useSelector(selectEmail);
    const otp = useSelector(selectOtp);

    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(prev => !prev);
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleVerify = (e) => {
        e.preventDefault();

        // handle verify logic here
        authServices.verify({ email, otp })
            .then((response) => {
                toast.success(response.data.message);

                // clear the form
                dispatch(setEmail(""));
                dispatch(setOtp(""));

                // navigate to login page
                setTimeout(() => {
                    navigate("/login");
                }, 500)
            })
            .catch((error) => {
                toast.error(error.response.data.message);
            })
    }

    return (
        <div className="relative top-20 bg-gray-100 mx-5 mt-5 sm:mx-auto max-w-xl rounded-lg border-2">
            <h2 className=" text-xl sm:text-2xl md:text-3xl text-gray-700 font-bold text-center pt-3">Verify OTP</h2>
            <form className="flex flex-col mx-5 mt-5" onSubmit={handleVerify}>
                <input type="email" name="email" placeholder="Enter email" value={email} onChange={(e) => dispatch(setEmail(e.target.value))}
                    className="p-2 rounded mb-5 border-gray-300 border-2 focus:outline-green-500" />
                <input type={showPassword ? "text" : "password"} name="password" placeholder="Enter OTP" autoComplete="off" value={otp} onChange={(e) => dispatch(setOtp(e.target.value))}
                    className="p-2 rounded mb-5 border-gray-300 border-2 focus:outline-green-500" />
                <span className="p-2 rounded mb-2 border-gray-300 hover:bg-gray-300 border-2 text-center font-semibold text-gray-600 cursor-pointer" onClick={togglePassword}>
                    OTP : {showPassword ? "Hide" : "Show"}</span>
                <button type="submit" className="bg-gray-600 text-white font-semibold p-2 rounded hover:bg-gray-700 mb-5">Submit</button>
            </form>
        </div>
    )
}

export default VerifyPage