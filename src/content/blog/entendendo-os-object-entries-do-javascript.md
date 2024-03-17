---
title: entendendo os object entries do javascript
author: dev marcell
pubDatetime: 2024-01-10T01:08:42Z
slug: entendendo-os-object-entries-do-javascript
featured: false
draft: false
tags:
  - javascript
  - estrutura-de-dados
description: o object.entries() é utilizado para conseguir informações de propriedades chave-valor. as enumera basicamente na mesma ordem do...
---

## object.entries()

no javaScript esse é utilizado para conseguir informações de propriedades chave-valor. as enumera basicamente na mesma ordem do `for...of`.

aqui está um exemplo básico:

```javascript
const obj = {
  a: 1,
  b: 2,
  c: 3,
};
const entries = Object.entries(obj);
console.log(entries); // [ ['a', 1], ['b', 2], ['c', 3] ]
```

ele é especialmente útil quando você deseja iterar sobre as propriedades de um objeto usando métodos de iteração de array, como `forEach`, `map` ou `for...of`.

exemplo usando `forEach`

```javascript
const obj = {
  a: 1,
  b: 2,
  c: 3,
};
Object.entries(obj).forEach(([key, value]) => {
  console.log(`${key}: ${value}`); // a: 1 // b: 2 // c: 3
});
```

para mais informações sobre o object.entries, você pode acessar a <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries'>documentação</a>.
