describe('CSSLocators',() => {
    it("csslocators", () => {
        cy.visit("https://automationexercise.com/products")
        cy.get("#search_product").type("t shirt")
        cy.get(".btn.btn-default.btn-lg").click()
        cy.url().should('include', 't%20shirt')
    })
    
})