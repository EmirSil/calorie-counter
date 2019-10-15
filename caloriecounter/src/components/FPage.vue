<template>
    <div>
        <div style="height: 100px; width: 100px;"></div>
        <input type="text" v-model="color">
    </div>
</template>
<script>
    export default {
        //Here you write the name of the component, 
        //ussualy it has the same name as the component file
        //FPage...
        name: "FPage",

        //This is a !lifecycle hook!
        //This will run command you place inside of it
        //based on what lifecycle hook you use
        //that is when the commands will run
        //mounted runs when the page loads
        mounted() {
            alert('hallo')
        },

        //This is where you create your data variables
        //These data variables you will be able to use everywhere
        //in the script tags (line 7 to 41) you call these variables with this.VARIABLE_NAME
        //in the html (line 1 to 6) you call these variables with {{VARIABLE_NAME}}
        data() {
            return {
                color: 'yellow'
            }
        },

        //This is where you write your function
        //since the "functions" are in an object
        //they are called methods
        methods: {

            //This is how you write a method
            //literally the same as a function
            //we just drop the name "function" in the beginning 
            showUser() {
                //jsCode
            }
        }
    }
</script>

<style scoped>
</style>