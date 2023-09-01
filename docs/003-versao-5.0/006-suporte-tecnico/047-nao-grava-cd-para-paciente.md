---
sidebar_position: 47
---

# Não grava CD para paciente

## Problema

No programa Laudo & Imagem, na opção Gravar CDROM, não grava CD para
o paciente.

## Descrição

Somente serão gravados CD para pacientes, se houver vídeo do exame
capturado.

Exames somente com imagens, não serão gravados em CD.

Confirmado que existe video capturado no exame e mesmo assim não
grava, não grava o CD para o paciente a partir do botão Gravar CDROM
na tela de laudo, é necessário configurar a gravação da mídia CD.

## Solução

Sem video capturado, não tem como gravar automaticamente a partir do
sistema.

Com video capturado, para resolver o problema, é necessário
configurar o windows para permitir a gravação do CD.

## Procedimentos

* <u>Gravar exame COM video capturad</u>o:

Entre em Meu Computador.

No drive do gravador de CD, clique com o botão direito do mouse e
clique na opção Propriedades.

Clique no item Gravação.

Clique na opção Ativar gravação de CD nesta unidade.

O Laudo & Imagem só irá gravar em CD. Em DVD não há gravação direta
nem do Laudo & Imagem, nem do Windows.

* [Gravar exame SEM video capturado - somente laudo em
PDF]{.underline}:

Configurar o sistema para gerar o laudo em PDF automaticamente

No Servidor, acesse o programa de Configurações (Iniciar / Programas
/ Laudo & Imagem / Configurações)

Digite usuário e senha com perfil de administrador

Clique na lista da esquerda em Clínicas

No final dessa tela, clique em Criar PDF ao assinar

Feche o programa de Configurações

No Laudo & Imagem, assinar o exame clicando no botão ASS na tela de
Laudo

O exame deverá ser assinado, independente da inclusão ou não da
assinatura eletrônica do médico

Manualmente gravar esse arquivo em PDF em um CD e entregar ao
paciente.

O arquivo em PDF será automaticamente criado na pasta `C:\Arquivos
de Programas\Laudoimagem\PDF`

O arquivo em PDF será gravado com o número do exame

Use o programa do gravador de CD ou o Windows para gravar o arquivo
em PDF no CD

Após realizar o procedimento acima

Entre no programa e verifique se o problema foi resolvido

Repita esse procedimento em todas as máquinas em que ocorrer o
problema