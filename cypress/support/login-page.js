class LoginPage {
    // locators
    locators = {
    emailField: () => cy.get('#userName'),
    passwordField: () => cy.get('#password'),
    loginButton: () =>  cy.get('#login-btn'),
    emailRadio: () => cy.get('.login-radio label').contains('Email'),
    nextButton: () => cy.get('button').contains('Next'),
    validationCodeContainer: () => cy.get('.two-factor-container.active'),
    firstCellCodeContainer: () => cy.get('#c-1'),
    
    }

    // actions
    login () {
        cy.visit('/');

        this.locators.emailField().type(Cypress.env('VIEWIQ_LOGIN'));
        this.locators.passwordField().type(Cypress.env('VIEWIQ_PASSWORD'));
        this.locators.loginButton().click();

        this.locators.nextButton().click();


        this.locators.validationCodeContainer().should('be.visible').then(() => {
            cy.wait(5000).then(() => {
                cy.getVerificatioCode(Cypress.env('MAILOSAUR_SERVER_ID'), Cypress.env('MAILOSAUR_API_KEY')).then((verificationCode) => {
                    console.log('verificationCodeReceived = ', verificationCode);
                        verificationCode.forEach((letter, index) => {
                        cy.get(`#c-${index + 1}`) 
                        .type(letter)
                        .should('have.value', letter);
                        });
                    });
            });
        });

        cy.get('.modal-open').find('.skip').click();

        cy.url().should('eq', 'https://rc.viewiq.com/home');
    }
}

export default LoginPage;