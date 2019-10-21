<template>
    <div>
        <div class="circle">
            <div id="color" @mouseover="hover=true" @mouseleave="hover=false" :style="'background-color: ' + coloring">
                <span id="message" v-if="hover">Hello</span>
            </div>
        </div>
    </div>
            
</template>

<script>
export default {
    data() {
        return {
            hover: false,
            coloring: "#fff",
        }
    },
    props: [
        "coloring"
    ],
}
</script>

<style scoped>
#color {
    display: flex;
    justify-content: center;
    height: 150px;
    width: 150px;
    background-color: '';
    border-radius: 50%;
}
#message {
    display: flex;
    color: blueviolet;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>