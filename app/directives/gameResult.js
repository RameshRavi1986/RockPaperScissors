 /** Directive to view the game wins, lost, ties for each user
 **  It also shows the users choice
 **   
 **/
(function() {
    'use strict';
    angular.module('RockPaperScissorsApp')
        .directive('gameResult', gameResult);

    function gameResult() {

        var directive = {
            restrict: 'A',
            replace: true,
            scope: {
                player: '=',
                matchResult: '='

            },
            bindToController: true,
            controller: controller,
            controllerAs: 'vm',
            templateUrl: 'templates/gameResult.html'
        };
        return directive;

        function controller($scope) {

        }



    }
}());