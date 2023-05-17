import ConnexionPage from "../pages/ConnexionPage";

const connexionPage = new ConnexionPage();

class ConnexionStep {
  setConnexion(username, password) {
    connexionPage.getUserName().type(username);
    connexionPage.getPassword().type(password);
    connexionPage.getConnexion().click();
  }
  checkMessage(message) {
    connexionPage.getMessage().should('have.text',message)
  }
  
}
export default ConnexionStep;
