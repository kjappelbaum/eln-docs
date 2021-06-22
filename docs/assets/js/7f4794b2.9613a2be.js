(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[414],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9656:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),i={},l="Create and edit a sample",s={unversionedId:"samples/sample-edition/sample-edition",id:"samples/sample-edition/sample-edition",isDocsHomePage:!1,title:"Create and edit a sample",description:"You will see several modules covering the canvas and a few buttons. The buttons are there to Save your sample, to display this Help, and to generate a Report. The modules allow you to edit your sample\u2019s data, to upload your spectra, and to display your spectra and other non-editable sample attributes.",source:"@site/docs/20_samples/10_sample-edition/10_sample-edition.md",sourceDirName:"20_samples/10_sample-edition",slug:"/samples/sample-edition/sample-edition",permalink:"/docs/eln/samples/sample-edition/sample-edition",editUrl:"https://github.com/cheminfo/eln-docs/edit/master/website/docs/20_samples/10_sample-edition/10_sample-edition.md",version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Search",permalink:"/docs/eln/introduction/search/index"},next:{title:"index",permalink:"/docs/eln/samples/sample-edition/tips/binap/index"}},c=[],p={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-and-edit-a-sample"},"Create and edit a sample"),(0,a.kt)("p",null,"You will see several modules covering the canvas and a few buttons. The buttons are there to Save your sample, to display this Help, and to generate a Report. The modules allow you to edit your sample\u2019s data, to upload your spectra, and to display your spectra and other non-editable sample attributes."),(0,a.kt)("p",null,"Sample code: The sample\u2019s unique identifier, defined at creation ","(","i.e. CAS number",")",". Non-editable."),(0,a.kt)("p",null,"Creation date: The sample\u2019s creation date. Non-editable."),(0,a.kt)("p",null,"Modif. date: The date of the last modification to the sample\u2019s data. Non-editable."),(0,a.kt)("p",null,"Description: A brief description of the sample. Editable."),(0,a.kt)("p",null,"Structure editor: Edit the structure associated with the sample. Powered by ",(0,a.kt)("a",{parentName:"p",href:"http://peter-ertl.com/jsme/"},"JSME"),". If you are using ChemDraw you may \u2018copy as -",">"," molfile\u2019, go over the structure editor and press CTRL + V."),(0,a.kt)("p",null,"Physical: Read and edit the physical constants associated with the sample: boiling point ","(","bp",")",", melting point ","(","mp",")",", density and refractive index ","(","nd",")","."),(0,a.kt)("p",null,"MF and mw: Molecular formula and molecular weight associated with the sample. Editable."),(0,a.kt)("p",null,"Attachments: A list of all files attached ","(","e.g. jcamp files",")","."),(0,a.kt)("p",null,"Drop/Paste your NMR/MS/IR spectra: Drag and drop your spectra data to upload it. Creates a new entry in the NMR/MS/IR table. Only Jcamp format is acceptable for NMR. MS and IR spectra may be uploaded in other file formats such as PDF, but Jcamp is recommended."),(0,a.kt)("p",null,"NMR: Displays the list of NMR spectra uploaded. Click on the trash icon on the first column to delete the corresponding spectrum. Click on the download icon on either the Jcamp or FID column to download the fourier-transformed or untransformed data respectively. Clicking on a row displays the corresponding spectrum in the Selected spectrum module in the lower right."),(0,a.kt)("p",null,"MS: Displays the list of mass spectra uploaded. Click on the trash icon on the first column to delete the corresponding spectrum. Click on the download icon on the Jcamp, PDF or File column to download the spectrum in the corresponding format according to availability. Clicking on a row displays the spectrum in the Selected spectrum module in the lower right."),(0,a.kt)("p",null,"IR: Displays the list of infrared spectra uploaded. Click on the trash icon on the first column to delete the corresponding spectrum. Click on the download icon on the Jcamp, PDF or File column to download the spectrum in the corresponding format according to availability. Clicking on a row displays the spectrum in the Selected spectrum module to the lower right."),(0,a.kt)("p",null,"Selected spectrum: Displays the currently selected spectrum. Click, hold, and select an area to zoom on it. Double click to zoom back out. ","(","By default zoom is active only on the x-axis; to activate zoom on both the x and y-axis, which may be useful when working with 2D spectra, access the module\u2019s advanced configuration by right-clicking on it and choosing Parameters on the dropdown menu",")","."))}d.isMDXComponent=!0}}]);