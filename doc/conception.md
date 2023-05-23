<img src="SOGETI.png" width="15%" height="15%">

# Projet tutoré d'automatisation du site Open Cruise

Ce projet vise à identifier et à développer un ensemble de tests qui seront automatisés pour garantir la qualité et la fiabilité du site Open Cruise. L'objectif principal est d'automatiser les cas de tets liés à l'ensemble des fonctionnalités du site (authantification, création de compte utilisateur, recherche de croisière, panier et paiement)

Pour les fonctionnalités clés du site Open Cruise nécessitant une automatisation, j'ai choisi de traiter le sujet sur :

# Les tests WEB avec Cypress sur Open Cruise

## Conception des cas de tests

* Authentification sur le site sur Open Cruise
* Création de compte particulier et professionnel sur le site Open Cruise

Ces cas de tests seront exécutés sur deux environnements :

- https://opencruise-ok.sogeti-center.cloud  (version V1.1.0 de l'application)
- https://opencruise-ko.sogeti-center.cloud  (nouvelle version V1.2.0 de l'application à qualifier)

### TEST TYPE : Test case Positive / Test case Negative / Scenario E2E

| TEST ID      | TEST NAME                     | TEST DESCRIPTION / GOALS              | TEST TYPE    | TEST TAG | PREREQUISITES                                        | ASSERTIONS                                                                                             |
| ------------ | ----------------------------- | ------------------------------------- | ------------ | -------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| CYPRESS-001  | Connexion reussie             | Connexion avec un compte valide       | Test Positif | smoke    | Compte valide<br />ID valide<br />MDP valide         | Compte Admin authentifié<br />Rédirection vers la page d'accueil<br />Message "Bienvenue ADMIN TEST" |
| CYPRESSE-002 | Connexion avec ID incorrect   | Connexion avec un compte invalide     | Test negatif | light    | Compte invalide<br />ID invalide<br />MDP invalide   | Un message d'erreur<br />"MDP ou identifiant invalide"                                                 |
| CYPRESS-003  | Connexion avec ID inexistant | Connexion avec un compte invalide     | Test nagatif | house    | Compte inexistant<br />ID inexistant<br />MDP valide | Un message d'erreur<br />"MDP ou identifiant invalide                                                  |
| CYPRESS-004  | Connexion sans saisir ID      | Connexion avec un compte invalide     | Test negatif | way      | Page de connexion<br />ID vide<br />MDP valide       | Un message d'erreur<br />"Merci de renseigner votre ID"                                                |
| CYPRESS-005  | Création de compte           | Formulaire avec ID Particulier valide | Test positif | center   | Aucun compte particulier<br />Avec les mêmes ID     | Compte crée avec succès<br />Rédirection vers la page connexion                                     |
| CYPRESS-006  | Création de compte           | Formulaire avec ID Prof valide       | Test positif | left     | Aucun compte prof<br />Avec les mêmes ID            | Compte crée avec succès<br />Rédirection vers la page connexion                                     |
| CYPRESS-007  | Création de compte           | Formulaire avec ID existant           | Test negatif | star     | Compte existant<br />Avec les mêmes ID              | Message d'erreur<br />"l'email est déjà utilisé. Essayez un autre email"<br />                      |

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
</style>

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
</style>
