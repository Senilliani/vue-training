<template>
    <div class="child">
        <slot name="top"></slot>
        <h2>Componente hijo</h2>
        <slot name="bottom"></slot>
    </div>
</template>

<script setup>
import { ref } from 'vue';
</script>

<style scoped>
.child {
    border: 5px solid black;
    text-align: center;
    padding: 10px;
    margin-top: 10px;
}
</style>