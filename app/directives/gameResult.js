(function () {
'use strict';
angular.module('RockPaperScissorsApp')
.directive('gameResult', gameResult);

function gameResult(){

  var directive = {
    restrict : 'A',
    replace : true,
    scope: {
      player: '=',
      matchResult: '='

    },
    bindToController:true,
    controller: controller,
    controllerAs: 'vm',
    templateUrl : 'templates/gameResult.html'
  };
    return directive;

  function controller($scope){

  }
 


}
}());