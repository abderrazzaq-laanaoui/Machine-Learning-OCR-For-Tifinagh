# Amazigh OCR 
## Qu'est-ce que l'apprentissage automatique (Machine Learning) ?
>The field of study that gives computers the ability to learn without being explicitly programmed.
>
>**_Arthur Samuel_**

>A computer program is said to learn from experience E with respect to some class of tasks T and performance measure P, if its performance at tasks in T, as measured by P, improves with experience E.
>
>**_Tom Mitchell_**

#### Exemple : jouer aux dames.


- **E** =  L'experience est de jouer à de nombreuses parties de dames.

- **T** =  La tâche consiste à jouer aux dames.

- **P** =  La performance est la probabilité que le programme gagne le prochain match. 



\
En général, tout problème de Machine Learning peut être attribué à l'une des deux grandes classifications :

## Apprentissage Supervisé:
Dans l'apprentissage supervisé, on nous donne un ensemble de données et nous savons déjà à quoi doit ressembler notre sortie correcte, en ayant l'idée qu'il y a une relation entre l'entrée et la sortie.

Les problèmes d'apprentissage supervisés sont classés en deux catégories : les problèmes de **_"régression"_** et les problèmes de **_"classification"_**. \
Dans un problème de régression, nous essayons de prédire les résultats dans une sortie continue, ce qui signifie que nous essayons de faire correspondre les variables d'entrée à une fonction continue quelconque. \
Dans un problème de classification, nous essayons plutôt de prédire les résultats dans une sortie discrète. En d'autres termes, nous essayons de faire correspondre les variables d'entrée à des catégories discrètes. 

#### Exemple :
- **Régression** : En se basant sur l'image donnée d'une personne, il faut prévoir son âge

- **Classification** : Pour un patient atteint d'une tumeur, nous devons prévoir si la tumeur est maligne ou bénigne.

## Apprentissage Non-Supervisé:
L'apprentissage non supervisé nous permet d'aborder les problèmes avec peu ou pas d'idée de ce à quoi nos résultats devraient ressembler. Nous pouvons obtenir une structure à partir de données dont nous ne connaissons pas nécessairement l'effet des variables.

Nous pouvons dériver cette structure en regroupant les données en fonction des relations entre les variables dans les données.

Avec l'apprentissage non supervisé, il n'y a pas de retour d'information basé sur les résultats de la prédiction.

#### Exemple :
- **Regroupement** : Prenez une collection de 1 000 000 de gènes différents, et trouvez un moyen de regrouper automatiquement ces gènes en groupes qui sont en quelque sorte similaires ou liés par différentes variables, telles que la durée de vie, l'emplacement, les rôles, etc.
- **Non-groupée** : L'algorithme "Cocktail Party", vous permet de trouver une structure dans un environnement chaotique. (c'est-à-dire identifier des voix et des musiques individuelles à partir d'un maillage de sons lors d'un cocktail).
