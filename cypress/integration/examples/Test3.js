/// <reference types="Cypress" />

describe('My 3rd Test Suite', function() {
    it('My first test case', function() {
        //expect(true).to.equal(false)
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').should('not.be.checked').and('have.value','option1')
        //cy.get('#checkBoxOption1').check().should('be.checked')

        //cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')

        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get("input[value='option2']").click()
        cy.get("input[value='option2']").uncheck()
        cy.get("input[type='checkbox']").check(['option2', 'option3'])

        // Static Dropdown
        cy.get('select').select('option2').should('have.value', 'option2')

        // Dynamic Dropdown
        // cy.get('input.ui-autocomplete-input').type('ind')
        cy.get('#autocomplete').type('ind')

        // li.ui-menu-item div.ui-menu-item-wrapper
        cy.get('li.ui-menu-item div').each(($e1, index, $list) => {
            if($e1.text()==="India") {
                $e1.click()
            }
        })

        // autocomplete
        cy.get('#autocomplete').should('have.value', 'India')

        // visible invisible
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')

        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        // radio button selection with attributes
        cy.get('input[value=radio3]').click()
        cy.get('input[value=radio3]').should('be.checked')

    })

    
})