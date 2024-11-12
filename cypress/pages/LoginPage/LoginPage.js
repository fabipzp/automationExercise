import { selectorsLogin } from "./LoginPage.constants";

export class LoginPage {
  verifySignUpVisible() {
    cy.get(selectorsLogin.NewUserSignup, { timeout: 2000 })
      .contains(selectorsLogin.NewUserCopy)
      .should("be.visible");
  }

  enterName(name) {
    cy.get(selectorsLogin.name).type(name);
  }

  enterEmail(email) {
    cy.get(selectorsLogin.email).type(email);
  }

  clickSignupButton() {
    cy.get(selectorsLogin.buttonSingup).click();
  }

  verifyAccountInformationVisible() {
    cy.get(selectorsLogin.EnterAccountInformation, { timeout: 2000 })
      .contains(selectorsLogin.accountInformationCopy)
      .should("be.visible");
  }

  selectRandomGender() {
    const randomGender =
      Math.random() < 0.5 ? selectorsLogin.gender1 : selectorsLogin.gender2;
    cy.get(randomGender).click();
  }

  enterAccountDetails(details) {
    cy.get(selectorsLogin.detailsName).type(details.name);
    cy.get(selectorsLogin.detailsEmail).should("be.disabled");
    cy.get(selectorsLogin.password).type(details.password);
    cy.get(selectorsLogin.days).select(details.day);
    cy.get(selectorsLogin.months).select(details.month);
    cy.get(selectorsLogin.years).select(details.year);
  }

  checkNewsletterAndOffers() {
    cy.get(selectorsLogin.newsletter).check();
    cy.get(selectorsLogin.optin).check();
  }

  enterAddressInformation(address) {
    cy.get(selectorsLogin.addressFirstName).type(address.firstName);
    cy.get(selectorsLogin.addressLastName).type(address.lastName);
    cy.get(selectorsLogin.addressCompany).type(address.company);
    cy.get(selectorsLogin.firstAddress).type(address.address1);
    cy.get(selectorsLogin.secondAddress).type(address.address2);
    cy.get(selectorsLogin.addressCountry).select(address.country);
    cy.get(selectorsLogin.addressState).type(address.state);
    cy.get(selectorsLogin.addressCity).type(address.city);
    cy.get(selectorsLogin.addressZipcode).type(address.zipcode);
    cy.get(selectorsLogin.addressMobile).type(address.mobileNumber);
  }

  clickCreateAccountButton() {
    cy.get(selectorsLogin.createAccount).click();
  }
}
