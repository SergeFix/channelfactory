import LoginPage from'../support/login-page';
import TopMenu from '../support/top-menu';
import Insights from  '../support/insights';

const loginPage = new LoginPage;
const topMenu = new TopMenu;
const insights = new Insights;

before(() => {
    loginPage.login();
})

describe('Test Case 1 Search Functionality', function() {
    const influencer = 'MrBeast';
    it('Navigate to “Insights”', () => {
        topMenu.locators.insights().click();
    })

    it('Search for an influencer', () => {
        insights.locators.searchField().type(influencer);
        insights.locators.influencerName().contains(influencer).should('be.visible');
    })
})

describe('Test Case 2 Pagination', function() {
    it('Navigate to “Insights”', () => {
        topMenu.locators.insights().click();
    })

    it('Verify 32 results are displayed per page', () => {
        insights.locators.influencerName().should('have.length', 32);
    })
})

after(() => {
    topMenu.logout();
})