(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{174:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(186),s=a(182);e.default=function(){return r.a.createElement(i.a,null,r.a.createElement(s.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},177:function(t,e,a){var n;t.exports=(n=a(181))&&n.default||n},178:function(t,e,a){"use strict";var n=a(0),r=a.n(n),i=a(11),s=a.n(i),o=a(58),c=a.n(o);a.d(e,"a",function(){return c.a});a(177),r.a.createContext({});s.a.object,s.a.string.isRequired,s.a.func,s.a.func},180:function(t){t.exports={data:{site:{siteMetadata:{title:"Fun Standups"}}}}},181:function(t,e,a){"use strict";a.r(e);a(22);var n=a(0),r=a.n(n),i=a(11),s=a.n(i),o=a(87),c=function(t){var e=t.location,a=t.pageResources;return a?r.a.createElement(o.a,Object.assign({location:e,pageResources:a},a.json)):null};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},e.default=c},182:function(t,e,a){"use strict";var n=a(183),r=a(0),i=a.n(r),s=a(11),o=a.n(s),c=a(193),l=a.n(c);function u(t){var e=t.description,a=t.lang,r=t.meta,s=t.title,o=n.data.site,c=e||o.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:s},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:c}].concat(r)})}u.defaultProps={lang:"en",meta:[],description:""},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.arrayOf(o.a.object),title:o.a.string.isRequired},e.a=u},183:function(t){t.exports={data:{site:{siteMetadata:{title:"Fun Standups",description:"Tired of having the same old standup every day? Use these fun and creative standup formats to mix things up and learn more about your team and work.",author:"@rouanw"}}}}},186:function(t,e,a){"use strict";var n=a(180),r=a(0),i=a.n(r),s=a(11),o=a.n(s),c=a(178),l=function(t){var e=t.siteTitle;return i.a.createElement("header",{style:{background:"#43adacc4",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:1600,padding:"1.45rem 1.0875rem"}},i.a.createElement(c.a,{to:"/",style:{color:"white",textDecoration:"none"}},i.a.createElement("img",{className:"splash",src:"/bunnycow.png"})),i.a.createElement("h1",{style:{margin:0},className:"splash-wrapper"},i.a.createElement(c.a,{to:"/",style:{color:"white",textDecoration:"none"}},i.a.createElement("span",{className:"site-name"},e,"!")))))};l.propTypes={siteTitle:o.a.string},l.defaultProps={siteTitle:""};var u=l,d=(a(192),function(t){var e=t.children,a=n.data;return i.a.createElement(i.a.Fragment,null,i.a.createElement(u,{siteTitle:a.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:1200,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,e),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))});d.propTypes={children:o.a.node.isRequired};e.a=d}}]);
//# sourceMappingURL=component---src-pages-404-js-e32805f17fc989008531.js.map