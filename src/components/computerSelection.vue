<template>
    <div id="computerSelection">
        <div v-if="selection.name != undefined " id="computer-selection">
            <h1> computer selection </h1>
            <img :src="selection.image" alt="computer choice image">
        </div>

    </div>
</template>

<script>
    export default {
        name: "computer-selection",

        computed: {
            selection() {
                return this.$store.state.computerSelection; 
            }
        },

        
    }
</script>

<style scoped>
#computerSelection{
    grid-column: span 2;
}
img{
    width : 75%;
    height: 40vh;
    object-fit: fill;
}

</style>