<template>
    <div>
        <div class="circle">
            <div id="color" v-show="showing" @mouseover="hover=true" @mouseleave="hover=false" :style="'background-color: ' + coloring" @click="hideMe">
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
            showing: 'true',
        }
    },
    props: [
        "coloring",
        "hoverSelector"
    ],
    
    methods: {
        hideMe() {
            this.showing = false;
            setTimeout(() => this.showing = true, 2999)
            setTimeout(function(){
                alert("Guess Who's Back"); }, 3000);
            
        }
    },
        
    
    created() {
            
    }
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