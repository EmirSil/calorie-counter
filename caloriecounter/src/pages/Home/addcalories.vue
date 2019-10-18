<template>
    <div>
        <div class="heading"><h1>CALORIES</h1></div>
        <input id="rantxt" type="number" placeholder="Enter number of calories" v-model="calories" @keyup.enter="fillList"> <!-- keyup.enter activate function-->
        <div>{{calories}}</div>
        <div v-if="showError">The calories must be over a 100</div><!-- ako je showError true odradi div -->
        <div class="list">
            <ul class="lista">
                <li v-if="calorie>=100" v-for="calorie in calorieList" :key="calorie">{{calorie}}</li> <!-- v-for kaze calorie je 1 element u calorie list arrayu i onda ispisi calorie unutar li-->
                <!-- v-if kaze ako je calorie veci od 100 do continue-->
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
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
            }
        }
    },
}
</script>