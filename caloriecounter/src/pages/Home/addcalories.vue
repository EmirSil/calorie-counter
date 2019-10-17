<template>
    <div>
        <div class="heading"><h1>CALORIES</h1></div>
        <input id="rantxt" type="number" placeholder="Enter number of calories" v-model="calories" onkeypress="javascript:fillist(event);">
        <div>{{calories}}</div>
        <div class="list">
            <ul class="lista">

            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        "calorieInput"
    ],
    
    methods: {
        fillist() {
   
    
   
    document.getElementById("rantxt").onkeypress = function(event){
        if (event.keyCode == 13 || event.which == 13){            
            var node = document.createElement("Li");
            node.innerHTML = document.getElementById("rantxt").value;
            document.getElementById("lista").appendChild(node);
            document.getElementById("rantxt").value ="";
            
        }

    };
    
}
    },
}
</script>

