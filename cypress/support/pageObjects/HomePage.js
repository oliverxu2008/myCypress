class HomePage {
    // Name text box
    getNameTxtBx() {
        return cy.get("input[name='name']:nth-child(2)");
    }

    getEmailTxtBx() {
        return cy.get("input[name='email']");
    }

    getTwoWayDataBinding() {
        return cy.get('h4 input.ng-pristine');
    }

    getGenderMenu() {
        return cy.get('select.form-control');
    }

    getEntrepreneur() {
        return cy.get('#inlineRadio3');
    }

    getHomeTab() {
        return cy.get('li.nav-item:nth-child(1) > a.nav-link');
    }

    getShopTab() {
        return cy.get('li.nav-item:nth-child(2) > a.nav-link');
    }
}

export default HomePage;