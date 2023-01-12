describe("Handling Tables",(()=>{

    beforeEach('Login',()=>{
        cy.visit('https://demo.opencart.com/admin/index.php');
        cy.get("#input-username").type("demo");
        cy.get("#input-password").type("demo");
        cy.get("button[type='submit']").click();

        //Close the popup after logged in
        cy.get(".btn-close").click();
        //Customers --> Customers
        cy.get("li#menu-customer>a").click();  //Customers main menu
        cy.get("#menu-customer>ul>li:first-child").click();  //Customers sub/child item


    })

    it('Check Number Rows & Columns',()=>{

        
    })

    it('Check cell data from specific Row & Column',()=>{
        
    })

    it('Read all the rows & columns data in the first page',()=>{
        
    })

    it('Pagination',()=>{
        
    })
}))