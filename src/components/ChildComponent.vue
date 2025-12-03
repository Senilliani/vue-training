<template>
    <div class="child">
        <h2>Componente hijo</h2>
        <p>
            recibe un bloque de código HTML y tiene la etiqueta SLOT
        </p>
        <slot>
            <h3>(Contenido por defecto que lo escribe el hijo dentro de la etiqueta slot para cuando el padre no envía
                nada)</h3>
        </slot>
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