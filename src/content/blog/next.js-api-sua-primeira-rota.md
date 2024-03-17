---
title: next.js api - sua primeira rota
author: dev marcell
pubDatetime: 2024-01-10T02:14:42Z
slug: next.js-api-sua-primeira-rota
featured: false
draft: false
tags:
  - next.js
  - api
  - back-end
description: entenda o funcionamento da api interna do framework back-end for front-end next.js
---

o next.js é um framework popular para o desenvolvimento web com react. ele suporta várias funcionalidades, incluindo a criação de apis de maneira simples e eficiente.

um exemplo de implementação de rota get usando o next (pages dir)

```javascript
// pages/api/hello.js
export default GET(req, res) => {
  res.status(200).json({ message: "Olá, API!" });
};
```

após criar este arquivo, a rota /api/hello estará automaticamente disponível em sua aplicação.

você pode testar a api acessando <http://localhost:3000/api/hello> (3000 é a porta padrão do next).
