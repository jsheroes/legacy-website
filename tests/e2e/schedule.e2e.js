// import navigationSelectors from './navigation.selectors';
// import selectors from './schedule.selectors';

// const text = {
//   SCHEDULE: 'Schedule',
//   WORKSHOPS: {
//     TITLE: 'WORKSHOPS',
//     ACTIVITY_TITLE: 'Advanced Performance Tuning for React Applications',
//     SPEAKER_NAME: '',
//     SPEAKER_POSITION: '',
//     SPEAKER_COMPANY: '',
//   },
//   DAY1: {
//     TITLE: 'Day 1',
//     ACTIVITY_TITLE: 'Check-in & Coffee',
//     SPEAKER_NAME: '',
//     SPEAKER_POSITION: '',
//     SPEAKER_COMPANY: '',
//   },
//   DAY2: {
//     TITLE: 'Day 2',
//     ACTIVITY_TITLE: 'Coffee',
//     SPEAKER_NAME: '',
//     SPEAKER_POSITION: '',
//     SPEAKER_COMPANY: '',
//   },
// };

// describe('Schedule', () => {
//   before(() => {
//     cy.visit('/');
//     cy.get(navigationSelectors.buttonAcceptCookies).click();

//     // TODO Replace with current agenda when it's available, right now it's testing 2018 agenda
//     cy.get(navigationSelectors.menuItems)
//       .contains('Past Editions')
//       .click()
//       .get(navigationSelectors.linkLabel)
//       .first()
//       .click({ force: true }); // adding force true in order to pass in headless mode
//   });

//   describe('title', () => {
//     it('should be Schedule', () => {
//       cy.get(selectors.title).should('contain', text.SCHEDULE);
//     });
//   });

//   describe('tabs section', () => {
//     it('should show DAY 1 tab as active', () => {
//       cy.get(selectors.tabSelector)
//         .second()
//         .should('have.class', 'active')
//         .should('contain', text.DAY1.TITLE);
//     });

//     it('should allow tab navigation', () => {
//       cy.get(selectors.tabSelector)
//         .contains(text.WORKSHOPS.TITLE)
//         .click()
//         .parent()
//         .should('have.class', 'active');

//       cy.get(selectors.tabSelector)
//         .contains(text.DAY2.TITLE)
//         .click()
//         .parent()
//         .should('have.class', 'active');

//       cy.get(selectors.tabSelector)
//         .contains(text.DAY1.TITLE)
//         .click()
//         .parent()
//         .should('have.class', 'active');
//     });
//   });

//   describe('agenda section: WORKSHOPS', () => {
//     before(() => {
//       cy.get(selectors.tabSelector)
//         .contains(text.WORKSHOPS.TITLE)
//         .click();
//     });

//     it('should show activity details', () => {
//       cy.get(selectors.roomAndTime);
//       cy.get(selectors.speakerImage);
//       cy.get(selectors.activityTitle)
//         .first()
//         .should('contain', text.WORKSHOPS.ACTIVITY_TITLE);
//       // cy.get(selectors.speakerName)
//       //   .first()
//       //   .should('contain', text.WORKSHOPS.SPEAKER_NAME);
//       // cy.get(selectors.speakerPosition)
//       //   .first()
//       //   .should('contain', text.WORKSHOPS.SPEAKER_POSITION);
//       // cy.get(selectors.speakerCompany)
//       //   .first()
//       //   .should('contain', text.WORKSHOPS.SPEAKER_COMPANY);
//     });
//   });

//   describe('agenda section: DAY 1', () => {
//     before(() => {
//       cy.get(selectors.tabSelector)
//         .contains(text.DAY1.TITLE)
//         .click();
//     });

//     it('should show activity details', () => {
//       cy.get(selectors.roomAndTime);
//       cy.get(selectors.speakerImage);
//       cy.get(selectors.activityTitle)
//         .first()
//         .should('contain', text.DAY1.ACTIVITY_TITLE);
//       cy.get(selectors.speakerName)
//         .first()
//         .should('contain', text.DAY1.SPEAKER_NAME);
//       cy.get(selectors.speakerPosition)
//         .first()
//         .should('contain', text.DAY1.SPEAKER_POSITION);
//       cy.get(selectors.speakerCompany)
//         .first()
//         .should('contain', text.DAY1.SPEAKER_COMPANY);
//     });
//   });

//   describe('agenda section: DAY 2', () => {
//     before(() => {
//       cy.get(selectors.tabSelector)
//         .contains(text.DAY2.TITLE)
//         .click();
//     });

//     it('should show activity details', () => {
//       cy.get(selectors.roomAndTime);
//       cy.get(selectors.speakerImage);
//       cy.get(selectors.activityTitle)
//         .first()
//         .should('contain', text.DAY2.ACTIVITY_TITLE);
//       cy.get(selectors.speakerName)
//         .first()
//         .should('contain', text.DAY2.SPEAKER_NAME);
//       cy.get(selectors.speakerPosition)
//         .first()
//         .should('contain', text.DAY2.SPEAKER_POSITION);
//       cy.get(selectors.speakerCompany)
//         .first()
//         .should('contain', text.DAY2.SPEAKER_COMPANY);
//     });
//   });
// });
