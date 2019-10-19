<template>
    <div>
        <div class="circle">
            <div id="circlecolor" :class="{'blue-border':hasBorder}" :style="'background-color: ' + colorCircle" @click="toggleBorder"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        "colorCircle"
    ],
    data() {
        return {
            hasBorder: false,
        }
    },
    methods: {
        toggleBorder() {
        if (this.colorCircle !='') this.hasBorder = this.hasBorder == true ? false : true;
        this.$emit("onBorderToggle", this.hasBorder);
        }
    },
}
</script>

<style scoped>
#circlecolor {
    height: 150px;
    width: 150px;
    background-color: '';
    border-radius: 50%;
}

.blue-border {
    border: 15px solid blue;
}
</style>