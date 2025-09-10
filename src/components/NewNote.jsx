import { useDispatch, useSelector } from "react-redux"
import { selectContent, setContent } from "../redux/features/notes/newSlice"
import { useNavigate } from "react-router";
import noteServices from "../services/noteServices"
import { toast } from "react-toastify";

const NewNote = () => {

  const content = useSelector(selectContent);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCreate = (e) => {
    e.preventDefault();

    // handle create note logic here
    noteServices.newNote({ content })
      .then((response) => {
        toast.success(response.data.message);

        // clear the form
        dispatch(setContent(""));

        // navigate the user to all notes page
        navigate("/dashboard");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      })
  }

  return (
    <div className="relative top-20 bg-gray-100 mx-5 mt-5 sm:mx-auto max-w-xl rounded-lg border-double border-4 border-orange-400">
      <h2 className="text-center pt-3 text-xl sm:text-2xl md:text-32xl font-bold underline text-orange-500">Create Note</h2>
      <form className="flex flex-col mx-5 mt-5" onSubmit={handleCreate}>
        <textarea type="text" value={content} onChange={(e) => dispatch(setContent(e.target.value))} placeholder="Content"
          className="p-2 rounded mb-5 border-gray-300 border-2 focus:outline-orange-400 h-56" />
        <div className="flex justify-center">
          <button type="submit" className="bg-orange-500 mb-5 text-white font-semibold px-14 py-1.5 rounded hover:bg-orange-600">Create</button>
        </div>
      </form>
    </div>
  )
}

export default NewNote