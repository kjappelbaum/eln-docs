(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[1817],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},45083:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),o={},c="Nucleic and peptidic sequence",l={unversionedId:"spectra/organic_chemistry/mass/peptide-and-nucleotide/peptidicSequence/index",id:"spectra/organic_chemistry/mass/peptide-and-nucleotide/peptidicSequence/index",isDocsHomePage:!1,title:"Nucleic and peptidic sequence",description:"There are various possibilities to enter a peptidic sequence",source:"@site/docs/30_spectra/10_organic_chemistry/mass/peptide-and-nucleotide/peptidicSequence/index.md",sourceDirName:"30_spectra/10_organic_chemistry/mass/peptide-and-nucleotide/peptidicSequence",slug:"/spectra/organic_chemistry/mass/peptide-and-nucleotide/peptidicSequence/index",permalink:"/docs/eln/spectra/organic_chemistry/mass/peptide-and-nucleotide/peptidicSequence/index",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/30_spectra/10_organic_chemistry/mass/peptide-and-nucleotide/peptidicSequence/index.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Analyze high resolution mass spectra for peptides and nucleotides",permalink:"/docs/eln/spectra/organic_chemistry/mass/peptide-and-nucleotide/README"},next:{title:"README",permalink:"/docs/eln/spectra/organic_chemistry/mass/polycalc/README"}},p=[{value:"One letter code",id:"one-letter-code",children:[]},{value:"Three letter code",id:"three-letter-code",children:[]}],s={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nucleic-and-peptidic-sequence"},"Nucleic and peptidic sequence"),(0,a.kt)("p",null,"There are various possibilities to enter a peptidic sequence"),(0,a.kt)("h2",{id:"one-letter-code"},"One letter code"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"AAAHHHCCCKK")),(0,a.kt)("p",null,"A sequence may be entered as a one letter code. By default the system will add on the N-terminal side an hydrogen\n",(0,a.kt)("inlineCode",{parentName:"p"},"H")," and on the C-terminal side a ",(0,a.kt)("inlineCode",{parentName:"p"},"OH"),"."),(0,a.kt)("p",null,"N or C terminal modifications should be entered in parenthesis. For example if you have an amide function on\nthe C-terminal you should enter ",(0,a.kt)("inlineCode",{parentName:"p"},"AAAHHHCCCKK(NH2)"),"."),(0,a.kt)("p",null,"It is also possible to have side chain modifications by adding the modification after the one letter amino acid."),(0,a.kt)("p",null,"Examples:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AAAC(S-1Se)GGG"),": the sulfur of a cysteine is replace by a selenium (",(0,a.kt)("inlineCode",{parentName:"li"},"S-1"),", we remove a sulfur, ",(0,a.kt)("inlineCode",{parentName:"li"},"Se")," we add a selenium)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AAA(H-1Cl)GGG"),": we replace the hydrogen of an alanine by a chlorine"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AAAS(PO3H)"),": we have a phosphorylated serine")),(0,a.kt)("h2",{id:"three-letter-code"},"Three letter code"),(0,a.kt)("p",null,"Sequence may be entered as a 3 letter code. In this case lowercase / uppercase has to be respected and N and C terminal groups must be specified."),(0,a.kt)("p",null,"Examples:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"HAlaGlyProOH")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MeAla(Se)GlyNH2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"(CH3)Ala(Se)GlyNH2"))))}d.isMDXComponent=!0}}]);