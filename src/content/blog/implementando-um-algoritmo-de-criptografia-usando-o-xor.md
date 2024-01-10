---
title: implementando um algoritmo de criptografia usando o xor
author: Sat Naing
pubDatetime: 2024-01-10T02:45:42Z
slug: implementando-um-algoritmo-de-criptografia-usando-o-xor
featured: false
draft: false
tags:
  - FAQ
description: inicialmente o algoritmo em si encripta um determinado input e o decripta em seguida com **a mesma função**.
---

olá pessoal! vamos entender esse código?

```javascript
function encriptDecript(input: string) {
  const separatedStr = input.split('');
  const xor_term = 'X'; //any character will work here
  for (let i = 0; i < separatedStr.length; i++) {
    separatedStr[i] = String.fromCharCode(separatedStr[i].charCodeAt(0) ^ xor_term.charCodeAt(0));
  }
  return separatedStr.join('');
}

const encriptedInput = encriptDecript('Marcell');
console.log(encriptedInput);
const decriptedOutput = encriptDecript(encriptedInput);
console.log(decriptedOutput);

```

inicialmente o algoritmo em si encripta um determinado input e o decripta em seguida com **a mesma função**.

agora vamos desmembrar essa obra de arte aos poucos.

- recebemos um `input` do tipo `string` que seu tamanho representará a **complexidade de tempo** do nosso algoritmo.
- criamos o primeiro termo (separatedStr) da operação e aplicamos o método `split('')` na string. essa string nos retorna um array. esse array é composto por cada letra da string em que o método foi aplicado. esse conceito é chamado de **substring**
- criamos o segundo termo (xor_term) da operação, no qual pode ter qualquer valor, sendo um único caractere.
- em seguida, fazemos uma iteração com o array `separatedStr`

agora bebemos um copo de água e vamos para a linha de código mais desafiadora do algoritmo

```javascript
separatedStr[i] = String.fromCharCode(
  //                    |---- 3 ----|
  separatedStr[i].charCodeAt(0) ^ xor_term.charCodeAt(0)
  //              |----1----| |-2-|
);
```

1. `charCodeAt(0)` na string que é chamado, retorna o valor unicode do caractere selecionado. 0 é a posição do indice que ele recebe
2. `^` operador <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR'>bitwise xor</a>
