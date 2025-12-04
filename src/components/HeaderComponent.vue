<template>
    <header class="header">
        <nav>
            <ul class="nav-list">
                <li><router-link class="link" to="/">Home Page</router-link></li>
                <li><router-link class="link" to="/movies">Movies</router-link></li>
                <li><router-link class="link" :to="{ name: 'create' }">Create movies</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
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