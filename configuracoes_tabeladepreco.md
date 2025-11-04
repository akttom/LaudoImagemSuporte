# Configuração de Tabela de Preço

**Versão:** 1.0  
**Última atualização:** 2025-11-04  
**Módulo:** Faturamento / Comercial  
**Descrição:**  
Define como criar, manter e aplicar tabelas de preço no sistema, associadas a fontes pagadoras (Convênio, Procedência e Particular). Permite gestão por planos e aplicação automática de regras de cálculo durante o cadastro de exames.

---

### Fluxo

1. Escolha da **fonte pagadora**: Convênio, Procedência ou Particular.
2. Acesso ao cadastro específico da fonte.
3. Criação de **tabela de preço** com tipo de cálculo, vigência e planos.
4. Inclusão de procedimentos (quando aplicável).
5. Ativação da tabela para uso imediato no sistema.
6. Aplicação automática no momento da criação do exame, conforme fonte pagadora e plano selecionado.

---

### Onde isso se aplica

- Cadastro e edição de fontes pagadoras.
- Configuração de planos e políticas comerciais.
- Precificação automática no momento da criação do exame.
- Controle de vigência e reajustes periódicos.

---

### Exemplos de Uso

#### Exemplo 1: Convênio com CH
- Convênio: UNIMED
- Tipo de cálculo: CH + quantidade CH + quantidade exames
- Plano: UNIMED Completo
- CH: R$ 10,00
- Quantidade de CH: 20
- Percentual pago pelo convênio: 100%

#### Exemplo 2: Procedência com procedimentos
- Procedência: HOSPITAL X
- Tipo de cálculo: Procedimento e valor
- Plano: Internação SUS
- Procedimentos: 40801012, 40802034
- Percentual pago: 80% (restante pago pelo paciente)

#### Exemplo 3: Particular diferenciado
- Fonte: Particular
- Plano: "Amigos da Clínica"
- Tipo de cálculo: CH
- Valor mais acessível, usado para casos como médicos e colaboradores.

---

### Observações

- **Fontes pagadoras**:
  - **Convênio**: operadoras com registro ANS.
  - **Procedência**: entidades que enviam os exames.
  - **Particular**: pagamento direto pelo paciente, sem intermediários.

- O sistema utiliza **dois tipos de cálculo**:
  1. **CH + quantidade CH + quantidade exames**
  2. **Procedimento e valor** (com base na CBHPM)

- A **vigência da tabela** garante que exames futuros não sejam precificados com valores expirados.
- **Planos** permitem variação de cobertura e valores dentro da mesma fonte pagadora.
- A **ativação de uma nova tabela** invalida a anterior (sem afetar exames já realizados).
- O sistema **não altera valores históricos**. Cada exame é vinculado à tabela vigente no momento do cadastro.

---

### Imagens

*Não aplicável.*

---

### Perguntas Frequentes

**1. O que acontece quando uma tabela de preço vence?**  
Ela deixa de aparecer nas opções. É necessário criar uma nova tabela com nova vigência.

**2. Posso reaproveitar dados de uma tabela anterior?**  
Sim. Ao criar uma nova, o sistema carrega dados da última tabela. Basta ajustar os valores.

**3. Tabelas ativas podem ser editadas?**  
Não. É necessário criar uma nova versão.

**4. Posso aplicar reajuste em massa (ex.: 12%)?**  
Hoje não, mas a funcionalidade está em planejamento.

**5. Como os procedimentos do TUSS são atualizados?**  
Eles são padrão e atualizados pelo sistema conforme novas versões são liberadas. O usuário pode adicionar novos à lista da clínica manualmente.

**6. Onde a tabela de preço é aplicada?**  
Na **criação do exame**: ao selecionar a fonte pagadora e o plano, o sistema aplica automaticamente os preços e procedimentos associados.

**7. O que acontece se o convênio cobre apenas parte do valor?**  
O sistema calcula o valor restante automaticamente para cobrança do paciente.

---
