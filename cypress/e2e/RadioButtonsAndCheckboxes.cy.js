describe("check UI Element", ()=>{
/*
    it("Checking Radio Buttons",()=>{

        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        //visibility of radio button
        cy.get('input#male').should('be.visible')
        cy.get('input#female').should('be.visible')
        
        //selecting radio buttons
        cy.get("input#male").check().should('be.checked')
        cy.get("input#female").should('not.be.checked')
    })
*/

    it("Checking Checkboxes",()=>{

        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        //Visibility of the element
        cy.get('input#monday').should('be.visible')

        //Selecting single checkbox - Monday
        cy.get("input#monday").check().should('be.checked')

        //Unselecting checkbox
        cy.get("input#monday").uncheck().should('not.be.checked')

        //Selecting all the checkboxes
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')

        //Unselecting all the checkboxes
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        //Selecting fist and last checkbox
        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')
        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')

    })

})