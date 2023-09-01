---
sidebar_position: 33
---

## 2147467259 - The file `C:\Arquivo de Programas\Laudoimagem\Banco`

### Problema

No Servidor do Laudo & Imagem, ao entrar no programa dá mensagem
Ao conectar com o banco de dados ocorreu o seguinte erro:
2147467259 - The file `...LAUDOIMAGEMDAT.MDF` is compressed but
does not reside in a read only database or file group. The file
must be decompressed.

### Descrição

Este geralmente problema ocorre quando a pasta onde estão os
arquivos do banco de dados do Laudo & Imagem foram compactadas
pelo sistema operacional Windows, para otimizar espaço em disco.

### Solução

Remover a configuração de compactar os arquivos.

### Procedimentos

Acesse o caminho `C:\Arquivos de programas\Laudoimagem\Banco`
de dados.

Faça uma cópia de segurança dos arquivos `Laudoimagemdat.mdf` e
`Laudoimagemlog.ldf`.

Selecione o arquivo `Laudoimagemdat.mdf` com o botão direito opção
Propriedades.

Selecione o botão Avançado.

Verifique se a opção Compactar o conteúdo para economizar espaço
em disco, está selecionado.

Se estiver, selecione essa opção.

Se não estiver, envie e-mail para
[suporte@laudoimagem.com.br](mailto:suporte@laudoimagem.com.br)

Tente entrar no Laudo & Imagem