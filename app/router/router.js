(function () {
'use strict';
angular.module('RockPaperScissorsApp')
.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/game");  
    $stateProvider
        .state('game', {
            url: '/game',
            templateUrl: 'templates/game.html',
            controller: 'RockPaperScissorsController',
            controllerAs : 'vm'
        });
});

}());