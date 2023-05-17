import ConnexionStep from "../steps/ConnexionStep";



describe("Open_Cruise", () => {

  beforeEach(() => {
    cy.visit("https://opencruise-ok.sogeti-center.cloud/login")
  })

  it("Se connecter Admin", () => {
        // SE CONNECTER
        const connexionStep = new ConnexionStep()
        connexionStep.setConnexion("admin@test.com", "Sogeti33")
        connexionStep.checkMessage("Bienvenue ADMIN TEST")
    })
})

