class Insights {
    // locators
    locators = {
        influencerName: () => cy.get('.name'),
        searchField: () => cy.get('#search-input'),
    }


}

export default Insights;