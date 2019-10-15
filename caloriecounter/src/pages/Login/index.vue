<template>


    <div class ="Login">
        <h2>Please enter your LOGIN data:</h2>
        <form class="LogID">
            <input type ="email" placeholder="E-Mail" v-model="email">
            <input type="password" placeholder="Password" v-model="password">
            <button type="submit">Login</button>
        </form>
    </div>

    </template>

    <script>
    export default {
        name: "Login"
    }
</script>

<style scoped>
</style>