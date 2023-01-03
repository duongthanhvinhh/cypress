
describe('XPathLocators',() => {
        it("find no of products", () => {        
        cy.visit("https://automationexercise.com/products")
        // cy.xpath("").should('have.length',7)
        cy.xpath("//input[@id='search_product']").type('Top')
    })
})