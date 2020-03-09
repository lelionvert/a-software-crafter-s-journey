---
title: Correctement gérer ses dépendances en Javascript
author: Ubald de Bellabre
published_date: 17 Décembre 2019
description: Un tuto de survie pour faire ses premiers sur un projet en JavaScript
tags: JavaScript, Dependency Management, Development Tips
author_link: https://example.com
---

## TL;DR
Pour les non-débutants :
* Ne modifiez jamais le `package.json` manuellement
* Mettez votre `package-lock.json` dans votre système de gestion de version
* Utilisez `npm ci` pour installer les dépendances (même sur votre environnement de développement)

## Comment ça marche ?

Npm est le gestionnaire de dépendances principal pour tous les projets en Javascript qui vous permet de réutiliser du 
code écrit par d'autres développeurs. Bien le maitriser peut clairement faire une grosse différence. Si vous n'avez 
jamais travaillé sur un projet en Javascript, vous pouvez comparer Npm avec :
* Maven pour Java
* Pip pour Python 
* Cargo pour Rust
* ...etc

### Premiers pas avec Npm
Les dépendances sont déclarées dans un fichier `package.json`. Il s'agit d'un fichier au format JSON, qui contient
plusieurs informations sur la structure de votre projet. En utilisant correctement les commandes qui viennent avec
l'outil en ligne de commande Npm, **vous n'aurez pas besoin de modifier ce fichier manuellement**.  
Pour en générer un nouveau, vous pouvez utiliser la [commande](https://docs.npmjs.com/cli/init) : 
```
# npm init [option]
```
:information_source: Vous pouvez utiliser l'option `--force` pour passer le wizard et générer directement un fichier par
défaut.  
:information_source: Les attributs entre crochets sont optionnels, la commande fonctionnera pareil sans.

### Ajouter une nouvelle dépendance
Lorsque vous voulez ajouter une nouvelle dépendance, Npm met à votre disposition [une commande](https://docs.npmjs.com/cli/install) :
```
# npm install package-name[@version]
```
Il s'occupe (depuis [npm@5.0.0](https://blog.npmjs.org/post/161081169345/v500)) automatiquement de mettre à jour le
`package.json` pour vous. Vous verrez apparaitre aussi un fichier `package-lock.json` (on discutera de son utilité [plus 
tard](#introduction-de-package-lockjson)).

### Formatage des numéros de versions
Dans la communauté Javascript, beaucoup de développeurs suivent le format [semver](https://semver.org/). Généralement, 
les numéros de versions sont composés de 3 nombres avec le format suivant :
```
[version majeure].[version mineure].[patch]
```
:warning: Attention : tous les développeurs de la communauté ne suivent pas les [règles associés au semver](https://semver.org/#semantic-versioning-specification-semver),
mais tout le monde utilise son formatage.

Pour éviter de devoir modifier le `package.json` à chaque fois qu'une nouvelle version sort, Npm a introduit la notion 
de [version range](https://docs.npmjs.com/misc/semver#range-grammar). Nous allons principalement nous concentrer sur deux
notations qui sont les plus utilisées :
* tilde notation
* caret notation

Ces deux notations permettent de définir une "liste" de versions. Par exemple : La notation `~1.2.3` signifie que les 
versions acceptées sont toutes les versions supérieures à `1.2.3` mais strictement inférieures à `1.3.0`.
De la même manière, la notation `^1.2.3` signifie que les versions acceptées sont toutes les versions supérieures à 
`1.2.3` mais strictement inférieures à `2.0.0`.

:information_source: Par défaut, Npm est configuré pour utiliser la **caret notation** si vous ne précisez pas de comportement particulier.

### Supprimer une dépendance
De la même manière, lorsque vous devez supprimer un dépendance, **ne le faites jamais manuellement dans le `package.json`**.
Utilisez la [ligne de commande](https://docs.npmjs.com/cli/uninstall) :
```
# npm uninstall package-name
```
Npm s'occupera de faire toutes les modifications dans le fichier `package.json` pour vous. Il mettra aussi à jour le
`package-lock.json`, conservez ce fichier, on en parlera [plus tard](#introduction-de-package-lockjson).

### Mettre à jour les dépendances
[Un projet avec des dépendances à jour est plus sain.](https://dependabot.com/blog/why-bother/). 
Npm procure aussi une interface en ligne de commande pour réaliser cette opération.
La [première commande](https://docs.npmjs.com/cli/outdated) est :
```
# npm outdated
```
Cette commande permet de lister toutes les dépendances obsolètes installées dans le projet. Cette commande ne modifie 
absolument rien dans le projet et peut être lancée sans crainte. Elle affiche un résultat sous forme de tableau : 
```
Package    Current  Wanted  Latest  Location
fibonacci    1.6.5   1.6.7   1.6.7  ressources
```
La première colonne est le nom de la dépendance. La deuxième colonne est la version actuellement installée sur votre 
machine. La troisième colonne est la version la plus récente qui respecte le `version range` que vous avez saisi dans votre
`package.json`. La quatrième colonne est la dernière version publiée indépendamment de votre `version range`. La dernière
colonne indique le répertoire de la dépendance, mais avec les paramètres par défaut, cette information n'est pas vraiment
utile.

Dans l'exemple ci-dessus, je peux directement utiliser la [deuxième commande](https://docs.npmjs.com/cli/update) :
```
# npm update
```
Celle-ci va se charger de mettre à jour la dépendance installée sur mon poste, mettre à jour le `package.json` ainsi que
le `package-lock.json`.  
:warning: Attention avec cette manipulation, vous devez vérifier que votre projet continue à fonctionner avec la nouvelle
version de la dépendance !

### Cas particulier de mise à jour des dépendances
Il peut arriver que la nouvelle version soit en dehors du `version range` défini dans votre `package.json`. Par exemple, 
ici j'ai défini `"fibonacci": "1.5.5"` comme mon `version range`. La commande `npm outdated` affiche donc :
```
Package    Current  Wanted  Latest  Location
fibonacci    1.5.5   1.5.5   1.6.7  ressources
```

Si j'exécute la commande `npm update`, rien ne se passera puisque j'ai déjà la version "voulue". Il faut que je dise à
Npm que je veux une nouvelle version. Je peux faire cette manipulation en ligne de commande :
```
# npm install fibonacci[@latest]
```
:warning: Attention, dans ces cas-là, il faut être particulièrement attentif car souvent cela peut nécessiter une mise à
jour de la base de code pour faire ce style de montées de version. N'hésitez pas à aller lire les changelog de la 
dépendance en question si vous avez des doutes.

## Les limites du `version range`

### Description du problème
Le système de `version range` est fantastique puisqu'il permet de maintenir facilement ses dépendances à jour. Cependant,
ce système peut très rapidement poser problème. En effet, vous définissez dans votre `package.json` le `version range` 
suivant : `"fibonacci": "^1.6.6"`.  
Si en travaillant, vous utilisez la version 1.6.6 de la bibliothèque, rien n'empêche les mainteneurs de la bibliothèque
de publier une nouvelle version, par exemple 1.7. Si un autre développeur commence à travailler sur le projet, ou si 
vous lancez une build sur votre intégration continue, alors ils n'auront pas la même version que vous dans leur projet.   
Il m'est arrivé que ce cas de figure casse la build et empêche les développeurs de l'équipe de travailler pendant un 
certain temps parce qu'une autre équipe avait livré une version cassée qui matchait notre `version range`.

Pour résoudre ce problème, on peut se dire qu'il suffit de changer le `version range` dans son `package.json` :  
`"fibonacci": "1.6.6"`. Cependant, si cette dépendance a elle-même déclaré des dépendances avec un `version range`, vous
vous retrouvez bloqué.

### Introduction de `package-lock.json`
Npm propose donc une solution pour contrer ce problème : le fichier [`package-lock.json`](https://docs.npmjs.com/files/package-lock.json) ! 
Il sauvegarde l'ensemble de l'arbre des dépendances et permet à n'importe qui de l'utiliser pour installer exactement 
les même versions que vous : finit les problèmes de build non reproductibles pour l'intégration continue.
Je vous conseille fortement de versionner dans votre système de gestion de version ce fichier.

### Exploitation du `package-lock.json`
Npm propose aussi [une commande](https://docs.npmjs.com/cli/ci) :
```
# npm ci
```
Contrairement à `npm install`, cette commande va uniquement se baser sur le fichier `package-lock.json` pour installer
les dépendances. Comme toute les versions sont directement disponibles dans le fichier, il n'y a pas besoin de faire de
résolution de dépendances comme pour `npm install` : la procédure d'installation est beaucoup plus rapide ! Sur des 
projets avec une installation + build de 3 min, j'ai pu réduire le temps de build de 50% juste en remplaçant `npm install`
avec `npm ci`.

L'utilisation du `package-lock.json` a quelques inconvénients : 
* vous devez modifier un fichier dans votre code source quand une dépendance d'une dépendance est mise à jour
* vous ne devez absolument **jamais** modifier le `package.json` manuellement, sinon vous allez avoir des désynchronisations
entre les deux fichiers !

## Conclusion

J'espère que je vous aurai permis d'apprendre quelques bonnes pratiques dans la gestions de vos dépendances en 
Javascript. J'ai évidemment simplifié beaucoup de choses dans cet article pour permettre son accessibilité, tous les liens
vers la documentation plus complète sont disponibles et je vous encourage à aller les lires. [Il est très important pour
un développeur de maitriser ses outils à la perfection pour gagner en productivité](http://keepcalmandrefactor.com/index.php/2018/01/23/master-your-tools/).
