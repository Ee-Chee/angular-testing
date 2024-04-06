import { apiBaseUrl } from '../../src/app/constants/api-urls';

describe('My First Test', () => {
  it('Visits the home page, test entries live data from api and check template', () => {
    let entriesLength: number | undefined;

    cy.visit('/');
    cy.get('button').contains('Get Entries').click();

    cy.intercept(`${apiBaseUrl}/home-start`).as('entriesRequest');
    cy.wait('@entriesRequest').then((entriesResp: any) => {
      expect(entriesResp.response.statusCode).to.eq(200);
      assert.isArray(entriesResp.response.body, 'Entries object is an array');
      entriesLength = entriesResp.response.body.length;

      cy.get('.entry').should('have.length', entriesLength);
    });
  })
})
