---
sidebar_position: 11
---

## 2 Caminho inexistente DIR_SVR_Video

### Problema

Ao entrar no programa dá mensagem de erro `-2 Caminho
inexistente DIR_SVR_VIDEO=...`

### Descrição

Este problema ocorre quando existe alguma instabilidade na
conexão via rede entre o computador que é a Estação de trabalho
e o Servidor do Laudo & Imagem.

Ou se o drive indicado não está mapeado.

Ou se a instalação foi feita pelo IP do Servidor e o IP mudou.

Ou se a instalação foi feita pelo nome do Servidor e o nome
mudou.

### Solução

Retornar a estabilidade de acesso ao servidor via rede.

Mapear o drive com a mesma letra que está solicitando a
mensagem.

Fixar o IP no Servidor.

Retornar o nome anterior do Servidor.

### Procedimentos

Para confirmar se o problema é na rede entre no ícone Meu
computador na área de trabalho.

Tente acessar o drive do servidor do Laudo & Imagem se estiver
mapeado.

Se o drive do servidor não estiver mapeado, digite `\\nome do
servidor\Laudoimagem` e verifique se o acesso foi permitido.

Ou  digite `\\IP do servidor\Laudoimagem` e verifique se o
acesso foi permitid.

Se não conseguir, chame o seu técnico da rede para verificar a
conexão.

Alterar o arquivo `C:\Windows\Laudoimagem.ini` com o novo IP do
Servidor

Ou alterar para nome do servidor, que é o mais recomendado.

Quando a conexão for reestabelecida o programa Laudo & Imagem
voltará a funcionar.