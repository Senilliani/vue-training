<template>
    <form class="note-form" @submit.prevent="handleSubmit">
        <input type="text" class="note-title" placeholder="Escribe aquí tu nota" v-model="title">
        <button class="create-btn" :disabled="title === ''">+</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { useNoteStore } from '../stores/note';

const noteStore = useNoteStore()

const title = ref("")

const handleSubmit = () => {
    noteStore.addNote(title.value)
    title.value = ""
}
</script>

<style scoped>
.note-form {
    background-color: rgba(148, 246, 0, 0.515);
    border: 3px solid #022;
    padding: 20px 30px;
    display: flex;
    justify-content: space-between;
    transition: all 0.2s;
    gap: 10px;
}
</style>