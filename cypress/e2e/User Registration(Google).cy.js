describe('User Registration with Google', () => {
    it('Verify Create an account using Google account', () => {
  
     cy.visit("URL")
  
     cy.get(".input[id='Sign up for free']").click()
  
     cy.get(".input[id='Google']").click()
  
     cy.get(".input[id='Continue']").click()
  
     cy.get(".input[id='Open']").click()
  
     cy.get(".input[id='Facebook account']").select().should('be.visible')
  
    
    })
  
  })