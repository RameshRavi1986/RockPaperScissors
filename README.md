# RockPaperScissors
==================

##Human vs computer

###Steps to run the app

    1. You need to install node js and git as a prereq.
    2. Checkout the code and run the following commands under the folder where package.json is present
            i)  "npm install" execute this command in command prompt
            ii) "bower install" execute this command in command prompt
            iii) once both of the above commands are finished run "gulp" it will build the app in build folder and start the app on port 3000
            iv)  Run the url http://localhost:3000/
            v) Choose the option an computer will play against you
            vi) You can track the scores and results dynamically
    3. Code uses angular js and nodejs as a server.
    4. You can check the unit test coverage report on test/coverage/chrome../index.html 
   
   ##unit testing
   
      1. Unit testing is written from scratch using jasmine and karma as a test runner.
      2. Reports are generated using karma-coverage.
      3. Go inside the test folder and run "karma start karma.conf.js"
