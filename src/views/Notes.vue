<template>
    <HeaderComponent />
    <section id="notes-page">
        <h2>
            Notas
        </h2>

        <h2 v-if="noteStore.loading">Cargando...</h2>

        <h2 v-else-if="noteStore.error">
            Algo ha ido mal
        </h2>

        <ul v-else class="note-list">
            <li>
                <CreateNote />
            </li>
            <li v-for="note in noteStore.notes" :key="note.id">
                <NoteCard :note="note"></NoteCard>
            </li>
            <li v-if="!noteStore.notes.length" class="empty-msg">
                Crea tu primera nota
            </li>
        </ul>
    </section>

</template>

<script setup>
import { onMounted } from 'vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import NoteCard from '../components/NoteCard.vue';
import { useNoteStore } from '../stores/note';
import CreateNote from './CreateNote.vue';

const noteStore = useNoteStore()

onMounted(async () => {
    await noteStore.getNotes()
})
</script>

<style scoped>
#notes-page {
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.note-list {
    border: 10px solid brown;
    padding: 10px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}


.empty-msg {
    text-align: center;
    font-size: 1.3rem;
}

@media (min-width: 865px) {
    .note-list {
        padding: 30px;
    }
}
</style>