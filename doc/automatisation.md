<img src="SOGETI.png" width="15%" height="15%">

# Projet tutoré d'automatisation du site Open Cruise


L'objectif ici est d'automatiser quelques tests identifiés et dévéloppés dans la phase de conception des cas de tests. Les test à automatiser sont regroupés par modules et structurés hierachiquement dans des dossiers pour faciliter la navigation, la gestion des cas de tests et les modifications futures. Ce principe est appelé "Structure des tests".

Dans les differents dossiers, nous avons dévéloppé les scripts de tests automatisés en utilisant Cypress.

### Ces differents dossiers permattant de structurer les tests sont :

* Dossier pages
  * constitué de keyword de bas niveaux, ce dossier est structuré par page. Il contient les locator qui permettent d'identifier les différents jeux de données pour chaque cas de test. Il regroupe trois fichiers correspondant aux fonctionnalités testées *PageConnexion*, *PageGestionCompte* et *PageInscription*.
* Dossier steps
  * Ce dossier importe l'ensemble des fichiers du dossier pages et est structuré par fonctionnalité. Il est constitué de keyword de haut niveaux ainsi que les différentes classes qui regroupent l'ensemble des fonctions.
* Dossier tests
  * Ce dossier importe les fichiers du dossier steps et est constituté de testsuites qui regroupent l'ensemble des tests automatisés. Il contient les classes et l'ensemble des fonctions qui permettent d'automatiser les differentes étapes de nos cas de tests.
