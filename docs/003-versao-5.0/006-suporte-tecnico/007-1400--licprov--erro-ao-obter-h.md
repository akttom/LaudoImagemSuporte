---
sidebar_position: 7
---

# 1400 - LicProv - Erro ao obter H

## Problema

Ao entrar no programa dá mensagem de erro `1400 - LicProv -
Erro ao Obter H`

## Descrição

Este problema ocorre quando:

1. o componente `liserver` que inicia a conexão com o banco de
dados automaticamente foi fechado.; ou

2. os arquivos MSXML3.dll e Scrrun.dll foram removidos e/ou
alterados.

## Solução

1. Retornar a execução do arquivo `liserver` no servidor.

2. Registrar os arquivos  removidos e/ou alterados.

## Procedimentos

1. Para confirmar o problema, no Servidor, clique em CTRL ALT
   DEL e abra a opção Gerenciador de Tarefas.

   Clique na opção Aplicativos e localize na lista o procedimento
   `liserver`.

   Se `liserver` não estiver na lista, feche o Gerenciador de Tarefas
   e reinicie o computador que é o servidor do Laudo & Imagem.
   
   O componente `liserver` deverá executar automaticamente e a
   conexão com o banco de dados será reestabelecida.
   
   O programa Laudo & Imagem voltará a funcionar.
   
   Se o componente `liserver` não executar automaticamente, verifique
   se está em Todos os Programas / Inicializar.
   
   Se não estiver, siga as instruções abaixo:
   - abra a pasta de instalação do Laudo & Imagem (geralmente
     `C:\Arquivos de Programas\Laudoimagem`)
   - localize o arquivo `liserver.exe` e dê dois clique sobre o
     arquivo.
   - minimize a tela do LiServer aberta e tente abrir o Laudo &
     Imagem.
   - copie o arquivo `liserver.exe` para a pasta Inicializar do
     Windows e configure para abrir e executar de forma oculta.
      - para colocar o arquivo executando como oculto, edite as
        propriedades do arquivo na pasta Inicalizar e coloque ao final
        da linha com Destino /hidden
      - caso não consiga editar a linha de comando, abra a pasta
        de instalação do Laudo & Imagem e arraste, com o botão direito
        do mouse, o arquivo LiServer.exe e copie como atalho.
        Edite as propriedades do arquivo e edite colocando no final /hidden

2. Na estação onde ocorre o problema, clique em
   Iniciar/Executar e digite o comando: `regsvr32 MSXML3.dll`,
   conclua clicando no botão `Ok`.
   Mensagem em tela: `DllRegisterServer em Msxml3.dll teve êxito`.

   Faça o mesmo procedimento para o arquivo `Scrrun.dll`.

   Clique em Iniciar/Executar, digite o comando: `regsvr32
   Scrrun.dll`, conclua clicando no botão `OK`.
   Mensagem em tela: `DllRegisterServer em Scrrun.dll teve êxito`.

   Entre no sistema e verifique se o acesso foi normalizado.

   Obs: Se der erro ao registrar a dll, abra Acessórios e execute o
   `CMD.exe` como Administrador e repita o registro das DLL's
   informados acima.