/// <reference types="Cypress" />

describe('My 4th Test Suite', function() {
    it('My first test case', function() {
        //expect(true).to.equal(false)
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.get('input[value=Confirm]').click()

        // window:alert
        cy.on('window:alert', (str) => {
            // Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        // window:confirm
        cy.on('window:confirm', (str) => {
            // Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        // open new tab - using removeAttr function provided by Cypress to force it to be opened on the same window
        // something like jQuery
        // this is due to Cypress not support new tab open
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        

        // how to check the tab is opened correctly? using assertion
        cy.url().should('include','index')

        // navigate browser using Cypress - go
        cy.go('back')



    })

    
})