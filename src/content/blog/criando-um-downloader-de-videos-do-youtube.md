---
title: criando um downloader de videos do youtube com python
author: dev marcell
pubDatetime: 2024-02-01T18:15:42Z
slug: criando-um-downloader-de-videos-do-youtube-com-python
featured: true
draft: false
tags:
  - python
  - pytube
description: aprenda a criar um baixador de vídeos do youtube com a linguagem python
---

## criando um downloader de vídeos do youTube com python

o youTube é uma fonte muito grande de vídeos, muitas vezes desejamos salvar esses vídeos para assistir depois. neste artigo, vamos explorar como criar um downloader de vídeos do YouTube usando somente python uma biblioteca.

## instalando a biblioteca pytube

```bash
pip install pytube
```

com a biblioteca instalada em sua máquina, vamos checar o código:

```python
from pytube from Youtube

link = input("Give me a link: ")
yt = Youtube(link)
video = yt.streams.get.highest_resolution()
print("Loading...")
video.download()
print("Done!")
```

python é simples demais, não é!? haha!

veja o gist [aqui](https://gist.github.com/marcelldac/59bc81ecb72ab4bb333d52256a048a40)
