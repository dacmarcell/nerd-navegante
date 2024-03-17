---
title: melhore a performance de suas aplicacoes nodejs
author: dev marcell
pubDatetime: 2024-02-22T22:29:42Z
slug: melhore-a-performance-de-suas-aplicacoes-nodejs
featured: false
draft: false
tags:
  - javascript
  - performance
  - back-end
description: entenda como melhorar a performance das suas aplicações js ou ts, com um pequeno truque com promises.
---

# Melhorando performance nas chamadas API em aplicações Node

![fetch using axios](/assets/images/fetch_using_axios.png)

Fiz testes reais em um cenário onde não utilizamos o `Promise.All` e obtive os seguintes números:

- 669.065ms
- 651.111ms
- 732.241ms

em média obtemos **684.139ms** para duas requisições. Sendo assim, **342.0695ms** por requisição (em um cenário onde as duas levarão o mesmo tempo para executar)

![fetch using axios and promise all](/assets/images/fetch_using_axios_and_promise_all.png)

Da forma a seguir estamos utilizando o Promise.All do Javascript.
Os testes deste lado obtiveram os seguintes valores:

- 537.064ms
- 521.825ms
- 538.736ms

em média, **532.541ms** para as duas e **266.270ms** para uma requisição. Basicamente o promise.all recebe um array de promises e retorna uma promise ao final de todas as promises escritas. Como é retornada uma promise, também podemos utilizar o `.then` e/ou `.catch()`.
