---
sidebar_position: 3
---

# 10065 - No route to Host

## Problema

Ao entrar no programa dá mensagem de erro `10065 - No route to
Host`

## Descrição

Este problema ocorre quando o nome do computador tem números,
letras, espaço, \_. ou após instalar o drive da placa de
captura.

## Solução

Primeiro identifique se o problema é no Servidor ou na Estação
de trabalho, pois os

procedimentos de solução são diferentes.

## Procedimentos

### No Servidor

Entre em `C:\Windows`

Faça uma cópia de segurança do arquivo `Laudoimagem.ini`

Edite o arquivo `Laudoimagem.ini` e na linha que começa com
CONN_SERVER, edite a última parte do texto, alterando Data
Source=nome do `servidor\sqlexpress` para `Data
Source=127.0.0.1\sqlexpress` - substitua o nome do servidor para
`127.0.0.1`

Ainda no arquivo `Laudoimagem.ini`, edite e na linha que começa
com `SERVIDOR=nome do servidor`, substituindo o nome do servidor
para `127.0.0.1`

Salve e feche o arquivo `Laudoimagem.ini` e tente entrar no
programa.

### Na Estação

Altere o nome do computador para um nome menor e sem números,
traços.

Se ao tentar entrar no Laudo & Imagem aparecer a mensagem IP não
registrado, altere no registro da licença o IP para o nome do
computador.

Para alterar o IP do computador para o nome:

No Servidor, entre em `Iniciar` / `Programas` / `Laudo & Imagem` /
`Configurações`

Digite usuário e senha com permissão de administrador

Clique na lista da esquerda na opção `Licenças`

Clique na lista no nome do computador

Clique, na tela da esquerda, no(s) acessório(s) a ser removido
desse computador e clique no botão `>`

Repita a operação para cada acessório e módulo

Não é necessário salvar

Clique na lista da esquerda na opção `Computadores`

Clique no campo `Nome do computador` e altere o `IP` para o nome
correto do computador e clique em `Salvar`

Clique novamente na lista da esquerda na opção `Licenças`

Clique na lista no nome do computador

Clique, na tela da direita, no módulo que será instalado nesse
computador e clique no botão `<`

Repita a operação para os acessórios

Não é necessário salvar.