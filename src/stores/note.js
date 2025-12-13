import { defineStore } from "pinia";
import { ref } from "vue";

export const useNoteStore = defineStore(
  "notes",
  () => {
    //const API_URL = "https://ca2bd83eb7c0e4235238.free.beeceptor.com/api/notes/";

    const createId = () => {
      return Date.now().toString(36) + Math.random().toString(36).slice(2);
    };

    const notes = ref([
      {
        id: "1",
        description: "Ir al médico",
        marked: false,
      },
      {
        id: "2",
        description: "Ir al gym",
        marked: false,
      },
    ]);

    const loading = ref(false);
    const error = ref(false);

    const getNotes = async () => {
      try {
        loading.value = true;

        /* const response = await fetch(API_URL);
      const data = await response.json(); */
        notes.value;

        loading.value = false;
        error.value = false;
      } catch (e) {
        loading.value = false;
        error.value = true;
      }
    };

    const addNote = (description) => {
      notes.value.unshift({
        id: createId(),
        description,
        marked: false,
      });

      try {
        /* 
      await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(newNote),
      }); */
        getNotes();
      } catch (e) {
        error.value = true;
      }
    };

    const updateNote = async (id, updateNote) => {
      const noteIdToUpdate = notes.value.findIndex((note) => note.id === id);

      if (id !== -1) {
        notes.value[id] = {
          ...notes.value[id],
          ...updateNote,
        };
      }

      try {
        /* 
      await fetch(API_URL, {
        method: "PATCH",
        body: JSON.stringify(newNote),
      }); */
        getNotes();
      } catch (e) {
        error.value = true;
      }
    };

    const deleteNote = (id) => {
      notes.value = notes.value.filter((note) => note.id !== id);
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
  },
  {
    persist: true,
  }
);
