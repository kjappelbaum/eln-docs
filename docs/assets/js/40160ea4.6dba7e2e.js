(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[579],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(n),d=i,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},14359:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var a=n(22122),i=n(19756),r=(n(67294),n(3905)),o={slug:"/uuid/5ba3ccc2681bc1ff7f370e78efd335c3"},l="Lipinski search",s={unversionedId:"samples/Lipinski-search/README",id:"samples/Lipinski-search/README",isDocsHomePage:!1,title:"Lipinski search",description:"This view allows you to filter your samples according to Lipinski's rule of five using an interactive parallel coordinates plot.",source:"@site/docs/20_samples/30_Lipinski-search/README.md",sourceDirName:"20_samples/30_Lipinski-search",slug:"/uuid/5ba3ccc2681bc1ff7f370e78efd335c3",permalink:"/docs/eln/uuid/5ba3ccc2681bc1ff7f370e78efd335c3",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/20_samples/30_Lipinski-search/README.md",tags:[],version:"current",frontMatter:{slug:"/uuid/5ba3ccc2681bc1ff7f370e78efd335c3"},sidebar:"tutorialSidebar",previous:{title:"Structure search",permalink:"/docs/eln/uuid/aaa5f97c7cde94741de2938b106bb0d4"},next:{title:"GC / LC \u2014 MS High resolution",permalink:"/docs/eln/structural_analysis/chromatography/gc-lc-ms-high-resolution"}},c=[],p={toc:c};function u(e){var t=e.components,o=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lipinski-search"},"Lipinski search"),(0,r.kt)("p",null,"This view allows you to filter your samples according to ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Lipinski%27s_rule_of_five"},"Lipinski's rule of five")," using an interactive parallel coordinates plot. "),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Lipinski's rule of five evaluates drug likeness of molecules. It states that, in general, an overall active drug has no more than one violation of the following criteria:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"molecular mass less than 500 Da"),(0,r.kt)("li",{parentName:"ul"},"no more than 5 hydrogen bond donors (number of nitrogen-hydrogen or oxygen-hydrogen bonds)"),(0,r.kt)("li",{parentName:"ul"},"no more than 10 hydrogen bond acceptors (number of nitrogen or oxygen atoms)"),(0,r.kt)("li",{parentName:"ul"},"an ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Octanol-water_partition_coefficient"},"octanol-water partition coefficient")," (log P) that does not exceed 5 (measures the relationship between lipophilicity and hydrophilicity of substance: the value is smaller than 1 for a substance that is more soluble in water and greater than one if it is more soluble in a fat-like solvent such as octanol)")),(0,r.kt)("p",{parentName:"div"},"Even if this rule gives an indication on the drug likeness of a molecule, it does not predict its activity. It has been highly influential in drug discovery but only 50 % of orally new chemical entities actually obey it."))),(0,r.kt)("p",null,"The interactive parallel coordinates plot contains the criteria of Lipinski's rule of five, as well as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the number of rotatable bonds"),(0,r.kt)("li",{parentName:"ul"},"the number of stereocenters"),(0,r.kt)("li",{parentName:"ul"},"the polar surface area (PSA) "),(0,r.kt)("li",{parentName:"ul"},"the water solubility of the molecule, given by log S ")),(0,r.kt)("p",null,"In order to filter your samples, simply select a range around the parameter of interest, e.g. logP, and the table will automatically update. You can simultaneously use filters on different parameters and define multiple ranges for the same criterion. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"selecting a range in parallel coordinates plot",src:n(64157).Z})),(0,r.kt)("p",null,"You can also move the selection vertically or adjust the size of the range."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"updating a range in parallel coordinates plot",src:n(44186).Z})),(0,r.kt)("p",null,"By clicking on a vertical bar outside the selected range you can reset the selection."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"resetting a range in parallel coordinates plot",src:n(75597).Z})),(0,r.kt)("p",null,"Also, the table has a hoover functionality, which will highlight the line of a compound in the parallel coordinates plot."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"hoover in parallel coordinates plot",src:n(12685).Z})),(0,r.kt)("p",null,"You can also drag and drop columns of the parallel coordinates, and switch coordinates. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"drag and drop",src:n(5745).Z})),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The color of the lines is given by the value of log P: blue for large positive log P (lipophilic compound), red for large negative log P (hydrophilic compound)."))),(0,r.kt)("p",null," To get access to information about a molecule, you can either double-click on the structure in the main table to select the first sample or select a specific sample in the ",(0,r.kt)("inlineCode",{parentName:"p"},"List of samples")," tab when several samples are available."))}u.isMDXComponent=!0},5745:function(e,t,n){"use strict";t.Z=n.p+"assets/images/drag-drop-f99b606e1556fea53a624e3a7f7e2140.gif"},12685:function(e,t,n){"use strict";t.Z=n.p+"assets/images/hoover-affbeaaa5928f9941d90df745c05f98d.gif"},75597:function(e,t,n){"use strict";t.Z=n.p+"assets/images/reset_range-c032161f86f3193c4f44b1b30c277542.gif"},64157:function(e,t,n){"use strict";t.Z=n.p+"assets/images/select-9d1048ea2591b4cf3ef44011b561e2a3.gif"},44186:function(e,t,n){"use strict";t.Z=n.p+"assets/images/update_range-c965aec646aaacbcc4662acf5a439ba0.gif"}}]);