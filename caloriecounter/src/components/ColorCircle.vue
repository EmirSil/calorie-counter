<template>
    <div>
        <div class="circle">
            
            <div id="circlecolor" :class="{'blue-border':hasBorder}" :style="'background-color: ' + colorCircle" @click="toggleBorder" @mouseover="hover=true" @mouseleave="hover=false">
                <span id="message" v-if="hover"> Hello</span>
            </div>
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
            hover: false,
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
    display: flex;
    justify-content: center;
    height: 150px;
    width: 150px;
    background-color: '';
    border-radius: 50%;
}

.blue-border {
    border: 15px solid blue;
}
#message {
    display: flex;
    color:blueviolet;
     flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>