# Boxinator
This is a code-exam for Fortnox called Boxinator.  
The aim for this project is to create a web page that lets you
view and add boxes that should be sent to one of four destinations. 

Each box has a:

* name for the receiver
* weight of the box
* color of the box
* destination for the box
* shipping cost that is calculated by static multipliers.

## Execute (for Windows)
To execute this application start with downloading or cloning this repository. After that open the root folder of the project (inside the boxinator folder) and open a command prompt window. In the command prompt execute the command ``mvnw.cmd spring-boot:run`` and let the project start up. Once ready head to ``localhost:8080/`` in your prefered browser.

## Run tests

### Run JS tests
To start the js test open the project folder and open a command prompt. In that command window run ``npm test`` and it will run all tests in the project.

### Run java test
This project only have 1 real backend function and that is adding and retrieving from the database. To start this test open the project folder and open a command prompt in that window. In the command window run ``mvnw.cmd test`` and it will run the test.