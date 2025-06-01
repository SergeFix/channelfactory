Cypress.Commands.add('getVerificatioCode', (serverId, apiKey) => {
    cy.request({
    method: 'GET',
    url: `https://mailosaur.com/api/messages?server=${serverId}`,
    auth: {
      username: apiKey,
    }
  }).then((response) => {
    console.log('response =', response.body)
    const message = response.body.items[0].summary;
    const match = message.match(/\d{3}-\d{3}/);

    if (!match) {
      throw new Error('Код подтверждения не найден в сообщении!');
    }

    const verificationCodeToInput = match[0].replace('-', '').split('');
    console.log('verificationCodeToInput = ', verificationCodeToInput);
    return cy.wrap(verificationCodeToInput); // <--- Обёртка Cypress
  });
});