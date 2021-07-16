(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[6650],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=p(n),d=a,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},75518:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i={slug:"/installation/backup"},c="Backing up the system",l={unversionedId:"for_developers/installation/backup/index",id:"for_developers/installation/backup/index",isDocsHomePage:!1,title:"Backing up the system",description:"Since CouchDB is an append-only database, using a rsync/rsnapshot-based solution is a safe option. For large database you may be interested the rsync option --append that will only append data onto shorter files and therefore not copy the full database.",source:"@site/docs/89_for_developers/installation/40_backup/index.md",sourceDirName:"89_for_developers/installation/40_backup",slug:"/installation/backup",permalink:"/docs/eln/installation/backup",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/89_for_developers/installation/40_backup/index.md",version:"current",frontMatter:{slug:"/installation/backup"},sidebar:"tutorialSidebar",previous:{title:"Customizing the deployment",permalink:"/docs/eln/installation/customization"},next:{title:"Creating access tokens",permalink:"/docs/eln/for_developers/token/README"}},p=[],s={toc:p};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"backing-up-the-system"},"Backing up the system"),(0,o.kt)("p",null,"Since CouchDB is an append-only database, using a ",(0,o.kt)("a",{parentName:"p",href:"https://rsync.samba.org/"},"rsync"),"/",(0,o.kt)("a",{parentName:"p",href:"https://rsnapshot.org/"},"rsnapshot"),"-based solution is a safe option. For large database you may be interested the ",(0,o.kt)("inlineCode",{parentName:"p"},"rsync")," option ",(0,o.kt)("inlineCode",{parentName:"p"},"--append")," that will only append data onto shorter files and therefore not copy the full database."),(0,o.kt)("p",null,"Alternatively, you can use the ",(0,o.kt)("a",{parentName:"p",href:"https://guide.couchdb.org/draft/replication.html"},"CouchDB replication feature to another server"),". You can conveniently set up replication from the ",(0,o.kt)("a",{parentName:"p",href:"https://couchdb.apache.org/fauxton-visual-guide/index.html"},"Fauxton graphical interface")," at the ",(0,o.kt)("inlineCode",{parentName:"p"},"_utils")," endpoint."))}u.isMDXComponent=!0}}]);