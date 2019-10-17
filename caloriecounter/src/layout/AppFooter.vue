<template>
    <div>
        <md-toolbar class="foot-parent">
            <div class="foot1 foot-child">
                <h2>Useful Links</h2>
                <div>
                    <div><a href="https://github.com/BenjoNi123">Visit my GitHub</a></div>
                    <div><a href="https://vuejs.org/">Visit Vue</a></div>
                    <div><a href="https://www.linkedin.com/">Visit LinkedIn</a></div>
                </div>
            </div>
            <div class="foot2 foot-child">
                <h2>Personal Info</h2>
                <p>Name: Benjamin Kukuljac</p>
                <p>Location: Sarajevo, Bosnia and Herzegovina</p>
                <p>E-Mail: benjamin.kukuljac@hotmail.com</p>
                <p>Level: Junior</p>
            </div>
            <div class="foot3 foot-child"><h2>Legal Info</h2>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sodales ultrices velit nec aliquam. Aenean euismod eu sapien nec molestie.</span>
            </div>
            
        </md-toolbar>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.foot-parent {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
}

.foot-child {
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 33%;
    display: flex;
    align-items: center;
    flex-direction: column;
}
</style>