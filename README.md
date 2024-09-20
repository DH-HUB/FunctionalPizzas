# FunctionalPizzas 

Ce projet est une application de gestion de pizzeria implémentée en **TypeScript** et basée sur la **programmation fonctionnelle**. Le but est de simplifier la gestion des commandes et la préparation des pizzas pour un établissement pendant des périodes de forte affluence. Voici les concept appliqués:

**Immutabilité:**
Les données ne sont pas modifiées directement. Les transformations des tableaux et des objets produisent de nouvelles structures de données sans affecter les originaux.
Exemple:

![alt text](image-3.png)

**Pureté des Fonctions:**

Les fonctions pures produisent toujours les mêmes résultats pour les mêmes entrées, sans effets secondaires.
Exemple :

![alt text](image-4.png)

**Fonctions d'Ordre Supérieur:**
Les fonctions d'ordre supérieur comme map, filter, reduce et flatMap sont largement utilisées pour transformer les données.
Exemple :

![alt text](image-5.png)

**Composabilité:**
Combine plusieurs petites fonctions pour créer des opérations complexes.
Exemple :

![alt text](image-6.png)

**Fonctionnalités**

- Gestion des commandes (commande, livraison, préparation)
- Calcul du montant moyen des commandes
- Identification des pizzas les plus commandées
- Temps de préparation moyen des commandes
- Suivi des ingrédients utilisés et non utilisés

**Prérequis**

Avant de commencer, assurez-vous d'avoir **Bun** installé sur votre machine.

**Installation de Bun**

'curl https://bun.sh/install | bash'

**Installation du projet :**
Clonez le dépôt et installez les dépendances :

'git clone https://github.com/DH-HUB/FunctionalPizzas.git'

cd FunctionalPizzas

'bun install'

Scripts disponibles 
Démarrer l'application : bun run start
Construire le projet : bun run build
Exécuter les tests : bun run test
Formater le code : bun run format
Lint du code : bun run lint
Nettoyer le projet : bun run clean

**lancer le programme :**

'bun run start'
**Exemple de sortie :**
![alt text](image-7.png)
![alt text](image-1.png)

**Lancer les tests:**
'bun run test'
**Exemple de sortie :**
![alt text](image-2.png)


**Évolution du projet : Gestion asynchrone de la production**
Dans cette extension du projet, Je vais implémenté une gestion complète du flux de production des pizzas. Le pizzaiolo Daniele peut cuire jusqu'à 3 pizzas simultanément, et la durée de chaque étape préparation et cuisson est simulée de manière asynchrone.

**Fonctionnalités avancées**
**Préparation asynchrone des Pizzas :**

La préparation d'une pizza prend environ 1 minute.
La cuisson d'une pizza prend environ 5 minutes, mais cette durée est simulée avec un facteur de 1/10 pour accélérer les tests.
**Statut des pizzas en temps réel :**

Chaque pizza passe par plusieurs états successifs :
En attente de préparation.
Préparation en cours.
En attente de cuisson.
Cuisson en cours.
Prête.
Le système met à jour le statut des pizzas en First in/First out (FIFO).
**Estimation du temps de production :**

Une méthode permet d'estimer la durée totale de préparation d'une commande, en tenant compte de la capacité du four (3 pizzas à la fois) et du temps de cuisson.
Exemple de Sortie de Simulateur de Production


**Gestion des états sans Mutation**
Immutabilité : Le suivi des états des pizzas respecte les principes de la programmation fonctionnelle. Chaque changement d'état génère une nouvelle structure sans muter l'état existant.
Flux de Production FiFo : L'ordre de traitement des pizzas est géré en First In, First Out, assurant une gestion optimale de la file d'attente.
Types et Fonctions Implémentées
Types : Un ensemble de types TypeScript a été créé pour représenter les pizzas, les commandes et leurs différents états dans le processus de production.
Fonctions Asynchrones : Utilisation de async/await pour simuler le passage du temps de manière non bloquante.
Structure du Projet

**Explications :**
- **Présentation** : Le projet est décrit de manière succincte, avec les fonctionnalités principales mises en avant.
- **Prérequis et installation** : Instructions pour installer **Bun** et le projet.
- **Scripts disponibles** : Fournit des informations utiles sur les différentes commandes **Bun**.
- **Structure du projet** : Aperçu de l'architecture du projet pour une meilleure compréhension.
- **Contributions** : Encourage les contributions via issues ou pull requests.
  
Structure du projet 

![alt text](image.png)
**Partie évolution:**
![alt text](image-9.png)
**Contributions*
Les contributions sont bienvenues ! Pour toute suggestion ou amélioration, ouvrez une issue ou soumettez une pull request.

**Auteur:**
Hakima Djermouni

**Licence:** 
Ce projet est sous licence MIT. Consultez le fichier LICENSE pour plus d'informations.

