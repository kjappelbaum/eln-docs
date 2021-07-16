(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[7654],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=s(n),f=o,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||i;return n?r.createElement(d,c(c({ref:t},u),{},{components:n})):r.createElement(d,c({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var s=2;s<i;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73627:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return a},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),c={},a="PubChem lookup",l={unversionedId:"tools/science/chemistry/pubchem/README",id:"tools/science/chemistry/pubchem/README",isDocsHomePage:!1,title:"PubChem lookup",description:"This view allows searching PubChem information based on a chemical structure.",source:"@site/docs/50_tools/science/chemistry/pubchem/README.md",sourceDirName:"50_tools/science/chemistry/pubchem",slug:"/tools/science/chemistry/pubchem/README",permalink:"/docs/eln/tools/science/chemistry/pubchem/README",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/50_tools/science/chemistry/pubchem/README.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"README",permalink:"/docs/eln/tools/science/chemistry/ocl-editor/stereo/README"},next:{title:"Spectra displayer",permalink:"/docs/eln/tools/science/spectra/mass/spectra-displayer"}},s=[],u={toc:s};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pubchem-lookup"},"PubChem lookup"),(0,i.kt)("p",null,"This view allows searching PubChem information based on a chemical structure."),(0,i.kt)("p",null,"After drawing a chemical structure, click on the 'Search PubChem' button."),(0,i.kt)("p",null,"The structure, encoded as a SMILES, will be searched on PubChem, and we will retrieve some important information concerning safety, computed properties and experimental data."),(0,i.kt)("p",null,"The first tab ",(0,i.kt)("inlineCode",{parentName:"p"},"GHS")," contains a combination of all the safety information submitted to PubChem."),(0,i.kt)("p",null,"The second tab ",(0,i.kt)("inlineCode",{parentName:"p"},"GHS Detailed")," will display the different providers of the safety information as well as the information they have submitted."),(0,i.kt)("p",null,"Finally, the 2 last tabs, ",(0,i.kt)("inlineCode",{parentName:"p"},"Computed")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Experimental")," contain respectively information that can be derived from the chemical structure as well as experimental data about the molecule."))}p.isMDXComponent=!0}}]);