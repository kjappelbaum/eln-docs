(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[6996],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47346:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),a={slug:"/uuid/fbdbb5810ac56421b0a8509e627060cf"},s="Isotherm analysis",l={unversionedId:"physical_chemistry/isotherm/README",id:"physical_chemistry/isotherm/README",isDocsHomePage:!1,title:"Isotherm analysis",description:"The adhesion of atoms, ions or molecules can be described through adsorption isotherms. If the molecule to be adsorbed (i.e. adsorbate) is a gas, its amount is plotted against its pressure, if it consists of a liquid phase solute, it is plotted as a function of the concentration. In both cases, the process occurs at a constant temperature and it corresponds to a surface phenomenom.",source:"@site/docs/40_physical_chemistry/isotherm/README.md",sourceDirName:"40_physical_chemistry/isotherm",slug:"/uuid/fbdbb5810ac56421b0a8509e627060cf",permalink:"/docs/eln/uuid/fbdbb5810ac56421b0a8509e627060cf",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/40_physical_chemistry/isotherm/README.md",tags:[],version:"current",frontMatter:{slug:"/uuid/fbdbb5810ac56421b0a8509e627060cf"},sidebar:"tutorialSidebar",previous:{title:"Mercury Porosimetry analysis",permalink:"/docs/eln/uuid/896a7068d4d8a48488b9e9531d6bd4cb"},next:{title:"Current / Voltage (IV) curves",permalink:"/docs/eln/uuid/f2ddd6af4507d2da8ffa42acd925d33b"}},c=[{value:"Upload",id:"upload",children:[]},{value:"Visualization",id:"visualization",children:[]}],u={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"isotherm-analysis"},"Isotherm analysis"),(0,i.kt)("p",null,"The adhesion of atoms, ions or molecules can be described through ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Adsorption#Single-molecule_explanation"},"adsorption isotherms"),". If the molecule to be adsorbed (i.e. adsorbate) is a gas, its amount is plotted against its pressure, if it consists of a liquid phase solute, it is plotted as a function of the concentration. In both cases, the process occurs at a constant temperature and it corresponds to a surface phenomenom."),(0,i.kt)("p",null,"There exist two types of adsorption:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Physisorption: characteristic of weak Van der Waals and electrostatic interactions;"),(0,i.kt)("li",{parentName:"ul"},"Chemisorption: characteristic of covalent bonds, meaning it involves a chemical reaction.")),(0,i.kt)("p",null,"This module allows visualizing and processing (single-component) isotherms."),(0,i.kt)("h2",{id:"upload"},"Upload"),(0,i.kt)("p",null,"Files can be uploaded either by drag-and-drop to the field on the left-hand-side or automatically from the instrument.\nThe files will appear in field 2. Note that you can only upload files to samples to which you have write access."),(0,i.kt)("p",null,"We currently support the file types (which are also automatically detected):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"xls")," files produces by Belsorp instruments"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"txt")," files produced by IGA instruments"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"txt")," files produced by micrometrics instruments"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"csv")," files produced by micrometrics instruments")),(0,i.kt)("p",null,"If multiple desorption/adsorption cycles are stored in one file they will also be converted to one ",(0,i.kt)("inlineCode",{parentName:"p"},"JCAMP")," file by our parsers."),(0,i.kt)("p",null,"If you need support for other file formats, open an issue on the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cheminfo/isotherm-analysis"},"GitHub repository")," or post a question in the ",(0,i.kt)("a",{parentName:"p",href:"https://groups.google.com/g/cheminfo"},"user forum"),"."),(0,i.kt)("h2",{id:"visualization"},"Visualization"),(0,i.kt)("p",null,"In the chart you can draw a rectangle to zoom and double click to reset. You can move the graphs by pressing ",(0,i.kt)("inlineCode",{parentName:"p"},"SHIFT \u21e7")," while dragging them."),(0,i.kt)("p",null,"If there are multiple experiments or columns in a file, you can select the ones which are shown using the dropdown selectors on the right."))}p.isMDXComponent=!0}}]);