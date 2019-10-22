<template>
    <div>
        <div class="list">
            <ul id="proba1">
                <li v-for="item in items">
                    {{item.message}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        items: [
            {message: 'foo'},
            {message: 'bar'}
        ]
        }
    }
}
</script>