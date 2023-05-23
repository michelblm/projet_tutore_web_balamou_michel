<img src="SOGETI.png" width="15%" height="15%">

# Projet tutoré d'automatisation du site Open Cruise

Ce fichier resume l'ensemble de l'exécution des tests avec leurs identifiants et descriptions correspondantes, les résultats de tests (succès/echec) avec les messages associés et les captures d'ecran pour certains cas de tests pertinents.

Les exécutions sont effectuées dans le dossier tests qui contient le fichier *OpenCruise.cy.js* qui regroupent l'ensemble des codes qui importent les modules necessaires à partir des fichiers spécifiés. 

Voici quelques détails importants sur le code :

1. Le code utilise la fonction `describe` pour définir un ensemble de tests regroupés sous le nom "TEST WEB OPEN CRUISE". Cela facilite l'organisation des tests et permet de les exécuter ensemble.
2. La fonction `beforeEach` est utilisée pour exécuter une étape commune avant chaque test. Dans ce cas, il visite l'URL spécifiée dans la variable d'environnement `url` de Cypress.
3. Les tests sont définis à l'intérieur de la fonction `it`. Chaque test est décrit par une chaîne de caractères et est suivi d'une fonction de test.
4. Les tests utilisent des instances des classes `StepConnexion`, `StepGestionCompte` et `StepInscription` pour effectuer des actions et des vérifications. Assurez-vous que ces classes sont correctement implémentées et fournissent les fonctionnalités attendues.
5. Les tests utilisent des assertions Cypress telles que `cy.log`, `cy.wait`, `cy.fixture`, `cy.get`, `cy.writeFile`, `cy.xpath`, etc. pour effectuer des vérifications et des actions sur l'application.
6. Les tests utilisent également des méthodes de capture d'écran Cypress telles que `screenshot` pour capturer des images de certaines parties de l'application.

Le tableau ci dessous reperesente la synthèse des tests exécutés

| Nom de Test                       | Type d'environnement | Type de Test  | Résults attendus                                                                                      | Résultats observés                                                                                   | Status |
| --------------------------------- | -------------------- | ------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------ |
| Connexion avec un compte valide   | Env-OK               | Test Positif  | Compte Admin authentifié<br />Rédirection vers la page d'accueil<br />Message "Bienvenue ADMIN TEST" | Compte Admin authentifié<br />Rédirection vers la page d'accueil<br />Message "Bienvenue ADMIN TEST" | Pass   |
| Connexion avec un compte invalide | Env-Ok               | Test négatif | Un message d'erreur<br />"MDP ou identifiant invalide"                                                 | Un message d'erreur<br />"MDP ou identifiant invalide"                                                 | Fail   |
| Création compte particulier      | Env-OK               | Test Positif  | Compte crée avec succès<br />Rédirection vers la page connexion                                     | Compte crée avec succès<br />Rédirection vers la page connexion                                     | Pass   |
| Création compte professionnel    | Env-OK               | Test Positif  | Compte crée avec succès<br />Rédirection vers la page connexion                                     | Compte crée avec succès<br />Rédirection vers la page connexion                                     | Pass   |
| Connexion compte particulier      | Env-OK               | Test Positif  | Bienvenue PrenomParticulier NomParticulier                                                             | Bienvenue PrenomParticulier NomParticulier                                                             | Pass   |
| Connexion compte professionnel    | Env-OK               | Test Positif  | Bienvenue PrenomProfessionnel NomProfessionnel                                                        | Bienvenue PrenomProfessionnel NomProfessionnel                                                        | Pass   |
| Connexion avec un compte existant | Env-OK               | Test négatif | Message d'erreur<br />"l'email est déjà utilisé. Essayez un autre email"                            | Message d'erreur<br />"l'email est déjà utilisé. Essayez un autre email"                            | Fail   |
| Connexion compte Admin            | Env-KO               | Test négatif | Mot de passe ou identifiant invalide                                                                   | Mot de passe ou identifiant invalide                                                                   | Fail   |
