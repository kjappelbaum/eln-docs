(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[8924],{3905:function(e,t,i){"use strict";i.d(t,{Zo:function(){return u},kt:function(){return f}});var n=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(i),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return i?n.createElement(m,r(r({ref:t},u),{},{components:i})):n.createElement(m,r({ref:t},u))}));function f(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=i.length,r=new Array(a);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<a;c++)r[c]=i[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},17584:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var n=i(22122),o=i(19756),a=(i(67294),i(3905)),r={},l="Isotopic distribution from MF or chemical structure",s={unversionedId:"structural_analysis/mass/isotopic-distribution/README",id:"structural_analysis/mass/isotopic-distribution/README",isDocsHomePage:!1,title:"Isotopic distribution from MF or chemical structure",description:"This tool allows to calculate the theoretical distribution and monoisotopic mass from a MF, allowing predefined groups, chemical modification of amino acids, specification of a given isotope, and modification of the isotopic abundance.",source:"@site/docs/30_structural_analysis/mass/isotopic-distribution/README.md",sourceDirName:"30_structural_analysis/mass/isotopic-distribution",slug:"/structural_analysis/mass/isotopic-distribution/README",permalink:"/docs/eln/structural_analysis/mass/isotopic-distribution/README",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/30_structural_analysis/mass/isotopic-distribution/README.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"README",permalink:"/docs/eln/structural_analysis/mass/introduction/README"},next:{title:"Peptide and nucleotide fragmentation",permalink:"/docs/eln/structural_analysis/mass/peptide-and-nucleotide-fragmentation"}},c=[{value:"Molecular formula",id:"molecular-formula",children:[{value:"Use of any atom",id:"use-of-any-atom",children:[]},{value:"Salt",id:"salt",children:[]},{value:"Predefined groups",id:"predefined-groups",children:[]},{value:"Use of specific isotope",id:"use-of-specific-isotope",children:[]},{value:"Specify the isotopic abundance",id:"specify-the-isotopic-abundance",children:[]},{value:"Specify the charges and atoms removal",id:"specify-the-charges-and-atoms-removal",children:[]},{value:"Use of parenthesis",id:"use-of-parenthesis",children:[]},{value:"Chemical modification of any predefined group",id:"chemical-modification-of-any-predefined-group",children:[]}]},{value:"Pasting experimental data",id:"pasting-experimental-data",children:[]}],u={toc:c};function p(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"isotopic-distribution-from-mf-or-chemical-structure"},"Isotopic distribution from MF or chemical structure"),(0,a.kt)("p",null,"This tool allows to calculate the theoretical distribution and monoisotopic mass from a MF, allowing predefined groups, chemical modification of amino acids, specification of a given isotope, and modification of the isotopic abundance."),(0,a.kt)("p",null,"Please use a recent version of Google Chrome."),(0,a.kt)("h2",{id:"molecular-formula"},"Molecular formula"),(0,a.kt)("h3",{id:"use-of-any-atom"},"Use of any atom"),(0,a.kt)("p",null,"You may use any of the stable elements."),(0,a.kt)("h3",{id:"salt"},"Salt"),(0,a.kt)("p",null,"Atom groups can be separated by ",(0,a.kt)("inlineCode",{parentName:"p"},"."),"."),(0,a.kt)("p",null,"Example: C100.C110.C120"),(0,a.kt)("h3",{id:"predefined-groups"},"Predefined groups"),(0,a.kt)("p",null,"Over 100 predefined groups like Et, Tos, Ala are defined in the system and can be used in a molecular formula."),(0,a.kt)("h3",{id:"use-of-specific-isotope"},"Use of specific isotope"),(0,a.kt)("p",null,"Specific isotopes should be written in []."),(0,a.kt)("p",null,"Ex:","[13C]","50","[12C]","50 (molecule with 50 atoms of ",(0,a.kt)("sup",null,"13"),"C and 50 atoms of ",(0,a.kt)("sup",null,"12"),"C)"),(0,a.kt)("h3",{id:"specify-the-isotopic-abundance"},"Specify the isotopic abundance"),(0,a.kt)("p",null,"Specific isotopic abundances should be written in {}."),(0,a.kt)("p",null,"Ex:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"C10C{50,50}10 (molecule with 10 atoms of natural abundance carbons and 10 atoms of enriched C (50% of ",(0,a.kt)("sup",null,"12"),"C and 50% of ",(0,a.kt)("sup",null,"13"),"C)"),(0,a.kt)("li",{parentName:"ul"},"C{50,50}10")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"C50-50",src:i(58983).Z})),(0,a.kt)("h3",{id:"specify-the-charges-and-atoms-removal"},"Specify the charges and atoms removal"),(0,a.kt)("p",null,"Multiple charges can be specified by (+n) in which ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," is an integer."),(0,a.kt)("p",null,"H removal (H-1)"),(0,a.kt)("p",null,"Ex: HAla10OH++; (H+)5; (H-5)(5-)"),(0,a.kt)("h3",{id:"use-of-parenthesis"},"Use of parenthesis"),(0,a.kt)("p",null,"It is allowed to use any number of parenthesis"),(0,a.kt)("p",null,"Ex: ((CH3)2CH)2NH"),(0,a.kt)("h3",{id:"chemical-modification-of-any-predefined-group"},"Chemical modification of any predefined group"),(0,a.kt)("p",null,"Any chemical modification can be written in () just after the predefined group"),(0,a.kt)("p",null,"Ex:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"HSer(H-1Ph)OH : Serine modified with a Phenyl + H removal"),(0,a.kt)("li",{parentName:"ul"},"HCys(H-1C2H3O2)OH: Carbamidomethylated cysteine")),(0,a.kt)("h2",{id:"pasting-experimental-data"},"Pasting experimental data"),(0,a.kt)("p",null,"Experimental data can be pasted and overlay with the calculated distribution (no similarity scores here). The data should be in a tab-delimited format, and you should simply copy / paste the data in the \u201cDrop or paste zone\u201d (first click somewhere outside this window to select the correct menu then paste in the window)"),(0,a.kt)("p",null,"If the spectrum is loaded correctly it will immediately appear in the central window."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Experimental",src:i(7734).Z})),(0,a.kt)("p",null,"You can zoom in and out (double click) to look at specific overlay m/z ranges"))}p.isMDXComponent=!0},58983:function(e,t,i){"use strict";t.Z=i.p+"assets/images/C50-50-c4e5931da2299506c1d11702ff28b8dc.png"},7734:function(e,t,i){"use strict";t.Z=i.p+"assets/images/experimental-bd81f15df4798441625a05096077af32.png"}}]);