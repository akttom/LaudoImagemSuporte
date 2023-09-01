---
sidebar_position: 3
---

# Backup Banco de dados automatizado

## Periodicidade sugerida: diariamente

A Rotina de backup do Banco de dados automatizado, permitirá que o
backup do banco de dados seja realizado sem a necessidade do usuário
abrir o programa de backup, digitr senha e aguardar a finalização.

Versão 4.2.0 ou maior - Disponível somente para banco de dados
SQLServer Express

## Requisitos

-   Framework 2.0
-   Permissão de escrita na pasta que irá salvar os backups
-   Executar somente no Servidor do Laudo & Imagem
-   Alterar o arquivo de configuração (BackupSql.exe.config) com as
    especificações do banco de dados e local onde serão armazenados os
    backups do banco de dados
-   Para executar o backup execute o arquivo (BackupSql.exe)
-   Usuário do Windows com permissão de Administrador
-   Obrigatório senha para usuário do Windows com permissão de
    administrador
-   Servidor tem que permanecer ligado no horário agendado para backup

## Descrição

### Define o drive e a pasta onde será armazenado o Arquivo de log na linha add key="pathLog" value="D:\Backup\"

-   onde `D:\` é o drive
-   onde Backup é a pasta onde será gravado o arquivo de log.

### Define a pasta onde será armazenado o Arquivo de backups na linha add key="pathBackup" value="D:\Backup\"

-   onde `D:\` é o drive; e
-   Backup é a pasta onde será gravado o arquivo de backup do banco de
    dados

### Define o nome do banco para fazer backup na linha add key="nomeBanco" value="LaudoImagem"

-   onde Laudoimagem é o nome do banco de dados

### Define a quantidade de backups que será armazenado na pasta na linha add key="qtdBackup" value="30"

-   onde 30 é a quantidade de arquivos de backup do banco de dados que
    será armazenado na pasta

### Define a instância do SQL Server na linha add key="Server" value="127.0.0.1\\SQLEXPRESS"

-   onde 127.0.0.1 é o IP padrão do servidor
-   onde sqlexpress é a instância do SQL Server

### Define usuário que irá acessar o banco na linha add key="Usuario" value="sa"

-   onde sa é o usuário do banco de dados

### Define a senha do usuário na linha add key="Senha" value="laudoimagem"

-   onde laudoimagem é a senha do banco de dados (necessário obter a
    senha do banco de dados com o suporte técnico)

### Define o tempo para acesso ao banco (Caso apresente o erro de timeout aumente o tempo)

-   onde value="900" aumente 900 para números maiores até que consiga
    fazer o backup

## Automatizar o backup do Banco de dados

Para automatizar, precisa acrescentar o executável como Tarefa do
Windows

Procedimento precisa ser configurado e realizado com usuário
administrador do Windows ou outro usuário com permissão de
administrador

## Instruções para automatizar o backup do banco de dados

-   Faça download dos arquivos de Backup e configuração do Backup
-   Salve em uma pasta do `C:\` do computador que é o Servidor do Laudo &
    Imagem
-   Entre em `Iniciar` / `Programas` / `Acessórios` / `Ferramentas do Sistema` /
    `Tarefas Agendadas`
-   Abra com dois cliques a opção Adicionar Tarefa Agendada
-   Clique em avançar
-   Clique em Procurar e localize o arquivo BackupSql.exe
-   Clique em Abrir
-   Selecione a periodicidade que deseja realizar o Backup -
    Diariamente, Semanalmente, Mensalmente, etc.
-   Clique em Avançar
-   Preencha com o horário que deseja que o backup seja iniciado
-   Selecione a opção e data de início do backup
-   Digite o nome do usuário do Windows e a senha (do usuário com
    permissão de administrador)
-   Confirme a senha e clique em Avançar
-   Clique em Concluir e no horário e dias indicados, o backup será
    realizado automaticamente
-   Se o local de backup for um HD externo ou pen drive, é necessário
    que esteja conectado.

Arquivo para download :
[BackupSQL.zip](http://suporte.laudoimagem.com.br/download/BackupSQL.zip)