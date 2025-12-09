<template>
    <HeaderComponent />
    <h2>
        Welcome to the Home Page
    </h2>

    <h3 id="counter">
        Counter: {{ counter }}
        <button @click="counter++" id="counter-btn">+</button>
    </h3>
</template>

<script setup>
import { ref } from 'vue';
import HeaderComponent from '../components/HeaderComponent.vue';

const counter = ref(1)
</script>

<style scoped>
h2 {
    text-align: center;
}
</style>