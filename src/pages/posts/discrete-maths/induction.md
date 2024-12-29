---
layout: ../../../layouts/PostsLayout.astro
title: 'Induction - part 1'
pubDate: 2024-12-29
description: 'Proving the sum of the first n numbers formula'
author: 'j4vierb'
image:
  url: 'https://media.geeksforgeeks.org/wp-content/uploads/20240602104601/Sum-of-Natural-Number-Formula.webp'
  alt: 'induction'
tags: ["discrete mathematics"]
---

# Borrador

La suma de los primeros $n$ números naturales es $\frac{n(n+1)}{2}$.

## Prueba

Caso base. Probemos inicialmente esta afirmación para $n=1$. En este caso la suma de los naturales es $1$, mientras que al reemplazar en la formula también obtenemos $1$, por tanto, se cumple. 

Ahora supongamos que esta formula se cumple para los primeros $k$ naturales, es decir, la suma de $1 + 2 + \dots + k = \frac{k (k + 1)}{2}$. Ahora intentemos probar que esto se cumple para $k + 1$. Es decir, que la anterior suma es igual a $\frac{(k+1)(k+2)}{2}$.

Tenemos que $1 + 2 + \dots + k + (k + 1)$ corresponde por la hipotesis de inducción a $\frac{k (k + 1)}{2} + (k + 1)$. Esto es igual a $\frac{(k + 1)(k + 2)}{2}$, como se quería. 

Finalmente, se puede concluir por inducción que la suma de los primeros $n$ naturales es $\frac{n(n+1)}{2}$.
