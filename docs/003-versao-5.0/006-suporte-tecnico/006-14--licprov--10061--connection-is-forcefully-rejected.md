---
sidebar_position: 6
---

## 14 - LicProv - 10061 - connection is forcefully rejected

### Problema

Ao entrar no programa dá mensagem de erro `Erro 14 - LicProv -
10061 - connection is forcefully rejected`

### Descrição

Este problema ocorre quando o componente `liserver` que inicia a
conexão com o banco de dados automaticamente foi fechado.

### Solução

Retornar a execução do arquivo.

### Procedimentos

#### Somente no Servidor do Laudo & Imagem

Para confirmar o problema, clique em `CTRL` + `ALT` + `DEL` e abra a opção
Gerenciador de Tarefas.

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

Não encontrando o arquivo `liserver.exe` na pasta de instalação do
Laudo & Imagem (geralmente `C:\Arquivos de
Programas\Laudoimagem`):
- verifique na lixeira do Windows se o arquivo está lá. Se
estiver, restaure.
- verifique na quarentena do antivirus se o arquivo está lá.
Caso seja seguro, informe que o arquivo não está infectado e
restaure.
- caso não localize nas opções anterioes, coloque o CD de
instalação do Laudo & Imagem no drive
- localize a pasta `Servidor\Program Files\LaudoImagem` o
arquivo LiServer.exe e copie para a pasta de instalação do Laudo
& Imagem (geralmente `C:\Arquivos de Programas\Laudoimagem`)
- dê dois cliques no arquivo LiServer.exe
- minimize a tela do LiServer aberta e tente abrir o Laudo&Imagem.
- copie o arquivo `liserver.exe` para a pasta Inicializar do
Windows e configure para abrir e executar de forma oculta.

Necessário identificar como o arquivo foi removido. Se foi o
antivirus, irá remover de novo.

Será preciso informar ao antivirus que o arquivo é seguro.