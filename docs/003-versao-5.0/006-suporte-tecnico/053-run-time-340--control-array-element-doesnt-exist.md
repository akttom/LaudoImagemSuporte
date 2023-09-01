---
sidebar_position: 53
---

## Run time 340 - Control array element doesnt exist

### Problema

Ao digitar a senha no Laudo & Imagem, dá mensagem de erro.

### Descrição

O Laudo & Imagem sempre grava no registro do Windows o número do
último exame. Assim ao entrar no programa na próxima vez o último
exame será selecionado automaticamente.

Este problema ocorre, se por algum motivo durante ou após o cadastro
de um exame, a gravação não é concluída corretamente.

Quando o usuário tenta executar o Laudo & Imagem novamente, o
programa acessa o último exame que está com problemas e dá o erro,
não conseguindo acessar o sistema.

### Solução

Para resolver o problema, é necessário remover o último exame do
registro do Windows e/ou remover o exame com problema.

### Procedimentos

Para remover o registro do último exame, siga as instruções abaixo:

Entre em MENU / INICIAR / EXECUTAR

Digite REGEDIT e clique OK

O programa do registro do Windows será exibido

Abra as seguintes pastas, clicando no sinal de + ao lado esquerdo de
cada pasta:

`HKEY_CURRENT_USER` > `Software` > `VB and VBA Program Settings` > `LaudoImagem` > `Exame`

Clique na palavra `EXAME`

No painel do lado direito aparecerá o item `ÚLTIMO EXAME`

Dê um duplo clique sobre o item `ÛLTIMO EXAME`

Uma janela será exibida com o número do último exame no registro do
Windows

Anote o número do exame e a seguir apague o número do exame

Após apagar, pressione `ENTER`.

Entrar no programa o `Laudo & Imagem`

Se o sistema entrou, clique na lista no número anotado como Último
exame para confirmar se o problema está nesse cadastro de exame.

Se o erro voltar a ocorrer, repita os procedimentos acima e siga as
instruções mais abaixo de Remover exame com problema.

Se acessou o exame normalmente, deve ter sido alguma instabilidade
do Windows, corrigida pelo sistema.

Para remover exame com problema, siga as instruções abaixo:

Faça download do arquivo RemoveExame

Descompacte e salve na pasta `C:\Arquivos de
Programas\Laudoimagem\Util` do servidor do Laudo & Imagem

Após descompactar, execute o arquivo RemoveExameCOmpleto.vbs

Digite na tela o número do exame a ser removido

Incluindo sigla, traços, barras, etc. Deve ser o nº/nome completo do
exame

Arquivo para download :
[RemoveExameCompleto.vbs](http://suporte.laudoimagem.com.br/download/RemoveExameCompleto.vbs)