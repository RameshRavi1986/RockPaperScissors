(function () { 
 'use strict';
angular.module("RockPaperScissorsApp")
.service('rockPaperScissorsService', rockPaperScissorsService);

rockPaperScissorsService.$inject = ['gamePossibilitiesService'];

function rockPaperScissorsService(gamePossibilitiesService){

  var choices = ['Rock', 'Paper', 'Scissors'];
  var outcomes = gamePossibilitiesService.getOutcomes();
  var matchResult = ' ';
  var service = {
     getPlayerData: getPlayerData,
     getGameChoices: getGameChoices,
     updateGameResults: updateGameResults,
     getRandomChoice: getRandomChoice
  };


  function Player(){
    this.wins = 0;
    this.lost = 0;
    this.ties = 0;
    this.currentSelectedChoice = 'Default';
  }

   function getPlayerData(){
     return new Player();
   }
   
   function getGameChoices(){
       return choices; 
   }

   function updateGameResults(player1, player2){
	    var playerIndex = 0;
         if(player1 && player2){
            angular.forEach(outcomes, function(choices, key){
               if(player1.currentSelectedChoice === choices.choice[0] && player2.currentSelectedChoice === choices.choice[1]){
                   updateScoreCard(choices, player1, player2);
				   playerIndex = choices.resultIndex;
			   }
            });
	       return playerIndex;
         }

   }

   function updateScoreCard(choices, player1, player2){
               switch(choices.resultIndex) {
                   case -1:
                     player1.ties++;
                     player2.ties++;
                     break;
                   case 1:
                     player1.lost++;
                     player2.wins++;
                     break;
                   default:
                     player2.lost++;
                     player1.wins++;
               }
   }

   function getRandomChoice(){
	   var randomNumber = Math.round(Math.random()*2);
	   return choices[randomNumber];
   }

   return service;

}

})();