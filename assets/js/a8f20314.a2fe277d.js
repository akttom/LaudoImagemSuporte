"use strict";(self.webpackChunklaudo_imagem_faq=self.webpackChunklaudo_imagem_faq||[]).push([[6669],{3905:(e,a,o)=>{o.d(a,{Zo:()=>u,kt:()=>b});var r=o(7294);function n(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function t(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?t(Object(o),!0).forEach((function(a){n(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function d(e,a){if(null==e)return{};var o,r,n=function(e,a){if(null==e)return{};var o,r,n={},t=Object.keys(e);for(r=0;r<t.length;r++)o=t[r],a.indexOf(o)>=0||(n[o]=e[o]);return n}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(r=0;r<t.length;r++)o=t[r],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),s=function(e){var a=r.useContext(c),o=a;return e&&(o="function"==typeof e?e(a):i(i({},a),e)),o},u=function(e){var a=s(e.components);return r.createElement(c.Provider,{value:a},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var o=e.components,n=e.mdxType,t=e.originalType,c=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),l=s(o),m=n,b=l["".concat(c,".").concat(m)]||l[m]||p[m]||t;return o?r.createElement(b,i(i({ref:a},u),{},{components:o})):r.createElement(b,i({ref:a},u))}));function b(e,a){var o=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var t=o.length,i=new Array(t);i[0]=m;var d={};for(var c in a)hasOwnProperty.call(a,c)&&(d[c]=a[c]);d.originalType=e,d[l]="string"==typeof e?e:n,i[1]=d;for(var s=2;s<t;s++)i[s]=o[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},1333:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>t,metadata:()=>d,toc:()=>s});var r=o(7462),n=(o(7294),o(3905));const t={sidebar_position:2},i="Backup Banco de dados manual",d={unversionedId:"versao-5.0/instrucoes-de-instalacao/backup/backup-banco-de-dados-manual",id:"versao-5.0/instrucoes-de-instalacao/backup/backup-banco-de-dados-manual",title:"Backup Banco de dados manual",description:"Periodicidade sugerida: diariamente",source:"@site/docs/003-versao-5.0/008-instrucoes-de-instalacao/005-backup/002-backup-banco-de-dados-manual.md",sourceDirName:"003-versao-5.0/008-instrucoes-de-instalacao/005-backup",slug:"/versao-5.0/instrucoes-de-instalacao/backup/backup-banco-de-dados-manual",permalink:"/docs/versao-5.0/instrucoes-de-instalacao/backup/backup-banco-de-dados-manual",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/003-versao-5.0/008-instrucoes-de-instalacao/005-backup/002-backup-banco-de-dados-manual.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introdu\xe7\xe3o",permalink:"/docs/versao-5.0/instrucoes-de-instalacao/backup/intro"},next:{title:"Backup Banco de dados automatizado",permalink:"/docs/versao-5.0/instrucoes-de-instalacao/backup/backup-banco-de-dados-automatizado"}},c={},s=[{value:"Periodicidade sugerida: diariamente",id:"periodicidade-sugerida-diariamente",level:2},{value:"Restaurar o banco de dados",id:"restaurar-o-banco-de-dados",level:2}],u={toc:s},l="wrapper";function p(e){let{components:a,...o}=e;return(0,n.kt)(l,(0,r.Z)({},u,o,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"backup-banco-de-dados-manual"},"Backup Banco de dados manual"),(0,n.kt)("h2",{id:"periodicidade-sugerida-diariamente"},"Periodicidade sugerida: diariamente"),(0,n.kt)("p",null,"Para fazer o backup do banco de dados:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"O backup deve ser feito no computador que \xe9 o servidor do Laudo\n& Imagem"),(0,n.kt)("li",{parentName:"ol"},"Clique em ",(0,n.kt)("inlineCode",{parentName:"li"},"Iniciar")," / ",(0,n.kt)("inlineCode",{parentName:"li"},"Programas")," / ",(0,n.kt)("inlineCode",{parentName:"li"},"Laudo & Imagem")," / ",(0,n.kt)("inlineCode",{parentName:"li"},"Backup &\nRestore"),"."),(0,n.kt)("li",{parentName:"ol"},"Ao executar o programa de Backup a tela de login do Laudo &\nImagem ser\xe1 exibida.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Entre com o usu\xe1rio e a senha do administrador e pressione ",(0,n.kt)("inlineCode",{parentName:"li"},"Ok"),"."))),(0,n.kt)("li",{parentName:"ol"},"Selecione a guia Backup"),(0,n.kt)("li",{parentName:"ol"},"Indique o caminho completo onde ser\xe1 salvo o backup.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"O backup de banco de dados somente poder\xe1 ser feito no HD do\nservidor, em drivers do servidor ou HD externo."))),(0,n.kt)("li",{parentName:"ol"},"Como exemplo, se voc\xea estiver fazendo o backup para um drive\n",(0,n.kt)("inlineCode",{parentName:"li"},"F")," , digite o caminho onde ser\xe1 gravado o arquivo de backup.\nEx: ",(0,n.kt)("inlineCode",{parentName:"li"},"F:\\LAUDOIMAGEM\\BAK\\LAUDOIMAGEM.BAK"),", onde ",(0,n.kt)("inlineCode",{parentName:"li"},"F")," \xe9 um pen\ndrive, HD externo ou drive da rede mapeado no seu computador.\nO nome do arquivo pode variar, mas a extens\xe3o de arquivo .BAK \xe9\nobrigat\xf3ria."),(0,n.kt)("li",{parentName:"ol"},"Clique no bot\xe3o Backup"),(0,n.kt)("li",{parentName:"ol"},"Ao t\xe9rmino, uma mensagem aparecer\xe1 indicando que o backup foi\nexecutado com sucesso")),(0,n.kt)("h2",{id:"restaurar-o-banco-de-dados"},"Restaurar o banco de dados"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"O banco de dados somente dever\xe1 ser restaurado em \xfaltima\ninst\xe2ncia, no caso de formata\xe7\xe3o do HD, por exemplo.")),(0,n.kt)("p",null,"Antes de fazer isso, por favor consulte nosso suporte t\xe9cnico para\numa orienta\xe7\xe3o espec\xedfica para o seu caso."),(0,n.kt)("p",null,"O registro da licen\xe7a fica no banco de dados e o risco de perder,\ncaso os procedimentos n\xe3o sejam feitos da forma correta \xe9 grande."),(0,n.kt)("p",null,"Se perdido o registro da licen\xe7a, ter\xe1 que ser adquirida uma nova\nlicen\xe7a."))}p.isMDXComponent=!0}}]);