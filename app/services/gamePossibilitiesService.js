/**
 ** Service to get the possible outcomes
 ** resultIndex 0  human wins
 ** resultIndex 1  computer wins
 ** resultIndex -1 tie
**/

(function() {
    'use strict';
    angular.module("RockPaperScissorsApp")
        .service('gamePossibilitiesService', gamePossibilitiesService);


    function gamePossibilitiesService() {
        var outcomes = [{
            choice: ['Rock', 'Rock'],
            resultIndex: -1
        }, {
            choice: ['Rock', 'Paper'],
            resultIndex: 1
        }, {
            choice: ['Rock', 'Scissors'],
            resultIndex: 0
        }, {
            choice: ['Paper', 'Paper'],
            resultIndex: -1
        }, {
            choice: ['Paper', 'Rock'],
            resultIndex: 0
        }, {
            choice: ['Paper', 'Scissors'],
            resultIndex: 1
        }, {
            choice: ['Scissors', 'Paper'],
            resultIndex: 0
        }, {
            choice: ['Scissors', 'Scissors'],
            resultIndex: -1
        }, {
            choice: ['Scissors', 'Rock'],
            resultIndex: 1
        }];

        var service = {
            getOutcomes: getOutcomes
        };


        function getOutcomes() {
            return outcomes;
        }
        return service;

    }

})();