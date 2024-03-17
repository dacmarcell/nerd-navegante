---
title: criando uma pilha com js 📚
author: dev marcell
pubDatetime: 2024-03-17T18:29:42Z
slug: criando-uma-pilha-com-js
featured: true
draft: false
tags:
  - javascript
  - estrutura-de-dados
  - stack
description: explicação de um código que implementa uma estrutura de dados chamada pilha.
---

opa! vumbora entender esse código. Ele implementa uma estrutura de dados chamada <a target="_blank" href="https://www.geeksforgeeks.org/implementation-stack-javascript/">pilha</a>

```javascript
class Stack {
  items = [];

  add(element) {
    this.items.push(element);
  }

  remove() {
    this.items.pop();
  }

  read() {
    return this.items;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }

  print() {
    return this.items.toString();
  }
}
```

Inicialmente uma classe qualquer é criada com o nome de Stack (que é pilha em inglês). 👍

Logo abaixo temos um array vazio iniciado. o nome dele é `items` e ele vai ser a nossa pilha.

Agora vou listar os métodos e digo o que cada um faz:

- add(param)
- remove()
- read()
- isEmpty()
- clear()
- size()
- print()

Agora sim vamos entender o que cada método da nossa classe Stack faz.

```javascript
add(element) {
    this.items.push(element);
}
```

aqui simplesmente é adicionado um novo elemento através do método <a target="_blank" href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/push">push</a> presente no array.

```javascript
remove() {
    this.items.pop();
}
```

aqui é removido o último elemento do array. É utilizado o método <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/pop" target="_blank">pop</a>.

```javascript
read() {
    return this.items;
}
```

retorna o array (em formado de array mesmo).

> [1,2,3]

```javascript
isEmpty() {
    return this.items.length === 0;
}
```

retorna se o array está vazio ou não.

```javascript
clear() {
    this.items = [];
}
```

seta o array no seu estado inicial (vazio).

```javascript
size() {
    return this.items.length;
}
```

retorna o tamanho do array.

```javascript
print() {
    return this.items.toString();
}
```

retorna os elementos do array em formato de string.

> 1,2,3

Caso tenha ficado alguma dúvida relacionado ao <a target="_blank" href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/this">this</a> ou a estrutura de <a target="_blank" href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Classes">classes</a>, acesse os links. 😀

Até a próxima.
