# Documentação Técnica — **Laudo & Imagem**

**Versão:** 1.1  
**Última atualização:** 03/11/2025  
**Módulo:** Configurações  
**Descrição:**  
Documentação técnica consolidada do módulo **Configurações** do sistema **Laudo & Imagem**, abrangendo:  
- Estrutura de perfis e permissões  
- Criação e gerenciamento de perfis  
- Lista completa de Assuntos & Recursos  
- Regras de negócio operacionais incorporadas

---

## 1️⃣ Permissões e Perfis

### Descrição
As permissões definem o que cada **perfil de usuário** pode acessar no sistema.  
Cada **usuário** pertence a **um único perfil**, e um perfil pode estar associado a **vários usuários**.  
As permissões são atribuídas aos **perfis**, não diretamente aos usuários.

### Estrutura
- **Administrador**: acesso total a todas as funções.  
- **Perfis personalizados**: criados com base em outros perfis (exemplo: Recepção, Médico, Técnico).  
- Cada perfil contém permissões configuráveis, delimitando o acesso conforme a função.

---

## 2️⃣ Criação de Perfis

### Acesso
Na tela **Configurações → Permissões**, o botão **“Novo”** (ícone circular azul com “+”) cria um novo perfil.

### Campos
- **Nome do perfil** — obrigatório (mínimo 3 letras).  
- **Descrição** — finalidade do perfil.  
- **Baseado em outro perfil** — copia permissões existentes.

> Campos obrigatórios aparecem com linha vermelha até o preenchimento correto.

### Observações
Perfis podem ser criados com base em outros para agilizar o processo de configuração.  
Exemplo: criar o perfil “Médico” com base em “Administrador” e remover permissões desnecessárias.

---

## 3️⃣ Gerenciar Perfis e Permissões

### Estrutura da Tela
- **Coluna esquerda:** lista de perfis  
- **Área central:** assuntos e recursos do perfil  
- **Abas:**  
  1. Perfis  
  2. Recursos do Perfil  
  3. Gerenciar Recursos *(somente administradores CIS)*

### Tipos de Acesso
- **Permitido:** acesso total  
- **Somente leitura:** apenas visualiza  
- **Sem acesso:** o item é oculto

### Observações Gerais
- As alterações aplicam-se imediatamente após salvar.  
- Perfis herdados de outros mantêm permissões até modificação explícita.  
- **Menu Lateral** tem **precedência** sobre os módulos internos — negar acesso aqui remove o ícone e bloqueia o módulo por completo.

---

## 4️⃣ Assuntos & Recursos

### Descrição
Cada assunto representa uma área funcional.  
Abaixo, os assuntos (coluna 1) e os recursos correspondentes (coluna 2).

