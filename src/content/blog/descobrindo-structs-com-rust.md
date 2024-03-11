---
title: descobrindo structs com rust
author: dev marcell
pubDatetime: 2024-03-10T18:27:42Z
slug: descobrindo-structs-com-rust
featured: true
draft: false
tags:
  - rust
  - estrutura-de-dados
description: explicação de um código que utiliza structs com a linguagem Rust.
---

## descobrindo structs com rust

olá! indo direto ao código para poupar seu tempo como sempre:

```rust
  fn main() {
    struct Channel {
        name: String,
        followers: u32,
        media_followers: f64,
    }

    let my_channel = Channel {
        name: String::from("Dev TV"),
        followers: 1000,
        media_followers: 500.0,
    };

    println!(
        "My channel is named {}. He have {} of followers. My media of followers is {}",
        my_channel.name, my_channel.followers, my_channel.media_followers
    );
}
  
```

Rust (ainda?) não tem [top level statement](https://learn.microsoft.com/en-us/dotnet/csharp/tutorials/top-level-statements). Por conta disso, precisamos de uma função principal para iniciar nosso algoritmo.
Nesse caso é a nossa `fn main(){ }`.

<br>

Na próxima linha já é a nossa declaração da struct. Basicamente a struct é uma estrutura de dados que nos dá a possibilidade de criar "arrays de tipos". Ou basicamente estruturas que nos fazem criar outras estruturas de forma predefinida.

```rust
struct Channel {
  name: String, <---- Texto
  followers: u32, <---- Inteiro sem sinal de 32 bits
  media_followers: f64, <---- Float de 64 bits
}
```

Em seguida criamos a nossa variável baseada na struct `Channel` com os valores que queremos definir. Perceba que cada valor respeita seu respectivo tipo. 

```rust
let my_channel = Channel {
  name: String::from("Dev TV"),
  followers: 1000,
  media_followers: 500.0,
};
```

<br>

Agora nós vamos entender a diferença do `String::From("...")` em comparação a declaração de uma simples variável em Rust: `let var = "..."`. É uma diferença de tipo que determina a sua alocação de memória. 

<br>

O primeiro caso é uma string que está alocada na memória heap. Basicamente uma forma de criação de string. 

<br>

Já o segundo caso, __também__ é uma forma de criação de string. Mas nesse caso, é uma referência ao string literal, hardcoded em binário. Seu tipo é `&str`. 

<br>

Em resumo, a diferença de um pra outro é a inferência de tipo. :)

<br>

Ao fim do algoritmo podemos ver um println!, onde o "!" representa que esta estrutura é um macro. Basicamente um marco no Rust é uma _forma de escrever um código que escreve outro código_. Palavras da própria [documentação](https://doc.rust-lang.org/book/ch19-06-macros.html). Esse `println!` imprime os valores concatenando com as variáveis escritas posteriormente no código.

```rust
println!(
        "My channel is named {}. He have {} of followers. My media of followers is {}",
        my_channel.name, my_channel.followers, my_channel.media_followers
    );
```

<br>

Viu como é simples? Agora vumbora aprender [Rust](https://doc.rust-lang.org/book/title-page.html). Até a próxima, pessoal!
