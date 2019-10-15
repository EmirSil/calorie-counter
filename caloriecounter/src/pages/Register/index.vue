<template>

    <div class="Register">
        <h2> Please fill out our form to Register to our page</h2>
        <form class="RegisterID">
            <ul>
            <li><input type="text" placeholder="Enter your name" v-model="text"></li>
            <li><input type="email" placeholder="E-mail" v-model="email"></li>
            <li><input type="password" placeholder="password" v-model="password"></li>
            <button type="submit">Register</button>
            </ul>
        </form>
    </div>
            


    </template>

    <script>
    export default {
        name: "Register"
    }
</script>

<style scoped>
</style>