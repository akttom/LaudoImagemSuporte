# Tipo de Exame

**Versão:** 1.0  
**Última atualização:** 2025-11-04  
**Módulo:** Configurações  
**Descrição:**  
Cadastro e gerenciamento dos tipos de exame disponíveis na clínica ou laboratório. Define propriedades, etapas e comportamentos específicos que cada tipo de exame seguirá no sistema Laudo & Imagem.

---

### Fluxo

1. Acesse **Configurações > Tipo de Exame**.
2. Escolha entre criar, editar ou visualizar um tipo de exame.
3. Tipos de exame podem estar nos status:
   - **Em elaboração**
   - **Ativo**
   - **Cancelado**
4. Para criar um novo tipo de exame:
   - Clique no botão "+", disponível apenas no status **Em elaboração**.
   - Preencha os campos obrigatórios.
   - Configure todas as abas: Cadastro, Procedimentos, Etapas, Configurações, Layouts, Agendamento e Conformidade.
5. Após finalização, altere o status para **Ativo**.

---

### Onde isso se aplica

- Administração de tipos de exame no sistema.
- Padronização de etapas e fluxos para exames diversos.
- Controle de visibilidade e acesso ao laudo via LaudoNet.
- Controle de conformidade e agendamento de exames.

---

### Exemplos de Uso

- Cadastro do tipo "Citologia" com sigla "CI" e cor azul.
- Inclusão de etapas como anamnese, captura, revisão e assinatura.
- Configuração de layout com 4 imagens e texto.
- Habilitar acesso ao LaudoNet para exames simples, como "Colesterol Total".
- Bloquear acesso ao LaudoNet para exames sensíveis, como "Biópsia de mama".

---

### Campos do Cadastro

| Campo                      | Obrigatório | Descrição                                                                 |
|---------------------------|-------------|---------------------------------------------------------------------------|
| Tipo de exame             | Sim         | Nome do exame (Ex: Citologia, Endoscopia, etc.)                          |
| Sigla                     | Sim         | 2 letras únicas por tipo de exame                                        |
| Título                    | Não         | Cabeçalho exibido no laudo                                               |
| Cor de identificação      | Sim         | Cor para facilitar a visualização na interface                          |
| Categoria                 | Sim         | Sempre “Exame”                                                           |
| Paciente acessa LaudoNet? | Não         | Define se o paciente poderá ver o laudo deste exame                     |
| Data de cadastro          | Automático  | Data de criação                                                          |
| Data de alteração         | Automático  | Atualizado a cada modificação                                            |
| Duração do exame          | Não         | Em minutos. Usado para controle de prazo via ponto de controle          |
| Numeração automática      | Opcional    | Define se o exame terá numeração automática e seus parâmetros           |

---

### Abas de Configuração

1. **Cadastro**
2. **Procedimentos**
3. **Etapas**
4. **Configurações**
5. **Layouts**
6. **Agendamento**
7. **Conformidade**

---

### Tipos de Etapa

Anamnese, Assinatura, Betesda, Captura, CID 10, CIDO, Documentação, Exame Externo, História Clínica, Histórico, Laboratório, Layout, Log, Modelos, Valor do Exame, Protocolo, Revisão, Tag, Texto Inteligente.

---

### Observações

- Siglas devem ser únicas (mesmo inativos).
- Etapas obrigatórias: **Layout**, **Assinatura** e **Valor do Exame**.
- Acesso ao LaudoNet é configurável por tipo e também pode ser alterado na assinatura.
- Layout pode conter até 6 imagens por página.
- Agendamento e Protocolo são caminhos distintos (um exclui o outro).

---

### Perguntas Frequentes

**Q: Posso editar um tipo de exame ativo?**  
A: Não. É necessário mudar o status para “Em elaboração”.

**Q: O paciente sempre pode acessar o LaudoNet?**  
A: Depende. Essa configuração é feita por tipo e pode ser alterada na assinatura.

**Q: Quais etapas são obrigatórias?**  
A: Layout, Assinatura e Valor do exame.

**Q: Qual a diferença entre Anamnese e História Clínica?**  
A: Anamnese é feita com o paciente; história clínica é um relato sem contato direto.

**Q: O que acontece se a duração for ultrapassada?**  
A: O log indica o atraso com cor vermelha e mostra o responsável.

