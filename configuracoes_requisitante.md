# Requisitantes

**Versão:** 1.0  
**Última atualização:** 2025-11-05  
**Módulo:** Configurações > Requisitantes  
**Descrição:**  
Os requisitantes são médicos que solicitam exames para os pacientes junto ao hospital, clínica ou laboratório. São pessoas físicas que precisam ser cadastradas no sistema com informações específicas, como CRM e tipo de entrega. Essa opção permite buscar, cadastrar, editar e remover requisitantes, desde que o usuário tenha permissões adequadas.

---

### Fluxo

1. **Acesso ao módulo:**  
   Ao entrar em "Requisitantes", o sistema abre diretamente a tela de **busca**, pois o correto é procurar se o requisitante já está cadastrado e evitar duplicidade.

2. **Campos de busca disponíveis:**  
   - Nome  
   - RG  
   - CPF  
   - E-mail  
   - CRM  
   - CRM-UF (estado do CRM)  
   - Data de nascimento  
   - Telefone  

3. **Buscar todos:**  
   Para listar todos os requisitantes cadastrados no sistema, selecione o campo "Nome", digite o caractere `%` (porcentagem) e pressione Enter.

4. **Visualização da lista:**  
   - Os requisitantes encadastrados aparecem em uma lista.  
   - Ao clicar em um nome, o cadastro aparece ao lado direito da tela.  
   - Dependendo das permissões, é possível **editar**, **remover** ou **criar novo**.

5. **Cadastro de novo requisitante:**
   - Clique em **Novo**.
   - O sistema exibe a tela de pessoas já cadastradas.
   - Primeiro, procure pela pessoa.  
     > *Evite cadastros duplicados.*
   - Caso a pessoa já exista mas **não seja ainda um requisitante**, o sistema pergunta se deseja transformar essa pessoa em requisitante.
   - Ao confirmar, surgem os **campos extras obrigatórios** do requisitante.
   - Preencha os campos obrigatórios e clique em **Atualizar** para concluir o cadastro.

---

### Campos Obrigatórios para Requisitante

- Nome  
- Sexo  
- CPF  
- E-mail  
- Senha  
- CRM  
- CRM-UF  
- Tipo de entrega (Impresso ou LaudoNet)

---

### Campos Especiais com Ações Extras

Ao **editar** um requisitante, botões laterais surgem em alguns campos, permitindo ações adicionais:

| Campo           | Ação lateral disponível                                         |
|----------------|------------------------------------------------------------------|
| Telefone        | Cadastro de múltiplos telefones para a pessoa                  |
| E-mail          | Cadastro de múltiplos e-mails; define e-mail principal         |
| CEP             | Cadastro de múltiplos endereços; define endereço principal     |
| Senha           | Visualização, edição e envio por e-mail ou WhatsApp           |

> **Importante:** Esses botões **não aparecem no cadastro novo**, mas apenas ao editar um cadastro já existente.

---

### Onde isso se aplica

- Módulo **Configurações > Requisitantes**
- Cadastro e edição de pessoas físicas vinculadas como médicos requisitantes
- Integração com o cadastro de exames, onde o requisitante será selecionado (via campo de autocompletar)

---

### Exemplos de Uso

- Um novo médico começa a solicitar exames para a clínica. Ele é cadastrado como uma **pessoa** e, em seguida, transformado em **requisitante** preenchendo os campos adicionais obrigatórios.
- Ao editar um requisitante, o usuário pode cadastrar mais telefones e e-mail e definir um deles como principal.

---

### Observações

- Todos os requisitantes são pessoas físicas, nunca jurídicas.
- Somente no momento em que um novo requisitante for cadastrado, seu nome aparece no topo da lista e fora da ordem alfabética, como forma de destaque.

---

### Imagens

*Não aplicável.*  
> O app **Laudo & Imagem** não utiliza imagens nesta documentação.

---

### Perguntas Frequentes

**1. Posso cadastrar um requisitante sem CPF ou CRM?**  
Não. Ambos são obrigatórios para o cadastro de requisitantes.

**2. Posso cadastrar uma clínica como requisitante?**  
Não. Uma clínica deve ser cadastrada como **Procedência**.

**3. Por que alguns botões (telefone, e-mail etc.) não aparecem ao cadastrar?**  
Esses botões só aparecem ao **editar** um cadastro. Durante o cadastro inicial, o foco é apenas no preenchimento dos campos obrigatórios.

**4. Como enviar a senha do requisitante?**  
Ao editar o cadastro, utilize o botão ao lado do campo "Senha" para enviar por e-mail ou WhatsApp, se houver informações do e-mail e/ou telefone WhatsApp preenchidas.
