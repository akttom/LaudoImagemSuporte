---
sidebar_position: 40
---

# Conexão com banco de dados falhou - Verifique os dados e tente novamente

## Problema

Ao instalar o programa dá mensagem de erro `Conexão com banco de
dados falhou - Verifique os dados e tente novamente...`

## Descrição

Este problema ocorre quando é necessário incluir a porta TCPIP do
Servidor no caminho do Servidor de banco de dados.

## Solução

Configurar no caminho do Servidor de banco de dados a porta TCPIP do
SQL Server usado no Laudo & Imagem.

## Procedimentos

No computador que é a Estação de trabalho do Laudo & Imagem:

Ao abrir a tela de indicação do nome do Servidor, Nome do banco de
dados, login e senha, digite no campo `Servidor de banco de
dados`, após SQLEXPRESS, a porta TCPIP, incluindo a vírgula.

Exemplo: `NomeDoServidor\sqlexpress,1043`

Se não souber qual a porta TCP IP, pode obter das seguintes formas:\
1. Pergunte ao suporte técnico do Laudo & Imagem, que tem essa
informação, caso a porta TCP IP não tenha sido alterada; ou

2. Em uma estação que esteja instalada, edite o arquivo
`Laudoimagem.ini` que está na pasta `C:\Windows` e verifique na linha
que começa com o texto CONN_SERVER, o nº da porta conforme o exemplo
abaixo:

Se a porta for `1043` a linha irá ficar:

```
CONN_SERVER=Provider=SQLOLEDB.1;Password="senha";Persist Security
Info=True;User ID=sa;Initial Catalog=laudoimagem;Network
Library=DBMSSOCN;Data Source=NomeDoServidor\sqlexpress,1043
```

`1043` será a porta a ser inserida no campo `Servidor de banco de
dados` = `NomeDoServidor\sqlexpress,1043`