| Assunto | Recursos |
|---|---|
| **Agendamento**  <br/> *Permissão para usar o agendamento para marcação de exames.* | **Cadastrar** — *Permite selecionar o dia e horário e agenda dos médicos para cadastrar um agendamento.* <br/> **Editar** — *Permite editar um agendamento cadastrado e alterar todos os dados.* <br/> **Remover** — *Permite remover um agendamento cadastrado que ainda não se transformou em exame.* |
| **Comando de voz**  <br/> *Navega pelo sistema falando textos pré-definidos.* | **Utilizar comando de voz** — *Permissões do usuário para navegar pelo sistema utilizando comandos de voz.* <br/> _Status: funcionalidade em desenvolvimento._ |
| **Configurações - Lista de configurações**  <br/> *Acesso a cada um dos itens das configurações do sistema. Requer que em "Menu lateral" o item "Configurações" esteja marcado.* | **Agendamento** — *Permite alterar horários e tipos de exame.* <br/> **Arquivos** — *Permite cadastrar logotipos e anexar PDFs.* <br/> **Confirmações** — *Visualiza itens de verificação de qualidade.* <br/> **Empresa** — *Acesso ao cadastro da empresa.* <br/> **Especialistas** — *Cadastro de fornecedores e especialidades.* <br/> **Feedback** — *Exibe feedbacks de clientes via WhatsApp.* <br/> **Permissões** — *Exibe o item “Permissões” na lista.* <br/> **Ponto de Controle** — *Acesso às configurações do ponto de controle.* <br/> **Requisitantes** — *Exibe item na lista.* <br/> **Responsáveis** — *Exibe item na lista.* <br/> **Tabelas de preço** — *Exibe item na lista.* <br/> **Tipo de exame** — *Exibe item na lista.* <br/> **Usuários** — *Exibe item na lista.* <br/> **WhatsApp** — *Configura integração WhatsApp com o Laudo & Imagem.* |
| **Configurações - Permissões (tela)**  <br/> *Acesso e visualização aos Assuntos e Recursos de cada Perfil.* | **Recursos do Perfil - Perfil Adicionar** — *Permitir adicionar Perfil.* <br/> **Recursos do Perfil - Perfil Editar** — *Permite editar o nome e descrição de um Perfil.* <br/> **Recursos do Perfil - Perfil Remover** — *Permite remover o Perfil desde que nenhum usuário o utilize.* <br/> **Recursos do Perfil - Recurso: trocar permissão** — *Permite trocar a permissão de um recurso.* <br/> **Tipo de exame e etapas - Etapa trocar permissão** — *Permite trocar a permissão de cada Etapa.* <br/> **Tipo de exame e etapas - Tipo de exame: marcar e desmarcar** — *Permite incluir tipos de exame no Perfil.* |
| **Exame**  <br/> *Acesso à visualização e cadastro do Exame.* | **Cadastrar** — *Permite cadastrar Exame.* <br/> **Editar** — *Permite editar dados do Exame.* <br/> **Remover** — *Permite remover Exame (soft delete).* <br/> **Trocar paciente** — *Permissão sensível, restrita a perfis de liderança.* |
| **Laudo Critérios**  <br/> *Permite acessar critérios de exibição e executar ações em lote.* | **Assinar (ações em lote)** — *Permite assinar vários exames com um único clique (assinatura delegada).* <br/> **Critérios** — *Permite acessar e atualizar a lista de exames.* <br/> **Imprimir (ações em lote)** — *Permite impressão múltipla de laudos.* <br/> **Laudo por e-mail (ações em lote)** — *Permite envio em lote por e-mail.* <br/> **Laudos por WhatsApp** — *Permite envio em lote por WhatsApp.* <br/> **Link do laudo por e-mail (ações em lote)** — *Permite enviar link do laudo por e-mail (abre no LaudoNet).* <br/> **Link do laudo por WhatsApp (ações em lote)** — *Permite enviar link do laudo por WhatsApp.* |
| **Laudo etapas**  <br/> *Algumas etapas requerem permissão especial (ex.: assinatura).* | **Assinar pelo responsável** — *Permite assinar laudos em nome de um ou mais responsáveis (assinatura delegada).* |
| **Menu lateral**  <br/> *Menu principal à esquerda, composto por ícones com texto.* | **Agendamento** — *Acesso ao módulo de agendamento.* <br/> **Configurações** — *Acesso à tela de configurações do sistema.* <br/> **Consulta médica** — *Acesso ao cadastro de consultas.* <br/> **Exame** — *Acesso ao módulo de exames.* <br/> **Laudo e Etapas** — *Acesso à elaboração de laudos e etapas.* <br/> **Log geral** — *Permitir acesso ao log geral (acompanhamento de exames).* <br/> **Pacientes** — *Acesso ao cadastro de pacientes.* <br/> **Protocolo** — *Acesso ao cadastro de protocolos.* <br/> **Retirada de material** — *Acesso ao módulo Laudo & Imagem Retirada.* |
| **Paciente**  <br/> *Acesso ao cadastro de pacientes. Requer que em Menu Lateral o item Paciente esteja permitido.* | **Cadastrar** — *Permite cadastrar paciente.* <br/> **Editar** — *Permite editar dados do paciente.* <br/> **Laudo enviar** — *Permite enviar laudos por e-mail/WhatsApp.* <br/> **Laudo visualizar** — *Permite visualizar laudos (pode ser restrito).* <br/> **Remover** — *Permissão crítica, apenas perfis responsáveis.* <br/> **Senha** — *Permitido: visualiza e edita | Leitura: apenas visualiza | Sem acesso: não visualiza.* <br/> **Senha enviar** — *Permite envio da senha por e-mail/WhatsApp.* <br/> **Senha visualizar** — *Permite visualizar a senha do paciente.* |
| **Protocolo**  <br/> *Recebimento de material e verificação de exames e convênios.* | **Cadastrar** — *Permite cadastrar Protocolo.* <br/> **Câmera** — *Permite fotografar material recebido.* <br/> **Editar** — *Permite editar dados do Protocolo.* <br/> **Enviar para conformidade** — *Permite enviar protocolo para análise.* <br/> **Protocolo acesso** — *Permite acesso geral ao protocolo.* <br/> **Remover** — *Permite remover protocolo (soft delete).* |
| **Requisitante**  <br/> *Acesso à visualização e cadastro de Requisitantes.* | **Cadastrar** — *Permite cadastrar Requisitante.* <br/> **Editar** — *Permite editar dados do Requisitante.* <br/> **Remover** — *Permite remover Requisitante.* <br/> **Senha** — *Permitido: visualiza e edita | Leitura: apenas visualiza | Sem acesso: não visualiza.* <br/> **Senha enviar** — *Permite envio da senha por e-mail/WhatsApp.* |
| **Responsável**  <br/> *Acesso à visualização e cadastro de Responsável.* | **Cadastrar** — *Permite cadastrar Responsável.* <br/> **Editar** — *Permite editar dados do Responsável.* <br/> **Remover** — *Permite remover Responsável.* <br/> **Senha** — *Permitido: visualiza e edita | Leitura: apenas visualiza | Sem acesso: não visualiza.* <br/> **Senha enviar** — *Permite envio da senha por e-mail/WhatsApp.* |
| **Segurança**  <br/> *Permissões para acesso ao app por IP fixo e dentro do horário de trabalho.* | **Acessar o app fora do horário de trabalho configurado** — *Permite acesso em qualquer horário.* <br/> **Acessar o app remotamente** — *Permite acesso remoto (home-office). Requer exceção de IP fixo.* |
| **Usuário**  <br/> *Acesso à visualização e cadastro de Usuário.* | **Cadastrar** — *Permite cadastrar Usuário.* <br/> **Editar** — *Permite editar dados do Usuário.* <br/> **Remover** — *Permite remover Usuário.* <br/> **Senha** — *Permitido: visualiza e edita | Leitura: apenas visualiza | Sem acesso: não visualiza.* <br/> **Senha enviar** — *Permite envio da senha ao usuário.* |

