/// <reference types="Cypress" />

describe('API Test Suite', function() {
    it('My first test case', function() {
        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {
            "name": "Learn Appium Automation with Java",
            "isbn": "aaaabbbbccceee",
            "aisle": "322oliver",
            "author": "Steve R Corvey"
        }).then(function(response) {
            expect(response.body).to.have.property("Msg", "successfully added")
            expect(response.status).to.eq(200)
        })
    })
})