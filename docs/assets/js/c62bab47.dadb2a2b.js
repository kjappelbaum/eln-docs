(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[5484],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},69501:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i={description:"Predict 1D 13C NMR spectra",slug:"/uuid/b50564ac9d207212f8e5ae8167a45f3c"},c="13C prediction",s={unversionedId:"structural_analysis/nmr/predictions/13c/README",id:"structural_analysis/nmr/predictions/13c/README",isDocsHomePage:!1,title:"13C prediction",description:"Predict 1D 13C NMR spectra",source:"@site/docs/30_structural_analysis/nmr/predictions/13c/README.md",sourceDirName:"30_structural_analysis/nmr/predictions/13c",slug:"/uuid/b50564ac9d207212f8e5ae8167a45f3c",permalink:"/docs/eln/uuid/b50564ac9d207212f8e5ae8167a45f3c",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/30_structural_analysis/nmr/predictions/13c/README.md",version:"current",frontMatter:{description:"Predict 1D 13C NMR spectra",slug:"/uuid/b50564ac9d207212f8e5ae8167a45f3c"},sidebar:"tutorialSidebar",previous:{title:"NMR spectroscopy",permalink:"/docs/eln/structural_analysis/nmr/introduction/README"},next:{title:"HOSE code",permalink:"/docs/eln/structural_analysis/nmr/predictions/13c/hose_code/hose_code"}},l=[],u={toc:l};function p(e){var t=e.components,i=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"13c-prediction"},"13C prediction"),(0,o.kt)("p",null,"This tool allows you to predict the 13C NMR spectrum of your sample or any other molecule."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Overview")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("img",{alt:"C_predictions",src:r(45417).Z})),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},"Drag and drop module - paste a molfile or a SMILES string of a molecule"),(0,o.kt)("li",{parentName:"ol"},"Draw a chemical structure and predict module - draw the structure of the molecule"),(0,o.kt)("li",{parentName:"ol"},"Chemical structure with explicit hydrogens module - explicit representation of hydrogens in a molecule"),(0,o.kt)("li",{parentName:"ol"},"13C NMR spectrum module - predicted 13C spectrum of the chosen molecule"),(0,o.kt)("li",{parentName:"ol"},"Signal module - list of obtained peaks and the corresponding chemical shifts"),(0,o.kt)("li",{parentName:"ol"},"Drag and drop module - paste a JCAMP of an experimental spectrum for comparison")))),(0,o.kt)("p",null,"The structure of the currently selected sample will be already drawn so that you may go ahead and simulate its spectrum right away. If you wish to simulate the spectrum of another molecule, you can draw it or you can paste the structure in the form of a molfile or a SMILES string. Structure drawing is powered by ",(0,o.kt)("a",{parentName:"p",href:"http://peter-ertl.com/jsme/"},"JSME"),". You may also drop or paste a JCamp to superimpose an experimental spectrum over the prediction."),(0,o.kt)("p",null,"The simulated spectrum, the chemical structure with explicit hydrogens and the list of peaks modules are linked, so that hovering over an entry in the list will highlight the corresponding atom in the structure and the relevant peak in the spectrum."),(0,o.kt)("p",null,"NMR prediction is done with ",(0,o.kt)("a",{parentName:"p",href:"http://nmrshiftdb.nmr.uni-koeln.de/"},"NMRshiftDB"),". It is an NMR database for organic structures and their spectra. Using this information, in conjunction with the principle of ",(0,o.kt)("a",{parentName:"p",href:"/docs/eln/structural_analysis/nmr/predictions/13c/hose_code/hose_code"},"HOSE")," code, a machine learning model makes chemical shift predictions."))}p.isMDXComponent=!0},45417:function(e,t,r){"use strict";t.Z=r.p+"assets/images/C_predictions-0d4e6fed831bd95165790e5afd4e4385.png"}}]);