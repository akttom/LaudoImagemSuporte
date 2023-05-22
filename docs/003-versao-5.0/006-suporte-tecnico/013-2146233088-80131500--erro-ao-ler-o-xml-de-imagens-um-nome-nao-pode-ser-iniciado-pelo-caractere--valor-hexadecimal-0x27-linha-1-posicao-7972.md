---
sidebar_position: 13
---

# 2146233088 (80131500) - Erro ao ler o XML de imagens: Um nome não pode ser iniciado pelo caractere ''', valor hexadecimal 0x27. Linha 1, posição 7972.

## Problema

Ao entrar no programa e acessar o exame, dá mensagem de erro
`-2146233088 (80131500) - Erro ao ler o XML de imagens: Um nome
não pode ser iniciado pelo caractere ''', valor hexadecimal
0x27. Linha 1, posição 7972.`

## Descrição

Este problema ocorre quando foi inserido na imagem, apliques com
algum caracter que não seja texto.

## Solução

Remover os apliques das imagens do    exame com problema / erro.

## Procedimentos

Localize o número do exame em que está posicionado o cadastro do
exame.

Faça download, descompacte e salve o arquivo
`RemoverApliquesDoExame.vbs` na pasta `...\Laudoimagem\Util` do
Servidor do Laudo & Imagem.

Execute o programa `RemoverApliquesDoExame.vbs`

Preencha com o número do exame que terá os apliques removidos
das imagens

Clique no botão `Ok`

Tente acessar o sistema Laudo & Imagem

Download:
[RemoverApliquesDoExame.zip](http://suporte.laudoimagem.com.br/download/RemoverApliquesDoExame.zip)

Importante:  
Se ocorrer erro ao executar o programa, envie o arquivo
Laudoimagem.ini que está na pasta `C:\Windows` do Servidor, para
suporte@laudoimagem.com,br, informando que está executando o
programa RemoverApliquesDoExame.vbs e aguarde retorno. A string
de conexão terá que ser alterada.