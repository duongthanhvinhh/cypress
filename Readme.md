********************************************************
            This is full course about Cypress
********************************************************

Environment Setup
========================================================
    1, Download & install nodejs
    2, Download & install visual studio code (VSCode)
    3, Create a new folder for project & open in VSCode
    4, Open cmd/Terminal then execute below command
        npm -i init  --> Create package.json file
    5, To install cypress
        npm install cypress --save -dev
    6, Start Cypress
        npx cypress open    (or)
        node_modules/.bin/cypress open  
    7, Add this entry to commands.js to import Cypress
            /// <reference types="Cypress" />  

Commands to Run:
========================================================
    1, npx cypress open (then browser opened, click file fileName.cy.js to run)
    2, npx cypress run (to run in headless mode)
    3, npx cypress run --headed (to run in headed mode)
    4, npx cypress run --spec cypress\e2e\MyFirstTest.cy.js (to run specific file)
    5, npx cypress run --browser chrome (or firefox/edge to run in a specific browser)


Install cypress_xpath:
========================================================
npm install -D cypress-xpath

add entry in commands.js
    require('cypress-xpath')

e2e.js
    /// <reference types="cypress-xpath" />