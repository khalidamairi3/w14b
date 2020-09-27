import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

    userSelection: {},
    computerSelection: {},
    wins: 0,
    draws: 0,
    loses: 0,
    result_message : ""
  },
  mutations: {
    updateresult: function (state, status) {
      if (status == 1) {
        state.wins++;
        state.result_message= "YOU WON";
      }
      else if (status == -1) {
        state.loses++;
        state.result_message= "YOU LOST";
      }
      else if (status == 0) {
        state.draws++
        state.result_message= "TIE";
      }
    },
    updateComputerSelection: function (state, selection) {
      state.computerSelection = selection;
    },
    updateUserSelection: function (state, selection) {
      state.userSelection = selection;
    },
    reset : function(state){
      state.userSelection = {};
      state.computerSelection={};
      state.wins=0;
      state.loses=0;
      state.draws=0;
      state.result_message="";
    }
  },
  actions: {
    decidewinner: function (context) {
      let game_rules = {
        Rock: {
          Scissors: 1,
          Rock: 0,
          Paper: -1
        },
        Paper: {
          Scissors: -1,
          Rock: 1,
          Paper: 0
        },
        Scissors: {
          Scissors: 0,
          Rock: -1,
          Paper: 1
        }
      }
        
        context.commit("updateresult",game_rules[context.state.userSelection.name][context.state.computerSelection.name]);


  }},
  modules: {}
});
