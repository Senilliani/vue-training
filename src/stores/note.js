import { defineStore } from "pinia";
import { ref } from "vue";

export const useNoteStore = defineStore("notes", () => {
  //const API_URL = "https://ca2bd83eb7c0e4235238.free.beeceptor.com/api/notes/";

  const createId = () => {
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
  };

  const notes = ref([]);

  const loading = ref(false);
  const error = ref(false);

  const getNotes = async () => {
    try {
      loading.value = true;

      const response = await fetch(API_URL);
      const data = await response.json();
      notes.value = data;

      loading.value = false;
      error.value = false;
    } catch (e) {
      loading.value = false;
      error.value = true;
    }
  };

  const addNote = async (title) => {
    const newNote = {
      id: createId(),
      title,
      marked: false,
    };

    try {
      await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(newNote),
      });
      getNotes();
    } catch (e) {
      error.value = true;
    }
  };

  const updateNote = async (id, updateNote) => {
    const noteIdToUpdate = notes.value.findIndex((note) => note.id === id);

    if (noteIdToUpdate !== -1) {
      notes.value[noteIdToUpdate] = {
        ...notes.value[noteIdToUpdate],
        ...updateNote,
      };
    }

    try {
      await fetch(`${API_URL}${id}`, {
        method: "PATCH",
        body: JSON.stringify(updateNote),
      });
      getNotes();
    } catch (e) {
      error.value = true;
    }
  };

  const deleteNote = async (id) => {
    try {
      notes.value = notes.value.filter((note) => note.id !== id);
      await fetch(`${API_URL}${id}`, { method: "DELETE" });
      await getNotes();
    } catch (e) {
      error.value = true;
      console.log("Error deleting notes: ", e);
    }
  };

  return {
    notes,
    addNote,
    getNotes,
    loading,
    error,
    updateNote,
    deleteNote,
  };
});
