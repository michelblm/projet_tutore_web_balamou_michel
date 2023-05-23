<img src="SOGETI.png" width="15%" height="15%">

# Projet tutoré d'automatisation du site Open Cruise

L'objectif ici est d'automatiser quelques tests identifiés et dévéloppés dans la phase de conception des cas de tests. Les test à automatiser sont regroupés par modules et structurés hiérachiquement dans des dossiers pour faciliter la navigation, la gestion des cas de tests et les modifications futures. Ce principe est appelé "Structure des tests".

Dans les differents dossiers, nous avons dévéloppé les scripts de tests automatisés en utilisant Cypress.



## Structure 

Ces differents dossiers permettant de structurer les tests sont :

* Dossier pages
  * constitué de keyword de bas niveaux, ce dossier est structuré par page. Il contient les locator qui permettent d'identifier les différents jeux de données pour chaque cas de test. Il regroupe trois fichiers correspondant aux fonctionnalités testées *PageConnexion*, *PageGestionCompte* et *PageInscription*.
* Dossier steps
  * Ce dossier importe l'ensemble des fichiers du dossier pages et est structuré par fonctionnalité. Il est constitué de keyword de haut niveaux ainsi que les différentes classes qui regroupent l'ensemble des fonctions.
* Dossier tests
  * Ce dossier importe les fichiers du dossier steps et est constituté de testsuites qui regroupent l'ensemble des tests automatisés. Il contient les classes et l'ensemble des fonctions qui permettent d'automatiser les differentes étapes de nos cas de tests.
* Dossier fixtures
  * ce dossier est constitué de fichiers qui regroupent l'ensemble des données utilisées pour automatiser et exécuter les tests. Ces fichiers sont entre autre *data-part.json* pour le compte particulier et *data-pro.json* pour le compte professionnel. L'extension *cypress/faker* permet de generer ces données lors de l'exécution des tests automatisés.
* Dossier reports
  * contient l'ensemble des rapports d'exécution des tests automatisés (tests PASSED, tests FAILED).
* Dossier screenshots
  * contient l'ensemble des captures effectuées lors de l'exécution des tests. Ces captures peuvent être des points de contrôle et de vérification permettant de dégager un résultat fiable.
* Dossier support
  * contient certains modules d'extension (plugin) necessaire pour la mise en place du projet.
    * Cypress/Xpath : permet de localiser les éléments du site Open Cruise
    * Cypress/Faker : permet de générer les jeux de données lors de l'exécution des tests
    * Cypress/Grep  : permet d'exécuter selectivement certains tests dans le terminal.
* Dossier doc
  * contient l'ensemble des fichiers regroupant toutes les informations sur le déroulement de ce projet
    * fichier conception : contient l'ensemble des cas de tests
    * fichier automatisation : contient les tests automatisés et les détails pour comprendre
    * fichier exécution : contient les rapports d'exécution des tests automatisés

Cette manière de structurer les dossiers permet de faciliter la conception et est bénéfique pour la maintenance du projet.
