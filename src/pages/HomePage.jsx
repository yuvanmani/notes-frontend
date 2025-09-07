import { Link } from "react-router"

const HomePage = () => {
  return (
    <div className="relative top-20 bg-gray-100 mx-2 mt-5 md:mx-auto max-w-3xl rounded-lg border-2">
      <h2 className="py-3 text-center text-gray-700 text-xl sm:text-2xl md:text-3xl font-bold">Welcome to <span className="text-orange-500">M - Notes!!</span></h2>
      <p className="py-3 text-center text-gray-700 text-xl sm:text-2xl md:text-3xl font-bold">Make & Manage your own record in <span className="text-orange-500">M - Notes!!</span></p>
      <p className="py-3 text-center text-gray-700 text-xl sm:text-2xl md:text-3xl font-bold">To continue <Link to="/login" className="text-cyan-500">Login</Link> or <Link to="/register" className="text-cyan-500">Register</Link></p>
    </div>
  )
}

export default HomePage