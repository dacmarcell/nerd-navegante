---
title: como criar uma implementacao em rust 🦀
author: devmarcell
pubDatetime: 2024-07-04T21:54:42Z
slug: como-criar-uma-implementacao-em-rust
featured: true
draft: false
tags:
  - rust
  - estrutura-de-dados
description: veja o código de uma implementação utilizando traits, structs e impl.
---

Olá! vamos para mais um conteúdo de Rust?

novamente vamos iniciar o post comparando o nosso amado Rust com o typescript. Inclusive, você sabia que existe um repositório no github que serve para desenvolvedores typescript aprenderem o rust de uma forma mais fácil? [clique aqui para ir até o repositório](https://github.com/Mercateo/rust-for-node-developers).

agora vamos ao código e a comparação em seguida:

```rust
struct Retangle {
    height: u32,
    width: u32
}

trait GeometricForm {
    fn calculate_area(&self) -> u32;
    fn new(width: u32, height: u32) -> Self;
}

impl GeometricForm for Retangle {
    fn calculate_area(&self) -> u32 {
        self.width * self.height
    }

    fn new(width: u32, height: u32) -> Self {
        Self{ width, height }
    }
}

fn main(){
    let retangle = Retangle::new(10, 20);
    let area: u32 = retangle.calculate_area();

    println!("retangle area is: {}",area);
}
```

inicialmente é criada uma [struct](https://doc.rust-lang.org/std/keyword.struct.html) que em sua definição na própria documentação é muito clara por si só.

> a type that is composed of other types. (Um tipo que é composto por outros tipos).

no Rust, temos 3 tipos de struct:

struct com campos nomeados

```rust
struct User{
    pub name: String,
    pub surname: String,
    pub age: u8
}

fn main() {
    let user = User {
        name: String::from("John"),
        surname: String::from("Doe"),
        age: 77
    }
    println!("Name of the user: {}", user.name)
}
```

nesse código, é criada uma `struct` nomeada de `User`. Ela tem os campos nome, sobrenome e idade. Seu uso é simples como pode ser visto na função principal(main).

tuple structs (struct de tupla)

```rust
struct Log(u32, String)

fn main() {
    let log = Log(404, String::from("Page Not Found"))
    ...
}
```

unit-like structs (unidades como structs)


```rust
struct Electron {} // Use empty braces...
struct Proton;     // ...or just a semicolon.

fn main() {
    // Use the same notation when creating an instance.
    let x = Electron {};
    let y = Proton;
    let z = Electron; // Error
}
```

implementação própria da [documentação](https://web.mit.edu/rust-lang_v1.25/arch/amd64_ubuntu1404/share/doc/rust/html/book/first-edition/structs.html#:~:text=Unit%2Dlike%20structs&text=Such%20a%20struct%20is%20called,features%2C%20it%20can%20become%20useful.) das unit-like structs. Perceba que existem duas formas de criar uma unit-like struct. Tanto com chaves, quanto sem chaves. Sua implementação segue o mesmo padrão, causando erro caso haja uma implementação não coerente com a forma de declaração.

show de bola, acho que agora você já tem uma noção do que são structs e como elas funcionam no rust. A comparação com o typescript nesse caso é mais simples. Ela se parece com a estrutura `type` do ts. 

agora vamos partir para o trait!

já o trait, parece muito uma interface! Entenda a diferença entre types e interfaces no typescript com esse [vídeo do Lucas Montano](https://www.youtube.com/watch?v=q_a9BMDCTtE). No resumo, as traits definem **comportamentos** e não formação de dados.

É tanto que **não** é possível fazer a mesma implementação do primeiro struct usando o trait, por exemplo:

```rust
//ERROR
trait User {
    name: String,
    surname: String,
    age: u8
} 
```

o **correto** nesse caso seria:

```rust
struct User {
    pub name: String,
    pub surname: String,
    pub age: u8
}

trait UserInfo {
    fn birthday(&self) -> String;
    fn full_name(&self) -> String;
    fn years_until_retirement(&self) -> u8;
}
```

caso, você realmente queira por algum motivo implementar formatação de dados em uma trait, o máximo que você pode fazer é isso:

```rust
trait User {
    get_name(&self) -> String;
    set_name(&mut self, value: String) -> String;
    get_surname(&self) -> String;
    set_surname(&mut self, value: String) -> String;
    get_age(&self) -> u8;
    set_age(&mut self, value: u8) -> u8;
}
```

isso aí! implemente getters e setters!

agora vamos para a **impl**. Com tudo que criamos, temos o seguinte:

```rust
struct User{
    pub name: String,
    pub surname: String,
    pub age: u8
}

trait UserInfo {
    fn birthday(&self) -> String;
    fn full_name(&self) -> String;
    fn years_until_retirement(&self) -> u8;
}

impl UserInfo for User {
    fn birthday(&self) -> String {
        format!("happy birthday, {}! you have completed {} years.", self.name, self.age)
    }
    fn full_name(&self) -> String {
        format!("{} {}", self.name, self.surname)
    }
    fn years_until_retirement(&self) -> u8 {
        65 - self.age
    }
}
```

o código fica extremamente intuitivo depois que entendemos realmente o conceito das coisas, não é ?!

agora vamos ao nosso último tópico:

```rust
fn new(largura: u32, altura: u32) -> Self {
    Self{ largura, altura }
}
```

o que essa função faz? por que ela foi nomeada como new?

no rust, exite um conceito que é a [função associada](https://doc.rust-lang.org/rust-by-example/fn/methods.html#associated-functions--methods). Basicamente o nosso `new` funciona como um constutor. Executa ao nossa implementação ser chamada. Caso necessário terão dependências que serão passadas para a criação daquela implementação.

exemplo de uso do `new`:

```rust
struct User {
    pub name: String,
    pub surname: String,
    pub age: u8,
}

impl User {
    fn new(name: String, surname: String, age: u8) -> Self {
        Self {
            name,
            surname,
            age,
        }
    }
}

fn main() {
    let user = User::new(String::from("John"), String::from("Doe"), 77);
    ...
}

```

> Sabia que o Rust foi criado em 2006 por [Graydon Hoare](https://github.com/graydon)? <- esse link leva pro github dele 😉