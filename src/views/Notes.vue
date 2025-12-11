<template>
    <HeaderComponent />
    <section id="notes-page">
        <h2>
            Notes
        </h2>
        <ul class="note-list">
            <li v-for="note in noteStore.notes" :key="note.id">
                <!-- {{ note.title }} -->
                <NoteCard :note="note"></NoteCard>
            </li>
        </ul>
    </section>

</template>

<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';
import NoteCard from '../components/NoteCard.vue';
import { useNoteStore } from '../stores/note';

const noteStore = useNoteStore()
</script>

<style scoped>
#notes-page {
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
        margin-bottom: 50px;
        text-align: center;
    }

    .note-list {
        border: 10px solid brown;
        width: 70%;
        min-width: 450px;
        padding: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
}
</style>