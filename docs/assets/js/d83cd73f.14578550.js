(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[9919],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(h,o(o({ref:t},l),{},{components:r})):n.createElement(h,o({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88357:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),o={description:"Predict 2D HSQC and HMBC NMR spectra",slug:"/uuid/b50564ac9d207212f8e5ae8167a68433"},c="HSQC / HMBC prediction",s={unversionedId:"structural_analysis/nmr/predictions/hmbc/README",id:"structural_analysis/nmr/predictions/hmbc/README",isDocsHomePage:!1,title:"HSQC / HMBC prediction",description:"Predict 2D HSQC and HMBC NMR spectra",source:"@site/docs/30_structural_analysis/nmr/predictions/hmbc/README.md",sourceDirName:"30_structural_analysis/nmr/predictions/hmbc",slug:"/uuid/b50564ac9d207212f8e5ae8167a68433",permalink:"/docs/eln/uuid/b50564ac9d207212f8e5ae8167a68433",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/30_structural_analysis/nmr/predictions/hmbc/README.md",version:"current",frontMatter:{description:"Predict 2D HSQC and HMBC NMR spectra",slug:"/uuid/b50564ac9d207212f8e5ae8167a68433"},sidebar:"tutorialSidebar",previous:{title:"COSY prediction",permalink:"/docs/eln/uuid/b50564ac9d207212f8e5ae8167a607ed"},next:{title:"Spin system",permalink:"/docs/eln/structural_analysis/nmr/predictions/spin-system/index"}},u=[],l={toc:u};function p(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"hsqc--hmbc-prediction"},"HSQC / HMBC prediction"),(0,i.kt)("p",null,"Draw a chemical structure to predict and click Calculate to calculate and display its HMBC spectrum. Originally the structure of the currently selected sample will be already drawn so that you may go ahead and simulate its spectrum right away."),(0,i.kt)("p",null,"The simulated HMBC and the 1H projection are shown to the right, while the upper-mid module displays the chemical structure with hydrogen exploded. These two modules are linked, so that hovering over a peak in the spectrum will highlight the corresponding corresponding atoms in the structure and hovering over an atom will highlight the corresponding peaks in the spectrum."),(0,i.kt)("p",null,"You may also Paste or drop a molfile or SMILES to simulate a spectrum from local data and Drop or paste a JCamp to superimpose an experimental spectrum over the prediction."),(0,i.kt)("p",null,"Structure drawing is powered by ",(0,i.kt)("a",{parentName:"p",href:"http://peter-ertl.com/jsme/"},"JSME"),". 1H chemical shifts and coupling constants are predicted using ",(0,i.kt)("a",{parentName:"p",href:"http://www2.chemie.uni-erlangen.de/services/spinus/"},"Spinus"),". Simulation from predicted parameters uses the method described in ",(0,i.kt)("a",{parentName:"p",href:"http://www.sciencedirect.com/science/article/pii/S1090780710004003"},"DOI:10.1016/j.jmr.2010.12.008"),". HMBC correlations are calculated based on atom-to-atom paths in the molecule: a correlation is shown in the HMBC whenever a hydrogen is joined by a path traversing no less than Minimal number of bonds and no more than Maximal number of bonds to the carbon atom. You may adjust these Simulation parameters in the module right next to the Calculate button. A HSQC spectrum can be obtained by setting Maximal number of bonds and Minimal number of bonds to 1."))}p.isMDXComponent=!0}}]);