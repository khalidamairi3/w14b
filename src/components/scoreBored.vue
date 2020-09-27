<template>
  <div id="scoreboard">  
      <h1> select you choice </h1>
      <h1> {{ resultmessage }}</h1>
      <div id="results">
          <h1> {{ "wins : " + wins }}</h1>
          <h1> {{ "draws : " + ties }}</h1>
          <h1> {{ "loses : " + loses }}</h1>
      </div>
  </div>
</template>

<script>
export default {
  name: "score-board",
  computed : {
      userSelection () { 
          return this.$store.state.userSelection;
      },
      computerSelection(){
          return this.$store.state.computerSelection;
      },
      wins(){
          return this.$store.state.wins;
      },
      loses(){
          return this.$store.state.loses;
      },
      ties(){
          return this.$store.state.draws;
      },
      resultmessage(){
          return this.$store.state.result_message;
      }
  }
};
</script>

<style scoped>

#scoreboard{
    display: grid;
    justify-items: center;
    align-items: center;
}

#results{
    width: 75%;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    justify-items: center;
    align-items: center;
}
</style>


 