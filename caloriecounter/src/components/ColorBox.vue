<template>
    <div class="boxplay">
			<div id="colorbox" :class="{'red-border':hasBorder}" :style="'background-color: ' + boxColor" @click="toggleBorder">{{boxColor}}</div>
        </div>
</template>

<script>
export default {
    props: [
        "boxColor"
    ],
    data () {
        return {
            hasBorder: false,
        }
    },
    methods: {
        toggleBorder() {
           /* if (this.hasBorder == true) {
                this.hasBorder = false
            }
            else {
                this.hasBorder = true
            }*/
            if (this.boxColor != '') this.hasBorder = this.hasBorder == true ? false : true; //when havin only one line we dont need {}
            //this.$emit has 2 parameters, 1. is the name of the event 2. is the value of the event 
            //in the parent we get the value with $event and it's called with @NAME OF EVENT
            this.$emit("onBorderToggle", this.hasBorder);

            //this.hasBorder = !this.hasBorder
            //this.hasBorder = this.hasBorder == true ? false : true

        }
    },
}
</script>

<style scoped>
#colorbox {
    height: 250px;
    width: 250px;
	background-color:'';
}
.boxplay {
    width: 30%;
	display: flex;
	justify-content: center;
}
.red-border {
    border: 10px solid red;
}

</style>