import noteServices from "../../services/noteServices"

const oneNoteLoader = async ({ params }) => {
    try {
        const response = await noteServices.viewOneNote(params);
        return response.data;
    }
    catch (error) {
        return null;
    }
}

export default oneNoteLoader