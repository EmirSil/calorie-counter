<template>
    <div>
        <div class="circle">
            <div id="color"   :style="'background-color: ' + coloring">
                <span id="message" v-if="hoverSelector" @mouseover="hover=true" @mouseleave="hover=false">Hello</span>
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
        "coloring",
        "hoverSelector"
    ],
    
    methods: {
        /*showText() {
            if (this.hoverSelector) {
                mouseover="hover=true";
                mouseleave="hover=false";
            }
            else alert="hello";
        }*/
    },
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