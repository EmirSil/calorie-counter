<template>
    <div>
        <div class="circle">
            <div id="circlecolor" :style="'background-color: ' + colorCircle"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: [
        "colorCircle"
    ]
}
</script>

<style scoped>
#circlecolor {
    height: 150px;
    width: 150px;
    background-color: '';
    border-radius: 50%;
}
</style>