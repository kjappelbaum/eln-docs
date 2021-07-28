(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[7323],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||i;return n?r.createElement(d,o(o({ref:t},u),{},{components:n})):r.createElement(d,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},24270:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o={},l="Advanced filtering",c={unversionedId:"structural_analysis/mass/polycalc/includes/filteringFunction/index",id:"structural_analysis/mass/polycalc/includes/filteringFunction/index",isDocsHomePage:!1,title:"Advanced filtering",description:"Results may be filtered using a javascript syntax. The following variables are",source:"@site/docs/30_structural_analysis/mass/60_polycalc/includes/filteringFunction/index.md",sourceDirName:"30_structural_analysis/mass/60_polycalc/includes/filteringFunction",slug:"/structural_analysis/mass/polycalc/includes/filteringFunction/index",permalink:"/docs/eln/structural_analysis/mass/polycalc/includes/filteringFunction/index",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/30_structural_analysis/mass/60_polycalc/includes/filteringFunction/index.md",version:"current",frontMatter:{}},s=[],u={toc:s};function m(e){var t=e.components,o=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"advanced-filtering"},"Advanced filtering"),(0,i.kt)("p",null,"Results may be filtered using a ",(0,i.kt)("inlineCode",{parentName:"p"},"javascript")," syntax. The following variables are\navailable:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A, B, C ... the number of monomers"),(0,i.kt)("li",{parentName:"ul"},"mm: theoretical monoisotopic mass"),(0,i.kt)("li",{parentName:"ul"},"mz: theoretical m/z (taking into account ionzation)"),(0,i.kt)("li",{parentName:"ul"},"unsaturation: degree of unsaturation"),(0,i.kt)("li",{parentName:"ul"},"charge: total charge"),(0,i.kt)("li",{parentName:"ul"},"atoms.C, atoms.O, ...: number of corresponding atoms")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"filter function",src:n(92396).Z})),(0,i.kt)("p",null,"Based on those variables it is possible to write complex conditions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"(A+B)%2===0"),": the sum of the number of A monomer and B monomer should be even"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"A<B"),": the number of monomer A should be smaller than the number of monomer B"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"(A+B)>10 && atoms.N<5"),": there should be at least 10 monomers and less than 5 nitrogens")))}m.isMDXComponent=!0},92396:function(e,t,n){"use strict";t.Z=n.p+"assets/images/filterFct-5514ad9625a2193b93cbdcac049c606b.png"}}]);