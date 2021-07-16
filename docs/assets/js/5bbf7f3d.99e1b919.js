(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[3716],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},60425:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),s={},o="Relative mass and MF determination",l={unversionedId:"spectra/organic_chemistry/mass/view-and-process-hr-mass/relative/index",id:"spectra/organic_chemistry/mass/view-and-process-hr-mass/relative/index",isDocsHomePage:!1,title:"Relative mass and MF determination",description:"This view displays normally the mass of the peaks, but it is also possible to display relative mass to a specific peak.",source:"@site/docs/30_spectra/10_organic_chemistry/mass/view-and-process-hr-mass/relative/index.md",sourceDirName:"30_spectra/10_organic_chemistry/mass/view-and-process-hr-mass/relative",slug:"/spectra/organic_chemistry/mass/view-and-process-hr-mass/relative/index",permalink:"/docs/eln/spectra/organic_chemistry/mass/view-and-process-hr-mass/relative/index",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/30_spectra/10_organic_chemistry/mass/view-and-process-hr-mass/relative/index.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Entering a monoisotopic mass",permalink:"/docs/eln/spectra/organic_chemistry/mass/view-and-process-hr-mass/peakPicking/index"},next:{title:"Results table",permalink:"/docs/eln/spectra/organic_chemistry/mass/view-and-process-hr-mass/results/index"}},c=[],p={toc:c};function m(e){var t=e.components,s=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"relative-mass-and-mf-determination"},"Relative mass and MF determination"),(0,i.kt)("p",null,"This view displays normally the mass of the peaks, but it is also possible to display relative mass to a specific peak."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click on a peak to change the ",(0,i.kt)("inlineCode",{parentName:"li"},"Monoisotopic mass")," value"),(0,i.kt)("li",{parentName:"ol"},"Click on the checkbox ",(0,i.kt)("inlineCode",{parentName:"li"},"Relative mass")," on the top right")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"preferences",src:n(16338).Z})),(0,i.kt)("p",null,"It is also possible to display possible molecular formulas for the relative mass. Those are calculating using the following criteria:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"allowed atoms are based on the ",(0,i.kt)("inlineCode",{parentName:"li"},"Ranges")),(0,i.kt)("li",{parentName:"ul"},"only neutral loss are considered"),(0,i.kt)("li",{parentName:"ul"},"the charge of the entity loosing this neutral fragment is defined in ",(0,i.kt)("inlineCode",{parentName:"li"},"Charge"),", by default 1"),(0,i.kt)("li",{parentName:"ul"},"you should select ",(0,i.kt)("inlineCode",{parentName:"li"},"Show MF")," in order to annotate the peaks with the corresponding MF")),(0,i.kt)("p",null,"It is also possible to define the color of the MF annotation depending on the precision. By default, if no MF is found under a precision of 20ppm no MF is displayed."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"mass",src:n(20136).Z})))}m.isMDXComponent=!0},20136:function(e,t,n){"use strict";t.Z=n.p+"assets/images/mass-6fa10e5add53fa93e02d94456e3a1353.png"},16338:function(e,t,n){"use strict";t.Z=n.p+"assets/images/prefs-71d715ec1bede5207a3f9479b8d0c0c9.png"}}]);