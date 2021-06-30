(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[9671],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return d}});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||n;return r?o.createElement(h,i(i({ref:t},c),{},{components:r})):o.createElement(h,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<n;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},426:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var o=r(2122),a=r(9756),n=(r(7294),r(3905)),i={slug:"/",sidebar_position:1},l="Getting started with the cheminfo ELN",s={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Getting started with the cheminfo ELN",description:"Check our videos:",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/docs/eln/",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/intro.md",version:"current",sidebarPosition:1,frontMatter:{slug:"/",sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"3d model",permalink:"/docs/eln/introduction/3dmodel/index"}},u=[{value:"How to use it",id:"how-to-use-it",children:[{value:"Create a sample:",id:"create-a-sample",children:[]},{value:"Browse your samples:",id:"browse-your-samples",children:[]},{value:"Tool set:",id:"tool-set",children:[]}]}],c={toc:u};function p(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getting-started-with-the-cheminfo-eln"},"Getting started with the cheminfo ELN"),(0,n.kt)("p",null,"Check our videos:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"General introduction about the website: ",(0,n.kt)("a",{parentName:"li",href:"https://youtu.be/SHN07asZaGc"},"https://youtu.be/SHN07asZaGc")),(0,n.kt)("li",{parentName:"ul"},"Adding new products: ",(0,n.kt)("a",{parentName:"li",href:"https://youtu.be/4UBwnFCBlvU"},"https://youtu.be/4UBwnFCBlvU"))),(0,n.kt)("p",null,"You may think of the cheminfo ELN as either a Laboratory Information Management System or as a repository for your spectroscopic data ","(","NMR, IR; MS",")"," with some helpful tools ","(","e.g. peak-picking, simulation",")","."),(0,n.kt)("h2",{id:"how-to-use-it"},"How to use it"),(0,n.kt)("p",null,"To store your samples you must first login with your Google account ","(","upper-right corner",")",". Public samples are available without login."),(0,n.kt)("h3",{id:"create-a-sample"},"Create a sample:"),(0,n.kt)("p",null,"Click on Add Sample. You will be prompted to a form requiring a Reference code and a Batch code. These codes combine to produce the unique Product reference that identifies the sample in the List of selected samples. We suggest that you use the first code to denote the process generating the material from which the sample was collected ","(","e.g. a Reaction",")"," and the second to denote the Fraction that conformed the sample analyzed ","(","e.g. a distillation fraction",")",". Alternatively you may just input an appropriate Reference code to identify the sample ","(","e.g. a CAS registry number",")"," and ignore the Batch code altogether."),(0,n.kt)("p",null,"Fill in the form and click Submit. A new line is created in the List of selected samples, and you are prompted to the Edit sample tab, where you can input your data."),(0,n.kt)("h3",{id:"browse-your-samples"},"Browse your samples:"),(0,n.kt)("p",null,"To the left you will find the List of selected samples. The following information is available:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Product reference: the sample\u2019s unique identifier"),(0,n.kt)("li",{parentName:"ul"},"Last modif.: Last modification date"),(0,n.kt)("li",{parentName:"ul"},"Structure: Chemical structure associated with the sample"),(0,n.kt)("li",{parentName:"ul"},"nb 1d: Number of 1D NMR spectra stored for the sample"),(0,n.kt)("li",{parentName:"ul"},"nb 2d: Number of 2D NMR spectra"),(0,n.kt)("li",{parentName:"ul"},"nb ms: Number of mass spectra"),(0,n.kt)("li",{parentName:"ul"},"nb IR: Number of infrared spectra")),(0,n.kt)("p",null,"Switch the group","*"," filter to either browse all samples you have access to ","(","including public samples",")"," or just your own ","(","mine",")",". Scroll down the List of selected samples and select the sample you want, or locate it with the Search for samples tool just above the list. There is also a Structure search tool where you can search samples by substructure or structure similarity."),(0,n.kt)("p",null,"Click on a sample to select it. You may now use the tool set to your right to pick peaks, simulate spectra and more. Double-clicking a sample takes you directly to the Open/edit sample tab."),(0,n.kt)("h3",{id:"tool-set"},"Tool set:"),(0,n.kt)("p",null,"To the right of the List of selected samples you find the tool set. Clicking on a tool icon will take you to a new tab where you can perform additional tasks:"),(0,n.kt)("p",null,"Structure search: Draw a chemical structure and search for samples that match it exactly, that are similar to it, or that contain it as a substructure."),(0,n.kt)("p",null,"Open/Edit sample: Input, upload, and edit the selected sample\u2019s data."),(0,n.kt)("p",null,"1D NMR peak-picking: Manage peak-picking of your 1D spectra. Generates a publication-ready list of peaks. Includes an automatic peak-picking tool to help you get started."),(0,n.kt)("p",null,"Overlay NMR: Superimpose up to three NMR spectra from your database or from a local file. This tool is available with no sample selected."),(0,n.kt)("p",null,"NMR predict: Predict and simulate 1H, 13C, COSY and HMBC spectra using state-of-the-art algorithms. You may also overlay the experimental spectrum with the prediction ","(","1D only",")","."))}p.isMDXComponent=!0}}]);