<template>
    <div id="userSelection">
        <div v-if="selection.name != undefined" id="user-selection">
            <h1> User Selection </h1>
            <img :src="selection.image" alt="user choice image">
        </div>

    </div>
</template>

<script>
    export default {
        name: "user-selection",

        computed: {
            selection() {
                return this.$store.state.userSelection; 
            }
        },

        
    }
</script>

<style scoped>
#userSelection{
    grid-column: span 2;
}
img{
    width : 75%;
    height: 40vh;
    object-fit: fill;
}

</style>