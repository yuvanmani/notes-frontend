import { useDispatch, useSelector } from "react-redux";
import { useLoaderData, useNavigate } from "react-router"
import { selectContent, setContent } from "../redux/features/notes/editSlice"
import { useEffect } from "react";
import noteServices from "../services/noteServices"
import { toast } from "react-toastify";

const EditNote = () => {

  const content = useSelector(selectContent);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const note = useLoaderData();
  const id = note._id;

  useEffect(() => {
    dispatch(setContent(note.content))
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();

    // handle update logic here
    noteServices.EditNote({ id, content })
      .then((response) => {
        toast.success(response.data.message);

        // clear the form
        dispatch(setContent(""));

        // navigate to note page
        setTimeout(() => {
          navigate(-1);
        }, 500)
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      })
  }

  return (
    <div className="relative top-20 bg-gray-100 mx-5 mt-5 sm:mx-auto max-w-xl rounded-lg border-double border-4 border-orange-400">
      <h2 className="text-center pt-3 text-xl sm:text-2xl md:text-32xl font-bold underline text-orange-500">Update Note</h2>
      <form className="flex flex-col mx-5 mt-5" onSubmit={handleUpdate}>
        <textarea type="text" value={content} onChange={(e) => dispatch(setContent(e.target.value))} placeholder="Content"
          className="p-2 rounded mb-5 border-gray-300 border-2 focus:outline-orange-400 h-56" />
        <div className="flex justify-center">
          <button type="submit" className="bg-orange-500 mb-5 text-white font-semibold px-14 py-1.5 rounded hover:bg-orange-600">Update</button>
        </div>
      </form>
    </div>
  )
}

export default EditNote