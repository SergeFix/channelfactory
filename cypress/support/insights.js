class Insights {
    // locators
    locators = {
        influencerName: () => cy.get('.name'),
        channelCard: () => cy.get('.main-card'),
        searchField: () => cy.get('#search-input'),
        filtersButton: () => cy.get('.popover-btn').contains('Filters'),
        buttonInFilter: (sectionName, buttonLabel) => cy.get('.sub-item').contains(sectionName).find('.wide-box').contains(buttonLabel),
        checkboxeInFilter: (sectionName, checkboxLabel) => cy.get('.filter-title').contains(sectionName).next().find('.checkbox-container').contains(checkboxLabel),
        searchFieldInFilter: (sectionName) => cy.get('.filter-title').contains(sectionName).next().find('input.form-control'),
        flagContainer: () => cy.get('.flags-container'),
        vettedRiskyFlag: () => cy.get('.vettedrisky'),
        applyFilterButton: () => cy.get('.apply-btn'),
        infoContainer: () => cy.get('.info-container'),
    }
}

export default Insights;