# Documentação Técnica — **Laudo & Imagem**

**Versão:** 1.1  
**Última atualização:** 03/11/2025  
**Módulo:** Configurações  
**Descrição:**  
Documentação técnica consolidada do módulo **Configurações** do sistema **Laudo & Imagem**, abrangendo:  
- Estrutura de perfis e permissões  
- Criação e gerenciamento de perfis  
- Lista completa de Grupos de permissões & Recursos  
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
- **Baseado em outro perfil** — copia e permite alterar permissões existentes.

> Campos obrigatórios aparecem com linha vermelha até o preenchimento correto.

### Observações
Perfis podem ser criados com base em outros para agilizar o processo de configuração.  
Exemplo: criar o perfil “Médico” com base em “Administrador” e remover permissões desnecessárias.

---

## 3️⃣ Gerenciar Perfis e Permissões

### Estrutura da Tela
- **Coluna esquerda:** lista de perfis  
- **Área central:** grupo de permissões e recursos do perfil  
- **Abas:**  
  1. Perfil  
  2. Assunto (Recursos do Perfil)  
  3. Recursos *(Gerenciar recursos do Perfil - somente administradores CIS)*

### Tipos de Acesso
- **Permitido:** acesso total  
- **Somente leitura:** apenas visualiza  
- **Sem acesso:** o item é oculto

### Observações Gerais
- As alterações aplicam-se imediatamente após salvar.  
- Perfis herdados de outros mantêm permissões até modificação explícita.  
- **Menu Lateral** exibe todos os ícones das opções de acesso e tem **precedência** sobre as sub-opções internas de cada item — negar acesso a opção, remove o ícone e bloqueia o acesso por completo.

---

## 4️⃣ Grupo de Permissões & Recursos

### Descrição
As permissões se dividem em grupos.
Cada grupo representa uma área funcional e pode ter um ou mais recursos nos quais são configuradas as permissões (permitido, sem acesso e somente leitura)
Abaixo, os grupos (coluna 1) e seus recursos correspondentes (coluna 2).

