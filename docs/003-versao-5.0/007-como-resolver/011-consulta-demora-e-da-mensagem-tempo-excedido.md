---
sidebar_position: 11
---

# Consulta demora e dá mensagem Tempo excedido
## Problema

Ao entrar na área de Consulta e realizar uma consulta qualquer, demora excessivamente e retorna mensagem de Tempo Excedido.

## Descrição

Este problema ocorre nos computadores em que o banco de dados do Laudo & Imagem estão com grande quantidade de registros.

**FAÇA BACKUP DO BANCO DE DADOS ANTES DE SEGUIR AS INSTRUÇÕES**

**NÃO NOS RESPONSABILIZAMOS POR PROCEDIMENTOS REALIZADOS A PARTIR DAS INSTRUÇÕES, SEM O DEVIDO ENTENDIMENTO DO QUE PRECISA SER FEITO**

**RISCO DE PERDER TODOS OS DADOS, CASO PROCEDIMENTOS INDICADOS NÃO SEJAM REALIZADOS POR TÉCNICO COM CONHECIMENTOE ENTENDIMENTO DAS INSTRUÇÕES**

## Solução

Execute os procedimentos descritos em [2147467259 - Tempo excedido](%5Cl%20%22f8ba3a58-caf9-4b05-923e-375573f61735%22)

Não resolvendo siga os passos descritos abaixo.

## Procedimentos

Faça download dos arquivos abaixo:

- [CriarCatalogo.txt](http://suporte.laudoimagem.com.br/download/CriarCatalogo.txt)

- [TestarCatalogo.txt](http://suporte.laudoimagem.com.br/download/TestarCatalogo.txt)

- [RemoverCatalogo.txt](http://suporte.laudoimagem.com.br/download/RemoverCatalogo.txt)

Para realizar os procedimentos:

abrir o SQL Server Management Studio

selecionar o banco de dados

clicar em New Query

editar o arquivo CriarCatalogo.txt

copiar e colar o conteudo do txt que desejar executar na área do Query

clicar em Execute

Repita o procedimento para o arquivo TestarCatalogo.txt

Se o Testar Catalogo resultar em tabela, está Indexado

Se der algum erro ou problema, executar:

- RemoverCatalogo.txt

Além de executar o Cor_S_4_2_XX.exe, da versão instalada tem que trocar o executável Laudoimagem.exe no servidor e em todas as estações

Solicite o arquivo do novo executável para o Suporte na versão necessária que será enviado por e-mail.