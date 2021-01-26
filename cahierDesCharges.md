Cahier des charges :

- on retrouve les fonctionnalités "todo list" classiques (possibilité de create/read/update/delete les tasks)
- les composants sont correctement typés à l'aide d'interfaces (<https://www.typescriptlang.org/docs/handbook/interfaces.html>)
- utiliser SCSS pour le style
- utiliser au moins un hook React (peu importe lequel)
- l'application communique avec une API Strapi (nodejs)
- le code respecte les conventions de nommages suivantes: PascalCase pour les composants React TypeScript & leurs dossiers/stylesheets, kebab-case pour les classes CSS, camelCase pour tout le reste.
- l'ensemble est contenu dans un seul repository, à la racine duquel on retrouve un dossier "front" et un dossier "back"
- un README.md à la racine du repo donne les instructions pour faire tourner le projet (y compris mot(s) de passe si nécessaire)

Précisions :

- Il est conseillé de générer la structure de l'app React avec `npx create-react-app front --template typescript`
- Pour l'app Strapi, il est également possible d'utiliser `npx create-strapi-app back --quickstart`, avec le paramètre "Quick Start", la base de données par défaut sera une SQLite: c'est suffisant pour cet exercice.
- Aucune contrainte de modélisation BDD: l'important est que le frontend interagisse avec la base de données via l'API.
- Vous pouvez utiliser toutes les librairies que vous souhaitez
- Il faudra pousser ça sur GitHub (privé ou public) et nous envoyer un lien (ainsi qu'une invitation à github.com/TheRealBarenziah, dans le cas d'un repo privé).

Intro STRAPI :
Strapi est un CMS (Open-source et français !), il vous permettra de mettre en place une base de données, avec des endpoints (post/get/put/delete) créés automatiquement très rapidement.
