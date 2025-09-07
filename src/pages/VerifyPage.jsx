const VerifyPage = () => {

    const handleRegister = (e) => {
        e.preventDefault();
    }

    return (
        <div className="relative top-20 bg-gray-100 mx-5 mt-5 sm:mx-auto max-w-xl rounded-lg border-2">
            <h2 className=" text-xl sm:text-2xl md:text-3xl text-gray-700 font-bold text-center pt-3">Verify OTP</h2>
            <form className="flex flex-col mx-5 mt-5" onSubmit={handleRegister}>
                <input type="email" name="email" placeholder="Enter email" className="p-2 rounded mb-5 border-gray-300 border-2 focus:outline-green-500" />
                <input type="password" name="password" placeholder="Enter OTP" autoComplete="off" className="p-2 rounded mb-5 border-gray-300 border-2 focus:outline-green-500" />
                <button type="submit" className="bg-gray-600 text-white font-semibold p-2 rounded hover:bg-gray-700 mb-5">Submit</button>
            </form>
        </div>
    )
}

export default VerifyPage