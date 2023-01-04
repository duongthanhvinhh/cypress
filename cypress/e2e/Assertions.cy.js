describe('Assertions demo',() => {
    it("Implicit_Assertions Example #1", () => {
        cy.visit("https://automationexercise.com/products")

        cy.url().should('include','automationexercise.com')
        cy.url().should('eq','https://automationexercise.com/products')
        cy.url().should('contain','automationexercise') //should-contain and should-include are the same way

        //all 3 assertions above can be group by only one line as below:
        cy.url().should('contain','automationexercise')
                .and('eq','https://automationexercise.com/products')
                .and('contain','automation')
                .and('not.contain','vinhtester')


        cy.title().should('eq','Automation Exercise - All Products')

        cy.get('#search_product').should('be.visible')
        cy.get('#search_product').should('exist')
    
    })

    it("Implicit_Assertions Example #2", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get('.oxd-button').should('be.visible')
        cy.get('.oxd-button').should('exist')

        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()
    }) 

    it("Explicit_Assertions Example #1", () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.get('.oxd-button').should('be.visible')
        cy.get('.oxd-button').should('exist')

        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

        let expName='Dashboard';

        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').then( (x)=>{

            let actName = x.text() 

            //BDD style
            expect(actName).to.equal(expName)

            //TDD style
            assert.equal(actName,expName)

        })
    })
})