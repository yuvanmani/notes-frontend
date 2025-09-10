import noteServices from "../../services/noteServices"

const noteLoader = async () => {
    try {
        const response = await noteServices.viewAllNote();
        return response.data;
    }
    catch (error) {
        return null;
    }
}

export default noteLoader