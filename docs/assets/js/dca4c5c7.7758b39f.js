(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[3541],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,c=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=p(r),d=i,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||c;return r?n.createElement(h,o(o({ref:t},l),{},{components:r})):n.createElement(h,o({ref:t},l))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=r.length,o=new Array(c);o[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var p=2;p<c;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3610:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return a},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var n=r(2122),i=r(9756),c=(r(7294),r(3905)),o={description:"Predict 1D 13C NMR spectra"},a="13C prediction",s={unversionedId:"spectra/organic_chemistry/nmr/predictions/13c/README",id:"spectra/organic_chemistry/nmr/predictions/13c/README",isDocsHomePage:!1,title:"13C prediction",description:"Predict 1D 13C NMR spectra",source:"@site/docs/30_spectra/10_organic_chemistry/nmr/predictions/13c/README.md",sourceDirName:"30_spectra/10_organic_chemistry/nmr/predictions/13c",slug:"/spectra/organic_chemistry/nmr/predictions/13c/README",permalink:"/docs/eln/spectra/organic_chemistry/nmr/predictions/13c/README",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/30_spectra/10_organic_chemistry/nmr/predictions/13c/README.md",version:"current",frontMatter:{description:"Predict 1D 13C NMR spectra"},sidebar:"tutorialSidebar",previous:{title:"index",permalink:"/docs/eln/spectra/organic_chemistry/nmr/generator/setup/index"},next:{title:"1H prediction",permalink:"/docs/eln/spectra/organic_chemistry/nmr/predictions/1h/README"}},p=[],l={toc:p};function u(e){var t=e.components,r=(0,i.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"13c-prediction"},"13C prediction"),(0,c.kt)("p",null,"Draw a chemical structure to predict and click Calculate spectrum to calculate and display the simulated 13C NMR spectra. Originally the structure of the currently selected sample will be already drawn so that you may go ahead and simulate its spectrum right away."),(0,c.kt)("p",null,"The simulated spectrum is shown in the lower module; the upper-mid module displays the chemical structure with hydrogen exploded, and the upper right module displays the list of chemical shifts. These three modules are linked, so that hovering over a peak in the spectrum will highlight the corresponding row in the chemical shift list and the corresponding atoms in the structure, hovering over an atom will highlight the corresponding peak and chemical shift, etc."),(0,c.kt)("p",null,"You may also Paste or drop a molfile or SMILES to simulate a spectrum from local data and Drop or paste a JCamp to superimpose an experimental spectrum over the prediction."),(0,c.kt)("p",null,"Structure drawing is powered by ",(0,c.kt)("a",{parentName:"p",href:"http://peter-ertl.com/jsme/"},"JSME"),". NMR prediction is done with ",(0,c.kt)("a",{parentName:"p",href:"http://nmrshiftdb.nmr.uni-koeln.de/"},"NMRshiftDB"),"."))}u.isMDXComponent=!0}}]);