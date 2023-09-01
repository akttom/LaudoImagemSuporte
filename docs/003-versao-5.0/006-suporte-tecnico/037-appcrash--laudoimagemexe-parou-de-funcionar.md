---
sidebar_position: 37
---

## APPCRASH - Laudoimagem.exe parou de funcionar

### Problema

Ao executar qualquer ação no sistema Laudo & Imagem aparece a
mensagem:`Laudoimagem.exe parou de funcionar` e no detalhe do
problema aparece APPCRASH.

### Descrição

Este problema ocorre em máquinas recém formatadas ou que tiveram
Windows atualizado.

Essas atualizações podem ter sido realizadas automaticamente ou
intencionalmente.

### Solução

Colocar o executável do programa no DEP (Prevenção de Execução de
Dados)

### Procedimentos

-   Clique com o botão direito em `Computador` e depois em
`Propriedades`.
-   Escolha `Configurações Avançadas do Sistema` e na aba `Avançado`
clique em `Configurações`.
-   A terceira aba é do DEP, clique nela e na opção `Ativar a DEP para
todos os programas e serviços, exceto os que eu selecionar`.
-   Abaixo clique em adicionar, adicione o executável do programa que
está dando erro (Laudoimagem.exe).
-   Reinicie o computador e acesse o sistema
-   Verifique se o problema foi resolvido.