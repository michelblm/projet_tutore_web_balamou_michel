class ConnexionPage {
  getUserName() {
    return cy.get("input[formcontrolname='username']");
  }
  getPassword() {
    return cy.get("input[formcontrolname='password']");
  }
  getConnexion() {
    return cy.get("button[class='btn btn-primary']");
  }
  getMessage() {
    return cy.xpath("//button[@id='dropdownMenu2']");
  }
}
export default ConnexionPage;
require('@cypress/xpath')