/// <reference types="Cypress" />

describe('My 6th Test Suite', function() {
    it('My first test case', function() {

        // cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.visit(Cypress.env('url') + '/AutomationPractice/')
        
        // cypress could use jQuery invoke function
        cy.get('div.mouse-hover-content').invoke('show')

        // there is a force click function provided, so that the element which is hidden, is able to be clicked
        // however, this is not working at 27/02/2020
        // cy.get('div.mouse-hover-content a').contains('Top').click({force: true})
        // cy.contains('Top').click({force: true})

        cy.contains('Top').click()
        cy.url().should('include', 'top')


    })

    
})