---
title: Le mensuel d’Avril
author: Jean-François VO
published_date: 2018-04-23
description: Dans cette revue de presse, parcourons ensemble les articles impactants pour le développement web Front-end. Regardons également des articles courts, mais utiles, sur les designs patterns, le design et cultivons ensemble notre fibre artistique :)
tags: JavaScript, Design Patterns, Development, Development Tips
---

> Making software soft again

![https://miro.medium.com/max/2000/1*daFXaJtfx-N7dOLNbpHkDQ.jpeg](https://miro.medium.com/max/2000/1*daFXaJtfx-N7dOLNbpHkDQ.jpeg)

# Petit guide de l’explorateur de l’ère Javascript
En guise d’introduction, commençons par un tour des projets montants de l’écosystème Javascript. Par projets montants, j’entends les projets ayant eu une forte popularité au cours de l’année 2017

[27 JavaScript Rising Stars](https://risingstars.js.org/2017/en/)

Dans la jungle des frameworks et librairies JS, trois librairies s’imposent : [Angular](https://angular.io/), [React](https://reactjs.org/) et [Vuejs](https://vuejs.org/). On trouve sur [le site de Vuejs](https://vuejs.org/v2/guide/comparison.html), un comparatif exhaustif des points de différences entre Vue et les autres solutions. Ou encore [cet excellent article](https://medium.com/unicorn-supplies/angular-vs-react-vs-vue-a-2017-comparison-c5c52d620176) vous aidera à choisir la librairie JS qui saura répondre à vos contraintes.

## Dans les méandres du langage

Malgré des mises à jours régulières ([ES8](http://kangax.github.io/compat-table/es2016plus/) à date et [ES9](http://kangax.github.io/compat-table/esnext/) en cours de préparation) apportant leurs lots de nouveaux outils syntaxiques, la grande souplesse et la liberté du langage Javascript nous amène parfois à des situations cocasses et parfois difficilement débuggable(s). Il en va de la responsabilité du développeur de produire un code expressif et d’autant plus lorsque le langage est permissif.

> “Tout ce qui augmente la liberté augmente la responsabilité .“
> - Victor Hugo

Les deux prochains articles présentent des design patterns élégants tentant de combler des faiblesses du langage.

Le premier pattern est affectueusement appelé **RORO** pour *Receive Object Return Object*. En usant à bon escient des outils du langage, nous pouvons créer des paramètres nommés (pour nos amis Pythonistas, nous créons ici un équivalent aux fameux **kwargs ), avoir une *initialisation plus avancée des paramètres*, un retour plus riche de la fonction et une plus grande facilité à *composer les fonctions*.

Je vous invite à lire l’article pour de plus amples détails et d’autres précisions :)

[Elegant patterns in modern JavaScript: RORO](https://medium.freecodecamp.org/elegant-patterns-in-modern-javascript-roro-be01e7669cbd)

Le deuxième pattern s’intéresse à palier au problème du sucre syntaxique apporté par les *Class*. En effet, les *Class* Javascript cachent en réalité la notion de [chaîne de prototypage](https://developer.mozilla.org/fr/docs/Web/JavaScript/H%C3%A9ritage_et_cha%C3%AEne_de_prototypes) du langage. Je n’en dis pas plus et je vous laisse découvrir une utilisation élégante de la librairie standard Javascript.

[Elegant patterns in modern JavaScript: Ice Factory](https://medium.freecodecamp.org/elegant-patterns-in-modern-javascript-ice-factory-4161859a0eee)

Le prochain article est un excellent rappel des déclarations de variables en Javascript. En apparence simple, cette déclaration en Javascript se base sur une mécanique particulière : le **[Hoisting](https://developer.mozilla.org/fr/docs/Glossaire/Hoisting)**. Cette méconnaissance du mécanisme conduit souvent au piège de la **[Temporal Dead Zone](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Instructions/let)** (TDZ pour les intimes). Pour rappel, la TDZ est la zone dans laquelle l’initialisation d’une variable a été remontée (hoisted) mais pas son initialisation, ceci conduisant à différentes erreurs en cas d’appel à cette variable. Les erreurs dépendent de la méthode de déclaration des variables (var, let, const).

Ne tombez plus dans le piège et lisez l’article ;)

[udebella/blog](https://github.com/udebella/blog/blob/master/dev/javascript/variable-declaration.md)

## Performance et sécurité main dans la main

Avec la démocratisation de l’usage d’Internet, le nombre de visiteurs / utilisateurs est en hausse. À cela s’ajoute un large panel de nouvelles fonctionnalités disponibles aux usagers . Nous faisons alors face à un double problème : garantir la sécurité des données dans un contexte de forte affluence en croissance.

> “It is not enough for code to work.” —
> - Robert C. Martin

PS: Je me suis permis cette citation ici pour mettre en relief la responsabilité du développeur sur le milieu dans lequel elle ou il évolue. Il n’est, en effet, plus suffisant de faire marcher un code. Il faut en saisir les enjeux finaux et être conscient de l’environnement existant.

L’[IETF](https://www.ietf.org/) est bien consciente du problème et dresse ce constat : l’utilisation du protocole HTTP 2.0 n’est utilisable qu’avec un protocole sécurisé HTTPS. L’HTTPS repose sur le TLS (anciennement SSL) et c’est l’objet du prochain lien. Partez à la rencontre du TLS et découvrez qu’il n’est plus question de délaisser la sécurité au profit de la performance !

[https://hpbn.co/transport-layer-security-tls/](https://hpbn.co/transport-layer-security-tls/)

## Design et moi

Qui dit front dit partie visible de l’iceberg !

Il peut vous arriver d’avoir à faire le design de l’application que vous réalisez. Voici pour vous quelques petites astuces pour vous rendre la vie plus facile et donner un air de modernité à vos composants !

Le prochain article explique ce que sont les variables CSS. Une nouveauté bienvenue pour celles et ceux qui veulent se passer d’outils non standard pour réaliser le style de leurs composants.

[Learn CSS Variables in 5 minutes](https://medium.freecodecamp.org/learn-css-variables-in-5-minutes-80cf63b4025d)

Et dans cette article agrémenté de comparatifs entre méthodes, découvrez 7 astuces simples pour mettre en valeur le contenu.

[7 Practical Tips for Cheating at Design](https://medium.com/refactoring-ui/7-practical-tips-for-cheating-at-design-40c736799886)

**Excellente lecture et rendez-vous le mois prochain !**

**Finissons sur une touche d’humour**

[https://miro.medium.com/max/702/1*xEwNsOHGMpqW_Je50pemHQ.png](https://miro.medium.com/max/702/1*xEwNsOHGMpqW_Je50pemHQ.png)

Peut-être une deuxième ?

[How to Build A Horse With Programming (Comic) - Togg Blog](https://toggl.com/blog/build-horse-programming/)
