import StepConnexion from "../steps/StepConnexion";
import StepGestionCompte from "../steps/StepGestionCompte";
import StepInscription from "../steps/StepInscription";



describe("TEST WEB OPEN CRUISE", () => {
  beforeEach(() => {
    cy.visit(Cypress.env('url'));
  });
  it("TEST01 **** Se Connecter Compte Valide ****",{ tags: '@smoke' }, () => {
    
    const stepConnexion = new StepConnexion();
    cy.log(`Se Connecter Compte Valide`);
    stepConnexion.setLogin(Cypress.env("username"),Cypress.env("password"));
    stepConnexion.checkMessage("Bienvenue ADMIN TEST");
    cy.xpath('//button[@id="dropdownMenu2"]').screenshot();
  });
   

  it("TEST02", () => {
    const stepConnexion = new StepConnexion();
    cy.log(`Se connecter Compte invalide`);
    stepConnexion.setLogin("XXXXXXX", "YYYYYY");
    cy.wait(1000);
    stepConnexion.CheckFailMessage("mot de passe ou identifiant invalide");
    cy.xpath('//div[@role="alertdialog"]').screenshot();
  });

  it("TEST03", () => {
    const stepInscription = new StepInscription();
    cy.log("**********   Inscription Compte Particulier    ************");
    cy.fixture("data-part.json", "utf8").as("users");
    cy.get("@users").then((data) => {
      data = stepInscription.CreatePart(data);
      cy.writeFile(
        "cypress/fixtures/userPart.json",
        JSON.stringify(data, null, 2),
        "utf8"
      );
      cy.wait(2000);
      const stepConnexion = new StepConnexion();
      cy.log(`Se Connecter en tant que Admin`);
      stepConnexion.setLogin(Cypress.env("username"),Cypress.env("password"));
      const stepGestionCompte = new StepGestionCompte();
      stepGestionCompte.ActiveCompte(data);
      cy.xpath(`//tr[contains(.,'${data.username}')]`).screenshot();
      stepConnexion.Logout(); //Se deconnecter
      cy.log("Se connecter avec le commpte créer");
      stepConnexion.setLogin(data.username, data.password);
      cy.wait(2000);
      cy.xpath('//button[@id="dropdownMenu2"]').screenshot();
      stepConnexion.checkMessage(` Bienvenue ${data.nom} ${data.prenom} `);
      stepConnexion.Logout();
    });
  });
  it("TEST04", () => {
    const stepInscription = new StepInscription();
    cy.log("**********   Inscription Compte Professionnel    ************");
    cy.fixture("data-pro.json", "utf8").as("users");
    cy.get("@users").then((data) => {
      data = stepInscription.CreatePro(data);
      cy.writeFile("cypress/fixtures/userPro.json", JSON.stringify(data, null, 2), "utf8");
      cy.wait(2000);
      const stepConnexion = new StepConnexion();
      cy.log(`Se Connecter en tant que Admin`);
      stepConnexion.setLogin(Cypress.env("username"),Cypress.env("password"));
      const stepGestionCompte = new StepGestionCompte();
      stepGestionCompte.ActiveCompte(data);
      cy.xpath(`//tr[contains(.,'${data.username}')]`).screenshot();
      stepConnexion.Logout(); //Se deconnecter
      cy.log("Se connecter avec le commpte créer");
      stepConnexion.setLogin(data.username, data.password);
      cy.wait(2000);
      cy.xpath('//button[@id="dropdownMenu2"]').screenshot();
      stepConnexion.checkMessage(` Bienvenue ${data.nom} ${data.prenom} `);
      stepConnexion.Logout();
      
    });
  });
  it("TEST05", () => {
    const stepInscription = new StepInscription();
    cy.log("**********   Inscription Compte Particulier Avec Compte Existant    ************");
    cy.fixture("userPart.json", "utf8").as("users");
    cy.get("@users").then((data) => {
      stepInscription.CreatePartExistant(data);
      
      cy.wait(4000);
      const stepConnexion = new StepConnexion();
      stepConnexion.CheckFailMessage(" l’email est déjà utilisé. Essayez un autre email ");
      cy.xpath('//div[@role="alertdialog"]').screenshot();
    });
  });
});
