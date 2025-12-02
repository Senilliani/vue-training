<template>
    <div class="child">
        <h2>
            Componente hijo
        </h2>
        <p>Nombre de usuario {{ userName }}</p>
        <button @click="login" style="margin-bottom: 20px;">Iniciar Sesión</button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const emit = defineEmits(["login"])

const login = () => {
    emit("login", userName.value)
}

const userName = ref("Brenda")
</script>

<style scoped>
.child {
    border: 5px solid black;
    text-align: center;
}
</style>