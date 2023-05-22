---
sidebar_position: 31
---

# 2147467259 - DBNETLIB CONNECT SQL SERVER SQL Server inexistente no Servidor

## Problema

No Servidor do Laudo & Imagem, ao entrar no programa dá mensagem
de erro `-2147467259 - DBNETLIB CONNECT SQL SERVER SQL Server
inexistente ou acesso negado`.

## Descrição

Este geralmente problema ocorre quando o programa LISERVER foi
fechado.

Ou o serviço do MSSQL está parado.

## Solução

Executar e manter executando o programa LISERVER.

Iniciar o serviço do MSSQL.

## Procedimentos

### Para confirmar se o problema é na execução do LISERVER

Pressione as teclas `CTRL` + `ALT` + `DEL` simultaneamente e entre no
`Gerenciador de tarefas` do `Windows`.

Clique na opção `Aplicativos` e verifique se na lista aparece
`LIServer`

Se aparecer o programa `LIServer` e mesmo assim o erro persistir,
siga as orientações de `Restauração do Windows` para uma data
anterior a ocorrência do problema

Se não aparecer o programa `LIServer` na lista, siga os
procedimentos abaixo:

Entre na pasta `C:\Arquivos de Programas\Laudoimagem`

Localize o arquivo `LIServer.exe`

Dê dois cliques no arquivo `LIServer.exe`

Uma tela será aberta, minimize

Tente entrar no Laudo & Imagem

Se o programa entrar normalmente, verifique as instruções de
LIServer como Serviço

Se não resolver, verifique os passos abaixo.

### Iniciar o serviço do SQL Server

Se os serviços não reiniciarem, será necessário que os
procedimentos sejam realizados pela equipe de suporte do Laudo &
Imagem.

Se assinante do suporte, chame pelo Suporte Remoto.

Se não assinante do suporte, contrate suporte avulso -
[suporte@laudoimagem.com.br](mailto: suporte@laudoimagem.com.br)

Esse atendimento, para não assinantes, tem custo e precisa ser
agendado.