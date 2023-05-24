---
sidebar_position: 68
---

# Run time 7 - Out of memory após a senha

## Problema

Ao entrar no programa dá mensagem de erro `Run time 7 - Out of
memory...`

## Descrição

Este problema ocorre quando ocorreu alguma atualização do Windows ou
de outro programa que altere arquivos comuns do sistema.

## Solução

1. Restaurar o Windows para uma data anterior ao problema.

2. Copiar de outra máquina que tenha Laudo & Imagem os arquivos que
costumam ser alterados e registrar.

## Procedimentos

1. Restaurar o Windows para uma data anterior em que estava funcionando.

Não resolvendo, faça o procedimento abaixo.

2. Localize na pasta Windows os arquivos `RICHED32.DLL` e
`RICHED20.DLL`;

Verifique a versão de cada um deles e faça uma cópia em outra pasta
desses dois arquivos;

Localize os mesmos arquivos em um dos computadores que tenha Laudo &
Imagem instalado e esteja funcionando corretamente;

Copie esses dois arquivos para a mesma pasta do computador que está
apresentando o erro;

Tente entrar no sistema.