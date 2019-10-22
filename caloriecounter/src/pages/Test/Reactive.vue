<template>
    <div>
        <h1>Loop trough list</h1>
        <ul>
            <li v-for="ninja in ninjas">{{ninja}}</li>
        </ul>
        <ul>
            <li v-for="ninja in ninjas">{{ninja.name}} - {{ninja.age}}</li>
        </ul>
        <h2>Show Ninja in DIV</h2>
        <div class="showNinjas" v-for="ninja in ninjas">
            {{ninja.name}} , {{ninja.age}} ;
        </div>
        <h2> Show Key and then value of object </h2>
        <template v-for="ninja in ninjas">
            <div v-for="(val,key) in ninja">
                <p>{{key}} : {{val}}</p>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
        ninjas: [
            {name: 'Ryu', age: 25},
            {name: 'Ken', age: 19},
            {name: 'Yoshi', age: 35}
        ]
        }
    }
}

</script>