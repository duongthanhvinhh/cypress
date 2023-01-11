
describe('Alerts', ()=> {

    //1) Javascript Alert: It will have some text and an 'OK' button
    it.skip('Javascipt Alert', ()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get("button[onclick='jsAlert()']").click();

        cy.on('window:alert',(t)=>{

                expect(t).to.contain('I am a JS Alert');
            
        })
        //alert window automatically closed by cypress
        cy.get('#result').should('have.text','You successfully clicked an alert')
    })


    //2) Javascript Confirm Alert: It will have some text with 'OK' and 'Cancel' button
    it('Javascipt Confirm Alert - OK', ()=>{  

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm',(t)=>{
            expect(t).to.contain('I am a JS Confirm');
        })

        //Cypress automatically closed alert window by using ok button-default
        cy.get('#result').should('have.text','You clicked: Ok')

    })

    it('Javascipt Confirm Alert - Cancel', ()=>{  //it.only to only run this it

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        
        cy.get("button[onclick='jsConfirm()']").click();

        cy.on('window:confirm',(t)=>{
            expect(t).to.contain('I am a JS Confirm');
        })

        /* 
        Cypress automatically closed alert window by using ok button-default
        So if you want to confirm alert with Cancel button, you need to write an event as below
        */

        cy.on('window:confirm',()=>false); //Cypress closes alert window using Cancel button

        cy.get('#result').should('have.text','You clicked: Cancel')

    })


    //3) Javascript Prompt Alert: It will have some text with a text box for user input along with 'OK' and 'Cancel button'
    it('Javascipt Promt Alert', ()=>{

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then((win)=>{ //whenever window is open, then capture window as 'win'
            cy.stub(win,'prompt').returns('Hello, I am Vinh');
        })

        cy.get("button[onclick='jsPrompt()']").click();


        //cypress will automatically close prompted alert - It will use OK button - by default
        // cy.on('window:prompt',()=>false); //Cypress closes alert window using Cancel button

        cy.get("#result").should('have.text','You entered: Hello, I am Vinh');


    })


    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    
    
    //4) Authenticated Alert

    it("Authenticated Alert - approach 1",()=>{
        //approach 1
        cy.visit("https://the-internet.herokuapp.com/basic_auth", {auth: 
                                                                            {
                                                                                    username: "admin",
                                                                                    password: "admin"                                    
                                                                            }
                                                                          } );
        cy.get("div[class='example'] p").should('have.contain',"Congratulations!")
    })

    it("Authenticated Alert - approach 2",()=>{
        //approach 2: insert username and password directly into URL
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")                                                                  
        cy.get("div[class='example'] p").should('have.contain',"Congratulations!")
    })
})
