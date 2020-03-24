/// <reference types="Cypress" />
import HomePage from '../../support/pageObjects/HomePage'
import ProductPage from '../../support/pageObjects/ProductPage'

describe('My 8th Test Suite', function() {
    before(function() {
        // runs once before all tests in the block
        cy.fixture('example').then(function(data){
            this.data = data
        })
    })

    it('My first test case', function() {
        // Cypress.config('defaultCommandTimeout', 10000)  // it seems not working
        const homePage = new HomePage();
        const productPage = new ProductPage();

        // get url from user defined example.json file
        cy.visit(this.data.url)

        // get url from env variable cypress.json
        // cy.visit(Cypress.env('url') + '/angularpractice/')

        homePage.getNameTxtBx().type(this.data.name)
        homePage.getGenderMenu().select(this.data.gender)

        // assertion
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)

        // to check this Name input element has an attribute 'minlength' with value 2
        homePage.getNameTxtBx().should('have.attr', 'minlength', '2')

        // to check whether the element of a radio button is disabled or not
        homePage.getEntrepreneur().should('be.disabled')

        // cy.pause()

        // to click the shop link from top right
        homePage.getShopTab().click()

        // shopping list - 4 elements
        this.data.productName.forEach(function(element){
            cy.selectProduct(element)
        })

        productPage.getCheckOut().click();

        var sum = 0;

        // check the price total is caculated correctly
        // tr > td:nth-child(4) > strong
        cy.get('tr > td:nth-child(4) > strong').each(($el, index, $list) => {
            // cy.log($el.text())
            var result = $el.text().split(" ")
            var amount = result[1].trim()
            
            sum += parseInt(amount)

        }).then(function () {
            cy.log(sum)
        })

        cy.get('h3 strong').then(function(element) {
            const amount = element.text()
            var res = amount.split(" ")
            var total = parseInt(res[1].trim())
            cy.log(total)
            expect(sum).to.equal(total)
        })

        // cy.pause()
        

        // Checkout page, Checkout button
        cy.get('button.btn-success').click();
        cy.get('#country').type('China');
        
        // cy.get('div.suggestions > ul > li > a:nth-child(1)').click()
        cy.get('div.suggestions > ul > li > a').click()
        cy.get("label[for='checkbox2']").click()
        cy.get('.ng-untouched > .btn').click()
        // cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
        cy.get('.alert').then(function(element) {
            const actualText = element.text()
            expect(actualText.includes('Success! Thank you! ')).to.be.true
        })
        

    })

    
})