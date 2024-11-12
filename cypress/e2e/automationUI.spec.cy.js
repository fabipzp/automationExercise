import { HomePage, LoginPage, AccountPage, userData } from "../pages";

describe("User Register", () => {
  const homePage = new HomePage();
  const loginPage = new LoginPage();
  const accountPage = new AccountPage();

  it("Registers a new user and deletes the account", () => {
    homePage.visit();
    homePage.verifyHomePageLoaded();
    homePage.clickLogin();
    loginPage.verifySignUpVisible();
    loginPage.enterName(userData.name);
    loginPage.enterEmail(userData.email);
    loginPage.clickSignupButton();
    loginPage.verifyAccountInformationVisible();
    loginPage.selectRandomGender();
    loginPage.enterAccountDetails(userData.accountDetails);
    loginPage.checkNewsletterAndOffers();
    loginPage.enterAddressInformation(userData.address);
    loginPage.clickCreateAccountButton();
    accountPage.verifyAccountCreated();
    accountPage.clickContinueButton();
    accountPage.verifyLoggedIn(userData.username);
    accountPage.deleteAccount();
    accountPage.verifyAccountDeleted();
    accountPage.clickContinueButton();
  });
});
