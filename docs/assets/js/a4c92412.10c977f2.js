(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[985],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return p}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),f=s(n),p=a,d=f["".concat(l,".").concat(p)]||f[p]||u[p]||i;return n?r.createElement(d,o(o({ref:t},m),{},{components:n})):r.createElement(d,o({ref:t},m))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},35784:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o={slug:"/uuid/65f84b002399eb79ec0f8bf145fbd24f"},c="Virtual combinatorial chemistry",l={unversionedId:"cheminformatics/virtual-combinatorial-chemistry/README",id:"cheminformatics/virtual-combinatorial-chemistry/README",isDocsHomePage:!1,title:"Virtual combinatorial chemistry",description:"In this view, you can generate a library of compounds based on a core molecule.",source:"@site/docs/60_cheminformatics/40_virtual-combinatorial-chemistry/README.md",sourceDirName:"60_cheminformatics/40_virtual-combinatorial-chemistry",slug:"/uuid/65f84b002399eb79ec0f8bf145fbd24f",permalink:"/docs/eln/uuid/65f84b002399eb79ec0f8bf145fbd24f",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/60_cheminformatics/40_virtual-combinatorial-chemistry/README.md",version:"current",frontMatter:{slug:"/uuid/65f84b002399eb79ec0f8bf145fbd24f"},sidebar:"tutorialSidebar",previous:{title:"Explore list of SMILES",permalink:"/docs/eln/uuid/b50564ac9d207212f8e5ae8167aeeed6"},next:{title:"Wikipedia chemical structures",permalink:"/docs/eln/uuid/037628b00519031c1df72b6eec3e721e"}},s=[],m={toc:s};function u(e){var t=e.components,o=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"virtual-combinatorial-chemistry"},"Virtual combinatorial chemistry"),(0,i.kt)("p",null,"In this view, you can generate a library of compounds based on a core molecule. "),(0,i.kt)("p",null,"Draw the core molecule that may contain commutable fragments using the R1, R2, R3,... Each group may only be present once. "),(0,i.kt)("p",null,'Select an empty space in the fragment list and draw the allowed fragment. The fragment must contain ONE "R" group that will be connected to the molecule. Choose which group among R1, R2, R3, ... it may replace by selecting the corresponding column. The number of possible combinations will be automatically updated as you add a new fragment or change its position. Click on ',(0,i.kt)("inlineCode",{parentName:"p"},"Generate library")," to display the list of molecules that correpond to your criteria. "),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"A list of common fragments is already available. Select the fragment of interest and its desired position to update your library. "))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"fragments",src:n(65771).Z})),(0,i.kt)("p",null,"An interactive parallel coordinates plot that contains properties of the selected molecules will appear. Those properties are related to ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Lipinski%27s_rule_of_five"},"Lipinski's rule of five"),". You will find the number of H donor and acceptor, molecular weight, log P, log S, polar surface area, number of rotatable bonds and number of stereoisomers for each molecule. "),(0,i.kt)("p",null,"You can apply filters on your list of molecules by selecting a vertical range on the interactive plot. The list will automatically update.\nTo know more about all the functionalities of the plot, ",(0,i.kt)("a",{parentName:"p",href:"/docs/eln/uuid/5ba3ccc2681bc1ff7f370e78efd335c3"},"click here"),". "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"filters",src:n(94673).Z})),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can download the generated library in two formats: SDF or SMILES."))))}u.isMDXComponent=!0},94673:function(e,t,n){"use strict";t.Z=n.p+"assets/images/filters-b9825a9debd6f9cf03a696da81c2d52c.gif"},65771:function(e,t,n){"use strict";t.Z=n.p+"assets/images/fragments-28430caf00a33fd417fa67222ff2d2ca.gif"}}]);