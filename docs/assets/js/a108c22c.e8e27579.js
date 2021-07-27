(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[4315],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=s(r),h=a,f=m["".concat(u,".").concat(h)]||m[h]||p[h]||c;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<c;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},33194:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var n=r(22122),a=r(19756),c=(r(67294),r(3905)),o={slug:"/uuid/aaa5f97c7cde94741de2938b106bb0d4"},i="Structure search",u={unversionedId:"samples/substructure-search/README",id:"samples/substructure-search/README",isDocsHomePage:!1,title:"Structure search",description:"- Choose filter group options: all searches in all structures, mine searches only entries that you have created.",source:"@site/docs/20_samples/20_substructure-search/README.md",sourceDirName:"20_samples/20_substructure-search",slug:"/uuid/aaa5f97c7cde94741de2938b106bb0d4",permalink:"/docs/eln/uuid/aaa5f97c7cde94741de2938b106bb0d4",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/20_samples/20_substructure-search/README.md",version:"current",frontMatter:{slug:"/uuid/aaa5f97c7cde94741de2938b106bb0d4"},sidebar:"tutorialSidebar",previous:{title:"Create and edit a sample",permalink:"/docs/eln/uuid/15c9a2dcd55c963fdedf2c18a1471b03"},next:{title:"Lipinski search",permalink:"/docs/eln/uuid/5ba3ccc2681bc1ff7f370e78efd335c3"}},s=[],l={toc:s};function p(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"structure-search"},"Structure search"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Choose filter group options: all searches in all structures, mine searches only entries that you have created."),(0,c.kt)("li",{parentName:"ul"},"Draw a structure in the left module."),(0,c.kt)("li",{parentName:"ul"},"Choose between three Search modes:",(0,c.kt)("ul",{parentName:"li"},(0,c.kt)("li",{parentName:"ul"},"substructure: search for samples containing the given substructure"),(0,c.kt)("li",{parentName:"ul"},"exact: search for exact matches of the structure"),(0,c.kt)("li",{parentName:"ul"},"similarity: search for samples with a similar structure."))),(0,c.kt)("li",{parentName:"ul"},"The center module displays the list of matching structures. Select the one you want."),(0,c.kt)("li",{parentName:"ul"},"The right module displays the list of samples associated with the selected structure. Double-clicking a row will take you back to the main tab, with the corresponding sample selected in the List of selected samples."),(0,c.kt)("li",{parentName:"ul"},"Double-clicking a row in the center module will take you directly to the first matching sample.")),(0,c.kt)("p",null,"Structure search uses the same algorithms implemented in ",(0,c.kt)("a",{parentName:"p",href:"http://www.openmolecules.org/datawarrior"},"Datawarrior"),". They are open source and available as part of openchemlib ","(",(0,c.kt)("a",{parentName:"p",href:"https://github.com/actelion/openchemlib"},"https://github.com/actelion/openchemlib"),", ",(0,c.kt)("a",{parentName:"p",href:"https://github.com/cheminfo/openchemlib-js"},"https://github.com/cheminfo/openchemlib-js"),")",". Structure edition is powered by ",(0,c.kt)("a",{parentName:"p",href:"http://peter-ertl.com/jsme/"},"JSME"),"."),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/eln/uuid/ocl-editor"},"OCL editor help")))}p.isMDXComponent=!0}}]);