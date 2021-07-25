(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[8953],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7785:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o={},s=void 0,c={unversionedId:"structural_analysis/includes/jcamp/README",id:"structural_analysis/includes/jcamp/README",isDocsHomePage:!1,title:"README",description:"JCAMP file format",source:"@site/docs/30_structural_analysis/includes/jcamp/README.md",sourceDirName:"30_structural_analysis/includes/jcamp",slug:"/structural_analysis/includes/jcamp/README",permalink:"/docs/eln/structural_analysis/includes/jcamp/README",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/30_structural_analysis/includes/jcamp/README.md",version:"current",frontMatter:{}},l=[{value:"JCAMP file format",id:"jcamp-file-format",children:[]}],p={toc:l};function u(e){var t=e.components,o=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"jcamp-file-format"},"JCAMP file format"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://jcamp-dx.org/"},"JCAMP-DX (Joint Committee on Atomic and Molecular Physical Data Exchange)")," is a standard file format for the exchange of spectra and related physical and chemical information between different spectrometers, databases or other systems."),(0,i.kt)("p",null,"The information is stored using ASCII characters and the file can be viewed, corrected and annotated with a text editor. The spectra are stored as a table containing (x,y) coordinate pairs. Besides the data points, it is possible to store metainformation and make comments. The file extension is  ",(0,i.kt)("inlineCode",{parentName:"p"},".jdx"),"."),(0,i.kt)("p",null,"A JCAMP document is composed of an unlimited number of Labelled Data Records (LDRs). Each LDR starts with a \u201c",(0,i.kt)("strong",{parentName:"p"},"##"),"\u201d and ends with \u201c",(0,i.kt)("strong",{parentName:"p"},"="),"\u201d. Any space, comma, slash or hyphen is removed and the text is written with capital letters."),(0,i.kt)("p",null,"Some examples of Data Labels:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"TITLE : title of the experiment"),(0,i.kt)("li",{parentName:"ul"},"END : the last line of the file"),(0,i.kt)("li",{parentName:"ul"},"XUNITS : the units reported on the x-axis"),(0,i.kt)("li",{parentName:"ul"},"NPOINTS : number of points")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"example",src:n(74954).Z})),(0,i.kt)("p",null,"Two important LDRs are \u201cXYDATA\u201d and \u201cPEAKTABLE\u201d, which contain the spectral information. The former gives information in the form of a table where the first value in a line stands for an x coordinate and any subsequent values are y-coordinates with an equidistant increment on the x-axis. The latter provides information as a collection of (X,Y) pairs. "),(0,i.kt)("p",null,"It is commonplace to compress the data tables. For instance, the table of numbers can be replaced by a line of characters (pseudo-digits). Among these pseudo-digits, there are PAC, SQZ, DIF, DIFDUP."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"pseudodigits",src:n(11894).Z})),(0,i.kt)("p",null,"An example of compressed data using DIFDUP"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"compressed",src:n(32983).Z})),(0,i.kt)("p",null,"An in depth description is given in the original paper by ",(0,i.kt)("a",{parentName:"p",href:"http://old.iupac.org/jcamp/protocols/dxir01.pdf"},"McDonald and Wilks"),". Insofar as JCAMP is a well-described and accessible format, it partially aligns with the FAIR (",(0,i.kt)("strong",{parentName:"p"},"F"),"indable, ",(0,i.kt)("strong",{parentName:"p"},"A"),"ccessible, ",(0,i.kt)("strong",{parentName:"p"},"I"),"nteroperable, ",(0,i.kt)("strong",{parentName:"p"},"R"),"eusable) principles . It is interoperable and reusable. Provided that the user makes it findable and accessible, JCAMP will fully comply with the aforementioned principles."))}u.isMDXComponent=!0},32983:function(e,t,n){"use strict";t.Z=n.p+"assets/images/jcamp_compressed-c16de3e05c9ef95d06fc2fcaf445df4e.png"},74954:function(e,t,n){"use strict";t.Z=n.p+"assets/images/jcamp_example-7488c6236980359b00c42c448fe4316a.png"},11894:function(e,t,n){"use strict";t.Z=n.p+"assets/images/jcamp_pseudodigits-6d23683254164351241d59d04e8491d4.png"}}]);