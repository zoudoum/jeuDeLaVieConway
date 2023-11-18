# Jeu de la Vie de Conway

## Aperçu

Ce projet est une implémentation en Angular du Jeu de la Vie de Conway, conçu par John Horton Conway. Le jeu consiste en une grille de cellules qui évoluent au fil du temps en suivant des règles spécifiques.
## Lien vers le Jeu

Le jeu est disponible en ligne. Vous pouvez y accéder [ici](https://jeu-de-la-vie.netlify.app/).
## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :
- [Node.js](https://nodejs.org/en/download)
- [Angular CLI](https://angular.io/cli) (installez-le avec la commande `npm install -g @angular/cli`)

## Installation

1. **Cloner le Dépôt (privé):**
    ```bash
    git clone https://github.com/votre-nom/jeu-de-la-vie.git
    ```

2. **Accéder au Répertoire du Projet :**
    ```bash
    cd jeu-de-la-vie
    ```

3. **Installer les Dépendances :**
    ```bash
    npm install
    ```

## Exécution de l'Application

1. **Démarrer le Serveur de Développement Angular :**
    ```bash
    ng serve
    ```

2. **Ouvrir dans le Navigateur :**
    Ouvrez votre navigateur et accédez à [http://localhost:4200/](http://localhost:4200/).

## Utilisation

- Cliquez sur les cellules de la grille pour changer leur état.
- Utilisez le bouton "Commencer" pour lancer la simulation automatique.
- Utilisez le bouton "Stop" pour mettre la simulation en pause.
- Utilisez le bouton "Réinitialiser" pour effacer la grille et réinitialiser la simulation.

## Fonctionnalités

- La grille est initialement peuplée avec un motif prédéfini.
- La simulation suit les règles du Jeu de la Vie de Conway.
- Le bouton "Commencer" lance l'évolution automatique de la grille.
- Le bouton "Stop" met la simulation en pause.
- Le bouton "Réinitialiser" efface la grille et réinitialise la simulation.

## Structure du Dossier

- `/src` : Contient le code source de l'application Angular.
- `/src/app` : Comprend les composants principaux et les services de l'application.
