---
sidebar_position: 30
---

## 2147467259 - DBNETLIB CONNECT SQL SERVER SQL Server inexistente na estação

### Problema

Ao entrar no programa dá mensagem de erro `-2147467259 -
DBNETLIB CONNECT SQL SERVER SQL Server inexistente ou acesso
negado` na estação de trabalho.

### Descrição

Este problema ocorre:

1. quando o nome do computador que é o servidor do Laudo &
Imagem foi alterado

2. quando existe alguma instabilidade na conexão via rede entre
o computador que é a Estação de trabalho e o Servidor do Laudo &
Imagem.

3. ou quando é necessário configurar na estação de trabalho a
porta TCPIP do Servidor.

### Solução

1. Retornar o nome ánterior do computador que é o servidor.

2. Retornar a estabilidade de acesso ao servidor via rede.

3. Configurar no arquivo `Laudoimagem.ini` a porta TCPIP do
servidor do Laudo & Imagem.

### Procedimentos

### Para confirmar se o problema é na rede:

Entre no ícone Meu computador na área de trabalho.

Tente acessar o drive do servidor do Laudo & Imagem se estiver
mapeado.

Se o drive do servidor não estiver mapeado, digite `\\nome do
servidor\Laudoimagem` e verifique se o acesso foi permitido.

Se não conseguir, chame o seu técnico da rede para verificar a
conexão e se os computadores estão no mesmo grupo grupo de
trabalho e/ou domínio.

Quando a conexão for reestabelecida o programa `Laudo & Imagem`
voltará a funcionar.

### Configurar a porta TCPIP:

No computador que é o Servidor do `Laudo & Imagem`:

Abra o `Configuration Manager` do `SQL Server`

Em `Propriedades de TCPIP`, verifique qual a porta `TCPIP`

Anote o nº dessa porta

Abra o Firewall do Windows

Clique na aba Exceções

Verifique quais as portas que estão relacionadas

Deve ter a porta 1222, 1433 e a porta indicada no SQL Server
(ex. 1043)

Se não estiver igual, inclua como exceção do Firewall

Anote o nº dessa outra porta

[No computador que é a Estação de trabalho do Laudo &
Imagem]{.underline}:

Faça uma cópia de segurança do arquivo `Laudoimagem.ini`

Edite o arquivo `Laudoimagem.ini` e adicione no final da linha que
começa com o texto CONN_SERVER, o nº da porta conforme o exemplo
abaixo:

Se a porta for 1043 a linha irá ficar:

CONN_SERVER=Provider=SQLOLEDB.1;Password="senha";Persist
Security Info=True;User ID=sa;Initial
Catalog=laudoimagem;Network Library=DBMSSOCN;Data
Source=NomeDoServidor\sqlexpress,1043

Salve e tente entrar no sistema.