---
sidebar_position: 18
---

# LIServer como serviço do Windows
## Problema

Ao entrar no programa dá mensagem de erro "Erro 14 - LicProv - 10061 - connection is forcefully rejected".

## Descrição

Servidor dedicado e sem fazer login no Windows não inicia o LiServer.

## Solução

Instalar o LiServer.exe como serviço do Windows, sem necessitar fazer login do usuário do Windows.

## Procedimentos

Fazer download do arquivo [LISERVER_como_serviço](http://suporte.laudoimagem.com.br/download//LiServer_como_servico.zip)

1. Descompactar e copiar os arquivos LIServer.reg, SRVANY.EXE e INSTSRV.EXE para pasta de sistema, geralmente c:\windows\system32

  - Se Windows 64 bits copiar para a pasta C:\Windows\Syswow64

2. Iniciar | Executar | cmd | OK, você irá para o Prompt de comando

  - Executar CMD.exe como Administrador do sistema

3. Digitar INSTSRV LISERVERSERVICE C:\windows\system32\SRVANY.EXE, altere o caminho da pasta de sistema se necessário, e digite ENTER

  - Se Windows 64 bits executar na pasta C:\Windows\Syswow64\SRVANY.exe

4. Se o novo serviço foi criado com sucesso, aparecerá texto abaixo:

    The service was successfully added!

    Make sure that you go into the Control Panel and use the Services applet to change the Account Name and

    Password that this newly installed service will use for its Security Context.

5. Para sair do Prompt de comando, digite Exit e ENTER

6. De um duplo clique no arquivo LIServer.reg, aparecerá uma mensagem perguntando se deseja adicionar as informações ao registro, clique em Sim

7. Confirme a pasta de instalação do Laudo & Imagem (geralmente C:\Program Files\Laudoimagem) e altere no arquivo LISERVER.REG indicando o caminho da pasta de instalação do Laudo & Imagem

8. Acesse Painel de Controle | Ferramentas Administrativas | Serviços

9. Na lista de um duplo clique em LISERVERSERVICE, na guia Logon, selecione está conta, digite o Usuário e a senha do Administrador do Windows

10. Na guia Geral, em Tipo de inicialização, selecione automático

11. Clique em Iniciar e na seqüência OK

12. Retirar o LIServer do Inicializar do Windows