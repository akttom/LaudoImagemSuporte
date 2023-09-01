---
sidebar_position: 33
---

# Tempo excedido na Consulta
## Problema

Ao fazer a consulta de laudos, retorna mensagem de erro "-2147467259 - Tempo excedido"

## Descrição

Na Estação: Este problema ocorre quando existe alguma instabilidade na conexão via rede entre o computador que é a Estação de trabalho e o Servidor do Laudo & Imagem.

No Servidor: Este problema ocorre, quando por alguma instabilidade do Windows a autenticação do computador demora além do tempo mínimo esperado.

**FAÇA BACKUP DO BANCO DE DADOS ANTES DE SEGUIR AS INSTRUÇÕES**

**NÃO NOS RESPONSABILIZAMOS POR PROCEDIMENTOS REALIZADOS A PARTIR DAS INSTRUÇÕES, SEM O DEVIDO ENTENDIMENTO DO QUE PRECISA SER FEITO**

**RISCO DE PERDER TODOS OS DADOS, CASO PROCEDIMENTOS INDICADOS NÃO SEJAM REALIZADOS POR TÉCNICO COM CONHECIMENTOE ENTENDIMENTO DAS INSTRUÇÕES**

## Solução

Se já foram executados os procedimentos do item "[-2147467259 - Tempo excedido](%5Cl%20%22e3232ddf-0b50-4c78-9b59-220d7adf9b05%22)", execute as instruções abaixo.

**Essa etapa, deve ser realizada apenas no Servidor**

Fazer Backup do banco de dados.

Fazer download dos arquivos abaixo e executar nessa ordem:

1. [CriarCatalogo.txt](http://suporte.laudoimagem.com.br/download/CriarCatalogo.txt)
2. [TestarCatalogo.txt](http://suporte.laudoimagem.com.br/download/TestarCatalogo.txt)

Salvar os arquivos na pasta Laudoimagem\Util do Servidor

Se der algum erro ou problema, fazer download e executar:

- [RemoverCatalogo.txt](http://suporte.laudoimagem.com.br/download/RemoverCatalogo.txt)

Para realizar os procedimentos acima:

- abrir o SQL Server Management Studio

- selecionar o banco de dados Laudoimagem

- clicar em New Query

- colar o conteudo do arquivo CriarCatalogo.txt que desejar executar

- clicar em Execute

- clicar em New Query

- colar o conteudo do arquivo TestarCatalogo.txt que desejar executar

- clicar em Execute

- se o Testar Catalogo resultar em tabela, está em processo de indexação

O processo de indexação é demorado, principalmente em bancos de dados com tamanho superior a 5Gb.

Se o processo de Indexação tiver sido iniciado, solicite o novo executável de sua versão, informando por e-mail ao <suporte@laudoimagem.com.br>:

- cliente

- código do cliente

- versão instalada do Laudo & Imagem

Após receber o novo executável, substitua na pasta de instalação do Laudo & Imagem, o arquivo Laudoimagem.exe no Servidor e em cada uma das estações (locais e remotas).

Acesse o sistema e verifique se o problema da consulta foi resolvido.

Caso a indexação ainda não tenha sido concluída, pode ser que a mensagem de erro ainda ocorra.

Para verificar se já concluiu o Criar Catálogo:

- com o SQL Server aberto

- clica no banco de dados Laudoimagem

- localiza na lista o item Storage

- clica em Full Text Catalogs

- clica em CatExame_Etapa e com o botão direito em Propriedades

- verificar se os valores mudam

- concluído quando não mudar mais