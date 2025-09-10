import { Link, useLoaderData, useNavigate } from "react-router"
import noteServices from "../services/noteServices"
import { toast } from "react-toastify";

const ViewOneNote = () => {
  const note = useLoaderData();
  const noteId = note._id;

  const navigate = useNavigate();

  const handleDelete = () => {
    const confirmDelete = confirm("Are you sure you want to delete this note");

    if (confirmDelete) {
      // handle delete logic here
      noteServices.deleteNote(noteId)
        .then((response) => {
          toast.success(response.data.message);

          // navigate the user to the all notes page
          navigate("/dashboard");
        })
        .catch((error) => {
          toast.error(error.response.data.message);
        })
    }
  }

  return (
    <div className="relative top-20 max-w-xl sm:mx-auto bg-gray-100 m-2 mt-5 border-double rounded-lg border-4 border-orange-400">
      <h2 className="text-gray-900 p-3">{note.content}</h2>
      <div className="flex justify-center gap-10 my-5 sm:justify-evenly">
        <Link to={`/dashboard/editnote/${note._id}`} className="bg-orange-500 px-8 py-1 text-white hover:bg-orange-600 rounded-md font-semibold">Edit</Link>
        <button className="bg-orange-500 px-8 py-1 text-white hover:bg-orange-600 rounded-md font-semibold" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}

export default ViewOneNote