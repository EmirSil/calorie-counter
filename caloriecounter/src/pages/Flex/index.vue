<template>
    <div>
        <div class="parent-div">
            <color-box :boxColor="yellow"></color-box>
            <color-box :boxColor="green"></color-box>
            <color-box :boxColor="black"></color-box>
                        
        </div>
    </div>
</template>

<script>
import ColorBox from "../../components/ColorBox";
export default {
    components: {
        ColorBox
    },
    data () {
        return {
            yellow: "green",
            green: "#f2f2f2",
            black: "purple"
        }
    }
    
}
</script>

<style scoped>
    .small-div {
        width: 30vw;
        height: 200px;
    }
    .red {
        background-color: red;
        height: 100px;
    }
    .green {
        background-color: green;
        height: 250px;
    }
    .blue {
        background-color: blue;
    }
    .parent-div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
</style>