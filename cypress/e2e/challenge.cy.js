import LoginPage from'../support/login-page';
import TopMenu from '../support/top-menu';
import Insights from  '../support/insights';

const loginPage = new LoginPage;
const topMenu = new TopMenu;
const insights = new Insights;

before(() => {
    loginPage.login();
})

describe('Test automation challenge ', function() {


    it('Test Case 1 Search Functionality', () => {
        const influencer = 'MrBeast';
        topMenu.locators.insights().click();
        insights.locators.searchField().type(influencer);
        insights.locators.influencerName().contains(influencer).should('be.visible');
    })

    it('Test Case 2 Pagination', () => {
        topMenu.locators.insights().click();
        insights.locators.channelCard().should('have.length', 32);
    })

    it('Test Case 3 Filters - Vetted Yes/No', () => {
        topMenu.locators.insights().click();
        insights.locators.filtersButton().click();
        insights.locators.buttonInFilter('VettedAll', 'Yes').click();
        insights.locators.applyFilterButton().click();
        const flagContainers = insights.locators.flagContainer();
        flagContainers.each((flag) => {
            cy.wrap(flag).should('contain', 'Vetted');
        });
       
    })

        it('Test Case 4 Language filter', () => {
        topMenu.locators.insights().click();
        insights.locators.filtersButton().click();
        insights.locators.searchFieldInFilter('Language').type('English');
        insights.locators.checkboxeInFilter('Language', 'English').click();
        insights.locators.applyFilterButton().click();
         const infoContainers = insights.locators.infoContainer();
        infoContainers.each((info) => {
            cy.wrap(info).find('.info-item').should('contain', 'English');
        });
       

        })
});

after(() => {
    topMenu.logout();
})


