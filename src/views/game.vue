<template>
  <div id="game">
    <h1>welcome to Rock Paper Scissors Game</h1>
    <h3 @click="logout"> Logout</h3>
    <img id="game_picture"
      src="https://static.vecteezy.com/system/resources/previews/000/693/105/original/cartoon-rock-paper-scissors-vector-characters.jpg"
      alt="game welcome"
    />
    <score-board />
    <div id="selection">
      <button @click="selection(0)">Rock</button>
      <button @click="selection(1)" >Paper</button>
      <button @click="selection(2)">Scissors</button>
    </div>
    <div id="battle">
        <userSelection />
        <h2> vs </h2>
        <computerSelection />
    </div>
    
  </div>
</template>

<script>
import scoreBoard from "../components/scoreBored";
import userSelection from "../components/userSelection";
import computerSelection from "../components/computerSelection";
import cookies from "vue-cookies";
export default {
  name: "page-game",
  components: {
        scoreBoard,
        userSelection,
        computerSelection
  },
   mounted () {
      if (cookies.get("token")==undefined)
      this.$router.push("/login");

  },
  data: function() {
    return {
      game_elements: [
        {
          name: "Rock",
          image:
            "https://www.nicepng.com/png/detail/6-61708_rock-rock-paper-scissors-clipart.png"
        },
        {
          name: "Paper",
          image:
            "https://www.clipartkey.com/mpngs/m/109-1094319_rock-paper-scissors-png.png"
        },
        {
          name: "Scissors",
          image:
            "https://www.kindpng.com/picc/m/502-5025794_rock-paper-scissors-clipart-hd-png-download.png"
        }
      ]
    };
  },
  methods: {
      selection:function(index){
          let selection = this.game_elements[index];
          let computerSelection = this.game_elements[Math.floor(Math.random()*3)];
          this.$store.commit("updateComputerSelection",computerSelection);
          this.$store.commit("updateUserSelection",selection);
          this.$store.dispatch("decidewinner");
      },
      logout : function(){
          cookies.remove("token");
          this.$store.commit("reset");
          this.$router.push("/login");
      }
  },
};
</script>

<style scoped>
#game_picture {
  width: 50%;
  height: 20%;
  object-fit: cover;
}

#selection{
    display: grid;
    width: 80%;
    margin-left: 10%;
    column-gap: 4vw;
    grid-template-columns: 1fr 1fr 1fr;
}
#battle{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5,1fr);
    justify-items: center;
    align-items: center;
    text-align: center;
}
</style>