/// <reference types="Cypress" />

describe('My 5th Test Suite', function() {
    it('My first test case', function() {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        cy.get('table.table-display tbody tr td:nth-child(2)').each(($e1, index, $list) => {
            const courseTitle = $e1.text()
            if(courseTitle.includes("Python")) {
                // method 1 - to get the price
                cy.get('table.table-display tbody tr td:nth-child(2)').eq(index).next().then(function(price)
                {
                   const priceText = price.text()
                   expect(priceText).to.equal('25')
                })

                // method 2 - to get the price
                cy.get('table.table-display tbody tr td:nth-child(3)').eq(index).then(function(price) 
                {
                    const priceText = price.text()
                    expect(priceText).to.equal('25')
                })
            }
        })


    })

    
})