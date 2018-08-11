import selectors from './navigation.selectors';

describe('Website navigation', () => {
  before(() => {
    cy.visit('/');
  });

  describe('top level navigation', () => {
    it('speakers navigation', () => {
      cy.get(selectors.menuItems)
        .contains('speakers')
        .click();
      cy.get(selectors.speakersSection).should('contain', 'Our 2019 Heroes');
    });
  });
});
