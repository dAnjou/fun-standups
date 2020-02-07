(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{176:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(187),r=a(183),i=(a(220),a(221)),l=a.n(i),u=a(186),d=a.n(u),h=a(200),m=a(201),c=function(e){var t=e.tags,a=e.title,n=d.a.filter(function(e){return e.title!==a&&l()(e.tags,t).length}).slice(0,3);return Boolean(n.length)&&o.a.createElement("div",{className:"related-standups"},o.a.createElement("div",{className:"related-standups-header"},"Try these next"),n.map(function(e){return o.a.createElement(h.a,{standup:e,tagColors:Object(m.a)()})}))};t.default=function(e){var t=e.pageContext.standup;return o.a.createElement(s.a,null,o.a.createElement(r.a,{title:""+t.title}),o.a.createElement("div",{className:"standup-details-wrapper"},o.a.createElement("div",{className:"standup standup-details"},o.a.createElement("h2",null,t.title),o.a.createElement("p",null,t.summary),o.a.createElement("p",null,t.description),o.a.createElement("ul",null,t.benefits.map(function(e){return o.a.createElement("li",{className:"benefit"},e)}))),o.a.createElement(c,{tags:t.tags,title:t.title})))}},177:function(e,t,a){var n;e.exports=(n=a(182))&&n.default||n},178:function(e,t,a){"use strict";var n=a(0),o=a.n(n),s=a(11),r=a.n(s),i=a(58),l=a.n(i);a.d(t,"a",function(){return l.a});a(177),o.a.createContext({});r.a.object,r.a.string.isRequired,r.a.func,r.a.func},181:function(e){e.exports={data:{site:{siteMetadata:{title:"Fun Standups"}}}}},182:function(e,t,a){"use strict";a.r(t);a(22);var n=a(0),o=a.n(n),s=a(11),r=a.n(s),i=a(87),l=function(e){var t=e.location,a=e.pageResources;return a?o.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=l},183:function(e,t,a){"use strict";var n=a(184),o=a(0),s=a.n(o),r=a(11),i=a.n(r),l=a(195),u=a.n(l);function d(e){var t=e.description,a=e.lang,o=e.meta,r=e.title,i=n.data.site,l=t||i.siteMetadata.description;return s.a.createElement(u.a,{htmlAttributes:{lang:a},title:r,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:r},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:l}].concat(o)})}d.defaultProps={lang:"en",meta:[],description:""},d.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),title:i.a.string.isRequired},t.a=d},184:function(e){e.exports={data:{site:{siteMetadata:{title:"Fun Standups",description:"Tired of having the same old standup every day? Use these fun and creative standup formats to mix things up and learn more about your team and work.",author:"@rouanw"}}}}},186:function(e,t){e.exports=[{slug:"update-the-next-person",title:"Give an update to the next person",summary:"Each person gives an update to the next person in the team, using their name and making eye contact",description:"Go around in a circle, each person gives an update to the next person in the team, using their name and making eye contact. E.g. “Natalie, yesterday I was working on X and today I’ll be doing Y”. The last person then updates the first person.",benefits:["Helps build relationships","Helps the team notice information asymmetry. E.g. it becomes very clear that an engineer uses too much technical jargon in their updates when they have to give their update directly to the visual designer on the team.","This helps team members to focus on useful information. It’s easier to keep an update to the point when you’re talking to a particular person."],tags:["team bonding","focus"]},{slug:"one-thing-only",title:"One thing only",summary:"Each team member only talks about the single most important thing they want to tell people",description:"Take turns giving updates. Each team member only talks about the single most important thing they want to tell people.",benefits:["Helps keep standups short and focused","Helps encourage team members to use other communication channels to talk about things that aren’t crucial for standup - i.e. it encourages people to actually talk to each other outside of standup"],tags:["focus"]},{slug:"zoom-way-out",title:"Zoom way out",summary:"Give an update on each epic",description:"If you have a wall or picture of work that needs to be done for an entire project or for a few months, gather the team around that and for volunteers to give an update on each epic of current/upcoming work.",benefits:["Helps the team to see and understand their progress towards a larger goal","Helps the team notice when there are only one or two people who understand the ‘big picture’","Helps spot gaps or issues with the larger plan"]},{slug:"one-person-missing",title:"One person missing",summary:"One person leaves standup. The team then nominates one person to give the missing person an update on the team’s status.",description:"One person leaves standup. The team then nominates one person to give the missing person an update on the team’s status. Standup then happens as usual without the missing person. They then come back and the nominated person has to fill them in.",benefits:["Helps the team build awareness of the fact that not everyone will be at every standup and to consider how to communicate what happened in standup in an effective way","Promotes listening skills as everyone else in the team is keen to see if the nominated person gets it right!","You may notice which bits of the standup end up getting forgotten. Are these important at all or could you have done without them?"],tags:["communication"]},{slug:"zoom-way-in",title:"Zoom way in",summary:"Shuffle the cards on your team wall. Select one randomly and only talk about that one card as a team",description:"Shuffle the cards on your team wall. Select one randomly and only talk about that one card as a team. For teams with digital walls, pop your open story numbers into a little Math.random function to pick a card at random.",benefits:["Allows the team to discuss something in as much detail as they like","You may notice sometimes the discussion will be detailed and lengthy and other times the discussion will be very short. This may tell you something about the variety of cards on your wall, the size of the work, or whether some kinds of tasks are more involved.","Promotes a deeper understanding of work people aren’t directly involved in"]},{slug:"yesterday-today-blockers",title:"Yesterday, today, blockers",summary:"Each person lists what they did yesterday, what they'll do today and what is in their way",description:"This is a classic standup format. Go around the team and let each person give an update on what they did yesterday (i.e. since the last standup), what they’ll be doing today and whether there are any blockers making it difficult for their work to progress.",benefits:["This is a tried-and-tested format and a good one to fall back on"],tags:["classic"]},{slug:"forget-about-the-past",title:"Forget about the past",summary:"This is the same format as “Yesterday, today, blockers”, except the team members do not update the rest of the team on what they’ve already completed",description:"Every person lists what they'll be working on today and what might block the progress of that work. Nobody says anything about what happened yesterday.",benefits:["Helps keep standups short and focused","Leads to a standup that is future/action focused"],tags:["focus"]},{slug:"whats-in-my-way",title:"What’s in the way?",summary:"Only mention things that are stopping you from getting your work done ",description:"Go around the team and only mention things that are stopping you from getting your work done or slowing you down. Pass if there’s nothing blocking you.",benefits:["Helps standup be focused on urgent items","Notice how long your standup is - a long standup could mean your team is having to wade through a lot to get there work done. A short standup? Great!"]},{slug:"today-i-learned",title:"Today I learned",summary:"Go around as a team and each share one thing you’ve learned since the last standup",description:"This is a more reflective format",benefits:["Helps people get used to sharing knowledge with the rest of the team","You may notice that the team still communicates fine without talking specifically about the status of what they’re working on"]},{slug:"personal-updates",title:"What’s up with you?",summary:"Go around as a team and give personal updates instead of work updates.",description:"E.g. “yesterday my wife and I watched the worst movie and today our daughter is having her first ever swimming lesson”",benefits:["Helps the team connect on a personal level","You may notice that the team still communicates fine without talking specifically about the status of what they’re working on"]},{slug:"everybody-leaves",title:"Almost everyone leaves",summary:"Almost everyone leaves standup and one person has to look at the board to tell everyone else what's happening",description:"Everyone except one team member leaves standup. The person left needs to take a look at the board and try to understand what the status of everyone's work is. While they do this, it's fun for the rest of the team to chat together - either around the corner if everyone's in the same office or on a separate call if you do your standups remote-first",benefits:["Helps the team connect on a personal level","You may notice that the team still communicates fine without talking specifically about the status of what they’re working on"]},{slug:"give-someone-else-update",title:"Give someone else's update",summary:"Each team member tries to give an update for the next person",description:"Go around and with each person trying to update the team on behalf of the next person. No one will know everything, but try to see if you can remember what they're doing and what they'll be working on next.",benefits:["Builds empathy between team members - everyone is forced to peek into someone else's life","Can help highlight when some team members are not included in daily work enough or don't have enough opportunities to let others see what they do"]}]},187:function(e,t,a){"use strict";var n=a(181),o=a(0),s=a.n(o),r=a(11),i=a.n(r),l=a(178),u=function(e){var t=e.siteTitle;return s.a.createElement("header",{style:{background:"#43adacc4",marginBottom:"1.45rem"}},s.a.createElement("div",{style:{margin:"0 auto",maxWidth:1600,padding:"1.45rem 1.0875rem"}},s.a.createElement(l.a,{to:"/",style:{color:"white",textDecoration:"none"}},s.a.createElement("img",{className:"splash",src:"/bunnycow.png"})),s.a.createElement("h1",{style:{margin:0},className:"splash-wrapper"},s.a.createElement(l.a,{to:"/",style:{color:"white",textDecoration:"none"}},s.a.createElement("span",{className:"site-name"},t,"!")))))};u.propTypes={siteTitle:i.a.string},u.defaultProps={siteTitle:""};var d=u,h=(a(194),function(e){var t=e.children,a=n.data;return s.a.createElement(s.a.Fragment,null,s.a.createElement(d,{siteTitle:a.site.siteMetadata.title}),s.a.createElement("div",{style:{margin:"0 auto",maxWidth:1200,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},s.a.createElement("main",null,t),s.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",s.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))});h.propTypes={children:i.a.node.isRequired};t.a=h},200:function(e,t,a){"use strict";var n=a(178),o=a(11),s=a.n(o),r=a(0),i=a.n(r),l=function(e){var t=e.standup,a=e.tagColors,o=t.title,s=t.summary,r=t.slug,l=t.tags,u=void 0===l?[]:l;return i.a.createElement("div",{className:"standup-wrapper"},i.a.createElement(n.a,{to:"/"+r},i.a.createElement("div",{className:"standup standup-card"},i.a.createElement("div",{className:"standup-title"},o),i.a.createElement("div",{className:"standup-summary"},s),i.a.createElement("div",{className:"standup-tags"},u.map(function(e){return i.a.createElement("span",{className:"tag",style:{"background-color":a?a[e]:"grey"}},e)})))))};l.propTypes={standup:s.a.shape({title:s.a.string.isRequired,summary:s.a.string.isRequired,slug:s.a.string.isRequired,tags:s.a.array}),tagColors:s.a.array.isRequired},t.a=l},201:function(e,t,a){"use strict";a(22),a(29),a(21),a(12),a(85),a(59),a(192);var n=a(193),o=a.n(n),s=a(186),r=a.n(s),i=Array.from(new Set(o()(r.a.map(function(e){return e.tags})).filter(Boolean))),l=["#F4B28D","#E7E0A8","#C2DFD0","#A38690"],u=i.reduce(function(e,t,a){var n;return Object.assign({},e,((n={})[t]=l[a],n))},{});t.a=function(){return u}}}]);
//# sourceMappingURL=component---src-components-standup-details-js-dd1578ffce2582b99a0e.js.map