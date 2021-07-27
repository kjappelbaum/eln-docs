(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[4844],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||s;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},49079:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=n(22122),a=n(19756),s=(n(67294),n(3905)),i={},o="Relative mass and MF determination",l={unversionedId:"structural_analysis/mass/view-and-process-hr-mass/relative/index",id:"structural_analysis/mass/view-and-process-hr-mass/relative/index",isDocsHomePage:!1,title:"Relative mass and MF determination",description:"This view displays normally the mass of the peaks, but it is also possible to display relative mass to a specific peak.",source:"@site/docs/30_structural_analysis/mass/view-and-process-hr-mass/relative/index.md",sourceDirName:"30_structural_analysis/mass/view-and-process-hr-mass/relative",slug:"/structural_analysis/mass/view-and-process-hr-mass/relative/index",permalink:"/docs/eln/structural_analysis/mass/view-and-process-hr-mass/relative/index",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/30_structural_analysis/mass/view-and-process-hr-mass/relative/index.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Entering a monoisotopic mass",permalink:"/docs/eln/structural_analysis/mass/view-and-process-hr-mass/peakPicking/index"},next:{title:"Results table",permalink:"/docs/eln/structural_analysis/mass/view-and-process-hr-mass/results/index"}},c=[],u={toc:c};function p(e){var t=e.components,i=(0,a.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"relative-mass-and-mf-determination"},"Relative mass and MF determination"),(0,s.kt)("p",null,"This view displays normally the mass of the peaks, but it is also possible to display relative mass to a specific peak."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Click on a peak to change the ",(0,s.kt)("inlineCode",{parentName:"li"},"Monoisotopic mass")," value"),(0,s.kt)("li",{parentName:"ol"},"Click on the checkbox ",(0,s.kt)("inlineCode",{parentName:"li"},"Relative mass")," on the top right")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"preferences",src:n(95614).Z})),(0,s.kt)("p",null,"It is also possible to display possible molecular formulas for the relative mass. Those are calculating using the following criteria:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"allowed atoms are based on the ",(0,s.kt)("inlineCode",{parentName:"li"},"Ranges")),(0,s.kt)("li",{parentName:"ul"},"only neutral loss are considered"),(0,s.kt)("li",{parentName:"ul"},"the charge of the entity loosing this neutral fragment is defined in ",(0,s.kt)("inlineCode",{parentName:"li"},"Charge"),", by default 1"),(0,s.kt)("li",{parentName:"ul"},"you should select ",(0,s.kt)("inlineCode",{parentName:"li"},"Show MF")," in order to annotate the peaks with the corresponding MF")),(0,s.kt)("p",null,"It is also possible to define the color of the MF annotation depending on the precision. By default, if no MF is found under a precision of 20ppm no MF is displayed."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"mass",src:n(96616).Z})))}p.isMDXComponent=!0},96616:function(e,t,n){"use strict";t.Z=n.p+"assets/images/mass-6fa10e5add53fa93e02d94456e3a1353.png"},95614:function(e,t,n){"use strict";t.Z=n.p+"assets/images/prefs-71d715ec1bede5207a3f9479b8d0c0c9.png"}}]);