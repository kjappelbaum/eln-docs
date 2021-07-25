(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[3752],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),f=a,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||l;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70692:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),o={},i="MF supported syntax",s={unversionedId:"structural_analysis/mass/polycalc/mf/index",id:"structural_analysis/mass/polycalc/mf/index",isDocsHomePage:!1,title:"MF supported syntax",description:"* Commas refer to an \u201cOR\u201d choice.",source:"@site/docs/30_structural_analysis/mass/polycalc/mf/index.md",sourceDirName:"30_structural_analysis/mass/polycalc/mf",slug:"/structural_analysis/mass/polycalc/mf/index",permalink:"/docs/eln/structural_analysis/mass/polycalc/mf/index",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/30_structural_analysis/mass/polycalc/mf/index.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Advanced filtering",permalink:"/docs/eln/structural_analysis/mass/polycalc/filteringFunction/index"},next:{title:"Mass spectra displayer",permalink:"/docs/eln/structural_analysis/mass/polycalc/spectrumDisplayer/index"}},c=[],u={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"mf-supported-syntax"},"MF supported syntax"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Commas refer to an \u201cOR\u201d choice."),(0,l.kt)("li",{parentName:"ul"},"To refer to MF ranges, use hyphens:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Na0-100 \u2192 screens out the contribution of zero to 100 atoms of Na"))),(0,l.kt)("li",{parentName:"ul"},"To refer to Molecular Formula differences, add negative numbers:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Na-1 NH4 \u2192 calculates the difference in mass between Na and NH4"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"Be creative!")," Use negative atom counts to simulate the presence of altered monomer units, oxidized end-groups, terminated chains, chain transfer reactions, etc\u2026")))),(0,l.kt)("p",null,"A few examples of supported MF syntax:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"H-1Cl (to refer to a chlorination reaction where the molecule lost an H to gain a Cl)"),(0,l.kt)("li",{parentName:"ul"},"H-2 (loss of 2 hydrogens)"),(0,l.kt)("li",{parentName:"ul"},"CH3CH2Cl (you may repeat many times the same element)"),(0,l.kt)("li",{parentName:"ul"},"C0-8 H0-8 (you may define ranges of elements)"),(0,l.kt)("li",{parentName:"ul"},"RuClH(CO)(PPh3)3 (you can use parenthesis and groups like ",(0,l.kt)("inlineCode",{parentName:"li"},"Ph"),")"),(0,l.kt)("li",{parentName:"ul"},"C5(PhBu(EtCHBr)2)3 (you can use as many parentheses as you like)"),(0,l.kt)("li",{parentName:"ul"},"CDCl3 (you can use ",(0,l.kt)("inlineCode",{parentName:"li"},"D")," for ",(0,l.kt)("inlineCode",{parentName:"li"},"[2H]"),")"),(0,l.kt)("li",{parentName:"ul"},"[13C]","Cl4 (isotopes are specified in square brackets)"),(0,l.kt)("li",{parentName:"ul"},"C{80,20} (non-natural isotopic abundance can be specified using curly brackets, here 80% ",(0,l.kt)("sup",null,"12"),"C and 20% ",(0,l.kt)("sup",null,"13"),"C)")))}p.isMDXComponent=!0}}]);