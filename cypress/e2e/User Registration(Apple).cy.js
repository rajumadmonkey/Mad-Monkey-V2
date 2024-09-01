describe('User Registration with Apple', () => {
    it('Verify Create an account using Apple account', () => {
  
     cy.visit("URL")
  
     cy.get(".input[id='Sign up for free']").click()
  
     cy.get(".input[id='Apple']").click()
  
     cy.get(".input[id='Continue']").click()
  
     cy.get(".input[id='Open']").click()
  
     cy.get(".input[id='Facebook account']").select().should('be.visible')
    
    })
  
  })