| Grupos de permissão | Recursos |
|---|---|
| **Agendamento**  <br/> *Permissão para usar o agendamento para marcação de exames.* | **Cadastrar** — *Permite selecionar o dia e horário e agenda dos médicos para cadastrar um agendamento.* <br/> **Editar** — *Permite editar um agendamento cadastrado e alterar todos os dados.* <br/> **Remover** — *Permite remover um agendamento cadastrado que ainda não se transformou em exame.* |
| **Comando de voz**  <br/> *Navega pelo sistema falando textos pré-definidos.* | **Utilizar comando de voz** — *Permissões do usuário para navegar pelo sistema utilizando comandos de voz.* <br/> _Status: funcionalidade em desenvolvimento._ |
| **Configurações - Lista de configurações**  <br/> *Acesso a cada um dos itens das configurações do sistema. Requer que em "Menu lateral" o item "Configurações" esteja marcado.* | **Agendamento** — *Permite alterar horários e tipos de exame.* <br/> **Arquivos** — *Permite cadastrar logotipos e anexar PDFs.* <br/> **Confirmações** — *Visualiza itens de verificação de qualidade.* <br/> **Empresa** — *Acesso ao cadastro da empresa.* <br/> **Especialistas** — *Cadastro de fornecedores e especialidades.* <br/> **Feedback** — *Exibe feedbacks de clientes via WhatsApp.* <br/> **Permissões** — *Exibe o item “Permissões” na lista.* <br/> **Ponto de Controle** — *Acesso às configurações do ponto de controle.* <br/> **Requisitantes** — *Exibe item “Requisitantes” na lista.* <br/> **Responsáveis** — *Exibe item “Responsáveis” na lista.* <br/> **Tabelas de preço** — *Exibe item “TAbelas de preço” na lista.* <br/> **Tipo de exame** — *Exibe item “Tipo de exame” na lista.* <br/> **Usuários** — *Exibe item “Usuários” na lista.* <br/> **WhatsApp** — *Configura integração WhatsApp com o Laudo & Imagem.* |
| **Configurações - Permissões (tela)**  <br/> *Acesso e visualização aos Grupos de Permissões e Recursos de cada Perfil.* | **Recursos do Perfil - Adicionar** — *Permitir adicionar Perfil.* <br/> **Recursos do Perfil - Editar** — *Permite editar o nome e descrição de um Perfil.* <br/> **Recursos do Perfil - Remover** — *Permite remover o Perfil desde que nenhum usuário o utilize.* <br/> **Recursos do Perfil - Trocar permissão** — *Permite trocar a permissão de um recurso.* <br/> **Tipo de exame e etapas - Trocar permissão** — *Permite trocar a permissão de cada Etapa.* <br/> **Tipo de exame e etapas - Marcar e desmarcar** — *Permite incluir tipos de exame no Perfil.* |
| **Exame**  <br/> *Acesso à visualização e cadastro do Exame.* | **Cadastrar** — *Permite cadastrar Exame.* <br/> **Editar** — *Permite editar dados do Exame.* <br/> **Remover** — *Permite remover Exame (soft delete).* <br/> **Trocar paciente** — *Permissão sensível, restrita a perfis de liderança.* |
| **Laudo Critérios**  <br/> *Permite acessar critérios de exibição e executar ações em lote.* | **Assinar (ações em lote)** — *Permite assinar vários exames com um único clique (assinatura delegada).* <br/> **Critérios** — *Permite selecionar e atualizar a lista de exames a serem exibidos.* <br/> **Imprimir (ações em lote)** — *Permite a impressão de vários  de laudos com um único clique.* <br/> **Laudo por e-mail (ações em lote)** — *Permite envio de vários laudos por e-mail com um único clique.* <br/> **Laudos por WhatsApp** — *Permite enviar vários laudos por WhatsApp com um único clique.* <br/> **Link do laudo por e-mail (ações em lote)** — *Permite enviar link de vários laudos por e-mail (abre no LaudoNet).* <br/> **Link do laudo por WhatsApp (ações em lote)** — *Permite enviar link de vários laudos por WhatsApp com um único clique.* |
| **Laudo etapas**  <br/> *Algumas etapas requerem permissão especial (ex.: assinatura).* | **Assinar pelo responsável** — *Permite que outro usuário assine laudos em nome de um ou mais responsáveis (assinatura delegada).* |
| **Menu lateral**  <br/> *Menu principal à esquerda, composto por ícones com texto.* | **Agenda** — *Acesso ao agendamento de exames.* <br/> **Configurações** — *Acesso à tela de configurações do sistema.* <br/> **Consulta** — *Acesso ao cadastro de consultas médicas.* <br/> **Exame** — *Acesso ao cadastro de exames.* <br/> **Laudo** — *Acesso à elaboração das etapas dos laudos.* <br/> **Log** — *Permitir acesso ao log de atividades de cada usuário  (acompanhamento de exames).* <br/> **Pacientes** — *Acesso ao cadastro de pacientes.* <br/> **Protocolo** — *Acesso ao cadastro de protocolos.* <br/> **Retirada** — *Acesso ao protocolo de retirada de exames ou material.* |
| **Paciente**  <br/> *Acesso ao cadastro de pacientes. Requer que em Menu Lateral o item Paciente esteja permitido.* | **Cadastrar** — *Permite cadastrar paciente.* <br/> **Editar** — *Permite editar dados do paciente.* <br/> **Laudo enviar** — *Permite enviar laudos por e-mail/WhatsApp.* <br/> **Laudo visualizar** — *Permite visualizar laudos (pode ser configurado).* <br/> **Remover** — *Permissão crítica, apenas perfis responsáveis.* <br/> **Senha** — *Permite visualizar e editar | Leitura: apenas visualiza | Sem acesso: não visualiza.* <br/> **Senha enviar** — *Permite envio da senha por e-mail/WhatsApp.* <br/> **Senha visualizar** — *Permite visualizar a senha do paciente.* |
| **Protocolo**  <br/> *Acesso ao registro de recebimento de material e verificação de exames e convênios.* | **Cadastrar** — *Permite cadastrar Protocolo.* <br/> **Câmera** — *Permite fotografar documento e/ou material recebido.* <br/> **Editar** — *Permite editar dados do Protocolo cadastrado.* <br/> **Enviar para conformidade** — *Permite enviar material com protocolo para análise.* <br/> **Protocolo acesso** — *Permite acesso geral ao dados do protocolo cadastrado.* <br/> **Remover** — *Permite remover protocolo cadastrado (soft delete).* |
| **Requisitante**  <br/> *Acesso à visualização e cadastro de Requisitantes.* | **Cadastrar** — *Permite cadastrar Requisitante.* <br/> **Editar** — *Permite editar dados do Requisitante.* <br/> **Remover** — *Permite remover Requisitante.* <br/> **Senha** — *Permite visualizar e editar | Leitura: apenas visualiza | Sem acesso: não visualiza.* <br/> **Senha enviar** — *Permite envio da senha por e-mail/WhatsApp.* |
| **Responsável**  <br/> *Acesso à visualização e cadastro de Responsável.* | **Cadastrar** — *Permite cadastrar Responsável.* <br/> **Editar** — *Permite editar dados do Responsável.* <br/> **Remover** — *Permite remover Responsável.* <br/> **Senha** — *Permite visualizar e editar | Leitura: apenas visualiza | Sem acesso: não visualiza.* <br/> **Senha enviar** — *Permite envio da senha por e-mail/WhatsApp.* |
| **Segurança**  <br/> *Configura permissões para acesso ao app por IP fixo e/ou por horário de trabalho.* | **Acessar o app fora do horário de trabalho configurado** — *Permite acesso em qualquer horário.* <br/> **Acessar o app remotamente** — *Permite acesso remoto (home-office). Requer exceção de IP fixo.* |
| **Usuário**  <br/> *Acesso à visualização e cadastro de Usuário.* | **Cadastrar** — *Permite cadastrar Usuário.* <br/> **Editar** — *Permite editar dados do Usuário.* <br/> **Remover** — *Permite remover Usuário.* <br/> **Senha** — *Permite visualizar e editar | Leitura: apenas visualiza | Sem acesso: não visualiza.* <br/> **Senha enviar** — *Permite envio da senha ao usuário.* |

