/// <reference types="Cypress" />

describe('My 7th Test Suite', function() {
    it('My first test case', function() {

        // cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.visit(Cypress.env('url') + '/AutomationPractice/')
        
        // There are 2 methods to acces the child window i.e. child tab
        // Method 1: remove target attribute

        // Method 2: href attribute , cy.visit(url)
        cy.get('#opentab').then(function(el) {
            const url=el.prop('href')
            cy.log(url)
            cy.visit(url)
        })


    })

    
})