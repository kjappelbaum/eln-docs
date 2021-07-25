(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[1604],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return h}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(r),h=n,g=m["".concat(l,".").concat(h)]||m[h]||p[h]||i;return r?a.createElement(g,o(o({ref:t},u),{},{components:r})):a.createElement(g,o({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},11270:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var a=r(22122),n=r(19756),i=(r(67294),r(3905)),o={},c="Chromatogram visualization",l={unversionedId:"structural_analysis/chromatography/gc-lc-ms-visualization/chromatogramVisualisation/index",id:"structural_analysis/chromatography/gc-lc-ms-visualization/chromatogramVisualisation/index",isDocsHomePage:!1,title:"Chromatogram visualization",description:"When the desired file is clicked, the corresponding chromatogram is displayed, according to the following options:",source:"@site/docs/30_structural_analysis/chromatography/gc-lc-ms-visualization/chromatogramVisualisation/index.md",sourceDirName:"30_structural_analysis/chromatography/gc-lc-ms-visualization/chromatogramVisualisation",slug:"/structural_analysis/chromatography/gc-lc-ms-visualization/chromatogramVisualisation/index",permalink:"/docs/eln/structural_analysis/chromatography/gc-lc-ms-visualization/chromatogramVisualisation/index",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/30_structural_analysis/chromatography/gc-lc-ms-visualization/chromatogramVisualisation/index.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Add extracted traces for a specific mass",permalink:"/docs/eln/structural_analysis/chromatography/gc-lc-ms-visualization/addTraceForMass/index"},next:{title:"GC/LC-MS chromatography",permalink:"/docs/eln/structural_analysis/chromatography/introduction/README"}},s=[{value:"Peak picking in the chromatogram",id:"peak-picking-in-the-chromatogram",children:[{value:"Automatic peak picking",id:"automatic-peak-picking",children:[]},{value:"Manual peak picking",id:"manual-peak-picking",children:[]}]}],u={toc:s};function p(e){var t=e.components,o=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"chromatogram-visualization"},"Chromatogram visualization"),(0,i.kt)("p",null,"When the desired file is clicked, the corresponding chromatogram is displayed, according to the following options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Serie to work with: visualize and select peaks based on the total ion chromatogram ","(","tic",")"," or the base peak chromatogram ","(","bpc",")",".")),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(16117).Z})),(0,i.kt)("h2",{id:"peak-picking-in-the-chromatogram"},"Peak picking in the chromatogram"),(0,i.kt)("h3",{id:"automatic-peak-picking"},"Automatic peak picking"),(0,i.kt)("p",null,"Automatic peak picking is done using some parameters that allow to filter and improve the results. This peak picking is based on the analysis of the first and second derivative of the chromatogram, therefore the beginning of the peak is where there\u2019s an inflection point. The parameters are the following:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(43144).Z})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Minimal relative height: the minimal ratio between the height of the current peak and the highest peak."),(0,i.kt)("li",{parentName:"ul"},"Minimum retention time: the retention time at which integration begins."),(0,i.kt)("li",{parentName:"ul"},"Maximal retention time: the retention time at which integration ends.")),(0,i.kt)("h3",{id:"manual-peak-picking"},"Manual peak picking"),(0,i.kt)("p",null,"All automatic peak-picking can be modified: First select the peak to be modified in the list of peaks ","(","right",")"," and then ALT + Click at the desired beginning of the peak followed by the desired end of the peak in the chromatogram. New peaks can be created using the button below the peaks table or clicking on the plus icon over the table."),(0,i.kt)("p",null,"Note: automatic peak picking will replace any current peak selection, therefore it's recommended to first use automatic peak picking followed by manual selection."))}p.isMDXComponent=!0},16117:function(e,t){"use strict";t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAS0AAABkCAIAAABcofGpAAAAA3NCSVQICAjb4U/gAAAVEElEQVR4nO2df1xUZb7HP8MMh4EOYLDjldpCrSl7MWphrVwqiIRevpzqOtYV7JVum7ObK4s/2hS3YvuBtYq+VszEWhFfOm6Bt8BbjLdNqKBdmmoXhR1u2blZli6uOCzKBMOZM8z948B4mF/yY8aZZ3zef+CZ45nnPIfzvPl+n+ec5xyZ0+kEhUIJKVGhrgCFQqEeUihhAPWQQgk91EMKJfRQDymU0EM9pFBCD/WQQgk91EMKJfRQDymU0EM9pFBCD/WQQgk9ilBXgBIUIum2YZlMFuoqBB1ZJJ2wK5wr4VRGqpPUw0jA10kk/eT6si7ybKQeko3n6RvNmvDH07TRrCEX6iGpuJ046Udfy2Qh1czXsudHQqEeEolX0/wsgBwhvSrnZwERoSL1kDw87fL10+tCmONLOV8/3TYmFOohYXiV0OuCLyHDHE/9RFzLbgueXyQRev2QJHxJKC4PDg46nU6HwzE4DHEqekoYNYxcLhc/Sjd2Op2ur0iXiYN6SCRuEoo4HA673W6z2Ww2G8/zopBek9WwxS3tFPVjGEapVCqVyujoaHjEQKL1c0HzUmJwC2tSAwcHBx0Ox8DAQG9vr1wuj4+PVygUYhsNaZUnhMsuu93e29vrcDji4+NjYmLkcnlUVJRMAnyM3xAE2afqisItskklHBwcHBgYOH/+/FVXXRUXFxfqmgaFvr6+H374ITExMSYmRsxUvapIqIf0Pm8ycOsZemakNptNLpdHqoQA4uLi5HK5zWZzOByevwHXZoTGFeohSbg1MlcwFAShv78/ISEhVBW7PCQkJPT39wuCIB2FckGogSJ0nIYwPEOBq3MYHR1NdFu8JAqFQoyHg4ODYu9XeryEZqQiNB4SgKddnh7a7faQ1O1yIpPJBEFwjQN7JqUiJP4xoh4Sg9fxUrFFiiqS2P7GhHP46qjrwJ2kXSD1BfWQJKQtz2281OFwBHJP1u+bmjpsgSwxMLjuUnCLh14DI0FQD8Md/0mp1MYJ70o43nSko0sAYP2/t7Ta5V+Gn4huBkZMako9JBhpPAyIhx9ode9+awPA3rq2p+fPtyonXscAI71ljzjZ/EA9JAOvnUP/MWGMWA+uumcdsDFniv5AB2zHnlyxrwcAbE27VrEsy7Lsql1N1gkexoTxdeCkdxGphyTh9HtLzcTKZheX/Vcp8FRd+6sFN0OwnzVfAPD94fXadfiQO3OG+7BvnXZrS1cADmMC+OocglgDRej1Q2Lw2s4CFw8B5dUJGkA1WakQW4USsDa9WvX4wS/uSGGBOyp7ztkQ4lTV//E6ib3nm3pIJH4Ss4nAe6wZAC42EoUy5B1Gr2l5qCsVAGheShheW16AmqMAM853/Wv4ow1gcx4rqFq877hVEKwnNrHs802dE97LhAjm4YcS6iHBBDomTMqqKtyqu6Vg1zEASFICmL5464GnmudMmTRpyqxDhVWF2SmB2NGEiLBIKDLaeU9tbW3BrgrFE6fHMKlroMIxjCAINpvt7Nmz+fn5QaqGYLMJUCiVoe/F1NTUTJ48WalUKhQK+TCuafvhPxdx9uzZXteP4TfrqwhK8JB6KB0aFW8rEQRBEAS73d7X1xcfHx+8aoSFggCAG2644dprr42Li4uOjlYoFAqFQpyz7zYjUdw43Dz0E8xoXkoqkZSVjZuI+SVQD4knwnpKlyQijzdM0g1KAEjM3BDqKgSdxlceDnUVggKNh2TjJPx+rrESqcdLPaRQQk+Q89L+zoZDNZ+0c2es7JTr1dkP6LJmJI/yq/yZ1pp3W5Gcnr8onbnk1g7wPA+GYeQTq/CYsHI1bxr55KxR1dBrAV82VP/p25Q7tdrbU8DzvANMLAOg86/Gmr90Zj287LZrot2+4vz6sOPTJOd/zplw7T2Z/NySpLfe/LIjCEVT/BPMeNjPFc8vKH2trqHFbG43NdQbSp5YVNZ4crRf7+moPGCo3N7hebOVJzxXkzc/b+VBbgLVHTP8qdaKA3WVh7nR1NArnZ9WGGoNZUctAF+3Mi9v/kpzPwBYucN1tQaud2TBwqnBlk+dbxdjw2Fn+58HzwyMY4/Pbf2t0PbSzmne/m/mT36z4cFZ4yiUMmGC6KH1hMkEABnbao4cMVavnAUAxl0m6dwZ3vckcma6rrqmurpOx45iX0wcCyAmZnxhabww4u7Gv9PUh3ZX11TXLrkJABMLICaeAQAmhgXAiOUP/4qc3zY78x93vgqgzqkrcr5/fMz7y9Gty1NBOP/lN17/W+gXBk6P4zAoEyaIHlqOmwFApU5OZBg2Jf+Fbbp5udoHUhkA4FvryxdlZ+fdm71IX2b6zgqA/66hUK8vr21o2F2YnV149PvW8pc2Gj76CgD4TuP24uzs7Ozs7MIXa072j9jRycbyRU/uAWB+o1SvLz/ZD77bbHhR79qeOz9i+86PK/V6fem+VgD86YZivb5wi9EKoP9keZG+8DeGTt57CW417BgOSAxgPWosLirU60tbL+6Lb95drC8qNLR0AuhsrNTr9WX1nKuc4t3NZ44e3vhSefP/flFetHJPOwBz6RP6svqhlIE7dqTs5/fcM++eh35ebj4P2Y2PyA6tHip7w46oZWMNXZM/fO5eJfDxq6/v8LGFIFz1uz++ILTtENo21y6ZDOD+FU90vrva3LBVaNshfLR6fRIAIGnGZw3lQtsOoW3rZ8/QCBoAguhhamYeAHQZls3PXlRUbPioW/eL4vU/zWCA1t0Fa7fUWdQZukW54IzFS5eZugGh18xxddtLSw+YATaGt5jazcbDnBWdlY8UlNWa1Jla3Ty1ubFi2fxKi2RHDJOiTkkCgC6kztSwvHmtrrCykUvO1GpnJZsbK/QPFp+UpHgp6ps4jmuoMnYClqNHTBxnrt/zlRX8iea6ds7cxcb7KsGthmJxKqazo067pszUbtauXZmeeLFe6hnJXLu58t0OAB0NBo7jjFuarMDJD6vNHGdlU5xdJnO7yfjV+ZTrk5OGSktNmzaUARi3l3GqeWrAwh0q2tzIA2jYjrRF+PWPsOkDpzC201H0sv7uq2E7bszZe977Fla7QpkypbNx9uyipw/988ENK9YDgEJ1/XVf7SlTzN78Tu+0l/fpAGXtG4Xp/S0LZxct3NSavniZ9yyXMhaC2T+ckmvcW6qdlQzA0m6q3F66LD9Pv72Z57k9ByyApuSpNfrl+uWZACyGj1xdO3XJXmNT0+Ybh5o5gxMmQxegXlq8eqX+V2tyAcDQ/OVFsVLuzt+8TgdAs7qkZHWutdFgBpLnlVT/bv36HdXrMwGY9n8smSgwJV2vBtDQ8Z2FazUBACwdXOdX7SYA2iUZlvf9lzCyhi1ly1aWA8klhiO6tBGjUCm35aoBtHxy8vzJ1hZxnemr7s7WjzkAuhw1wAKIkafkr9usmwVAU7KxRDtciPrxbbtfLtm585cA0NXLA1G//kRW84K8qE721+KoSw2xZS15XGgrf/9nkwFg5vwXtSlA55YV7/n8Ahsdja7Xn2ruAMqeO/g1kjJyACZG+O6jRW+eBU4t2tWK66ctwdTZKY63Nh6sB+rffEOR82yh9yyXMgaCmZd+d9KiUK/ZUdv0nnF/xWb9PDUArrb8sw6zGQDMpU8UaLUFZWIDdQ06zCvInT6iS3jmmAkAOIM+X6vVFTYAAPiRc+V4gQeAAWnUSxK7Wpo7MwCcPCvtlrJZCzMA1NXVGRuRnJmrBpoajIcbzYA69/aUS5TgUUPxcM2nLO7rWI0uE8DRukN1JkAzLwPgjG8bj3CASp8xZcQRDP0jOYLs228CwKSq1QBiwQBQJEQlAEiIujrGowJekd+7ZvXOuZNrt8yPB1p3Vb7Q7X97wZXy2wUwsUoAgjAceftdIVi4WM3u8HuYFIEEz0O++cVly5YW5G1p5mPZ1LSMpevWqAHAYrtqqgYAMna+c6TpgyajYVvJMyX5s4byMo1G7VZQ0s3pAJC53vhBU9MHR/aXl5Y8U5I22c/oiBUA+oaaCvcFByA5fsT2qbfnATDXGkxA/qPLCuaBqzcYOWCWVpN4iRLca6jSrl+nA1D3mxKTeytn0hdoAUtdVZ0FmuW/0GuBhgMGDtA8kuF1/GlAct2FkYt/B+JHe6lnJM1vVpV91AUkPPGHkgdT5MKJD37y2ll/X7DagZTHn5kBYMkK7QzFD+0mG3iHcvrdlTlKQFmpT0fXmXZ8+0VXzKJV89MAzJ3f1bZ558xx1Y8iIXgeMnkrlgJAfUmevrhsS6l+fiEHALq0m9IWZAIw/XbTfuP/1BQvXVv6UulJDP+BH3C/CsCqMzIAtJSVvlpjPFixbE1J6UsVPDPSQ54HYH6tuPBFAzKXJgOW2uLi3TU12wtL6y2AOv+e1BHbT8nQq8QldZo6NS0jV/yQuzCDAVLv8VuCWw1T0rT3rynJBMAVr69xe5LSUGoKQJWlmaJOzxxar5s7sj7g+X4A5t+uLDRcvLQz7gsiQzy9uuytE2Km0f375XWX2JpFv6077m690LbD8EvNp3v2PN0NMBCsA/+xaYvQtuWxGd2vrH2jA7b7175x+kZtW9sO4Q/aCy3Gwr9PsJqUYOal7O36/Rv1agCcyVjfwAHJs5burFuTAkb7QvXKzGRLi6FsS4UZ0K2rXJo2HB7cEq5YgEktfWNzrgqm2oqy1+oAzfqK/ekjowmTmqFTA7CYG029iRn7Xy/RAKYDFRW1ZqgySvaWp7tHHzbrsQwAUOdNZZCS9u8AALVWTEqT/JbgkRLyQO6GbRoAXMW2xpEz1odSU2geSmOAtFwtAKj0t10r+TsSA4BNX6wDYOHMTWeH9AvERRhbga78PfM37+3a/fQlMlLg742quc/dPP+p2QufnT276M5XTgAA5MLpv6jmFt376LOKOS8/KSr3909unlt076Ol9+YU3fDL5gBU84pnDPOAxz3/kO+38jzAMGws477eASaWHeVNMLzVyoNh2dG2z7FuH4wSJoif+YcidrtdnH94+vTp3NVvB7wC969avfcus2pxY8BLHh8N2x9yzT+Mjo52TQUmZf5hAOYBjxsmlmVifawfUzljFGLiAoVSwfCg/pXtqldCXYkrAHqfN4USeuj8w8jhfMumUFch6Hz++eehrkJQoPGQQgk91EMKJfRQDykurCeOd47xrlU/CJ3HT/QErrjIhnpIGcba/sicfRN8o1PP8aamDvFdNNZ9cx5pC/kLoghhDOM09FHClx9fzxF2XUUUH2EqPkf4jjvumNjeoqdqEi+9lV9OH9ZqBz60pqkAJGZNjQv0CzG+/vrr3t5e8TnC4qOEoySE/3OEfUHjIcWTi+88fP7gMQDW4wcWLFj1/KoFLMuyGcWfi9mrtWPTApZlWVa/adfzq/Ycsx4/uGpuCbAxh9UfsELBJKBx7/Msy7JsxrYjJ0J8TOHNaOMhfZh3SLjk/TSCIPA839fXl5CQEKidfn94vXbdNe1neq7pP/rYtLv2pJ3Jx0Bzc1Vecfu5sth3fqXOqX7Yuva2w0/P3Tiziqt9UGj94y33bdyy8MWbF79sPPGZ1lZ6akMOCxsu1B/6Z8E35871flw+S/f6w9bN1024bjfeeOM111wTFxfHMIz00fpE3E/jBxoPKW5YP9lfhQK0HKp+60/tk4HV734B8EDpz7KnK5Up9y19KmsAEL6urcLBNYtTlMrrMn9alQUbALA/SkzSJKomKRUA+G7NhuX3q5TK6TkPZKHpDO0r+oZexyceaQQICPwFaGb8+Lrr/o3nUfD++09MUaP/r8DQKy4UiWIfMjpOMh/EtWC/WIyApKnXXq0AAMEOJAWqegE/3nCAxkNSCU5btAFs5mP3mz/rvenOvLycW0+9/9+cXSHVawjF9AcK8WjJnuNdXR2Hd6xoHn5RsK3bfL7LNTXY83uBJWKEpB4SSbDa39A7D3dUzdynnsSyk6b9vnvm3BtYRSwDzcWtxJ5o3uZvqpKPzJk2rfSzhO2FWTY7AEy970nNVt2PFuy5bEloZKg42nlPlFDh9iZqz4sW4rynf/zjH3PmBPLhwoLNKkDp+4VrwrGDO8w/fvjRzOuAzudZdeKfT629dVIAK+CVv/3tb+I4jeu9a9JLF9JxGrL8pP1DgpGNJLCFK5Ss38ahuHZawl05t6wQPxVs5zRBl1DmQbD3eNmgHhKG1/bnapeXM7tR3bHc2pPf9a9+RMeqJo3mac8BwHWxXkoEOEk9JBLPyKBQKAYHBy93c1SwKtVlMhCA0+kU38IdeVGRjtMQg9cGJzbEqKgohmEGBsbzxguCsNlsDMO4+oGeG5DrJPWQJKQjEK5oIL4gXqlUWiweD1CNLM6dO6dUKsWBGc8hGXIlBPWQFNzu1XJLzEQPL1y40NPTE9JqBpGenh7xDm/P1BRk3tsthfYPCUbqIcMwCQkJp0+f7u3tValUSqXyMg/bBAOZTDY4ODgwMHD27Nne3t5JkyYxDCP1MNQVDBjEn6orAbdLiG5XEaU3fA8MDPT19fX19dlsNrvdLgiCuJn0u9IywwFpKJMm21FRUQqFIjo6WqlUxsXFxcXFxcTEeL29W5qmEpqj0nhIEmLzcjqdnmOGUVFR0dHRrhxVEASHw+HSlVAPxa6vaKN44d5NOal4xLknhXpIDK48U1xwtVepY3K5HIDopOihGDylEoaPgVJkHoNPsuEhKPGn25Rf6agp6Z1DUA+JwLOnJ221ooqu9SKDg4NRUVFuHmKkhOEgpNQct4Nyi4ouIb0mor7KJAXqIWG4NVxXq3XbxpWO+gmG4eyhp4q+JPRlI1lQD0nCLTB6Guha6dktdPMwHCQUkfm9JOMSL8oDN/eIVpF6SAZSA90anEtFV9sVe49uXUeEpYQil1TRTUg/wZBQG6mHhOHSTLpSVNE1eON0Ot0kDOcRGilePZTa6NVDEKufC+ohMcg8xkul/+sST/xfrwYS5CF82Og1EsroeCklJHiq6KmfLwPD00bP3NKXjdKVINk9KdRDkpCN7CV6RkVIhITvDmG4qSjzMeIitc7Xgq9CyILe10YensHN10+vC2GOZ5LpFh7dfrptTCjUQyLxmmf6d4+UE+3VLj8LIF9CUA/JxU+qSaJ+nvgyzVcSSzTUQ7LxPH2jWRP+eO33XnINuVAPIwFfJ5H0k+vLtEgyUIR6GDlcCacy8gwUoR5GJpF0WiPVPSnUQwol9NDnRFEooYd6SKGEHuohhRJ6/h8s/U9reps0uAAAAABJRU5ErkJggg=="},43144:function(e,t,r){"use strict";t.Z=r.p+"assets/images/settings-40dad90f39d5ca987281d387bdb33a25.png"}}]);