---

## ⚙️ Regras de Negócio Incorporadas

- **Precedência do Menu Lateral:** negar item no Menu Lateral oculta a opção por completo.  
- **Trocar paciente (Exame):** ação sensível, restrita a perfis líderes/gerência.  
- **Remoção (soft delete):** registros permanecem ocultos, mas mantidos com flag (sinalização).  
- **Assinatura delegada:** laudo assinado por usuário autorizado pelo responsável; log registra o usuário executor.  
- **Segurança:** controle por IP fixo e faixa de horário; exceções configuráveis.  
- **Comando de voz:** recurso em desenvolvimento.

---

## ❓ Perguntas Frequentes

**Posso negar apenas “Configurações” no Menu Lateral?**  
Sim. Negar o item no Menu Lateral oculta o acesso a opção por inteiro e torna desnecessário negar itens internos.

**Quem pode trocar o paciente de um exame?**  
Perfis de liderança/gerência com permissão explícita.

**Remover um exame apaga o registro?**  
Não. É aplicado *soft delete* (flag (sinalizador) de removido e oculto da interface).

**Quem aparece no log da assinatura delegada?**  
O log mostra o usuário executor que assinou pelo responsável, conforme configuração de assinatura delegada autorizada.

**Como funcionam as restrições de segurança no acesso ao sistema?**  
Usuário acessa apenas no horário configurado e, se exigido, a partir do IP fixo da empresa. Perfis médicos podem ter acesso remoto sem restrições.

**Como capturar imagem?**   
O sistema permite capturar imagens de exame e de documentos (protocolos, requisições). A captura de imagens do exame é realizada em uma das etapas na opção Laudo. A captura (fotografia) de documentos (protocolo, requisições, material, etc) é realizada na opção Protocolo.

 Quando o usuário pergunta sobre captura de imagem geralmente se refere às imagens do exame. O protocolo permite fotografar material recebido ou pedido do exame. Mas é bom esclarecer que não são as imagens do exame e sim imagens do material que está sendo recebido no laboratório (Anatomia Patológica: tubos etiquetados, peças, etc...) ou imagens do pedido de exame (Anatomia Patológica e/ou Endoscopia).
A captura de imagens para o exame é abordada em Etapas/Captura de imagem e é feita a partir do material referente ao tipo de exame selecionado (Anatomia Patológica: lâminas, Endoscopia: imagens do endoscópio).

---
