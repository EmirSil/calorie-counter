<template>
    <div>
        <md-field>
            <md-input type="text" placeholder="Enter your Name" v-model="name"></md-input>
            <md-input type="text" placeholder="Enter Your Nickname" v-model="nickname"></md-input>
            <md-input type="text" placeholder="Enter your Surname" v-model="surname"></md-input>
            <md-button class="md-raised md-primary" @click.prevent="fillArray">Submit</md-button>
        </md-field>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: null,
            surname: null,
            nickname: null,
            nameList:[],
            nicknameList:[],
            surnameList:[],

            
        }
    },
    methods: {
        fillArray() {
            this.nameList.push(this.name),
            this.nicknameList.push(this.nickname),
            this.surnameList.push(this.surname),
            this.name='',
            this.surname='',
            this.nickname=''
            },
        
    }    
        
}

</script>