import selectors from './navigation.selectors';

describe('Website navigation', () => {
  before(() => {
    cy.visit('/');
  });

  describe('top level navigation', () => {
    it('speakers', () => {
      cy.get(selectors.menuItems)
        .contains('speakers')
        .click();
      cy.get(selectors.speakersSection).should('contain', 'Our 2019 Heroes');
    });

    it('past editions', () => {
      cy.get(selectors.menuItems)
        .contains('Past Editions')
        .click();
      cy.get(selectors.linkLabel)
        .first()
        .should('contain', '2018');
      cy.get(selectors.linkLabel)
        .last()
        .should('contain', '2017');
    });
  });
});
