---
sidebar_position: 27
---

# O preenchimento do campo nome último é obrigatório.
## Problema

No cadastro de novo paciente o sistema apresenta mensagem "preenchimento do campo nome último é obrigatório".

## Descrição

Ao cadastrar um novo paciente, está preenchido com nome e sobrenome, mas o sistema apresenta mensagem "preenchimento do campo nome último é obrigatório".

## Solução

Verificar se após o sobrenome tem um espaço em branco. Se tiver o espaço em branco, apagar e tentar salvar o cadastro.