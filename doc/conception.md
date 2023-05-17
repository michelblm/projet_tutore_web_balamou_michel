<img src="sogeti.png" width="15%" height="15%">

# Les tests WEB avec Cypress sur Open Cruise


## Conception des cas de tests


* fonctionannalité à tester
  * Authentification sur Open Cruise

TEST TYPE : Test case Positive / Test case Negative / Scenario E2E


| TEST ID     | TEST CASE                                  | ACTIONS                                                                                                                                              | TEST TYPE    | PREREQUISITES                                             | RESULTS                                                                                                |
| ----------- | ------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | --------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| CYPRESS-001 | connexion reussie                          | Ouvrir la page de connexion<br />Saisir ID valides<br />Cliquer sur le bouton "Se connecter"                                                         | Test positif | Compte valide<br />ID valide<br />MDP valide             | Compte Admin authentifié<br />Rédirction vers la page d'accueil<br />Message "Bienvenue ADMIN TEST" |
| CYPRESS-002 | Connexion avec ID incorrect                | Ouvrir la page de connexion<br />Saisir ID incorrectes<br />Cliquer sur le bouton "Se connecter"                                                    | Test negatif | Compte invalide<br />ID invalide<br />MDP invalide        | Un message d'erreur<br />"MDP ou identifiant invalide"                                                 |
| CYPRESS-003 | Connexion avec ID inexistant              | Ouvrir la page de connexion<br />Saisir un nom d'utilisateur inexistant<br />Saisir un mot de passe valide<br />Cliquer sur le bouton "Se connecter" | Test negatif | Compte inexistant<br />ID inexistant<br />MDP valide      | Un message d'erreur<br />"MDP ou identifiant"                                                         |
| CYPRESS-004 | Connexion sans saisir de nom d'utilisateur | Champ du nom d'utilisateur vide<br />Saisir un mot de passe valide<br />Cliquer sur le bouton "Se connecter"                                         | Test negatif | La page de connexion ouverte<br />ID vide<br />MDP valide | Un message d'erreur<br />"Merci de renseigner votre ID"                                                |

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
</style>
