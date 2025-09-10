import instance from "./instance"

const noteServices = {
    viewAllNote: async () => {
        return await instance.get("/notes/view");
    },
    viewOneNote: async ({ noteId }) => {
        return await instance.get(`/notes/view/${noteId}`);
    },
    EditNote: async ({ id, content }) => {
        return await instance.put(`/notes/update/${id}`, { content });
    },
    newNote: async (content) => {
        return await instance.post("/notes/new", content);
    },
    deleteNote: async (noteId) => {
        return await instance.delete(`/notes/delete/${noteId}`);
    }
}

export default noteServices