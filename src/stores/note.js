import { defineStore } from "pinia";
import { ref } from "vue";

export const useNoteStore = defineStore(
  "notes",
  () => {
    const API_URL = import.meta.env.VITE_API_URL;

    const createId = () => {
      return Date.now().toString(36) + Math.random().toString(36).slice(2);
    };

    const notes = ref([]);

    const loading = ref(false);
    const error = ref(false);
    const usingAPI = ref(false);

    const getNotes = async () => {
      if (usingAPI.value) {
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
      }
    };

    const addNote = async (title) => {
      const newNote = {
        id: createId(),
        title,
        marked: false,
      };

      if (usingAPI.value) {
        try {
          await fetch(API_URL, {
            method: "POST",
            body: JSON.stringify(newNote),
          });
          await getNotes();
        } catch (e) {
          error.value = true;
        }
      } else {
        notes.value.unshift(newNote);
      }
    };

    const updateNote = async (id, updateNote) => {
      if (usingAPI.value) {
        try {
          await fetch(`${API_URL}${id}`, {
            method: "PATCH",
            body: JSON.stringify(updateNote),
          });
          await getNotes();
        } catch (e) {
          error.value = true;
        }
      } else {
        const noteIdToUpdate = notes.value.findIndex((note) => note.id === id);

        if (noteIdToUpdate !== -1) {
          notes.value[noteIdToUpdate] = {
            ...notes.value[noteIdToUpdate],
            ...updateNote,
          };
        }
      }
    };

    const deleteNote = async (id) => {
      if (usingAPI.value) {
        try {
          await fetch(`${API_URL}${id}`, { method: "DELETE" });
          await getNotes();
        } catch (e) {
          error.value = true;
          console.log("Error deleting notes: ", e);
        }
      } else {
        notes.value = notes.value.filter((note) => note.id !== id);
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
      usingAPI,
    };
  },
  {
    persist: true,
  }
);
