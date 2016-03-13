describe('RockPaperScissors', function () {

  beforeEach(module('RockPaperScissorsApp'));

  var $controller, $scope, vm;

  beforeEach(inject(function(_$rootScope_, _$controller_){
    $controller = _$controller_;
    $scope = _$rootScope_.$new();
    vm = $controller('RockPaperScissorsController', {$scope: $scope});
  }));


        it('all the controller parameters are loaded', function () {

            expect(vm.computerPlayer.wins).toBe(0);
            expect(vm.computerPlayer.lost).toBe(0);
            expect(vm.humanPlayer.lost).toBe(0);
        }); 



        it('computer choice must be empty', function () {

            expect(vm.computerPlayer.currentSelectedChoice).toBe('Default');
        }); 



        it('check computer selects a random choice', function () {
            vm.makeComputerChoice();
            expect(vm.computerPlayer.currentSelectedChoice).not.toBe('Default');
        }); 

    

        it('check game starts when user selects a choice', function () {
            vm.startGame(0);
            expect(vm.humanPlayer.currentSelectedChoice).toBe('Rock');
        }); 



        it('test start game method with undefined index as param', function () {
            vm.startGame();
            expect(vm.humanPlayer.currentSelectedChoice).toBe('Default');
        }); 



        it('test start game method with undefined index as param', function () {
            vm.startGame('a');
            expect(vm.humanPlayer.currentSelectedChoice).toBe('Default');
        }); 
});