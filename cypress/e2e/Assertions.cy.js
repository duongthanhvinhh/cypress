describe('Assertions demo',() => {
    it("Implicit_Assertions", () => {
        cy.visit("https://automationexercise.com/products")
        cy.url().should('include','automationexercise.com')
        cy.url().should('eq','https://automationexercise.com/products')
        cy.url().should('contain','automationexercise') //should-contain and should-include are the same way
    })
    
})