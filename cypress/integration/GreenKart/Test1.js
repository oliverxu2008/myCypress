/// <reference types="Cypress" />

describe('My First Test Suite', function() {
    it('My first test case', function() {
        //expect(true).to.equal(false)
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
       // cy.get('.product:visible').should('have.length', 4)

        // parent child chaining
        cy.get('div.products').find('.product').should('have.length', 4)

        // cypress has a feature called alias, 'as'
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length', 4)

        // cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

        cy.get('.products').find('.product').each(($e1, index, $list) => {
            const vegName = $e1.find('h4.product-name').text()
            if (vegName.includes('Carrot')) {
                $e1.find('button').click()
            }
        })

        // assert if logo text is correctly displayed
        cy.get('.brand').should('have.text', 'GREENKART')

        // this is to print in logs
        cy.get('.brand').then(function(logoelement) {
            cy.log(logoelement.text())
        })

    })

    
})