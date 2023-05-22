const locatorInputUsername = '//input[@formcontrolname="username"]';
const locatorInputPassword = '//input[@formcontrolname="password"]';
const locatorButtonLogin = '//button[@class="btn btn-primary"]';
const locatorSelectLang = '//div[@class="login-form"]/select';
const locatorButtonMenu = '//button[@id="dropdownMenu2"]';
const locatorButtonLogoff = '//button[text()="Se déconnecter"]';
const locatorAlertDialog = '//div[@role="alertdialog"]';

class PageConnexion {
  setLanguage(text) {
    return cy.xpath(locatorSelectLang).select(text);
  }

  setUsername(text) {
    return cy.xpath(locatorInputUsername).type(text);
  }

  setPassword(text) {
    return cy.xpath(locatorInputPassword).type(text);
  }

  signIn() {
    return cy.xpath(locatorButtonLogin).click();
  }

  checkConnection(text) {
    return cy.xpath(locatorButtonMenu).should("contain", text);
  }

  checkErrorMessage(text) {
    return cy.xpath(locatorAlertDialog).should("contain", text).click();
    return cy.xpath(locatorAlertDialog).should("not.exist");
  }

  logOut() {
    return cy.xpath(locatorButtonMenu).click()
  }


  logOut1() {
    return cy.xpath(locatorButtonLogoff).click();
  }

  logOut2() {
    return cy.xpath(locatorSelectLang).should("exist");
  }
}
export default PageConnexion;
require('@cypress/xpath')