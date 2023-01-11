describe('Handle tabs',(()=>{

    it('Approach 1',()=>{

        cy.visit('https://the-internet.herokuapp.com/windows'); //parent tab
        cy.get('.example >a').invoke('removeAttr','target').click(); //clicking on link
        //Using invoke removeAttr 'target', so that when we click the same link: "/windows/new" 
        //The new tab opened will overiding the current tab
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')

        cy.wait(5000);
        //operations
        cy.go('back'); //back to parent tab
    })

    it('Approach 2',()=>{

        cy.visit('https://the-internet.herokuapp.com/windows'); //parent tab

        cy.get('.example >a').then((e)=>{ //whenever element is captured, it will be stored into e, and parsing into the function


            let url = e.prop('href'); //let url = value of 'href' attribute

            cy.visit(url);

        })

        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')

        cy.wait(5000);
        
        //operations
        cy.go('back'); //back to parent tab


    })
}))