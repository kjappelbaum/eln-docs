(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[6367],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,h=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58494:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var a=n(22122),o=n(19756),i=(n(67294),n(3905)),r={},s="Making our development environment ready for contributions to cheminfo",l={unversionedId:"for_developers/contributing/developmentSetup",id:"for_developers/contributing/developmentSetup",isDocsHomePage:!1,title:"Making our development environment ready for contributions to cheminfo",description:"Most, if not all, contributors to the cheminfo ecoystem use the VSCode editor with some plugins. We also follow a few conventions with respect to commit messages and directory structure. We also discuss some points in the starting guide GitHub. This post is thought as a guide for new contributors to the cheminfo projects.",source:"@site/docs/89_for_developers/contributing/developmentSetup.md",sourceDirName:"89_for_developers/contributing",slug:"/for_developers/contributing/developmentSetup",permalink:"/docs/eln/for_developers/contributing/developmentSetup",editUrl:"https://github.com/cheminfo/eln-docs/edit/main/docs/89_for_developers/contributing/developmentSetup.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"PubChem lookup",permalink:"/docs/eln/uuid/6a1063e07d4946142d4330b587dfaaa3"},next:{title:"Writing documentation",permalink:"/docs/eln/for_developers/documentation/README"}},p=[{value:"VSCode setup",id:"vscode-setup",children:[{value:"Plugins",id:"plugins",children:[]},{value:"Shortcuts and key bindings",id:"shortcuts-and-key-bindings",children:[]},{value:"GitHub integration",id:"github-integration",children:[]}]},{value:"Other tools",id:"other-tools",children:[]},{value:"Project structure",id:"project-structure",children:[{value:"Creating a new project",id:"creating-a-new-project",children:[]},{value:"File organization",id:"file-organization",children:[]}]},{value:"Code style",id:"code-style",children:[]},{value:"Code documentation",id:"code-documentation",children:[]},{value:"Test driven development",id:"test-driven-development",children:[]},{value:"Commit messages",id:"commit-messages",children:[]},{value:"GitHub actions",id:"github-actions",children:[]},{value:"Developing code for the visualizer",id:"developing-code-for-the-visualizer",children:[]}],u={toc:p};function c(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"making-our-development-environment-ready-for-contributions-to-cheminfo"},"Making our development environment ready for contributions to cheminfo"),(0,i.kt)("p",null,"Most, if not all, contributors to the cheminfo ecoystem use the ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"VSCode editor")," with some plugins. We also follow a few conventions with respect to commit messages and directory structure. We also discuss some points in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cheminfo/generator-cheminfo/blob/master/START.md"},"starting guide GitHub"),". This post is thought as a guide for new contributors to the cheminfo projects."),(0,i.kt)("h2",{id:"vscode-setup"},"VSCode setup"),(0,i.kt)("p",null,"If you did not install ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"VSCode")," we recommend you install it. It is available on all major operating systems and comes with incredible support for Git, remote connections, and plugins for all kinds of languages."),(0,i.kt)("h3",{id:"plugins"},"Plugins"),(0,i.kt)("p",null,"We like to use the following plugins:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"},"prettier"),": To automatically format your code nicely. It is useful to ",(0,i.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/50606758/vscode-how-do-you-autoformat-on-save"},"configure to do this automatically upon saving"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest"},"jest"),": To test your code using ",(0,i.kt)("a",{parentName:"p",href:"https://jestjs.io/"},"Facebook's jest"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"},"ESLint"),": This will underline lint errors in the code and suggest quick fixes. ",(0,i.kt)("a",{parentName:"p",href:"https://www.digitalocean.com/community/tutorials/linting-and-formatting-with-eslint-in-vs-code"},"This blog post by Digital Ocean gives some more information on how one can use ESlint with VSCode"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one"},"Markdown All in One"),": For powerful markdown preview and keyboard shortcuts.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=oouo-diogo-perdigao.docthis"},"Document this"),": To insert ",(0,i.kt)("a",{parentName:"p",href:"https://jsdoc.app/"},"JSDoc")," docstrings.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github"},"GitHub Pull Requests and Issues"),': To review pull requests from VS Code and show issues, you can directly "start working on an issue" and make a new branch.'))),(0,i.kt)("p",null,"It is also really useful to browse in the store as there are plugins for any possible application, i.e., to ",(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=mechatroner.rainbow-csv"},"color columns in csv files"),", ",(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=thisperiodictable.cif"},"highlight syntax in CIFs"),", ",(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer"},"colorize matching brackets"),", or to ",(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer"},"launch a live development server"),". If you want to try incredible, deep learning powered, autocomplete you can give the ",(0,i.kt)("a",{parentName:"p",href:"https://www.tabnine.com/"},"tabnine plugin")," a shot. For editing key/value pairs of any kind the ",(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=erikphansen.vscode-toggle-column-selection"},"Toggle Column Selection")," can be useful."),(0,i.kt)("p",null,'To install a plugin you can just click on the extensions symbol (building blocks on the left menu bar) and then search for the extension you want and click on "install".'),(0,i.kt)("h3",{id:"shortcuts-and-key-bindings"},"Shortcuts and key bindings"),(0,i.kt)("p",null,"There are a couple VSCode shortcuts that are handy to know. ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/getstarted/tips-and-tricks"},"In the VSCode documentation")," you can find an overview of key bindings."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"\u2318")," + ",(0,i.kt)("inlineCode",{parentName:"li"},"P"),": Is the main keybinding in VSCode. It will open menu which you can use to go to files. If you type ",(0,i.kt)("inlineCode",{parentName:"li"},">")," you can run command (like opening a new ",(0,i.kt)("inlineCode",{parentName:"li"},"ssh")," connection)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"\u2318")," + ",(0,i.kt)("inlineCode",{parentName:"li"},"SHIFT \u21e7")," + ",(0,i.kt)("inlineCode",{parentName:"li"},"F"),": With this shortcut you can search through all files in a directory at once. The results will show up on the left, and you can use the arrow to open a search/replace box."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"\u2318"),"+",(0,i.kt)("inlineCode",{parentName:"li"},"\\"),": If you highlight some code/text this will comment/uncomment it."),(0,i.kt)("li",{parentName:"ul"},"Option+UP/DOWN`: Moves the selected line up/down"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"\u2318"),"+",(0,i.kt)("inlineCode",{parentName:"li"},"K")," ",(0,i.kt)("inlineCode",{parentName:"li"},"Z"),": Toggles ",(0,i.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/docs/getstarted/userinterface"},"Zen mode"))),(0,i.kt)("h3",{id:"github-integration"},"GitHub integration"),(0,i.kt)("p",null,"Most of the things you might want to do on GitHub can be done from VSCode. If you are new to Git and GitHub there are a lot of excellent resources that explain the basics. A good introduction for scientist gives the ",(0,i.kt)("a",{parentName:"p",href:"https://the-turing-way.netlify.app/reproducible-research/vcs/vcs-git.html"},"Turing way book"),"."),(0,i.kt)("h4",{id:"branch-commit-pull-requests"},"Branch, commit, pull requests"),(0,i.kt)("p",null,"The Source Control icon in the Activity Bar (",(0,i.kt)("inlineCode",{parentName:"p"},"CTRL"),"+",(0,i.kt)("inlineCode",{parentName:"p"},"SHIFT \u21e7"),"+",(0,i.kt)("inlineCode",{parentName:"p"},"G"),") the left will list the uncommitted changes in your workspace, you can enter a commit message and use the checkmark to commit the changes."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"VSCode souce control",src:n(68696).Z})),(0,i.kt)("p",null,"In the footer you'll see an indication on which branch you are working on (and you can switch branches by clicking on it) and an icon that allows you to push the changes."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"VSCode activity bar",src:n(5557).Z})),(0,i.kt)("h4",{id:"pull-requests-and-issues"},"Pull requests and issues"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github"},"GitHub Pull Requests and Issues extension")," allows browsing issues and pull requests. In the screenshot below we see that there are two pull requests in this particular repository one of which has been created by me and another one which has been created by ",(0,i.kt)("a",{parentName:"p",href:"https://dependabot.com/"},"dependabot"),".\nWe can also see a list of all issues and directly create a new branch that is linked to a particular issue by clicking on the arrow that appears when we hover over the list."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"PR in VSCode",src:n(50662).Z})),(0,i.kt)("h2",{id:"other-tools"},"Other tools"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Node.js: You should install the ",(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js JavaScript runtime"),". One the website you will find downloads for all major operating systems"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://yeoman.io/"},"yeoman generator"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"npm install -g yo")," to bootstrap new projects"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/npm-check-updates"},"ncu"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"npm install -g npm-check-updates")," to update dependencies. It is useful to regularly run ",(0,i.kt)("inlineCode",{parentName:"li"},"ncu -u")," to keep the dependencies updated"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cheminfo/generator-cheminfo"},"the cheminfo generator")," ",(0,i.kt)("inlineCode",{parentName:"li"},"npm i -g yo generator-cheminfo")," as generator for the different cheminfo organizations")),(0,i.kt)("h2",{id:"project-structure"},"Project structure"),(0,i.kt)("p",null,"In general we like to organize or projects in a directory structure as ",(0,i.kt)("inlineCode",{parentName:"p"},"~/git/organization/project"),". This is, we would work on the documentation repository in ",(0,i.kt)("inlineCode",{parentName:"p"},"~/git/cheminfo/c6h6-documentation"),". We found that this makes it easier to collaborate."),(0,i.kt)("h3",{id:"creating-a-new-project"},"Creating a new project"),(0,i.kt)("p",null,"To bootstrap new projects, we use a ",(0,i.kt)("a",{parentName:"p",href:"https://yeoman.io/"},"yeoman generator"),". For using this, you will need to first install ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cheminfo/generator-cheminfo"},"the cheminfo generator"),". Then you can ",(0,i.kt)("inlineCode",{parentName:"p"},"mkdir")," your project directory, ",(0,i.kt)("inlineCode",{parentName:"p"},"cd")," into it and run ",(0,i.kt)("inlineCode",{parentName:"p"},"yo cheminfo:module"),". This will ask you some questions and create most of the boilerplate (like the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),", some ",(0,i.kt)("inlineCode",{parentName:"p"},"README")," template, ",(0,i.kt)("a",{parentName:"p",href:"https://eslint.org/"},(0,i.kt)("inlineCode",{parentName:"a"},"eslint"))," rules, ",(0,i.kt)("a",{parentName:"p",href:"https://babeljs.io/"},(0,i.kt)("inlineCode",{parentName:"a"},"babel"))," settings ...) for you."),(0,i.kt)("h3",{id:"file-organization"},"File organization"),(0,i.kt)("p",null,"We typically like to have small files with ",(0,i.kt)("a",{parentName:"p",href:"https://www.freecodecamp.org/news/what-is-a-pure-function-in-JavaScript-acb887375dfe/"},"pure functions")," (where it makes sense).\nIn every subfolder we will make a ",(0,i.kt)("inlineCode",{parentName:"p"},"__test__ ")," directory in which we will have a ",(0,i.kt)("inlineCode",{parentName:"p"},"module.test.js")," file for every",(0,i.kt)("inlineCode",{parentName:"p"},"module.js"),". That is, a project might look like"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 src\n\u2502\xa0\xa0 \u251c\u2500\u2500 from\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 __tests__\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 fromJcamp.ntuples.test.js\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 fromJcamp.test.js\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 fromPerkinElmer.test.js\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 fromPerkinElmerCSV.test.js\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 fromTAInstrumentExcel.test.js\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 fromTAInstruments.test.js\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 parseTAInstrumentExcel.test.js\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 fromPerkinElmer.js\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 fromPerkinElmerCSV.js\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 fromTAInstruments.js\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 fromTAInstrumentsExcel.js\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 parsePerkinElmer.js\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 parseTAInstruments.js\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 parseTAInstrumentsExcel.js\n\u2502\xa0\xa0 \u2514\u2500\u2500 index.js\n")),(0,i.kt)("h2",{id:"code-style"},"Code style"),(0,i.kt)("p",null,"We generally use the ",(0,i.kt)("a",{parentName:"p",href:"https://www.javatpoint.com/es6"},"ES6 specification")," and follow the typical coding conventions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"variable names are ",(0,i.kt)("inlineCode",{parentName:"li"},"camelCase")),(0,i.kt)("li",{parentName:"ul"},"global variables are ",(0,i.kt)("inlineCode",{parentName:"li"},"UPPERCASE")),(0,i.kt)("li",{parentName:"ul"},"node packages use ",(0,i.kt)("inlineCode",{parentName:"li"},"-")," in their name and not ",(0,i.kt)("inlineCode",{parentName:"li"},"_"))),(0,i.kt)("p",null,"You should use ",(0,i.kt)("inlineCode",{parentName:"p"},"let")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"const")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"var")),(0,i.kt)("p",null,"Google wrote a ",(0,i.kt)("a",{parentName:"p",href:"https://google.github.io/styleguide/jsguide.html"},"useful styleguide"),". Note that if you use prettier the formatting will be done automatically for you and ESlint (if you use the cheminfo generator) will let you know about variable naming and other issues that can be found via static code analysis."),(0,i.kt)("p",null,"Some other useful points are"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"That typed arrays can be useful as they ",(0,i.kt)("a",{parentName:"li",href:"https://stackoverflow.com/a/13334932"},"can increase performance and reduce the likelihood of mistakes")),(0,i.kt)("li",{parentName:"ul"},"We try to use the same packages in different projects. We collect the most relevant ones in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/cheminfo/awesome"},"the awesome cheminfo list")),(0,i.kt)("li",{parentName:"ul"},"If you pass keyword arguments to a function, we usually use ",(0,i.kt)("a",{parentName:"li",href:"https://hacks.mozilla.org/2015/05/es6-in-depth-destructuring/"},"destructuring")," on a ",(0,i.kt)("inlineCode",{parentName:"li"},"options")," object an example is")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"function xPadding(array, options = {}) {\n  const { size = 0, value = 0, algorithm = '' } = options;\n")),(0,i.kt)("h2",{id:"code-documentation"},"Code documentation"),(0,i.kt)("p",null,"We document the API using ",(0,i.kt)("a",{parentName:"p",href:"https://jsdoc.app/"},"jsdoc"),". In addition to that we try to at least provide a meaningful snippet in the ",(0,i.kt)("inlineCode",{parentName:"p"},"README"),"."),(0,i.kt)("h2",{id:"test-driven-development"},"Test driven development"),(0,i.kt)("p",null,'It can be practical to use the "watch mode" of jest. This will continuously run the test suite in the background ',(0,i.kt)("inlineCode",{parentName:"p"},"npx jest --watch"),". If you just want to run the test suite once, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run test"),".\nIn practice, it can often be useful to write, in the spirit of ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Test-driven_development"},"test driven development"),", tests before the actual implementation. This can also help to shape the API in an useable form."),(0,i.kt)("h2",{id:"commit-messages"},"Commit messages"),(0,i.kt)("p",null,"To automate the generation of the changelog and the releases, we use ",(0,i.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"conventional commits"),". The basic structure is"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<type>[optional scope]: <description>\n\n[optional body]\n\n[optional footer]\n")),(0,i.kt)("p",null,"where the most important types are"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fix"),": for patches, i.e., a ",(0,i.kt)("inlineCode",{parentName:"li"},"PATCH")," bump in ",(0,i.kt)("a",{parentName:"li",href:"https://semver.org/"},"semantic versioning")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"feat"),": for new features, i.e., a ",(0,i.kt)("inlineCode",{parentName:"li"},"MINOR")," bump in semantic versioning"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"chore"),": for changes that an external user would not notice (updating ",(0,i.kt)("inlineCode",{parentName:"li"},".gitignore"),", private methods, ...)")),(0,i.kt)("p",null,"If there is a breaking change (",(0,i.kt)("inlineCode",{parentName:"p"},"MAJOR")," bump in semantic versioning) the commit message might look like"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"feat: add parseAbcXY\n\nBREAKING CHANGE:\n\nRenamed parseXY to parseAbcXY\n")),(0,i.kt)("p",null,"We recommend that you use ",(0,i.kt)("a",{parentName:"p",href:"https://chris.beams.io/posts/git-commit/"},"imperative mood in the subject line of your commit message"),'. Ideally, your subject line is the completion of "If applied, this commit will ',(0,i.kt)("em",{parentName:"p"},"your subject line here"),'"'),(0,i.kt)("h2",{id:"github-actions"},"GitHub actions"),(0,i.kt)("p",null,"In most of our projects we use several GitHub actions that build the documentation, make the release and run the tests."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cheminfo/.github/blob/master/workflow-templates/release.yml"},"Release Node.js package"),": Uses ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/google-github-actions/release-please-action"},"release please")," to release the package on npm."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cheminfo/.github/blob/master/workflow-templates/nodejs.yml"},"Node.js CI")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cheminfo/.github/blob/master/workflow-templates/lactame.yml"},"Deploy on lactame.com")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/cheminfo/.github/blob/master/workflow-templates/documentationjs.yml"},"Deploy documentation.js on GitHub pages"))),(0,i.kt)("p",null,"If you create a new project in the cheminfo organization you can use the actions tab to add the actions to your repository. It can be useful to make a commit with ",(0,i.kt)("inlineCode",{parentName:"p"},"release-as: v0.1.0")," as commit message to avoid that ",(0,i.kt)("inlineCode",{parentName:"p"},"release-please")," starts with ",(0,i.kt)("inlineCode",{parentName:"p"},"v1")," after an initial ",(0,i.kt)("inlineCode",{parentName:"p"},"feat")," commit."),(0,i.kt)("h2",{id:"developing-code-for-the-visualizer"},"Developing code for the visualizer"),(0,i.kt)("p",null,"Many of the frontends (e.g, c6h6.org) are developed using the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NPellet/visualizer"},"visualizer library"),". There is unfortunately not a complete documentation for this project but a few useful resources:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://www.cheminfo.org/#"},"The tutorial tab on cheminfo")," has some basic tutorial on how the visualizer can be used"),(0,i.kt)("li",{parentName:"ul"},"You can use ",(0,i.kt)("inlineCode",{parentName:"li"},"\u2318"),"+",(0,i.kt)("inlineCode",{parentName:"li"},"M")," to create new modules"),(0,i.kt)("li",{parentName:"ul"},"It is usually practical to use multiple layers to keep the code organized, e.g., one Admin layer for every major computational operation. You can edit the layers using a right click and the options under the ",(0,i.kt)("inlineCode",{parentName:"li"},"Switch layer")," menu")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"switch layer",src:n(60738).Z})))}c.isMDXComponent=!0},5557:function(e,t,n){"use strict";t.Z=n.p+"assets/images/activity_bar-531540e94659edb748cff04ca85a751c.png"},50662:function(e,t,n){"use strict";t.Z=n.p+"assets/images/pr-53c93c32223c31163deaca97a1911bc8.png"},68696:function(e,t,n){"use strict";t.Z=n.p+"assets/images/source_control-40c53b2fa67f053d16638e56e2212bae.png"},60738:function(e,t,n){"use strict";t.Z=n.p+"assets/images/switch_layer-ff3e5abdc7357b56e889d5c0693d78a4.png"}}]);