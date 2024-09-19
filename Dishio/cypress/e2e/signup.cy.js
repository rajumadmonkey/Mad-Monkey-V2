describe('User Registration with email', () => {
    it('Verify Create an account using email address', () => {
  
     cy.visit("https://dishio-admin-staging.vercel.app/signup")
  
     cy.get('[data-cy="name"]')
     .should('exist') 
     .click()
     .type('QA');

     cy.get('[data-cy="last-name"]')
     .should('exist') 
     .click()
     .type('TESTER');

     cy.get('[data-cy="email"]')
     .should('exist') 
     .click()
     .type('testerbd333+1@gmail.com');

     cy.get('select[name="phoneNumberCountry"]')
     .select('BD') 
     .should('have.value', 'BD'); 

     cy.get('[data-cy="phone"]')
     .should('exist') 
     .click()
     .type('+8801728717236');
     
     cy.get('[data-cy="password"]')
     .should('exist') 
     .click()
     .type('A@12345b');
     
     cy.get('circle[cx="16"][cy="16"][r="4"]')
     
     .click();

     cy.get('[data-cy="submit"]')
     .should('exist') 
     .click()

    })
  
  })