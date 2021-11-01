(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[911],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},46120:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),c={},i="Creating access tokens",s={unversionedId:"for_developers/token/README",id:"for_developers/token/README",isDocsHomePage:!1,title:"Creating access tokens",description:"Access tokens can be used as alternative authentication mechanism to access certain documents of the ELN.",source:"@site/docs/90_for_developers/token/README.md",sourceDirName:"90_for_developers/token",slug:"/for_developers/token/README",permalink:"/docs/eln/for_developers/token/README",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/90_for_developers/token/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Backing up the system",permalink:"/docs/eln/installation/backup"}},l=[{value:"Creating user token",id:"creating-user-token",children:[]},{value:"Creating entry tokens",id:"creating-entry-tokens",children:[]},{value:"Deleting tokens",id:"deleting-tokens",children:[]}],u={toc:l};function p(e){var t=e.components,c=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"creating-access-tokens"},"Creating access tokens"),(0,a.kt)("p",null,"Access tokens can be used as alternative authentication mechanism to access certain documents of the ELN.\nToken can be created for samples and entries and with different rights."),(0,a.kt)("p",null,"Especially useful are tokens when you want to programmatically access certain documents of the ELN. You can do so, for example, using our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cheminfo-py/cheminfopy"},"cheminfopy")," library. But you can also use tokens to give collaborators a URL with which they can\naccess certain documents of the ELN, e.g., to see one specific sample. This view allows creating bespoke tokens."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6696).Z})),(0,a.kt)("p",null,"For all tokens, the view will display some useful URLs in the bottom right."),(0,a.kt)("h2",{id:"creating-user-token"},"Creating user token"),(0,a.kt)("p",null,'To create a user token you only need to click the button "create user token" in the bottom left box.\nA new token of type ',(0,a.kt)("inlineCode",{parentName:"p"},"user")," will then show up in the top right table. With user tokens you can access all entries for a user."),(0,a.kt)("p",null,'For example, clicking the link under the heading "List all accessible entries:" will lead you to a page which you can find a JSON document will all entries.'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(17684).Z})),(0,a.kt)("h2",{id:"creating-entry-tokens"},"Creating entry tokens"),(0,a.kt)("p",null,'In some cases, you only want to allow access to specific samples. In this case, you can select the samples of interest can then create tokens for them by clicking the "+" icon.'),(0,a.kt)("h2",{id:"deleting-tokens"},"Deleting tokens"),(0,a.kt)("p",null,"You can delete any token by just clicking at the trash can icon."))}p.isMDXComponent=!0},17684:function(e,t,n){"use strict";t.Z=n.p+"assets/images/all_entries-1127441c27f5ae00a9db3c60f2bfba5a.png"},6696:function(e,t,n){"use strict";t.Z=n.p+"assets/images/tokenview-535ebba5d14141d6845ca34345ab41ae.png"}}]);