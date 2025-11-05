# Cadastro e Configuração de Responsáveis

**Versão:** 1.0  
**Última atualização:** 2025-11-05  
**Módulo:** Configurações > Responsáveis  
**Descrição:**  
Responsáveis são pessoas cadastradas no sistema que possuem um papel específico, geralmente ligado à execução e/ou assinatura de exames. Este documento descreve como cadastrar, editar e configurar um responsável, além dos recursos extras disponíveis para esse tipo de usuário.

---

### Fluxo

1. Acesse **Configurações > Responsáveis**.
2. Clique em **Novo**:
   - Selecione uma pessoa já cadastrada ou crie uma nova.
   - Caso a pessoa já exista, mas não seja um responsável, o sistema perguntará se deseja transformá-la em responsável.
3. Preencha os campos obrigatórios específicos do tipo "responsável".
4. Salve o cadastro.
5. Para configurar recursos adicionais:
   - Edite o responsável.
   - Utilize os botões de recursos disponíveis (descritos abaixo).

---

### Onde isso se aplica

- Cadastros de médicos, técnicos ou profissionais que executam exames.
- Clínicas, laboratórios e unidades de diagnóstico.
- Situações onde é necessário controle de permissões e rastreabilidade da assinatura de laudos.

---

### Exemplos de Uso

- Cadastrar um médico que realiza apenas endoscopia.
- Definir que o Dr. João ganha 30% dos exames que realiza.
- Permitir que a secretária assine exames em nome do Dr. Pedro, quando ele estiver ausente.

---

### Recursos Adicionais do Responsável

Após o cadastro, cada responsável pode ter os seguintes recursos configurados:

#### 1. **Tipos de Exame que Pode Realizar**
- Define quais exames o responsável está autorizado a realizar.
- O nome do responsável só aparece nos cadastros de exames compatíveis com suas permissões.
- Exemplo: Um médico que realiza apenas colonoscopia não aparecerá na lista de seleção para endoscopia.

#### 2. **Participação no Valor do Exame**
- Permite configurar comissões ou valores fixos por exame.
- Tipos de participação:
  - **Nenhuma**: O médico recebe salário fixo (sem controle pelo sistema).
  - **Valor Fixo**: Ex: R$ 100,00 por exame.
  - **Percentual**: Ex: 30% do valor do exame.
- Utilizado em relatórios financeiros para calcular o valor devido ao responsável.

#### 3. **Permitir Usuários Assinarem por Ele**
- Autoriza outros usuários a assinarem exames em nome do responsável.
- Ideal para médicos ausentes no momento da finalização.
- A assinatura no laudo aparece como sendo do responsável, mas o **log do sistema** registra o nome do usuário que realizou a ação.
- A delegação é feita diretamente no cadastro do responsável.

---

### Observações

- Uma mesma pessoa pode assumir múltiplos papéis no sistema: paciente, usuário, responsável, requisitante etc.
- A foto do responsável pode ser tirada via webcam após o cadastro, no modo de edição.
- A imagem serve para identificação interna no sistema; se não houver imagem, será exibida a inicial do nome.
- O sistema pode bloquear o acesso à webcam se já estiver sendo usada (ex.: em videoconferência pelo Teams).

---

### Imagens

> **Não aplicável.** O sistema **Laudo & Imagem** não utiliza imagens externas nesta documentação.

---

### Perguntas Frequentes

**1. Uma pessoa pode ser responsável e também usuário?**  
Sim! A mesma pessoa pode ter múltiplos papéis no sistema, inclusive responsável, paciente, usuário e requisitante.

**2. Preciso cadastrar uma nova pessoa para ser responsável?**  
Não necessariamente. Você pode transformar uma pessoa já cadastrada em responsável.

**3. A assinatura por outro usuário é segura?**  
Sim. O log do sistema registra quem fez a ação, mesmo que a assinatura exibida seja do médico responsável.

**4. É obrigatório definir comissão ou valor fixo?**  
Não. Essa configuração é opcional e usada apenas se houver acordo entre o laboratório e o responsável.