---

## ⚙️ Regras de Negócio Incorporadas

- **Precedência do Menu Lateral:** negar item no Menu Lateral oculta o módulo completo.  
- **Trocar paciente (Exame):** ação sensível, restrita a perfis líderes/gerência.  
- **Remoção (soft delete):** registros permanecem ocultos, mas mantidos com flag.  
- **Assinatura delegada:** laudo assinado pelo responsável; log registra o usuário executor.  
- **Segurança:** controle por IP fixo e faixa de horário; exceções configuráveis.  
- **Comando de voz:** recurso em desenvolvimento.

---

## ❓ Perguntas Frequentes

**Posso negar apenas “Configurações” no Menu Lateral?**  
Sim. Negar o item no Menu Lateral oculta o módulo inteiro e torna desnecessário negar itens internos.

**Quem pode trocar o paciente de um exame?**  
Perfis de liderança/gerência com permissão explícita.

**Remover um exame apaga o registro?**  
Não. É aplicado *soft delete* (flag de removido e oculto da interface).

**Quem aparece no log da assinatura delegada?**  
O log mostra o usuário executor, mesmo que a assinatura seja do responsável.

**Como funcionam as restrições de segurança?**  
Usuário acessa apenas no horário configurado e, se exigido, a partir do IP fixo da empresa. Perfis médicos podem ter acesso remoto.

---
