import { Link } from "react-router"

const RegisterPage = () => {

  const handleRegister = (e) => {
    e.preventDefault();
  }

  return (
    <div className="relative top-20 bg-gray-100 mx-5 mt-5 sm:mx-auto max-w-xl rounded-lg border-2">
      <h2 className=" text-xl sm:text-2xl md:text-3xl text-gray-700 font-bold text-center pt-3">User Registration</h2>
      <form className="flex flex-col mx-5 mt-5" onSubmit={handleRegister}>
        <input type="text" name="name" placeholder="Enter name" className="p-2 rounded mb-5 border-gray-300 border-2 focus:outline-green-500" />
        <input type="email" name="email" placeholder="Enter email" className="p-2 rounded mb-5 border-gray-300 border-2 focus:outline-green-500" />
        <input type="password" name="password" placeholder="Enter password" className="p-2 rounded mb-2 border-gray-300 border-2 focus:outline-green-500" />
        <ul className="list-disc ml-5 grid sm:grid-cols-2">
          <li className="text-gray-600 text-sm font-medium mb-1">8-16 characters</li>
          <li className="text-gray-600 text-sm font-medium mb-1">At least one uppercase (A-Z)</li>
          <li className="text-gray-600 text-sm font-medium mb-1">At least one lowercase (a-z)</li>
          <li className="text-gray-600 text-sm font-medium mb-3">At least one number (0-9)</li>
        </ul>
        <button type="submit" className="bg-gray-600 text-white font-semibold p-2 rounded hover:bg-gray-700 mb-3">Register</button>
        <p className="text-gray-700 text-md font-semibold mb-5">Already have an account? <Link to="/login">
          <span className="text-orange-600 text-md font-bold">Login here</span></Link></p>
      </form>
    </div>
  )
}

export default RegisterPage