(self.webpackChunkcheminfo_eln=self.webpackChunkcheminfo_eln||[]).push([[3085],{20895:function(e,t,n){"use strict";n.d(t,{dK:function(){return r},_k:function(){return c},vc:function(){return o},rx:function(){return a},qo:function(){return l},Hk:function(){return u},Iz:function(){return s}});n(31336);var r=["en"],c=!1,o=null,a="775eb991",l=8,u=50,s={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},87979:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(67294),c=n(86010),o=n(68692),a=n(3905),l=n(87277),u=n(571),s=n(39306),i="mdxPageWrapper_3qD3";var d=function(e){var t=e.content,n=t.frontMatter,d=t.metadata,m=n.title,f=n.description,_=n.wrapperClassName,v=n.hide_table_of_contents,h=d.permalink;return r.createElement(o.Z,{title:m,description:f,permalink:h,wrapperClassName:null!=_?_:s.kM.wrapper.mdxPages,pageClassName:s.kM.page.mdxPage},r.createElement("main",{className:"container container--fluid margin-vert--lg"},r.createElement("div",{className:(0,c.Z)("row",i)},r.createElement("div",{className:(0,c.Z)("col",!v&&"col--8")},r.createElement(a.Zo,{components:l.Z},r.createElement(t,null))),!v&&t.toc&&r.createElement("div",{className:"col col--2"},r.createElement(u.Z,{toc:t.toc})))))}},571:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(67294),c=n(86010);var o=function(e,t,n){var c=(0,r.useState)(void 0),o=c[0],a=c[1];(0,r.useEffect)((function(){function r(){var r=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=n}));if(t){if(t.getBoundingClientRect().top>=n){var r=e[e.indexOf(t)-1];return null!=r?r:t}return t}return e[e.length-1]}();if(r)for(var c=0,l=!1,u=document.getElementsByClassName(e);c<u.length&&!l;){var s=u[c],i=s.href,d=decodeURIComponent(i.substring(i.indexOf("#")+1));r.id===d&&(o&&o.classList.remove(t),s.classList.add(t),a(s),l=!0),c+=1}}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),function(){document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}))},a="tableOfContents_35-E",l="table-of-contents__link";function u(e){var t=e.toc,n=e.isChild;return t.length?r.createElement("ul",{className:n?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:l,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(u,{isChild:!0,toc:e.children}))}))):null}var s=function(e){var t=e.toc;return o(l,"table-of-contents__link--active",100),r.createElement("div",{className:(0,c.Z)(a,"thin-scrollbar")},r.createElement(u,{toc:t}))}}}]);