Cypress.Commands.add('getVerificatioCode', (serverId, apiKey) => {
    cy.request({
    method: 'GET',
    url: `https://mailosaur.com/api/messages?server=${serverId}`,
    auth: {
      username: apiKey,
    }
  }).then((response) => {
    const message = response.body.items[0].summary;
    const match = message.match(/\d{3}-\d{3}/);

    const verificationCodeToInput = match[0].replace('-', '').split('');
    return cy.wrap(verificationCodeToInput);
  });
});