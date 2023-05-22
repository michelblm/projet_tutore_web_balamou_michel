import PageConnexion from "../pages/PageConnexion";

const pageConnexion = new PageConnexion();

class StepConnexion {
  setLogin(username, password) {
    pageConnexion.setUsername(username);
    pageConnexion.setPassword(password);
    pageConnexion.signIn();
  }
  checkMessage(message) {
    pageConnexion.checkConnection(message);
  }
  
  CheckFailMessage(message){
    pageConnexion.checkErrorMessage(message)

  }

  Logout(){
    pageConnexion.logOut()
    pageConnexion.logOut1()
  }

}

export default  StepConnexion;
