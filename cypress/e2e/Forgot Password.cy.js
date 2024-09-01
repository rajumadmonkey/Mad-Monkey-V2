describe('User Login with email', () => {
    it('Verify login using email address', () => {
  
     cy.visit("URL")
  
     cy.get(".input[id='Forgot Password']").click()
  
     cy.get(".input[id='Email']").type('raju@madmonkeyhostels.com')
  
     cy.get(".input[id='Reset Password']").click()

     cy.get(".input[id='Sign In']").click()
     
    
    })

    it('Reset Password', () => {

      cy.visit('Password reset link').click()

      cy.get(".input[id='Password']").type('A@12345b')
  
     cy.get(".input[id='Confirm Password']").type('A@12345b')

     cy.get(".input[id='Reset Password']").click()


    })
  
  })