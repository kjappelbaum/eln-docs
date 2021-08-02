(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[3878],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(r),d=a,m=h["".concat(c,".").concat(d)]||h[d]||u[d]||i;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},10981:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),o={},s="A brief history",c={unversionedId:"introduction/history/README",id:"introduction/history/README",isDocsHomePage:!1,title:"A brief history",description:"In 1996 Luc Patiny has created a Belgian company, ChemExper sprl, that allows to search for free for commercially available chemicals. It was providing the first substruture search engine on the internet in which you could draw, thanks to a java appelt, a chemical structure.",source:"@site/docs/10_introduction/10_history/README.md",sourceDirName:"10_introduction/10_history",slug:"/introduction/history/README",permalink:"/docs/eln/introduction/history/README",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/10_introduction/10_history/README.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting started with the cheminfo ELN",permalink:"/docs/eln/"},next:{title:"Hide/Show sample",permalink:"/docs/eln/introduction/hidden/index"}},l=[],p={toc:l};function u(e){var t=e.components,o=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"a-brief-history"},"A brief history"),(0,i.kt)("p",null,"In 1996 Luc Patiny has created a Belgian company, ChemExper sprl, that allows to search for free for commercially available chemicals. It was providing the first substruture search engine on the internet in which you could draw, thanks to a java appelt, a chemical structure."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"ccd.png",src:r(16675).Z})),(0,i.kt)("p",null,"This first search engine was done using ",(0,i.kt)("inlineCode",{parentName:"p"},"4D")," search engine and at that time even the HTTP server had to be developed using direct access to a TCP library. In 2000 we have also ",(0,i.kt)("a",{target:"_blank",href:r(93902).Z},"published")," in a journal that disappeared in the meantime ... a way to share spectra directly on the internet."),(0,i.kt)("p",null,"Later this search engine has been rewritten from scratch in Java and since 2005 research data from the institute of chemistry of the University of Lausanne were stored in a mysql database. At the beginning it was only possible to store mass spectra, NMR spectra, infrared spectra, ultraviolet spectra, circular dichroism, x-ray structure and chromatography. All the data were converted before importation to the IUPAC supported format: JCAMP-DX."),(0,i.kt)("p",null,"On first January 2008 over 10'000 samples were already created in this database."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"2008.png",src:r(86591).Z})),(0,i.kt)("p",null,"This project grew and we quickly reached over 100'000 samples in the database. It was based on one big project that became difficult to maintain and to develop. Moreover we wanted to have the same code in the browser and on the server and with the disappearance of Java applets it became impossible."),(0,i.kt)("p",null,"In 2014 a group of 4 people (Norman Pellet, Micha\xebl Zasso, Daniel Kostro and Luc Patiny) started to redesign the full system based on a modular approach. At that time Javascript was becoming a 'real' language and advanced scientific application in the browser could be foreseen. This development has led to over 200 open-source scientific libraries widely used (over 100'000 downloads per week) and exhaustively tested. Those packages are present in the following GitHub organizations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cheminfo"},"https://github.com/cheminfo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/mljs"},"https://github.com/mljs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/image-js"},"https://github.com/image-js"))),(0,i.kt)("p",null,"Currently it is over 60 developers that have contributed to those projects !"),(0,i.kt)("p",null,"Based on those basic building blocks various more advanced projects were achieved. Among the best known we may cite:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.c6h6.org"},"https://www.c6h6.org")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.chemcalc.org"},"https://www.chemcalc.org")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.nmrium.org"},"https://www.nmrium.org")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wikipedia.cheminfo.org"},"https://wikipedia.cheminfo.org")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.cheminfo.org"},"https://www.cheminfo.org")," (a website with various application prototypes)")))}u.isMDXComponent=!0},93902:function(e,t,r){"use strict";t.Z=r.p+"assets/files/sharing-products-3852d84316f0a2dd67b0d51ac6929978.pdf"},86591:function(e,t,r){"use strict";t.Z=r.p+"assets/images/2008-9ece9a4c43ae3d7c92323e1405d06c02.png"},16675:function(e,t,r){"use strict";t.Z=r.p+"assets/images/ccd-26d6f1f8e90fd261816705b96ea79115.png"}}]);