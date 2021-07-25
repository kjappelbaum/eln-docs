(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[7118],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},48972:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return m}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o={slug:"/uuid/ml-spectra-normalization"},l="Preprocessing",s={unversionedId:"machine_learning/common/normalization/README",id:"machine_learning/common/normalization/README",isDocsHomePage:!1,title:"Preprocessing",description:"In order to compare spectra it is required to create a matrix. In this matrix each row corresponds to a spectrum while the columns are the various values for a specific X. To create this matrix we apply various preprocessing methods that consist of:",source:"@site/docs/50_machine_learning/90_common/normalization/README.md",sourceDirName:"50_machine_learning/90_common/normalization",slug:"/uuid/ml-spectra-normalization",permalink:"/docs/eln/uuid/ml-spectra-normalization",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/50_machine_learning/90_common/normalization/README.md",version:"current",frontMatter:{slug:"/uuid/ml-spectra-normalization"},sidebar:"tutorialSidebar",previous:{title:"Deconvolution of spectra",permalink:"/docs/eln/uuid/e62a47d76949b3e2e1eaec845d486d81"},next:{title:"Spectra selection",permalink:"/docs/eln/uuid/ml-spectra-selection"}},c=[{value:"Filters",id:"filters",children:[]},{value:"Selecting the range",id:"selecting-the-range",children:[]},{value:"Exclusions",id:"exclusions",children:[]},{value:"Number of points",id:"number-of-points",children:[]},{value:"Matrix processing",id:"matrix-processing",children:[]},{value:"Large dataset",id:"large-dataset",children:[]},{value:"Preview",id:"preview",children:[]}],p={toc:c};function m(e){var t=e.components,o=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"preprocessing"},"Preprocessing"),(0,i.kt)("p",null,"In order to compare spectra it is required to create a matrix. In this matrix each row corresponds to a spectrum while the columns are the various values for a specific X. To create this matrix we apply various preprocessing methods that consist of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"filter the data in order to reduce the impact of sample preparation or experimental artifacts using various filters"),(0,i.kt)("li",{parentName:"ul"},"select the representative part of the spectra that is expected to be important for the analysis"),(0,i.kt)("li",{parentName:"ul"},"remove large peaks not characteristic to the sample (like water in NMR spectra) that could interfere with the analysis"),(0,i.kt)("li",{parentName:"ul"},"reduce the number of points in order to accelerate the analysis"),(0,i.kt)("li",{parentName:"ul"},"apply matrix related processing allowing to normalize the columns")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"preferences",src:n(1102).Z})),(0,i.kt)("h2",{id:"filters"},"Filters"),(0,i.kt)("p",null,"You may also apply various ",(0,i.kt)("inlineCode",{parentName:"p"},"Filters")," that allows to normalize or transform the data. Among those filters we have:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Center mean"),(0,i.kt)("li",{parentName:"ul"},"Divide by SD (standard deviation)"),(0,i.kt)("li",{parentName:"ul"},"Rescale: set the min value to 0 and the max value to 1"),(0,i.kt)("li",{parentName:"ul"},"Normalize: set the sum of all the points to 1"),(0,i.kt)("li",{parentName:"ul"},"Align: create a peak picking between ",(0,i.kt)("inlineCode",{parentName:"li"},"from")," / ",(0,i.kt)("inlineCode",{parentName:"li"},"to")," and calculate the mean X value between the ",(0,i.kt)("inlineCode",{parentName:"li"},"nbPeaks")," highest peaks. The spectrum will be moved so that the mean has the ",(0,i.kt)("inlineCode",{parentName:"li"},"targetX")," value."),(0,i.kt)("li",{parentName:"ul"},"Pareto: Pareto scaling, which uses the square root of standard deviation as the scaling factor, circumvents the amplification of noise by retaining a small portion of magnitude information. ",(0,i.kt)("a",{parentName:"li",href:"https://dx.doi.org/10.1016/j.molstruc.2007.12.026"},"10.1016/j.molstruc.2007.12.026")),(0,i.kt)("li",{parentName:"ul"},"Savitzky-golay: smoothing spectra and calculate derivatives based on the following parameters:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"windowSize"),": smoothing window, must be an odd number"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"derivative"),": enter 0, 1 or 2"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"polynomial"),": the degree of the polynomial used to calculate SG"))),(0,i.kt)("li",{parentName:"ul"},"X function: a function that modifies the X axis based on the ",(0,i.kt)("inlineCode",{parentName:"li"},"x")," parameter. Like for example ",(0,i.kt)("inlineCode",{parentName:"li"},"log(x)")),(0,i.kt)("li",{parentName:"ul"},"Y function: a function that modifies the Y axis based on the ",(0,i.kt)("inlineCode",{parentName:"li"},"y")," parameter. Like for example ",(0,i.kt)("inlineCode",{parentName:"li"},"log10(y+1)"))),(0,i.kt)("p",null,"One classical preprocessing algorithm is ",(0,i.kt)("a",{parentName:"p",href:"http://wiki.eigenvector.com/index.php?title=Advanced_Preprocessing:_Sample_Normalization#SNV_.28Standard_Normal_Variate.29"},"Standard Normal Variate (SNV)"),". This preprocessing can be achieved by selecting the 2 options ",(0,i.kt)("inlineCode",{parentName:"p"},"Center mean")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Divide by SD"),"."),(0,i.kt)("h2",{id:"selecting-the-range"},"Selecting the range"),(0,i.kt)("p",null,"Only the information between the ",(0,i.kt)("inlineCode",{parentName:"p"},"From")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"To")," values of the range will be considered."),(0,i.kt)("h2",{id:"exclusions"},"Exclusions"),(0,i.kt)("p",null,"Depending on the analysis some region should be removed in order to improve the analysis. For example NMR spectroscopy in water yields to a large peak around 4.5ppm and using exclusion zone it can be removed from the analysis."),(0,i.kt)("h2",{id:"number-of-points"},"Number of points"),(0,i.kt)("p",null,"The data normalization process will select equidistant ",(0,i.kt)("inlineCode",{parentName:"p"},"Nb points")," between the ",(0,i.kt)("inlineCode",{parentName:"p"},"From")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"To")," values."),(0,i.kt)("h2",{id:"matrix-processing"},"Matrix processing"),(0,i.kt)("p",null,"Once all the previous filters have been applied we obtain a matrix in which rows represent the normalized spectra and columns represent the intensity of teach spectrum."),(0,i.kt)("p",null,"Some filters are using the columns for further processing like:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"PQN: Probabilistic Quotient Normalization (",(0,i.kt)("a",{parentName:"li",href:"https://dx.doi.org/10.1021/ac051632c"},"10.1021/ac051632c"),")"),(0,i.kt)("li",{parentName:"ul"},"Center mean: for each column the mean of the values will be centered"),(0,i.kt)("li",{parentName:"ul"},"Rescale (0 to 1): for each column the min value will be set to 0 and the max value to 1")),(0,i.kt)("h2",{id:"large-dataset"},"Large dataset"),(0,i.kt)("p",null,"The list of the spectra in the dataset is displayed in the following table:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"memory",src:n(1722).Z})),(0,i.kt)("p",null,"In some cases it is not possible to keep in memory the original spectra and the system will only keep the normalized spectra. Therefore, it will not be possible to change the normalization parameters anymore."),(0,i.kt)("h2",{id:"preview"},"Preview"),(0,i.kt)("p",null,"A preview of the normalized spectra as well as the exclusions zones will be displayed. This allows to fine tune the processing."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"preview",src:n(54174).Z})),(0,i.kt)("p",null,"The superimposed spectra can be manipulated without numerous ",(0,i.kt)("a",{parentName:"p",href:"/docs/eln/uuid/ml-spectra-visualization"},"advanced features described here"),"."))}m.isMDXComponent=!0},1722:function(e,t,n){"use strict";t.Z=n.p+"assets/images/memory-f995925c02a5c37acce133be68e47be4.png"},1102:function(e,t,n){"use strict";t.Z=n.p+"assets/images/preferences-b518b0a75cd1a8ca2f0ae40e77a810c4.png"},54174:function(e,t,n){"use strict";t.Z=n.p+"assets/images/preview-2193a0b4ffc682dd486602b86d3b09e3.png"}}]);