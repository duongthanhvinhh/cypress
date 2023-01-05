describe("check UI Element", ()=>{

    it("Checking Radio Buttons",()=>{

        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        //visibility of radio button
        cy.get('input#male').should('be.visible')
        cy.get('input#female').should('be.visible')
        
        //selecting radio buttons
        cy.get("input#male").check().should('be.checked')
    })

})