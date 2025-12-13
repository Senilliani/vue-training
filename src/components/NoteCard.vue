<template>
    <div>
        <article class="note-card">
            <input type="text" class="card-title" v-model="note.description" @blur="updateNoteDescription">
            <input type="checkbox" v-model="note.marked" @change="updateNoteMarked" style="cursor: pointer;">
            <button class="btn-remove" @click="removeNote">🗑️</button>
        </article>
    </div>
</template>

<script setup>
import { useNoteStore } from '../stores/note';

const props = defineProps({
    note: Object
})

const noteStore = useNoteStore()

const updateNoteDescription = () => {
    noteStore.updateNote(props.note.id, {
        description: props.note.description
    })
}

const updateNoteMarked = () => {
    noteStore.updateNote(props.note.id, {
        marked: props.note.marked
    })
}

const removeNote = () => {
    noteStore.deleteNote(props.note.id)
}
</script>

<style scoped>
.note-card {
    background-color: lightgoldenrodyellow;
    border: 3px solid #022;
    padding: 20px 30px;
    display: flex;
    justify-content: space-between;
    transition: all 0.2s;

    .card-title {
        background-color: transparent;
        border: none;
        font-size: 1.2rem;
        font-weight: bold;
    }

    [type="checkbox"] {
        transform: scale(2) translateX(-2px);
    }

    .note-card:hover {
        border: 3px solid black;
        box-shadow: 0 0 10px;
    }

    .note-card:has(input:checked) {
        border: 3px solid lightcoral;
        background-color: lightgray;

        .card-title {
            font-weight: 100;
        }
    }

    .btn-remove {
        margin-left: 10px;
        cursor: pointer;
    }
}
</style>