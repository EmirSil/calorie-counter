<template>
	<div id="toolbar">
    	<md-toolbar class="md-accent nav-css" md-elevation="1">
			<h3 class="md-title">Calorie Counter</h3>
			<div>
				<md-button to="/">Home</md-button>
				<md-button class="md-primary" to="/login">Login</md-button>
				<md-button class="md-primary" to="/register">Register</md-button>
				<md-button class="md-primary" to="/flex">Flex</md-button>
				<md-button class="md-primary" to="/test">Test</md-button>
				<md-button class="md-primary" to="/loto">Lotto</md-button>
			</div>
    	</md-toolbar>
    </div> 
</template>
<script>
export default {
    
}
</script>

<style scoped>
#toolbar {
    display: flex;
}
.nav-css {
	display:flex; 
	justify-content: space-between;
}
</style>
