<template>
    <div class="main">
        <input type="text" placeholder="Enter circles color" v-model="colorme">
        <color-circle :colorCircle="colorme" @obBorderToggle="circleHasBorder=$event" :style="'background-color: ' + boxColor"></color-circle>
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
        background-color: white;
    }
</style>