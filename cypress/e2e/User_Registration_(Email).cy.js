describe('User Registration with email', () => {
    it('Verify Create an account using email address', () => {
  
     cy.visit("URL")
  
     cy.get(".input[id='Sign up for free']").click()
  
     cy.get(".input[id='First Name']").type('Md Raju')
  
     cy.get(".input[id='Last Name']").type('Ahmed')
  
     cy.get(".input[id='Email']").type('raju@madmonkeyhostels.com')
  
     cy.get(".input[id='Password']").type('A@12345b')
  
     cy.get(".input[id='Confirm Password']").type('A@12345b')
  
     cy.get(".input[id='Email Me Exclusive Agoda Promotion']").check()

     cy.get(".input[id='Sign Up']").click()
    
    })
  
  })