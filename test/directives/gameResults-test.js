describe('GameResultsDirective', function () {

  var compile, scope, directiveElem, httpBackend;
  beforeEach(module('RockPaperScissorsApp'));



  beforeEach(inject(function($compile, $rootScope, $httpBackend){
        compile = $compile;
        scope = $rootScope.$new();
        httpBackend = $httpBackend;        
  }));

   function getCompiledElement(){
      var element = angular.element('<div data-game-result></div>');
      var compiledElement = compile(element)(scope);
      scope.$digest();
      return compiledElement;
   }

   it('Test directive is compiled', function(done){
    httpBackend.when('GET','templates/gameResult.html').respond(200, '');    
    directiveElem = getCompiledElement();
    expect(directiveElem.isolateScope).toBeDefined();
    done();
   });

});