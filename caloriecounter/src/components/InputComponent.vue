<template>
<div>
    <label> ENTER BOX COLOR</label>
                <md-field>
                    <md-input type ="text" placeholder="enter a color" v-model="message" @input="toggleColor"></md-input>
                </md-field>
</div>
</template>
<script>
export default {
    data() {
        return {
            message:''
        }
    },
    methods: {
        toggleColor(event) {
            this.$emit('colorChanged',this.message)
        }
    },
}
</script>