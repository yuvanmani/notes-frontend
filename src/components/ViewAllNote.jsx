import { Link, useLoaderData } from "react-router"

const ViewAllNote = () => {

  const notes = useLoaderData();

  return (
    <div>
      {
        notes.length > 0 ? (
          <div>
            <h2 className="relative top-20 text-center text-lg sm:text-xl md:text-2xl font-semibold underline text-orange-500 mb-5 mt-3">Notes</h2>
            <div className="flex justify-center">
              < div className="relative top-20 m-2 md:ml-5 text-gray-900 grid sm:grid-cols-2 lg:grid-cols-3 
              gap-5 sm:mx-5 xl:grid-cols-4 pb-5">
                {
                  notes.map((note) => (
                    <div className="bg-gray-100 rounded-lg  border-2 border-orange-400" key={note._id}>
                      <div className="container h-52 overflow-hidden">
                        <p className="p-2 bg-white mx-7 mt-8 h-52 border-4 border-double">{note.content}</p>
                      </div>
                      <div className="flex justify-center">
                        <Link to={`/dashboard/viewonenote/${note._id}`} className="bg-orange-500 my-5 px-8 py-1 text-white hover:bg-orange-600 rounded-md font-semibold">View</Link>
                      </div>
                    </div>
                  ))
                }
              </div >
            </div>
          </div>
        ) :
          (<p className="font-bold sm:text-lg md:text-xl sm:font-semibold py-1 rounded-lg border-2 max-w-lg px-2 md:px-5 text-gray-700 relative top-20  m-2 md:ml-5">No records found.
            <Link to="/dashboard/create" className="text-orange-500"> Add New</Link></p>)
      }
    </div >
  )
}

export default ViewAllNote

