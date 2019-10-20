<template>
    <div class="main">
        <div class="main-container">
            <div class="c1r1 content">Circle Color
                <input type="text" placeholder="Enter circles color" v-model="colorme">
                <color-circle :colorCircle="colorme" @obBorderToggle="circleHasBorder=$event" :style="'background-color: ' + boxColor"></color-circle>
            </div>
            <div class="c2r1 content">A</div>
            <div class="c1r2 content">B</div>
            <div class="c2r2 content">C</div>
            <div class="c1r1 content">
                <input type="text" placeholder="Enter circles color" v-model="colorme">
                <color-circle :colorCircle="colorme" @obBorderToggle="circleHasBorder=$event" :style="'background-color: ' + boxColor"></color-circle>
            </div>
            <div class="c2r1 content">A</div>
            <div class="c1r2 content">B</div>
            <div class="c2r2 content">C</div>
        </div>
    </div>
</template>

<script>
import ColorCircle from "../../components/ColorCircle"

export default {
    components: {
        ColorCircle
    },

    data() {
        return {
            colorme: "",
            circleHasBorder: false,
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
        height: 250px;
        width: 50vw;
        background-color: aqua;
    }
    .c2r1 {
        height: 250px;
        width: 50vw;
        background-color: green;
    }
    .c1r2 {
        height: 250px;
        width: 50vw;
        background-color: blueviolet;
    }
    .c2r2 {
        height: 250px;
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