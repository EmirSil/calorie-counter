<template>
<div>
    FOR LOOPS
    <div :key="multiplyKey">{{toTen}}</div>
    <div>{{onlyEvenNumbers}}</div>
    <div>{{toOne}} </div>
    <div>{{doubleArrays}} </div>
    <button @click="multiplyToTen">SUBMIT</button>
    <button @click="topNum">Complex array</button>
    
</div>
</template>

<script>
export default {
    mounted() {
        this.populateToTen()
        this.populateEvenNumbers()
        this.populateToOne()
    },
    data() {
        return {
            toTen: [],
            onlyEvenNumbers: [],
            toOne: [],
            multiplyKey: 0,
            doubleArrays: [[1, 10], [11, 4], [9,9]],

        }
    },

    methods: {
        populateToTen() {
            for(let i= 1; i<=10; i++){
                this.toTen.push(i)
            };
        
        },
        populateEvenNumbers(){
            for(let i = 2; i<=20; i += 2){
                this.onlyEvenNumbers.push(i)
            }

        },
        populateToOne(){
            for(let i = 10; i>=1; i--){
                this.toOne.push(i)
            }
        },
        multiplyToTen(){
            for(let i = 0; i<this.toTen.length; i++){
                this.toTen[i] = this.toTen[i] * 10;
                console.log(this.toTen[i])
            }
            this.multiplyKey++; //WE HAD ISSUE WITH RERENDERING, so if value changes in vue but not in HTML ISSUE IS WE NEED TO RERENDER THE PAGE
        },
        topNum(){
            for(let i=0; i<this.doubleArrays.length; i++){
                console.log(this.doubleArrays[i])
                let maxNumber = 0;
                for(let j=0; j<this.doubleArrays[i].length; j++){
                    if(this.doubleArrays[i][j]>=maxNumber){
                        maxNumber=this.doubleArrays[i][j]
                    }
                };
                this.doubleArrays[i] = maxNumber //DOUBLE FOR LOOPS LEARN A LOT......
            }
        }
    },
}
</script>