<template>
    <div>
        <md-field>
            <md-input type="text" placeholder="Enter your Name" v-model="newUser.name"></md-input>
            <md-input type="text" placeholder="Enter Your Nickname" v-model="newUser.nickname"></md-input>
            <md-input type="text" placeholder="Enter your Surname" v-model="newUser.surname"></md-input>
            <md-button class="md-raised md-primary" @click.prevent="fillArray">Submit</md-button>
        </md-field>
        
    </div>
</template>

<script>
export default {
    data() {
        let myArray = {
                    nameList:[],
                    nicknameList:[],
                    surnameList:[],
                }
        return {
            name: null,
            surname: null,
            nickname: null,
            newUser: {},
            users: []
                

            
        }
    },
    methods: {
        fillArray() {
            this.users.push({
                name: this.newUser.name,
                surname: this.newUser.surname,
                nickname: this.newUser.nickname,
            }),
            this.newUser.name='',
            this.newUser.surname='',
            this.newUser.nickname='' //WE ARE PUSHING INTO ARRAY OF OBJECTS
            /*this.nameList.push(this.name)
            this.nicknameList.push(this.nickname),
            this.surnameList.push(this.surname),
            */    //WE ARE PUSHING INTO ARRAY
            },
        
    }    
        
}

</script>