import { selectorsAccountPage } from "./AccountPage.constants";

export class AccountPage {
  verifyAccountCreated() {
    cy.contains(selectorsAccountPage.accountCreated, { timeout: 2000 }).should(
      "be.visible"
    );
  }

  clickContinueButton() {
    cy.get(selectorsAccountPage.continue).click();
  }

  verifyLoggedIn(username) {
    cy.contains(selectorsAccountPage.usernameLogged(username), {
      timeout: 2000,
    }).should("be.visible");
  }

  deleteAccount() {
    cy.get(selectorsAccountPage.deleteAccount).click();
  }

  verifyAccountDeleted() {
    cy.contains(selectorsAccountPage.accountDeleted, { timeout: 2000 }).should(
      "be.visible"
    );
  }
}
