# Cadastro da Empresa

**Versão:** 1.0  
**Última atualização:** 2025-11-05  
**Módulo:** Configurações > Empresa  
**Descrição:**  
O cadastro da empresa define dados administrativos e configurações técnicas da empresa cliente associada à licença do sistema Laudo & Imagem. Não há possibilidade de adicionar múltiplas empresas.  

---

### Fluxo

1. Ao criar a empresa, o cadastro básico é gerado automaticamente.
2. O usuário pode editar alguns campos obrigatórios (razão social, nome fantasia, CNPJ, e-mail, senha).
3. Com base nas permissões, são liberadas configurações avançadas:
   - Permissões de acesso
   - Restrições por IP
   - Informações de WhatsApp
   - Pastas de arquivos em nuvem
   - Impressoras e pontos de impressão

---

### Onde isso se aplica

- Cadastro e manutenção da empresa cliente
- Permissões de suporte remoto
- Integração com backup de nuvem e WhatsApp
- Numeração automática de exames
- Configuração de impressoras e salas

---

### Exemplos de Uso

- Atualizar o e-mail da empresa
- Ativar permissão temporária para suporte técnico acessar o sistema de forma remota
- Definir as pastas de imagens e PDFs usadas na nuvem
- Configurar impressoras para etiquetas ou padrão A4 para laudos
- Gerenciar numeração automática de exames (ex: `25-000123-AP`)

---

### Campos e Configurações

#### 1. **Dados Básicos da Empresa**
- Campos obrigatórios: razão social, nome fantasia, CNPJ, e-mail, senha
- Permite troca de senha com visualização (conforme permissão)

#### 2. **Telefone e WhatsApp**
- Número principal da empresa
- Indicação de número com WhatsApp
- Horário de atendimento e mensagens pré-definidas para atendimento automático (WhatsApp)

#### 3. **Configurações Gerais**
- **Permitir acesso remoto de suporte técnico**
- **Restringir acesso ao sistema por IP**
- **Data de corte da migração** (versão antiga para a nova)
- **Exibir Manual SBP**
- **Ponto de controle**
- **Pastas de imagens, vídeos e PDFs na nuvem**

#### 4. **Numeração Automática**
- Formatos personalizáveis com ano, número e sigla do exame
- Digitação configurável
- Deve ser definida uma única vez

#### 5. **Salas**
- Cadastro das salas físicas de exames
- Auxilia no agendamento e organização por ambiente físico

#### 6. **Impressoras**
- Obrigatóriamente locais
- Detectadas via servidor local
- Podem ser ocultadas, renomeadas e classificadas por tipo (normal, EPL, ESC/POS)

#### 7. **Pontos de Impressão**
- Configuração de locais do sistema com botões de impressão
- Associa impressoras e arquivos a cada ponto

#### 8. **Instalação do servidor de impressora**
- Exibe instruções e arquivos necessários para uso das impressoras locais com o sistema

---

### Observações

- Apenas uma empresa é permitida por licença
- Os dados da empresa já vêm preenchidos na implantação inicial
- Alterações devem ser feitas com cautela
- Impressoras virtuais devem ser desconsideradas

---

### Perguntas Frequentes

**Posso cadastrar mais de uma empresa?**  
Não. O sistema permite apenas uma empresa com uma ou várias licenças.

**O suporte pode acessar meu sistema a qualquer momento?**  
Não. O acesso é concedido temporariamente, por 1 hora, com consentimento explícito do cliente.

**É possível trabalhar de casa?**  
Sim, desde que a permissão esteja ativada para o perfil do usuário e o acesso por IP esteja configurado.

**O que acontece se eu mudar o formato de numeração automática?**  
Novos exames usarão o novo padrão, o que pode causar inconsistência com laudos anteriores.

**Qual a vantagem dos pontos de impressão?**  
Automatizam a impressão com base na tela onde o usuário está, reduzindo cliques e erros.
