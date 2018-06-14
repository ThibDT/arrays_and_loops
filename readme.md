# Renforcement Javascript

## Tableaux & boucles

**Tout se passe dans le fichier script.js**

**Ne pas toucher aux autres fichiers !**

### Objectifs

L'objectif de cet exercice sera de générer un tableau correspondant à une map.
La map sera affichée sur votre page grâce à la fonction 
```javascript
render();
```
Celle-ci prend un seul paramètre, votre tableau.

#### 1. Map simple, de l'herbe de partout !

Votre premier objectif est de générer un tableau à deux dimensions.
Les dimensions (largeur et hauteur) du tableau doivent être stockées dans deux variables.
Le tableau doit être généré à partir de boucles for.

Dans un premier chaque case du tableau doit contenir la chaîne de caractère 'grass'.

Ainsi votre tableau doit être de la forme :
```javascript
[
    ['grass', 'grass', 'grass', 'grass'],
    ['grass', 'grass', 'grass', 'grass'],
    ['grass', 'grass', 'grass', 'grass'],
    ['grass', 'grass', 'grass', 'grass'],
    ['grass', 'grass', 'grass', 'grass']
]
```

#### 2. Délimiter la map avec des murs !

La deuxième étape sera de placer des murs à chaque extrémité de la map.
Pour cela, remplacer la chaîne 'grass' par 'wall' aux endroits nécessaires.

#### 3. Un peu de décor !

La troisième et dernière étape est de placer aléatoirement des buissons et/ou des rochers.
Pour cela il vous faudra stocker un tableau de longueur 2 à la place d'une chaîne de caractère. Ce tableau contiendra 2 chaînes de caractères :
- Une première pour le sol (grass ou earth);
- Une seconde pour le buisson ou le rocher (bush ou rock).

Ainsi à certains endroits aléatoirement définis, à la place de 'grass' nous trouverons par exemple ['grass', 'bush'].
