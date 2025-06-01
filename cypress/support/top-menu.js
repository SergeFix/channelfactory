class TopMenu {
    // locators
    locators = {
    insights: () => cy.get('a[data-testid="/insights"]'),
    profileButton: () => cy.get('.img-container.profile'),
    logOutButton: () => cy.get('.opt').contains('Log out'),
    }

    // actions
    logout () {
        this.locators.profileButton().click();
        this.locators.logOutButton().click();
    };
}

export default TopMenu;