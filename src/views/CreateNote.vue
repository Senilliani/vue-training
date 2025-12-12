<template>
    <form class="note-form" @submit.prevent="handleSubmit">
        <input type="text" class="note-title" placeholder="Nueva nota" v-model="description">
        <button class="create-btn">+</button>
    </form>
</template>

<script setup>
import { ref } from 'vue';
import { useNoteStore } from '../stores/note';

const noteStore = useNoteStore()

const description = ref("")

const handleSubmit = () => {
    noteStore.addNote(description.value)
    description.value = ""
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