---
sidebar_position: 35
---

# A rede está funcionando, mas continua dando erro de conexão com SQL

## Problema

Ao entrar no programa dá mensagem de erro `-2 Caminho
inexistente DIR_SVR_VIDEO=...`

## Descrição

Este problema ocorre quando a porta TCPIP mudou, não está
configurada no Firewall ou precisará ser incluída no arquivo de
configuração da estação de trabalho.

## Solução

Configurar a porta TCPIP e/ou acrescentar no arquivo de
configuração da estação de trabalho.

## Procedimentos

<u>No Servidor</u>, clicar em Iniciar / Todos os
Programas / Microsoft SQL Server 2005

Clicar em Configuration Tools

Clicar em SQL Server Configuration Manager

Na janela aberta do programa, clicar em SQL Server 2005 Network
Configuration

Clicar em Protocols for SQLEXPRESS

Na tela da direita, clicar em TCP/IP com o botão direito do
mouse na opção Propriedades

Nas propriedades de TCP/IP, clicar na guia IP Adresses

Rolar a barra de rolagem até o final. Em IPAll no campo TCP
Dynamic Ports ver o valor apresentado. Ex: 1043.

Não feche a janela e realize o procedimento seguinte

Entre em Iniciar / Configurações / Painel de Controle / Firewall
do Windows

Na guia Exceções, clicar no botão Adicionar Porta

Deverão estar adicionadas as portas 1222, 1433 e a porta
apresentada no item IPAll do campo TCP/IP do SQL Server 2005
Network Configuration

No campo Nome, preencher com Porta SQL Server (ex: Porta 1433)

No campo Número da porta, digite somente o valor da porta (ex:
1433)

Clicar em Ok e em Ok novamente

Fechar todas as janelas de programas abertas

<u>Na Estação</u> de trabalho, edite o arquivo
Laudoimagem.ini que está em `C:\Windows`

Vá até o final da linha que começa com CONN_SERVER e acrescente
após Data Source=nome do `servidor\sqlexpress,portaTCPIP` (ex. se
a porta é `1043`, acrescente `,1043`)

Salve e tente entrar no sistema.