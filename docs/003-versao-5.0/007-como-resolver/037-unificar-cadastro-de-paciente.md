---
sidebar_position: 37
---

# Unificar cadastro de paciente
## Problema

Paciente cadastrado duas ou mais vezes no sistema.

## Descrição

Clientes que fizeram upgrade da versão 3.1 para 4.2 e somente cadastravam o nome do paciente sem identificação de CPF ou RG, terão no banco de dados os nomes dos pacientes duplicados.

Clientes que indevidamente cadastraram mais de uma vez o mesmo paciente.

## Solução

- Para instalar, faça download e descompacte o arquivo [PacienteUnificar.zip](http://suporte.laudoimagem.com.br/download/PacienteUnificar.zip)
- Salve os dois arquivos na raiz do drive `C:` e salve uma cópia de segurança na pasta `C:\Arquivos de Programas\Laudoimagem\Util` do Servidor do Laudo & Imagem.
- Após descompactar execute somente o arquivo `PacienteUnificar.exe` com permissão de Administrador do sistema.
- A tela para unificação dos pacientes será aberta.
- Na coluna da esquerda aparecerá a lista de critérios possíveis para visualização e confirmação do cadastro dos pacientes.
- Para visualizar o nome completo, clique em Nome, nome do meio e ùltimo nome.
- A lista de pacientes com nomes iguais e parecidos irá aparecer. 
- Selecione na lista com clique os nomes que deverão ser unificados no mesmo cadastro.
- Clique `Ok` e na tela seguinte selecione qual o cadastro deverá ser considerado como padrão, para que os demais sejam unificados.

Esse procedimento poderá ser feito aos poucos, em qualquer estação do Laudo & Imagem e não irá atrapalhar a rotina de trabalho.

Para funcionar em qualquer estação, é necessário que os arquivos estejam na raiz do drive `C:` do computador onde será realizada a tarefa.