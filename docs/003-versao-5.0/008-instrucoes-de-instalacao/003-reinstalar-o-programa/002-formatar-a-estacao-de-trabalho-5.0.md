---
sidebar_position: 2
---

# Reinstalar a Estação de trabalho 5.0

## Importante

As instruções abaixo somente se aplicam para os computadores que
serão instalados **somente** como **estação** de trabalho.
A instalação ou re-instalação deve ser realizada por usuários
avançados e não poderemos ser responsabilizados se não houver
perfeito entendimento das instruções.
**Sempre** consulte o suporte Laudo & Imagem **antes** de instalar ou
reinstalar o programa.

Licença com captura em computadores com Windows 11 - não temos placa de captura homologada.

Mantenha o mesmo nome do computador e não será necessário alterar o nome no registro da licença.

Se a estação que será formatada, capturar video do exame,
necessário fazer uma cópia de segurança em outra midia da pasta
local - `laudoimagem\video`

## Requisitos mínimos

- Verificar espaço em disco disponível - 500Gb de espaço em disco é o mínimo necessário caso seja feito a
captura de vídeos e imagens
- Verificar tamanho da memória RAM - 4Gb é o mínimo recomendado para melhor funcionamento do sistema
- Conectado em rede com o computador que é o Servidor do Laudo &
  Imagem
- Arquivos de instalação do Laudo & Imagem no computador
- CD de instalação da placa de captura (se a licença for de Captura)

## Instalar o Laudo & Imagem Estação

- Localize e copie o arquivo LaudoImagemEstacao50.exe para a pasta
  `C:\Temp` do computador onde será feita a instalação
- Execute o arquivo `LaudoImagemEstacao50.exe` (executar com
  permissão de administrador do Windows)
- Siga as instruções de tela.
- Ao finalizar, execute o programa de instalação da Estação Laudo &
  Imagem
- Os parâmetros do Servidor já devem vir preenchidos automaticamente.
- Um aviso sobre o sucesso da instalação é exibido. Clicar em `Concluir`.

## Atualizar a versão em todos os tipos de licença (com e sem Captura)

Acesse a pasta `\\NomeDoServidor\LaudoImagem\Util` do Servidor

Se a versão do Windows for Windows 7, Windows 10 ou Windows 11:

- execute o arquivo
  [AKPLAVIS_1_0_8.exe](http://suporte.laudoimagem.com.br/download/versao50/AKPLAVIS_1_0_8.exe)
  como `Administrador do Windows` e siga as orientações de tela até a
  conclusão
- execute o arquivo `TelaNov.exe` como `Administrador do Windows` e
  siga as orientações de tela até a conclusão

## Instalar recursos da Estação com CAPTURA

- Instalar o drive da placa de captura
- Se for capturar vídeo é necessário fazer o procedimento abaixo em
  todas as estações:
- Compartilhar a pasta `Video` na pasta local da instalação do Laudo &
  Imagem (ex: `C:\Arquivos de Programas\Laudoimagem`

## Conexão com banco de dados falhou durante a instalação

Consulte: [Conexão com banco de dados
falhou...](/docs/003-versao-5.0/suporte-tecnico/conexao-com-banco-de-dados-falhou--verifique-os-dados-e-tente-novamente)