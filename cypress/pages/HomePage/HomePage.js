import { selectorsHomePage } from "./HomePage.constants";

export class HomePage {
  visit() {
    cy.visit(selectorsHomePage.url);
  }

  clickLogin() {
    cy.get(selectorsHomePage.signUp).click();
  }

  verifyHomePageLoaded() {
    cy.get(selectorsHomePage.sliderCarousel, { timeout: 2000 }).should(
      "be.visible"
    );
  }
}
