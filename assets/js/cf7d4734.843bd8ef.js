"use strict";(self.webpackChunklaudo_imagem_faq=self.webpackChunklaudo_imagem_faq||[]).push([[2039],{3905:(a,e,o)=>{o.d(e,{Zo:()=>s,kt:()=>k});var r=o(67294);function t(a,e,o){return e in a?Object.defineProperty(a,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):a[e]=o,a}function n(a,e){var o=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),o.push.apply(o,r)}return o}function d(a){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?n(Object(o),!0).forEach((function(e){t(a,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(o,e))}))}return a}function i(a,e){if(null==a)return{};var o,r,t=function(a,e){if(null==a)return{};var o,r,t={},n=Object.keys(a);for(r=0;r<n.length;r++)o=n[r],e.indexOf(o)>=0||(t[o]=a[o]);return t}(a,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);for(r=0;r<n.length;r++)o=n[r],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(a,o)&&(t[o]=a[o])}return t}var u=r.createContext({}),l=function(a){var e=r.useContext(u),o=e;return a&&(o="function"==typeof a?a(e):d(d({},e),a)),o},s=function(a){var e=l(a.components);return r.createElement(u.Provider,{value:e},a.children)},p="mdxType",c={inlineCode:"code",wrapper:function(a){var e=a.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(a,e){var o=a.components,t=a.mdxType,n=a.originalType,u=a.parentName,s=i(a,["components","mdxType","originalType","parentName"]),p=l(o),m=t,k=p["".concat(u,".").concat(m)]||p[m]||c[m]||n;return o?r.createElement(k,d(d({ref:e},s),{},{components:o})):r.createElement(k,d({ref:e},s))}));function k(a,e){var o=arguments,t=e&&e.mdxType;if("string"==typeof a||t){var n=o.length,d=new Array(n);d[0]=m;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=a,i[p]="string"==typeof a?a:t,d[1]=i;for(var l=2;l<n;l++)d[l]=o[l];return r.createElement.apply(null,d)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},71375:(a,e,o)=>{o.r(e),o.d(e,{assets:()=>u,contentTitle:()=>d,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var r=o(87462),t=(o(67294),o(3905));const n={sidebar_position:13},d="Backup Banco de dados - Automatizado",i={unversionedId:"ajuda/backup-banco-de-dados--automatizado",id:"ajuda/backup-banco-de-dados--automatizado",title:"Backup Banco de dados - Automatizado",description:"Periodicidade sugerida: diariamente",source:"@site/docs/004-ajuda/013-backup-banco-de-dados--automatizado.md",sourceDirName:"004-ajuda",slug:"/ajuda/backup-banco-de-dados--automatizado",permalink:"/docs/ajuda/backup-banco-de-dados--automatizado",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/004-ajuda/013-backup-banco-de-dados--automatizado.md",tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"Backup Banco de dados",permalink:"/docs/ajuda/backup-banco-de-dados"},next:{title:"Backup de imagens",permalink:"/docs/ajuda/backup-de-imagens"}},u={},l=[],s={toc:l},p="wrapper";function c(a){let{components:e,...o}=a;return(0,t.kt)(p,(0,r.Z)({},s,o,{components:e,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"backup-banco-de-dados---automatizado"},"Backup Banco de dados - Automatizado"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},(0,t.kt)("em",{parentName:"strong"}," Periodicidade sugerida: diariamente"))),(0,t.kt)("p",null,"A Rotina de backup do Banco de dados automatizado, permitir\xe1 que o backup do banco de dados seja realizado sem a necessidade do usu\xe1rio abrir o programa de backup, digitr senha e aguardar a finaliza\xe7\xe3o."),(0,t.kt)("p",null,"Dispon\xedvel somente para banco de dados SQLServer Express"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Requisitos"),":"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Framework 2.0"),(0,t.kt)("li",{parentName:"ul"},"Permiss\xe3o de escrita na pasta que ir\xe1 salvar os backups"),(0,t.kt)("li",{parentName:"ul"},"Executar somente no Servidor do Laudo & Imagem"),(0,t.kt)("li",{parentName:"ul"},"Alterar o arquivo de configura\xe7\xe3o (BackupSql.exe.config) com as especifica\xe7\xf5es do banco de dados e local onde ser\xe3o armazenados os backups do banco de dados"),(0,t.kt)("li",{parentName:"ul"},"Para executar o backup execute o arquivo (BackupSql.exe)"),(0,t.kt)("li",{parentName:"ul"},"Usu\xe1rio do Windows com permiss\xe3o de Administrador"),(0,t.kt)("li",{parentName:"ul"},"Obrigat\xf3rio senha para usu\xe1rio do Windows com permiss\xe3o de administrador"),(0,t.kt)("li",{parentName:"ul"},"Servidor tem que permanecer ligado no hor\xe1rio agendado para backup")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Descri\xe7\xe3o"),":"),(0,t.kt)("p",null,'Define o drive e a pasta onde ser\xe1 armazenado o Arquivo de log na linha add key="pathLog" value="D:\\Backup\\"'),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"onde D:\\ \xe9 o drive"),(0,t.kt)("li",{parentName:"ul"},"onde Backup \xe9 a pasta onde ser\xe1 gravado o arquivo de log")),(0,t.kt)("p",null,'Define a pasta onde ser\xe1 armazenado o Arquivo de backups na linha add key="pathBackup" value="D:\\Backup\\"'),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"onde D:\\ \xe9 o drive; e"),(0,t.kt)("li",{parentName:"ul"},"Backup \xe9 a pasta onde ser\xe1 gravado o arquivo de backup do banco de dados")),(0,t.kt)("p",null,'Define o nome do banco para fazer backup na linha add key="nomeBanco" value="LaudoImagem"'),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"onde Laudoimagem \xe9 o nome do banco de dados")),(0,t.kt)("p",null,'Define a quantidade de backups que ser\xe1 armazenado na pasta na linha add key="qtdBackup" value="30"'),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"onde 30 \xe9 a quantidade de arquivos de backup do banco de dados que ser\xe1 armazenado na pasta")),(0,t.kt)("p",null,'Define a inst\xe2ncia do SQL Server na linha add key="Server" value="127.0.0.1\\SQLEXPRESS"'),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"onde 127.0.0.1 \xe9 o IP padr\xe3o do servidor"),(0,t.kt)("li",{parentName:"ul"},"onde sqlexpress \xe9 a inst\xe2ncia do SQL Server")),(0,t.kt)("p",null,'Define usu\xe1rio que ir\xe1 acessar o banco na linha add key="Usuario" value="sa"'),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"onde sa \xe9 o usu\xe1rio do banco de dados")),(0,t.kt)("p",null,'Define a senha do usu\xe1rio na linha add key="Senha" value="laudoimagem"'),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"onde laudoimagem \xe9 a senha do banco de dados (necess\xe1rio obter a senha do banco de dados com o suporte t\xe9cnico)")),(0,t.kt)("p",null,"Define o tempo para acesso ao banco (Caso apresente o erro de timeout aumente o tempo) --\x3e"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},'onde value="900" aumente 900 para n\xfameros maiores at\xe9 que consiga fazer o backup')),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Automatizar o backup do Banco de dados"),":"),(0,t.kt)("p",null,"Para automatizar, precisa acrescentar o execut\xe1vel como Tarefa do Windows"),(0,t.kt)("p",null,"Procedimento precisa ser configurado e realizado com usu\xe1rio administrador do Windows ou outro usu\xe1rio com permiss\xe3o de administrador"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Instru\xe7\xf5es para automatizar o backup do banco de dados"),":"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Fa\xe7a download dos arquivos de Backup e configura\xe7\xe3o do Backup"),(0,t.kt)("li",{parentName:"ul"},"Salve em uma pasta do C:\\ do computador que \xe9 o Servidor do Laudo & Imagem"),(0,t.kt)("li",{parentName:"ul"},"Entre em Iniciar / Programas / Acess\xf3rios / Ferramentas do Sistema / Tarefas Agendadas"),(0,t.kt)("li",{parentName:"ul"},"Abra com dois cliques a op\xe7\xe3o Adicionar Tarefa Agendada"),(0,t.kt)("li",{parentName:"ul"},"Clique em avan\xe7ar"),(0,t.kt)("li",{parentName:"ul"},"Clique em Procurar e localize o arquivo BackupSql.exe"),(0,t.kt)("li",{parentName:"ul"},"Clique em Abrir"),(0,t.kt)("li",{parentName:"ul"},"Selecione a periodicidade que deseja realizar o Backup - Diariamente, Semanalmente, Mensalmente, etc."),(0,t.kt)("li",{parentName:"ul"},"Clique em Avan\xe7ar"),(0,t.kt)("li",{parentName:"ul"},"Preencha com o hor\xe1rio que deseja que o backup seja iniciado"),(0,t.kt)("li",{parentName:"ul"},"Selecione a op\xe7\xe3o e data de in\xedcio do backup"),(0,t.kt)("li",{parentName:"ul"},"Digite o nome do usu\xe1rio do Windows e a senha (do usu\xe1rio com permiss\xe3o de administrador)"),(0,t.kt)("li",{parentName:"ul"},"Confirme a senha e clique em Avan\xe7ar"),(0,t.kt)("li",{parentName:"ul"},"Clique em Concluir e no hor\xe1rio e dias indicados, o backup ser\xe1 realizado automaticamente"),(0,t.kt)("li",{parentName:"ul"},"Se o local de backup for um HD externo ou pen drive, \xe9 necess\xe1rio que esteja conectado")),(0,t.kt)("p",null,"Arquivo para download : ",(0,t.kt)("a",{parentName:"p",href:"http://suporte.laudoimagem.com.br/download/BackupSQL.zip"},"BackupSQL.zip")))}c.isMDXComponent=!0}}]);