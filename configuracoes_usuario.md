# Usuários

**Versão:** 1.0  
**Última atualização:** 03/11/2025  
**Módulo:** Configurações > Usuários  
**Descrição:**  
Esta funcionalidade permite cadastrar, editar, remover e configurar usuários do sistema **Laudo & Imagem**.  
Cada usuário é, antes de tudo, uma **pessoa** no sistema — podendo também ser paciente, requisitante ou responsável — mas com atributos adicionais que o habilitam a **acessar o sistema**.

---

### Fluxo

1. **Acesso à lista de usuários**
   - Localizada na coluna central da tela de Configurações.
   - Ao selecionar um usuário, os dados aparecem na última coluna à direita.

2. **Botões principais**
   - **Novo:** cria um novo usuário a partir do cadastro de uma pessoa existente ou cadastra uma nova pessoa.  
   - **Editar:** permite alterar dados do cadastro usuário.  
   - **Remover:** exclui o cadastro do usuário (apenas se o perfil do operador possuir permissão).

3. **Busca de pessoa**
   - A busca pode ser feita por: **nome**, **CPF**, **RG**, **e-mail** ou **data de nascimento**.  
   - Caso o cadastro da pessoa não exista, é possível **criar um novo cadastro**.

4. **Campos do cadastro**
   - **Obrigatórios:** Nome, Iniciais, CPF, Sexo, E-mail, Senha.  
   - **Gerados automaticamente:** e-mail fictício (caso não informado) e senha com requisitos mínimos:
     - 1 letra maiúscula  
     - 1 letra minúscula  
     - 1 caractere especial  
     - 1 número  
     - Mínimo de 8 caracteres  
   - **Não obrigatórios:** RG, Data de nascimento, Telefone, Endereço, CEP, Cidade, Bairro, UF (em verificação).  

5. **Iniciais**
   - Campo obrigatório e **único**.  
   - Nenhum usuário pode ter iniciais repetidas.

6. **Conversão de cadastro de pessoa em usuário**
   - Toda pessoa cadastrada pode se tornar um usuário ao receber os campos adicionais obrigatórios (iniciais, senha etc.).
   - Se o cadastro da pessoa já existir, o sistema emitirá um alerta:  
     “Esta pessoa está cadastrada, mas não como usuário. Clique em **Sim** para adicioná-la como usuário.”

7. **Perfis e Módulos**
   - Após o cadastro, é **obrigatório** definir:
     - Um **perfil de acesso** (Administrador, Médico, Recepção, etc.);
     - Um **módulo de licença** (Assistente:todas as funcionalidades do sistema  ou Captura: todas as funcionalidades do sistema e captura de imagens,geralmente usado pelos médicos).
   - **Perfis e módulos são excludentes** — cada usuário tem apenas uma permissão por vez para acessar o sistema.
   - Ao alterar o perfil ou módulo, o sistema:
     - Exibe um aviso de ser necessário reinicializar.
     - Sai do sistema (logout) e faz novo login do usuário após 20 segundos para aplicar a mudança configurada no perfil.

8. **Comportamento da interface**
   - Ao abrir janelas de edição ou perfil, as demais áreas da tela são desabilitadas.
   - Cada item da lista pode ter ícones de ação, como:
     - 🔹 Perfil do usuário  
     - 🔹 Módulo de uso  

9. **Identificação visual**
   - Cada usuário possui um **círculo de cor** com suas iniciais.
   - A cor pode ser alterada e aparece na interface após atualização.

---

### Onde isso se aplica
- Administração de hospitais, clínicas e laboratórios que utilizam o **Laudo & Imagem**.  
- Configuração inicial de usuários e perfis de acesso.  
- Controle de permissões e acesso aos módulos (licenças disponíveis) do sistema.

---

### Exemplos de Uso

- **Cadastrar um novo funcionário:**  
  1. Acesse *Configurações > Usuários*.  
  2. Clique em **Novo**.  
  3. Busque a pessoa pelo CPF.  
  4. Se não existir, clique em **Criar nova pessoa**.  
  5. Preencha os campos obrigatórios.  
  6. Defina **perfil** e **módulo** (tipo de licença: Assistente ou Captura).  
  7. Clique em **Incluir** e **Salvar**.

- **Alterar perfil de um usuário:**  
  1. Selecione o usuário na lista.  
  2. Clique no ícone de perfil.  
  3. Escolha o novo perfil (ex.: Recepção).  
  4. Confirme a alteração.  
  5. O sistema avisará o usuário logado sobre a reinicialização para aplicação das alterações configuradas.

---

### Observações

- Todo **usuário é uma pessoa**, mas **nem toda pessoa é um usuário**.  
- Pacientes e requisitantes também são pessoas, mas **não possuem acesso ao sistema**.  
- Um mesmo indivíduo pode ser paciente, requisitante, responsável e usuário, dependendo do contexto.  
- A busca inteligente (ícone de “timer”) dispensa o uso da tecla *Enter*; a busca ocorre automaticamente após pausa na digitação.

---

### Alertas de Troca de Perfil e Módulo

Quando o **perfil** ou o **módulo** de um usuário é alterado pelo administrador, o sistema exibe alertas tanto para quem realizou a alteração (popup de confirmação) quanto para o próprio usuário afetado (notificação em tela).

#### Troca de Perfil
- **Popup (administrador):**  
  Mensagem exibida com botão **OK**:  
  > O perfil do usuário foi alterado.  
  > Clique para avisá-lo que será preciso reiniciar o app.

- **Notificação (usuário):**  
  > O perfil do usuário foi alterado.  Termine o que está fazendo e reinicie o app. Caso contrário, o app será reiniciado automaticamente em 20 segundos.

#### Troca de Módulo / Licença
- **Popup (administrador):**  
  Mensagem exibida com botão **OK**:  
  > O módulo / tipo de licença do usuário foi alterado.  
  > Clique para avisá-lo que será preciso reiniciar o app.

- **Notificação (usuário):**  
  > O módulo / tipo de licença do usuário foi alterado. Termine o que está fazendo e reinicie o app. Caso contrário, o app será reiniciado automaticamente em 20 segundos.

**Comportamento esperado**
- O popup exibido ao administrador contém um **botão “OK”** para confirmar o aviso.  
- Ao confirmar, o usuário afetado recebe a notificação em tela.  
- Se o usuário não reiniciar manualmente, o app **será reiniciado automaticamente em 20 segundos**.


### Perguntas Frequentes

**1. Paciente é considerado usuário?**  
Não. Paciente é uma pessoa com cadastro, mas sem perfil de acesso ao sistema.

**2. Um funcionário que também faz exames pode ser paciente?**  
Sim. Ele aparece como pessoa cadastrada e pode ter simultaneamente o papel de paciente e de usuário.

**3. Iniciais podem se repetir?**  
Não. Cada usuário tem iniciais únicas.

**4. É possível acessar o sistema sem definir módulo e perfil?**  
Não. Ambos são obrigatórios para acesso ao **Laudo & Imagem**.

**5. Como identificar qual o módulo / licença que está configurado para mim?**
O módulo de Captura tem uma etapa chamada **Captura de imagens**. O módulo Assistente não tem esta etapa.
