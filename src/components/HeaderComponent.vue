<template>
    <header class="nav-list">
        <div class="login-bar">
            <p v-if="userStore.user" class="username">
                {{ userStore.user.name }}
            </p>
            <button @click="userStore.getUser()">Iniciar sesión</button>
        </div>
        <nav>
            <ul>
                <li><router-link class="link" to="/">Home</router-link></li>
                <li><router-link class="link" to="/movies">Movies</router-link></li>
                <li><router-link class="link" :to="{ name: 'create' }">Create movies</router-link></li>
                <li><router-link class="link" to="/notes">Notes</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
import { onMounted } from 'vue';
import { useUserStore } from '../stores/user';

const userStore = useUserStore()

onMounted(() => {
    userStore.getUser()
})
</script>

<style scoped>
.nav-list {
    display: flex;
    gap: 10px;
    background-color: brown;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px 0;
    margin-top: 0;

    .login-bar {
        width: 100%;
        position: absolute;
        top: 10px;
        right: 10px;
        display: flex;
        justify-content: end;

        .username {
            margin: 0;
            padding-right: 10px;
        }
    }
}

ul {
    display: flex;
}

li {
    list-style: none;
    padding-right: 20px;
}

.link {
    text-decoration: none;
    color: white;
    display: inline-block;
}
</style>