import { defineStore } from "pinia";
import { ref } from "vue";

export const useNoteStore = defineStore("notes", () => {
  const notes = ref([
    {
      id: "1",
      title: "Ir al médico",
      marked: false,
    },
    {
      id: "2",
      title: "Ir al gym",
      marked: false,
    },
  ]);

  const createId = () => {
    return Date.now().toString(36) + Math.random().toString(36).slice(2);
  };

  const addNote = (title) => {
    notes.value.push({
      id: createId(),
      title,
      marked: false,
    });
  };

  return {
    notes,
    addNote,
  };
});

// crear una variable que vayamos a importar para utilizar la store en el componente que queramos
