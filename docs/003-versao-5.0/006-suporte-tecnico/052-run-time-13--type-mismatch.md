---
sidebar_position: 52
---

# Run time 13 - Type Mismatch

## Problema

Ao clicar em alguma etapa e/ou visualizar a impressão após
atualização de versão, ocorre o erro `Run time error 13 - Type
Mismatch`.

## Descrição

Este problema ocorre em algumas máquinas em que a atualização de
arquivos DLL na pasta Windows não é realizada devido a permissões de
usuário.

## Solução

Registrar a DLL manualmente.

## Procedimentos

Acesse a pasta `Laudoimagem\Util` do SERVIDOR

Localize e copie os arquivos abaixo para a pasta
`C:\Windows\System32` e/ou `C:\Windows\Syswow64` da ESTAÇÃO

- IntegraCFG.DLL
- IntegraEXT.DLL
- LiLibrary.DLL

Grave por cima dos arquivos existentes

Abra CMD.EXE como administrador do sistema

Digite Regsvr32 `C:\Windows\System32\IntegraCFG.dll`

Aguarde mensagem de registrada com sucesso.

Digite Regsvr32 `C:\Windows\System32\IntegraEXT.dll`

Aguarde mensagem de registrada com sucesso.

Digite Regsvr32 `C:\Windows\System32\LiLibrary.dll`

Aguarde mensagem de registrada com sucesso.

Entre no Laudo & Imagem e verifique que o problema foi resolvido.