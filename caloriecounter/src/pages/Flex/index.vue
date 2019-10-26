<template>
    <div>
        <div class="parent-div">
            <color-box :boxColored="yellow"></color-box>
            <color-box :boxColored="green"></color-box>
            <color-box :boxColored="black"></color-box>
                        
        </div>
        <modal-box modalName="flex"></modal-box> <!--OVDJE PROPERTY saljemo kao string A U HOME SALJEMO PREKO DATA-->
    </div>
</template>

<script>
import ColorBox from "../../components/ColorBox";
import ModalBox from "../../components/ModalBox";
export default {
    components: {
        ColorBox,
        ModalBox,
    },
    data () {
        return {
            yellow: "green",
            green: "#f2f2f2",
            black: "purple",
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