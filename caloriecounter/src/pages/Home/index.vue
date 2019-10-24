<template>
    <div>
        <div class="homediv">
            <md-field>
                <md-input type="text" placeholder="Please choose a color" v-model="color"> <!-- WHATEVER IS IN V-MODEL NEEDS TO BE PUT IN DATA!!!!!!!!!!!!-->
                the border is turned {{boxHasBorder}}</md-input>
            </md-field>
            <color-box :msg="color" @onBorderToggle="boxHasBorder=$event"></color-box>
            <modal-box :modalName="home"></modal-box>
            <add-calories></add-calories>
            <color-box  :msg="color" @messageChanged="color=$event" >{{ message }}</color-box>

        </div>
    </div>
</template>
<script>
    import ColorBox from "../../components/ColorBox";
    import AddCalories from "./AddCalories";
    import ModalBox from "../../components/ModalBox";

    export default {
        //Here you write the name of the component, 
        //ussualy it has the same name as the component file
        //FPage...
		name: "Home", 

		components: {
            ColorBox,
            AddCalories,
            ModalBox
		},

        //This is a !lifecycle hook!
        //This will run command you place inside of it
        //based on what lifecycle hook you use
        //that is when the commands will run
        //mounted runs when the page loads
        mounted() {
            //alert('hallo')
        },

        //This is where you create your data variables
        //These data variables you will be able to use everywhere
        //in the script tags (line 7 to 41) you call these variables with this.VARIABLE_NAME
        //in the html (line 1 to 6) you call these variables with {{VARIABLE_NAME}}
        data() {
            return {
				color: "",
                boxHasBorder: false,
                home: "Home",
                message: ''
            }
        },

        //This is where you write your function
        //since the "functions" are in an object
        //they are called methods
        methods: {
            
            }

            //This is how you write a method
            //literally the same as a function
            //we just drop the name "function" in the beginning 
            
                
            

    }
    
</script>

<style scoped>
   .homediv {
       display: flex;
       flex-direction: column;
       align-items: center;
   } 
</style>

