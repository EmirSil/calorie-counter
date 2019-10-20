<template>
    <div>
        <div class="heading"><h1>CALORIES</h1></div>
        <input id="rantxt" type="number" placeholder="Enter number of calories" v-model="calories" @keyup.enter="fillList"> <!-- keyup.enter activate function-->
        <div v-if="showError">The calories must be over a 100</div><!-- ako je showError true odradi div -->
        <div class="list">
            <ul class="lista">
                <li  v-bind:style="colorGreen" v-for="calorie in greenCalorieList" :key="calorie">{{calorie}}</li> <!-- v-for kaze calorie je 1 element u calorie list arrayu i onda ispisi calorie unutar li-->
                <li  v-bind:style="colorRed" v-for="calorie in redCalorieList" :key="calorie">{{calorie}}</li> <!-- v-for kaze calorie je 1 element u calorie list arrayu i onda ispisi calorie unutar li-->
                <!-- v-if kaze ako je calorie manji od 2000 do continue, or else-->
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        
        return {
            colorRed: {
                color: "red"
            },
            colorGreen: {
                color: "green"
            },
            calories: 0,
            calorieList: [],
            showError: false,
        }
    },
    
    
    methods: {
        fillList() {
            if (this.calories <= 100) {
                this.showError=true;

            }
            else {
                this.calorieList.push(this.calories);
                this.showError=false;
                this.calories='';
            }
        },
        
    },

    computed: {
        greenCalorieList() {
            var result = [];
            for(var i=0; i<this.calorieList.length; i++) {
                var calorie = this.calorieList[i];
                if(calorie<=2000) {
                    result.push(calorie);
                }
            }
            return result;
        }, 
        redCalorieList() {
            var result = [];
            for(var i=0; i<this.calorieList.length; i++) {
                var calorie = this.calorieList[i];
                if(calorie>2000) {
                    result.push(calorie);
                }
            }
            return result;
        }
    },
}
</script>

<!-- LEARN FORS AND IFS A LOT AMONG EVERYTHING ELSE
     DO NOT SPACE BRACKETS FOR THE LOVE OF GOD
     DO NOT FORGET RETURNS!!!!!!!!!!!!!!!!!!!!!!-->