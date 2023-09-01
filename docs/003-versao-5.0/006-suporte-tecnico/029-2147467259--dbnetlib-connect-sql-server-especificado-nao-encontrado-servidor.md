---
sidebar_position: 29
---

# 2147467259 - DBNETLIB CONNECT SQL SERVER Especificado não encontrado (Servidor)

## Problema

No Servidor do Laudo & Imagem, ao entrar no programa dá mensagem
de erro `-2147467259 - DBNETLIB CONNECT SQL SERVER Especificado
não encontrado`

## Descrição

Este geralmente problema ocorre quando o programa `liserver` foi
fechado.

## Solução

Executar e manter executando o programa `liserver`.

## Procedimentos

### Para confirmar se o problema é na execução do `liserver`:

Pressione as teclas `CTRL` + `ALT` + `DEL` simultaneamente e entre no
Gerenciador de tarefas do Windows.

Clique na opção Aplicativos e verifique se na lista aparece
LIServer

Se aparecer o programa LIServer e mesmo assim o erro persistir,
siga as orientações de Restauração do Windows para uma data
anterior a ocorrência do problema

Entre na pasta onde está instalado o Laudo & Imagem (geralmente
`C:\Program Files (x86)\Laudoimagem\Servicos\LISERVER`)

Localize o arquivo `LIServer.exe`

Dê dois cliques no arquivo `LIServer.exe`

Uma tela será aberta, minimize

Tente entrar no Laudo & Imagem

Se o programa entrar normalmente, verifique as instruções de
LIServer como Serviço