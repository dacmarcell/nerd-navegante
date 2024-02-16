---
title: como dar deploy em uma api
author: dev marcell
pubDatetime: 2024-02-15T22:48:42Z
slug: como-dar-deploy-em-uma-api
featured: true
draft: false
tags:
  - deploy
  - nodejs
description: o object.entries() é utilizado para conseguir informações de propriedades chave-valor. as enumera basicamente na mesma ordem do...
---

## como dar deploy em uma api

olá. indo direto ao ponto, vamos precisar seguir os seguintes passos

### crie uma conta no [render.com](https://render.com/)

### no canto superior direito clique em **new** >> **web service**

![new render project](../../assets/images/image-1-api-deploy.png)

### selecione a conexão com github

![build and deploy from a git repository](../../assets/images/image-2-api-deploy.png)

### escolha um repositório seu ou qualquer repositório público do github

![choose repository](../../assets/images/image-3-api-deploy.png)

### com o repositório escolhido, esolha um nome para o projeto, comando de build e de start.

caso a aplicação seja em nodejs

para buildar

```bash
npm run build
```

para rodar

```bash
npm run dev || npm start
```

(lembre-se que estes comandos devem ser pré-configurados no **package.json**)

![project info](../../assets/images/image-4-api-deploy.png)

### ao fim de tudo, clique em create web service

![create web service](../../assets/images/image-5-api-deploy.png)
