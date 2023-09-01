---
sidebar_position: 59
---

## Run time 430 - Class does not support Automation or does not support expected interface após a senha**

### Problema

Após digitar a senha ou ao capturar aparece a mensagem `Run time
430 - Class does not support Automation or does not support expected
interface`.

### Solução

Registtrar as DLL's e caso o executável retorne erro, copie os
arquivos para a pasta `C:\Windows`:

- System32 se versão do Windows é 32 bits

- Syswow64 se versão do Windows é 64 bits

**Procedimento**

Se Windows 32 bits - Descompacte e execute como Administrador do
Windows o arquivo
[RegistrarInterOp32.zip](http://suporte.laudoimagem.com.br/download/versao50/RegistrarInterop32.zip)

Se Windows 64 bits - Descompacte e execute como Administrador do
Windows o arquivo
[RegistrarInterOp64.zip](http://suporte.laudoimagem.com.br/download/versao50/RegistrarInterop64.zip)

Após realizar o procedimento acima

Entre no programa e verifique se o problema foi resolvido