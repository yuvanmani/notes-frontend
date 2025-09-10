import { useLoaderData } from "react-router"

const UserProfile = () => {

  const user = useLoaderData();

  return (
    <div className="relative top-20 bg-gray-100 m-2 md:ml-5 rounded-lg border-2 max-w-lg px-2 md:px-5">
      <h2 className="pt-2 pb-1 text-lg sm:text-xl md:text-2xl font-semibold underline text-orange-500">User Details :</h2>
      <p className="sm:text-lg md:text-xl font-semibold text-gray-700">Name : {user.name}</p>
      <p className="pt-1 pb-2 sm:text-lg md:text-xl font-semibold text-gray-700">Email : {user.email}</p>
    </div>
  )
}

export default UserProfile