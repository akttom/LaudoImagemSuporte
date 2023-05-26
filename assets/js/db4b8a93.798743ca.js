"use strict";(self.webpackChunklaudo_imagem_faq=self.webpackChunklaudo_imagem_faq||[]).push([[915],{3905:(a,e,o)=>{o.d(e,{Zo:()=>l,kt:()=>k});var n=o(67294);function d(a,e,o){return e in a?Object.defineProperty(a,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):a[e]=o,a}function r(a,e){var o=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),o.push.apply(o,n)}return o}function i(a){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){d(a,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(o,e))}))}return a}function t(a,e){if(null==a)return{};var o,n,d=function(a,e){if(null==a)return{};var o,n,d={},r=Object.keys(a);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||(d[o]=a[o]);return d}(a,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(a,o)&&(d[o]=a[o])}return d}var u=n.createContext({}),s=function(a){var e=n.useContext(u),o=e;return a&&(o="function"==typeof a?a(e):i(i({},e),a)),o},l=function(a){var e=s(a.components);return n.createElement(u.Provider,{value:e},a.children)},c="mdxType",p={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(a,e){var o=a.components,d=a.mdxType,r=a.originalType,u=a.parentName,l=t(a,["components","mdxType","originalType","parentName"]),c=s(o),m=d,k=c["".concat(u,".").concat(m)]||c[m]||p[m]||r;return o?n.createElement(k,i(i({ref:e},l),{},{components:o})):n.createElement(k,i({ref:e},l))}));function k(a,e){var o=arguments,d=e&&e.mdxType;if("string"==typeof a||d){var r=o.length,i=new Array(r);i[0]=m;var t={};for(var u in e)hasOwnProperty.call(e,u)&&(t[u]=e[u]);t.originalType=a,t[c]="string"==typeof a?a:d,i[1]=t;for(var s=2;s<r;s++)i[s]=o[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},4159:(a,e,o)=>{o.r(e),o.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>t,toc:()=>s});var n=o(87462),d=(o(67294),o(3905));const r={sidebar_position:3},i="Backup Banco de dados automatizado",t={unversionedId:"versao-5.0/instrucoes-de-instalacao/backup/backup-banco-de-dados-automatizado",id:"versao-5.0/instrucoes-de-instalacao/backup/backup-banco-de-dados-automatizado",title:"Backup Banco de dados automatizado",description:"Periodicidade sugerida: diariamente",source:"@site/docs/003-versao-5.0/008-instrucoes-de-instalacao/005-backup/003-backup-banco-de-dados-automatizado.md",sourceDirName:"003-versao-5.0/008-instrucoes-de-instalacao/005-backup",slug:"/versao-5.0/instrucoes-de-instalacao/backup/backup-banco-de-dados-automatizado",permalink:"/docs/versao-5.0/instrucoes-de-instalacao/backup/backup-banco-de-dados-automatizado",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/003-versao-5.0/008-instrucoes-de-instalacao/005-backup/003-backup-banco-de-dados-automatizado.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Backup Banco de dados manual",permalink:"/docs/versao-5.0/instrucoes-de-instalacao/backup/backup-banco-de-dados-manual"},next:{title:"Backup de imagens",permalink:"/docs/versao-5.0/instrucoes-de-instalacao/backup/backup-de-imagens"}},u={},s=[{value:"Periodicidade sugerida: diariamente",id:"periodicidade-sugerida-diariamente",level:2},{value:"Requisitos",id:"requisitos",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Define o drive e a pasta onde ser\xe1 armazenado o Arquivo de log na linha add key=&quot;pathLog&quot; value=&quot;D:Backup&quot;",id:"define-o-drive-e-a-pasta-onde-ser\xe1-armazenado-o-arquivo-de-log-na-linha-add-keypathlog-valuedbackup",level:4},{value:"Define a pasta onde ser\xe1 armazenado o Arquivo de backups na linha add key=&quot;pathBackup&quot; value=&quot;D:Backup&quot;",id:"define-a-pasta-onde-ser\xe1-armazenado-o-arquivo-de-backups-na-linha-add-keypathbackup-valuedbackup",level:4},{value:"Define o nome do banco para fazer backup na linha add key=&quot;nomeBanco&quot; value=&quot;LaudoImagem&quot;",id:"define-o-nome-do-banco-para-fazer-backup-na-linha-add-keynomebanco-valuelaudoimagem",level:4},{value:"Define a quantidade de backups que ser\xe1 armazenado na pasta na linha add key=&quot;qtdBackup&quot; value=&quot;30&quot;",id:"define-a-quantidade-de-backups-que-ser\xe1-armazenado-na-pasta-na-linha-add-keyqtdbackup-value30",level:4},{value:"Define a inst\xe2ncia do SQL Server na linha add key=&quot;Server&quot; value=&quot;127.0.0.1SQLEXPRESS&quot;",id:"define-a-inst\xe2ncia-do-sql-server-na-linha-add-keyserver-value127001sqlexpress",level:4},{value:"Define usu\xe1rio que ir\xe1 acessar o banco na linha add key=&quot;Usuario&quot; value=&quot;sa&quot;",id:"define-usu\xe1rio-que-ir\xe1-acessar-o-banco-na-linha-add-keyusuario-valuesa",level:4},{value:"Define a senha do usu\xe1rio na linha add key=&quot;Senha&quot; value=&quot;laudoimagem&quot;",id:"define-a-senha-do-usu\xe1rio-na-linha-add-keysenha-valuelaudoimagem",level:4},{value:"Define o tempo para acesso ao banco (Caso apresente o erro de timeout aumente o tempo)",id:"define-o-tempo-para-acesso-ao-banco-caso-apresente-o-erro-de-timeout-aumente-o-tempo",level:4},{value:"Automatizar o backup do Banco de dados",id:"automatizar-o-backup-do-banco-de-dados",level:2},{value:"Instru\xe7\xf5es para automatizar o backup do banco de dados",id:"instru\xe7\xf5es-para-automatizar-o-backup-do-banco-de-dados",level:2}],l={toc:s},c="wrapper";function p(a){let{components:e,...o}=a;return(0,d.kt)(c,(0,n.Z)({},l,o,{components:e,mdxType:"MDXLayout"}),(0,d.kt)("h1",{id:"backup-banco-de-dados-automatizado"},"Backup Banco de dados automatizado"),(0,d.kt)("h2",{id:"periodicidade-sugerida-diariamente"},"Periodicidade sugerida: diariamente"),(0,d.kt)("p",null,"A Rotina de backup do Banco de dados automatizado, permitir\xe1 que o\nbackup do banco de dados seja realizado sem a necessidade do usu\xe1rio\nabrir o programa de backup, digitr senha e aguardar a finaliza\xe7\xe3o."),(0,d.kt)("p",null,"Vers\xe3o 4.2.0 ou maior - Dispon\xedvel somente para banco de dados\nSQLServer Express"),(0,d.kt)("h2",{id:"requisitos"},"Requisitos"),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},"Framework 2.0"),(0,d.kt)("li",{parentName:"ul"},"Permiss\xe3o de escrita na pasta que ir\xe1 salvar os backups"),(0,d.kt)("li",{parentName:"ul"},"Executar somente no Servidor do Laudo & Imagem"),(0,d.kt)("li",{parentName:"ul"},"Alterar o arquivo de configura\xe7\xe3o (BackupSql.exe.config) com as\nespecifica\xe7\xf5es do banco de dados e local onde ser\xe3o armazenados os\nbackups do banco de dados"),(0,d.kt)("li",{parentName:"ul"},"Para executar o backup execute o arquivo (BackupSql.exe)"),(0,d.kt)("li",{parentName:"ul"},"Usu\xe1rio do Windows com permiss\xe3o de Administrador"),(0,d.kt)("li",{parentName:"ul"},"Obrigat\xf3rio senha para usu\xe1rio do Windows com permiss\xe3o de\nadministrador"),(0,d.kt)("li",{parentName:"ul"},"Servidor tem que permanecer ligado no hor\xe1rio agendado para backup")),(0,d.kt)("h2",{id:"descri\xe7\xe3o"},"Descri\xe7\xe3o"),(0,d.kt)("h4",{id:"define-o-drive-e-a-pasta-onde-ser\xe1-armazenado-o-arquivo-de-log-na-linha-add-keypathlog-valuedbackup"},'Define o drive e a pasta onde ser\xe1 armazenado o Arquivo de log na linha add key="pathLog" value="D:\\Backup\\"'),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},"onde ",(0,d.kt)("inlineCode",{parentName:"li"},"D:\\")," \xe9 o drive"),(0,d.kt)("li",{parentName:"ul"},"onde Backup \xe9 a pasta onde ser\xe1 gravado o arquivo de log.")),(0,d.kt)("h4",{id:"define-a-pasta-onde-ser\xe1-armazenado-o-arquivo-de-backups-na-linha-add-keypathbackup-valuedbackup"},'Define a pasta onde ser\xe1 armazenado o Arquivo de backups na linha add key="pathBackup" value="D:\\Backup\\"'),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},"onde ",(0,d.kt)("inlineCode",{parentName:"li"},"D:\\")," \xe9 o drive; e"),(0,d.kt)("li",{parentName:"ul"},"Backup \xe9 a pasta onde ser\xe1 gravado o arquivo de backup do banco de\ndados")),(0,d.kt)("h4",{id:"define-o-nome-do-banco-para-fazer-backup-na-linha-add-keynomebanco-valuelaudoimagem"},'Define o nome do banco para fazer backup na linha add key="nomeBanco" value="LaudoImagem"'),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},"onde Laudoimagem \xe9 o nome do banco de dados")),(0,d.kt)("h4",{id:"define-a-quantidade-de-backups-que-ser\xe1-armazenado-na-pasta-na-linha-add-keyqtdbackup-value30"},'Define a quantidade de backups que ser\xe1 armazenado na pasta na linha add key="qtdBackup" value="30"'),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},"onde 30 \xe9 a quantidade de arquivos de backup do banco de dados que\nser\xe1 armazenado na pasta")),(0,d.kt)("h4",{id:"define-a-inst\xe2ncia-do-sql-server-na-linha-add-keyserver-value127001sqlexpress"},'Define a inst\xe2ncia do SQL Server na linha add key="Server" value="127.0.0.1',"\\",'SQLEXPRESS"'),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},"onde 127.0.0.1 \xe9 o IP padr\xe3o do servidor"),(0,d.kt)("li",{parentName:"ul"},"onde sqlexpress \xe9 a inst\xe2ncia do SQL Server")),(0,d.kt)("h4",{id:"define-usu\xe1rio-que-ir\xe1-acessar-o-banco-na-linha-add-keyusuario-valuesa"},'Define usu\xe1rio que ir\xe1 acessar o banco na linha add key="Usuario" value="sa"'),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},"onde sa \xe9 o usu\xe1rio do banco de dados")),(0,d.kt)("h4",{id:"define-a-senha-do-usu\xe1rio-na-linha-add-keysenha-valuelaudoimagem"},'Define a senha do usu\xe1rio na linha add key="Senha" value="laudoimagem"'),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},"onde laudoimagem \xe9 a senha do banco de dados (necess\xe1rio obter a\nsenha do banco de dados com o suporte t\xe9cnico)")),(0,d.kt)("h4",{id:"define-o-tempo-para-acesso-ao-banco-caso-apresente-o-erro-de-timeout-aumente-o-tempo"},"Define o tempo para acesso ao banco (Caso apresente o erro de timeout aumente o tempo)"),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},'onde value="900" aumente 900 para n\xfameros maiores at\xe9 que consiga\nfazer o backup')),(0,d.kt)("h2",{id:"automatizar-o-backup-do-banco-de-dados"},"Automatizar o backup do Banco de dados"),(0,d.kt)("p",null,"Para automatizar, precisa acrescentar o execut\xe1vel como Tarefa do\nWindows"),(0,d.kt)("p",null,"Procedimento precisa ser configurado e realizado com usu\xe1rio\nadministrador do Windows ou outro usu\xe1rio com permiss\xe3o de\nadministrador"),(0,d.kt)("h2",{id:"instru\xe7\xf5es-para-automatizar-o-backup-do-banco-de-dados"},"Instru\xe7\xf5es para automatizar o backup do banco de dados"),(0,d.kt)("ul",null,(0,d.kt)("li",{parentName:"ul"},"Fa\xe7a download dos arquivos de Backup e configura\xe7\xe3o do Backup"),(0,d.kt)("li",{parentName:"ul"},"Salve em uma pasta do ",(0,d.kt)("inlineCode",{parentName:"li"},"C:\\")," do computador que \xe9 o Servidor do Laudo &\nImagem"),(0,d.kt)("li",{parentName:"ul"},"Entre em ",(0,d.kt)("inlineCode",{parentName:"li"},"Iniciar")," / ",(0,d.kt)("inlineCode",{parentName:"li"},"Programas")," / ",(0,d.kt)("inlineCode",{parentName:"li"},"Acess\xf3rios")," / ",(0,d.kt)("inlineCode",{parentName:"li"},"Ferramentas do Sistema")," /\n",(0,d.kt)("inlineCode",{parentName:"li"},"Tarefas Agendadas")),(0,d.kt)("li",{parentName:"ul"},"Abra com dois cliques a op\xe7\xe3o Adicionar Tarefa Agendada"),(0,d.kt)("li",{parentName:"ul"},"Clique em avan\xe7ar"),(0,d.kt)("li",{parentName:"ul"},"Clique em Procurar e localize o arquivo BackupSql.exe"),(0,d.kt)("li",{parentName:"ul"},"Clique em Abrir"),(0,d.kt)("li",{parentName:"ul"},"Selecione a periodicidade que deseja realizar o Backup -\nDiariamente, Semanalmente, Mensalmente, etc."),(0,d.kt)("li",{parentName:"ul"},"Clique em Avan\xe7ar"),(0,d.kt)("li",{parentName:"ul"},"Preencha com o hor\xe1rio que deseja que o backup seja iniciado"),(0,d.kt)("li",{parentName:"ul"},"Selecione a op\xe7\xe3o e data de in\xedcio do backup"),(0,d.kt)("li",{parentName:"ul"},"Digite o nome do usu\xe1rio do Windows e a senha (do usu\xe1rio com\npermiss\xe3o de administrador)"),(0,d.kt)("li",{parentName:"ul"},"Confirme a senha e clique em Avan\xe7ar"),(0,d.kt)("li",{parentName:"ul"},"Clique em Concluir e no hor\xe1rio e dias indicados, o backup ser\xe1\nrealizado automaticamente"),(0,d.kt)("li",{parentName:"ul"},"Se o local de backup for um HD externo ou pen drive, \xe9 necess\xe1rio\nque esteja conectado.")),(0,d.kt)("p",null,"Arquivo para download :\n",(0,d.kt)("a",{parentName:"p",href:"http://suporte.laudoimagem.com.br/download/BackupSQL.zip"},"BackupSQL.zip")))}p.isMDXComponent=!0}}]);