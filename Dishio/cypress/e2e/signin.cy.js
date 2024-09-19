describe('User Registration with email', () => {
    it('Verify Create an account using email address', () => {
  
     cy.visit("https://dishio-admin-staging.vercel.app/signin")
  
     cy.get('[data-cy="email"]')
     .should('exist') 
     .click()
     .type('testerbd333@gmail.com');

     cy.get('[data-cy="password"]')
     .should('exist') 
     .click()
     .type('A@12345b');

     cy.get('circle[cx="16"][cy="16"][r="4"]')
     
     .click();

     cy.get('[data-cy="signin-button"]')
     .should('exist') 
     .click()
  

    })
  
  })