const { parseRealPlatformBinaryFolderAsync } = require("cypress/lib/tasks/state")

describe ('Book a Hotel', () => {

  it('Book a Hotel', () => {
  
  cy.visit('URL')
  
  cy.get(".input[id='Hotel']").click()

  cy.get(".input[id='Location']").click().select('destination')

  cy.get(".input[id='Check-in']").click().should('be.visible')

  cy.get(".input[id='calendar']").should('contain','date').click();

  cy.get(".input[id='calendar']").should('contain','date').click();

  cy.get('apply-button').click()

  cy.get(".input[id='Guest']").click();

  cy.get(".input[id='+']").click() 

  cy.get(".input[id='-']").click() 

  cy.get('apply-button').click()


  cy.get('Submit/search-button').click()



  })
  
  })