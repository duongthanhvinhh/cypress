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

        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length','10'); //Verify total of Rows is 10

        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length','7'); //Verify total of Columns is 7

    })

    it('Check cell data from specific Row & Column',()=>{

        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)")
        .contains('princytrainings4@gmail.com');
        
    })

    it('Read all the rows & columns data in the first page',()=>{
        
    })

    it('Pagination',()=>{
        
    })
}))