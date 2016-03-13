describe('RockPaperScissorsService', function () {


  beforeEach(module('RockPaperScissorsApp'));

  var rockPaperScissorsServiceMock;

  beforeEach(inject(function(_rockPaperScissorsService_){
        rockPaperScissorsServiceMock = _rockPaperScissorsService_;
  }));

   it("check the service is instantiated", function(done){    
      expect(rockPaperScissorsServiceMock).not.toBe(undefined);
      done();
   });

    it("check the player data is intialised properly", function(done){
      var playerData = rockPaperScissorsServiceMock.getPlayerData(); 
      expect(playerData.wins).toBe(0);
      expect(playerData.lost).toBe(0);
      expect(playerData.ties).toBe(0);
      expect(playerData.currentSelectedChoice).toBe('Default');
      done();
    });
    
    it("check the choices are configured properly 'Rock' 'Paper' 'Scissors'", function(done){
      var choices =  rockPaperScissorsServiceMock.getGameChoices();
      expect(choices[0]).toBe('Rock');
      expect(choices[1]).toBe('Paper');
      expect(choices[2]).toBe('Scissors');
      done();
    });    

    it("check the updateGameResults method with no params", function(done){
      rockPaperScissorsServiceMock.updateGameResults();
      done();
    });        

    it("check the whether player wins on different choices", function(done){
      this.player1 = rockPaperScissorsServiceMock.getPlayerData();
      this.player2 = rockPaperScissorsServiceMock.getPlayerData();
      this.player1.currentSelectedChoice  ='Rock';
      this.player2.currentSelectedChoice  ='Paper';
      rockPaperScissorsServiceMock.updateGameResults(this.player1, this.player2);
      expect(this.player1.lost).toBe(1);
      expect(this.player2.wins).toBe(1);
      done();
    });      

     it("check the whether game ties on same choices", function(done){
      this.player1 = rockPaperScissorsServiceMock.getPlayerData();
      this.player2 = rockPaperScissorsServiceMock.getPlayerData();
      this.player1.currentSelectedChoice  ='Scissors';
      this.player2.currentSelectedChoice  ='Scissors';
      rockPaperScissorsServiceMock.updateGameResults(this.player1, this.player2);
      expect(this.player1.ties).toBe(1);
      expect(this.player2.ties).toBe(1);
      done();
    });      


});