(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[4879],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66066:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o={slug:"/uuid/ml-spectra-selection"},l="Spectra selection",c={unversionedId:"machine_learning/common/selection/README",id:"machine_learning/common/selection/README",isDocsHomePage:!1,title:"Spectra selection",description:"All the spectra analysis tools start with a phase of selection.",source:"@site/docs/50_machine_learning/90_common/selection/README.md",sourceDirName:"50_machine_learning/90_common/selection",slug:"/uuid/ml-spectra-selection",permalink:"/docs/eln/uuid/ml-spectra-selection",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/50_machine_learning/90_common/selection/README.md",version:"current",frontMatter:{slug:"/uuid/ml-spectra-selection"},sidebar:"tutorialSidebar",previous:{title:"Preprocessing",permalink:"/docs/eln/uuid/ml-spectra-normalization"},next:{title:"Spectra visualization",permalink:"/docs/eln/uuid/ml-spectra-visualization"}},s=[{value:"Select samples",id:"select-samples",children:[]},{value:"What&#39;s next ?",id:"whats-next-",children:[]}],p={toc:s};function u(e){var t=e.components,o=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"spectra-selection"},"Spectra selection"),(0,i.kt)("p",null,"All the spectra analysis tools start with a phase of selection."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"overview",src:n(47983).Z})),(0,i.kt)("h2",{id:"select-samples"},"Select samples"),(0,i.kt)("p",null,"In order to facilitate the analysis of the spectra it is advised to have samples containing representative spectra in order to evaluate the intra-variability as well as the reproducibility."),(0,i.kt)("p",null,"Selection of spectra to analyze is achieved with one of those 3 methods:"),(0,i.kt)("p",null,"At the level of the sample by either clicking on the ",(0,i.kt)("inlineCode",{parentName:"p"},"+"),", this will add all the spectra related to this sample or on the ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," on the top of the sample box to add all the spectra of all the selected samples."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"select sample",src:n(43697).Z})),(0,i.kt)("p",null,"If you select a sample it is also possible to add a specific spectrum by clicking on the ",(0,i.kt)("inlineCode",{parentName:"p"},"+")," at the level of the spectra list."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"select spectra",src:n(49067).Z})),(0,i.kt)("h2",{id:"whats-next-"},"What's next ?"),(0,i.kt)("p",null,"Once spectra have been selected, data normalization filters can be applied and ",(0,i.kt)("a",{parentName:"p",href:"/docs/eln/uuid/ml-spectra-normalization"},"more information is available here"),"."),(0,i.kt)("p",null,"The superimposed spectra can be manipulated without numerous ",(0,i.kt)("a",{parentName:"p",href:"/docs/eln/uuid/ml-spectra-visualization"},"advanced features described here"),"."))}u.isMDXComponent=!0},47983:function(e,t,n){"use strict";t.Z=n.p+"assets/images/overview-7589b8d19fa1e2f90d2054b3c6098d75.png"},43697:function(e,t,n){"use strict";t.Z=n.p+"assets/images/selectSample-576efbcaaea8e83a60f43715086c0902.png"},49067:function(e,t,n){"use strict";t.Z=n.p+"assets/images/selectSpectra-4e3a6332ddc1ab3002f4472db682e962.png"}}]);