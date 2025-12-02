<template>
    <h2>
        Componente hijo
    </h2>

    <p>{{ message }}</p>
    <p v-if="person">{{ person.sex }} - {{ person.age }}</p>
</template>

<script setup>
defineProps({
    message: String,
    person: {
        sex: String,
        age: Number
    }
})
</script>

<style scoped></style>