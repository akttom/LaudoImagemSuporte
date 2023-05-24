---
sidebar_position: 2
---

# 10061 - connection is forcefully rejected

## Problema

Ao entrar no programa dá mensagem de erro `10061 - connection
is forcefully rejected`

## Descrição

Este problema ocorre quando o componente `liserver` que inicia a
conexão com o banco de dados foi automaticamente fechado.

## Solução

Retornar a execução do arquivo.

## Procedimentos

- Para confirmar o problema, clique em `CTRL` + `ALT` + `DEL` e abra a opção
  `Gerenciador de Tarefas`.
- Clique na opção `Aplicativos` e localize na lista o procedimento
  `liserver`.
- Se `liserver` não estiver na lista, feche o Gerenciador de Tarefas
  e reinicie o computador que é o servidor do Laudo & Imagem.
- O componente `liserver` deverá executar automaticamente e a
  conexão com o banco de dados será reestabelecida.
- O programa Laudo & Imagem voltará a funcionar.

Se o componente `liserver` não executar automaticamente, verifique
se está em Todos os Programas / Inicializar.

Se não estiver, siga as instruções abaixo:
- abra a pasta de instalação do Laudo & Imagem (geralmente
`C:\Arquivos de Programas\Laudoimagem`)
- localize o arquivo `liserver.exe` e dê dois clique sobre o
arquivo.
- minimize a tela do LiServer aberta e tente abrir o Laudo &
Imagem.
- copie o arquivo `liserver.exe` para a pasta Inicializar do
Windows e configure para abrir e executar de forma oculta.