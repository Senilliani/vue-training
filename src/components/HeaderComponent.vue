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
                <li><router-link class="link" to="/">Home Page</router-link></li>
                <li><router-link class="link" to="/movies">Movies</router-link></li>
                <li><router-link class="link" :to="{ name: 'create' }">Create movies</router-link></li>
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
    gap: 40px;
    background-color: brown;
    justify-content: space-evenly;
    align-items: center;
    white-space: nowrap;
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
    gap: 40px;
}

li {
    list-style: none;
}

.link {
    text-decoration: none;
    color: white;
    display: inline-block;
}
</style>