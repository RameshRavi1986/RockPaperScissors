(function () {
'use strict';
angular.module("RockPaperScissorsApp")
.controller('RockPaperScissorsController',  RockPaperScissorsCtrl);

RockPaperScissorsCtrl.$inject = ['$scope' , '$interval', 'rockPaperScissorsService'];

function RockPaperScissorsCtrl($scope, $interval, rockPaperScissorsService){

var vm = this;
vm.humanPlayer = rockPaperScissorsService.getPlayerData();
vm.computerPlayer = rockPaperScissorsService.getPlayerData();
vm.choices = rockPaperScissorsService.getGameChoices();
vm.updateGameResults = rockPaperScissorsService.updateGameResults;
vm.makeComputerChoice = makeComputerChoice; 
vm.startGame = startGame;


  function startGame(index) {
      if(!isNaN(index) && index <4){
         vm.humanPlayer.currentSelectedChoice = vm.choices[index] ;
         makeComputerChoice();
         vm.matchResult = vm.updateGameResults(vm.humanPlayer, vm.computerPlayer);
      }
  }

 
  function makeComputerChoice(){
       vm.computerPlayer.currentSelectedChoice = rockPaperScissorsService.getRandomChoice();
  }

}

}());