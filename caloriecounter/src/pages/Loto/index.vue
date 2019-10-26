<template>
<div>
    <div class="container">
        <div class="first-part">
            <div v-for="number in ticket">
                {{number}} 
            </div>
             
        </div>
        <div class="middle-part">
            <md-button class="md-primary" @click="generateLotoNumbers">Loto Numbers</md-button>
            <md-button class="md-primary" @click="generateTicket">Ticket</md-button>
            <div>{{currentNumber}}</div>
        </div>
        <div class="lastPart">
            <div class="lotNumbers" v-for="number in lotoNumbers">
            {{number}}
            </div>
        </div>
    </div>
    
</div>
</template>

<script>
export default {
    data() {
        return {
            result: [],
            lotoNumbers:[],
            ticket:[],
            currentNumber: null,
        }
    },
    methods: {
        generateNumbers(to){
            var self = this;
            var i = 0;
            let result = [];
            let interval = setInterval(function() {
                i++;
                let randomNumber= Math.ceil(Math.random() * 48)
                for(let j=0; j<result.length; j++){
                    if(randomNumber == result[j]){
                        randomNumber= Math.ceil(Math.random() * 48);
                        j=-1;
                    }
                }
                self.currentNumber=randomNumber;
                result.push(randomNumber);
                if(i == to) {
                    clearInterval(interval);
                }
            }, 1500);
            return result;

        },
        generateTicket(){
            this.ticket=[]
            this.ticket = this.generateNumbers(6);
        },
        generateLotoNumbers(){
            if(this.ticket.length == 0){
                return
            }
            this.lotoNumbers=[]
            this.lotoNumbers = this.generateNumbers(35);
            this.checkTicket()
        
        },
        checkTicket(){
            var matchingNumbers = 0
            for(let i = 0; i<this.ticket.length; i++){
                let number = this.ticket[i];
                for(let j = 0; j<this.lotoNumbers.length; j++){
                    let lotoNumber = this.lotoNumbers[j];
                    if(number == lotoNumber) {
                        matchingNumbers++

                    }
                }
            }
            if(matchingNumbers==6){
               // alert("CONGRATULATIONS")
            }
            else{
               // alert("BUY MORE TICKETS")
            }
        }

    },
    //WRITE 35 RANDOM NUMBERS NON REPEATING between 1 and 48 SHOWING UP EVERY SECOND AND HAVE A LIST OF NUMBERS THAT WERE ALREADY SHOWN
}
</script>

<style scoped>
    .container {
        display: flex;
        justify-content: space-between;
        
    }
    .lastPart {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 250px;
        height: 250px;
    }
    .lotNumbers {
        display:flex;
        justify-content: space-between;
        margin-right: 3px;
    }
</style>