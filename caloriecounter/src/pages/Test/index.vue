<template>
    <div class="main">
        <div class="main-container">
            <div class="c1r1 content">Circle Color
                <md-field>
                    <md-input type="text" placeholder="Enter circles color" v-model="colorme"></md-input>
                </md-field>
                <color-circle :colorCircle="colorme" @obBorderToggle="circleHasBorder=$event" :style="'background-color: ' + boxColor"></color-circle>
            </div>
            <div class="c2r1 content">
                <modal-box :modalName="ime"></modal-box></div>
            <div class="c1r2 content">
                <add-calories :calories="inputCalories"></add-calories>
            </div>
            <div class="c2r2 content">
                <label>MAGIC CIRCLE</label>
                <md-field>
                    <md-input type="text" placeholder="Enter a color" v-model="changeColor"></md-input>
                </md-field>
                <magic-circle :coloring="changeColor"></magic-circle>
            </div>
            
        </div>
    </div>
</template>

<script>
import ColorCircle from "../../components/ColorCircle"
import ModalBox from "../../components/ModalBox"
import AddCalories from "../Home/AddCalories"
import MagicCircle from "../../components/MagicCircle"

export default {
    components: {
        ColorCircle,
        ModalBox,
        AddCalories,
        MagicCircle,
    },

    data() {
        return {
            colorme: "",
            circleHasBorder: false,
            ime: "Test",
            changeColor: "blue"
        }
    },
}
</script>

<style scoped>
    .main {
        width: 100%;
        background-color: white;
        display: flex;
    }
    .main-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        width: 100vw;
    }
    
    .c1r1 {
        height: 300px;
        width: 50vw;
        background-color: aqua;
    }
    .c2r1 {
        height: 300px;
        width: 50vw;
        background-color: green;
    }
    .c1r2 {
        height: 300px;
        width: 50vw;
        background-color: blueviolet;
    }
    .c2r2 {
        height: 300px;
        width: 50vw;
        background-color: chocolate;
    }
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid red;
        padding: 10px;
        width: 50%;
    }
</style>