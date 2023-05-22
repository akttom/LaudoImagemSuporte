---
sidebar_position: 14
---

# 2146233088 (80131500) - Erro ao ler o XML de padrões de apliques. Padrões de apliques inválidos ou incompletos - ao clicar no botão de apliques.

## Problema

Ao clicar no botão de Apliques, dá mensagem de erro
`-2146233088 (80131500) - Erro ao ler o XML de padrões de
apliques. Padrões de apliques inválidos ou incompletos.`

## Descrição

Este problema ocorre quando foi configurado como padrão, algum
aplique com caracter que não seja válido ou texto.

## Solução

Remover todos os apliques pré-cadastrados e recriar na versão
sem Flash Player.

## Procedimentos

Execute somente no Servidor do sistema Laudo & Imagem.

Faça download, descompacte e salve o arquivo
RemoverApliquesPadrao.vbs na pasta `...\Laudoimagem\Util` do
Servidor do Laudo & Imagem.

Execute o programa `RemoverApliquesPadrao.vbs`

Clique no botão `Ok`

Tente acessar o sistema Laudo & Imagem e clique no botão de
`Apliques`.

Download:
[RemoverApliquesTextoPredefinidos.zip](http://suporte.laudoimagem.com.br/download/RemoverApliquesTextoPredefinidos.zip)

Importante:\
Se ocorrer erro ao executar o programa, envie o arquivo
Laudoimagem.ini que está na pasta `C:\Windows` do Servidor, para
suporte@laudoimagem.com,br, informando que está executando o
programa RemoverApliquesDoExame.vbs e aguarde retorno. A string
de conexão terá que ser alterada.