---
sidebar_position: 27
---

# 2147467259(80004005)- DBNETLIB ConnectionWrite(Send()) Erro Geral de Rede

## Problema

Ao entrar no programa dá mensagem de erro
`-2147467259(80004005)- DBNETLIB ConnectionWrite(Send()) Erro
Geral de Rede`

## Descrição

Este problema ocorre quando existe alguma instabilidade na
conexão via rede entre o computador que é a Estação de trabalho
e o Servidor do Laudo & Imagem.

## Solução

Retornar a estabilidade de acesso ao servidor via rede.

## Procedimentos

Para confirmar se o problema é na rede entre no ícone Meu
computador na área de trabalho.

Tente acessar o drive do servidor do Laudo & Imagem se estiver
mapeado.

Se o drive do servidor não estiver mapeado, digite `\\nome do
servidor\Laudoimagem` e verifique se o acesso foi permitido.

Se não conseguir, chame o seu técnico da rede para verificar a
conexão.

Quando a conexão for reestabelecida o programa Laudo & Imagem
voltará a funcionar.