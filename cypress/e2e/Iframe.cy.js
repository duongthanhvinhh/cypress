import 'cypress-iframe'

describe("Handling frames",()=>{

    it('approach 1  -  by coding yourself',()=>{

        cy.visit("https://the-internet.herokuapp.com/iframe");

        //After get iframe, we know that iframe contains an document, so we use .its to access it
        const iframe = cy.get("#mce_0_ifr")
            .its('0.contentDocument.body') //because we only have one iframe, so we use index 0 to indicate the iframe index
            .should('be.visible')
            .then(cy.wrap);

            iframe.clear().type("Hello, I am VinhTester {ctrl+a}");

            //Click 'B'button to highlight the text
            cy.get("[aria-label='Bold']").click();

    })

    it('approach 2  -  by using custom command',()=>{

        cy.visit("https://the-internet.herokuapp.com/iframe");

        cy.getIframe('#mce_0_ifr').clear().type("Welcome {cmd+a}");

        cy.get("[aria-label='Bold']").click();
            
    })


    it('approach 3  -  by using cypress-iframe plugin',()=>{

        cy.visit("https://the-internet.herokuapp.com/iframe");

        cy.frameLoaded('#mce_0_ifr'); //Load the frame

        cy.iframe('#mce_0_ifr').clear().type("Welcome {cmd+a}");

        cy.get("[aria-label='Bold']").click();

    })

})