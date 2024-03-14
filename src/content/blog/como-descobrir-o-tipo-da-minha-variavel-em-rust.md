---
title: como descobrir o tipo da minha variavel em rust 🦀
author: dev marcell
pubDatetime: 2024-03-14T13:20:42Z
slug: como-descobrir-o-tipo-da-minha-variavel-em-rust
featured: true
draft: false
tags:
  - rust
  - estrutura-de-dados
description: entenda de uma vez por todas como criar uma função que retorna o tipo das suas variáveis em Rust.
---

O rust é uma linguagem de baixo nível. Muitos métodos que vemos em linguagens de níveis maiores, como o JS, já são implementados por padrão.

No caso do JS para descobrir o <a href="https://medium.com/trainingcenter/entendendo-os-tipos-e-variaveis-em-javascript-f9753b4c7b61" target="_blank">tipo da variável</a> basta escrever:

`console.log(typeof nome_da_var);`

Entenda mais sobre o <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/typeof" target="_blank">type_of</a>.

Já no Rust, para conseguirmos esse tipo de informação, temos que implementar no nosso código. E é isso que vamos entender hoje!

Observe o código. Vamos entender linha a linha.

```rust
fn type_of<T>(_: T) -> &'static str {
    std::any::type_name::<T>()
}

fn main() {
    let number: u8 = 30;
    println!("{}", type_of(number)); //Output: u8
}
```

- Logo de início é criada uma função chamada de "type_of". Ela recebe um generic que é basicamente um tipo dinâmico.

- Tipo que ela recebe é do parâmetro que virá a seguir "\_". Inclusive, ele tem o nome de \_ pois não será utilizado nessa função. Só precisamos do **tipo dele**.

- A seguir, temos um indicador de tipo de retorno da função "->". Nesse caso, retornará uma <a href="https://users.rust-lang.org/t/quick-question-static-str/35940" target="_blank">referência estática de str</a>.

Dentro da nossa função, chamamos a <a href="https://doc.rust-lang.org/std/" target="_blank">standard library(std)</a> do Rust e passamos pelos seguintes módulos:

- <a href="https://doc.rust-lang.org/std/any/index.html" target="_blank">any</a>: Utilitário para tipos dinâmicos ou reflexão de tipo.

- <a href="https://doc.rust-lang.org/std/any/fn.type_name.html" target="_blank">type_name</a>: Retorna o nome do tipo como uma string.

E em seguida, temos o nosso <a href="https://doc.rust-lang.org/book/ch10-01-syntax.html" target="_blank">generic</a> `<T>` que terá o tipo do parâmetro recebido.

Finalizando a primeira função por aí.

Na função principal(main), criamos uma variável chamada number de tipo <a href="https://doc.rust-lang.org/std/primitive.u8.html" target="_blank">u8(unsigned integer de 8 bits)</a> e invocamos a função "type_of" passando a variável number como parâmetro.

O `u8` é um tipo que está contido nos tipos primitivos da linguagem Rust.

- "u" significa unsigned (sem sinal)
- "8" é a quantidade de bits que ele é capaz de guardar.
  - lembrando que 8 bits = 1 byte.
- Ele guarda valores de 0 a `(2^8 − 1)` // 255

Além dele também temos o u16, u32, u64, u128. Que seguem os mesmos padrões de limite.`(2^X - 1)`, sendo X o número depois de u.

Também temos os tipos iniciando com "i", que são os tipos com sinais.
Assim como o unsigned, também temos variações de 8 a 128.
Exemplos:

- i8: -128(-2^7) a 127(2^7 - 1)
- i16: -32768(-2^15) a 32767(2^15 - 1)

Perceba um detalhe. No tipo com sinal, diminuimos 1 do expoente também.

Como esperado, obtemos o nosso output `u8` nos informando do tipo dessa variável.

> A linguagem Rust é um testemunho da busca incessante da comunidade de desenvolvedores por uma solução que una a elegância da sintaxe com a rigidez da segurança. - ChatGPT
