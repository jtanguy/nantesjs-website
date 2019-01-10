(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{151:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(170),s=(a(167),a(220)),l=a(157),o=a(4),d=a(166),m=a.n(d),c=a(221),u=a(227),p=a.n(u),b=a(261),f=a(262),k=a(226),g=a.n(k);w.propTypes={date:o.string,fontSize:o.number},w.defaultProps={fontSize:1};var h=function(e){return Object(c.flow)(Object(b.a)(new Date,"dd/MM/yyyy"),Object(f.a)({locale:p.a},e))},v=h("d"),_=h("MMM"),E=h("yyyy");function w(e){var t=e.date,a=e.fontSize,n={fontSize:5.8*a+"rem",lineHeight:4.8*a+"rem"},r={fontSize:2*a+"rem"};return i.a.createElement("div",{className:g.a.date},i.a.createElement("div",{className:g.a.date__column},i.a.createElement("span",{style:n,className:g.a.date__day},v(t)),i.a.createElement("span",{style:r,className:g.a.date__month},_(t))),i.a.createElement("span",{style:r,className:g.a.date__year},E(t)))}var y=a(237),M=a.n(y);function T(e){var t=e.title,a=e.image,n=e.sponsor,r=e.venue,s=e.date;return i.a.createElement("div",{className:M.a.titlebar},i.a.createElement(m.a,{maxWidth:767},i.a.createElement("div",null,i.a.createElement("div",{role:"img","aria-label":"image du meetup à venir",className:M.a.titlebar__imageWrapper,style:{backgroundImage:"url("+Object(l.withPrefix)(a)+")"}}),i.a.createElement(w,{date:s,fontSize:.8})),i.a.createElement("div",{className:M.a.titlebar__infos},i.a.createElement("h1",null,t),i.a.createElement("p",null,"Sponsorisé par ",i.a.createElement("b",null,n),i.a.createElement("br",null),"Hébergé par ",i.a.createElement("b",null,r)))),i.a.createElement(m.a,{minWidth:768},i.a.createElement("div",{className:M.a.titlebar__imageWrapper,style:{backgroundImage:"url("+Object(l.withPrefix)(a)+")"}}),i.a.createElement("div",{className:M.a.titlebar__infos},i.a.createElement("h1",null,t),i.a.createElement("p",null,"Sponsorisé par ",i.a.createElement("b",null,n),i.a.createElement("br",null),"Hébergé par ",i.a.createElement("b",null,r))),i.a.createElement(m.a,{minWidth:992},i.a.createElement(w,{date:s})),i.a.createElement(m.a,{maxWidth:991},i.a.createElement(w,{date:s,fontSize:.8}))))}function S(){return i.a.createElement(l.StaticQuery,{query:"1963538367",render:function(e){var t=e.allMarkdownRemark.edges[0].node.frontmatter,a=t.title,n=t.date,r=t.image,s=t.venue,l=t.sponsor;return i.a.createElement(T,{title:a,date:n,image:r,venue:s.name,sponsor:l.name})},data:s})}T.propTypes={title:o.string,image:o.string,sponsor:o.string,venue:o.string,date:o.string};var P=a(238),N=(a(36),a(159)),x=a.n(N),A=a(239),j=a.n(A);function L(e){var t=e.children,a=e.className;return i.a.createElement("div",{className:x()(j.a.wrapperFullWidth,a)},i.a.createElement("div",{className:j.a.wrapperFullWidth__background}),i.a.createElement("div",{className:j.a.wrapperFullWidth__children},t))}L.propTypes={children:o.node,className:o.string};var J=a(258),B=a(245),C=a.n(B),F=(a(246),{}.GATSBY_MAPBOX_TOKEN);function U(e){var t=e.latitude,a=e.longitude;if(!t||!a||!F)return null;var n={longitude:a,latitude:t};return i.a.createElement(L,{className:C.a.place},i.a.createElement("div",{className:C.a.place__map},"undefined"!=typeof window&&i.a.createElement(J.b,Object.assign({mapboxApiAccessToken:F,mapStyle:"mapbox://styles/mapbox/streets-v9"},n,{zoom:16,width:"100%",height:"100%"}),i.a.createElement(J.a,Object.assign({},n,{offsetLeft:-25,offsetTop:-25}),i.a.createElement("img",{src:Object(l.withPrefix)("/images/logotype.png"),height:"50px"})))))}function O(){return i.a.createElement(l.StaticQuery,{query:"3967406179",render:function(e){var t=e.allMarkdownRemark.edges[0].node.frontmatter.venue;return i.a.createElement(U,t)},data:P})}U.propTypes={latitude:o.number,longitude:o.number};var D=a(247),R=(a(85),a(181),a(162)),W=a(175),z=a.n(W),I=a(249),G=a.n(I);function q(e){var t=e.src,a=void 0===t?"":t,n=e.className,r=e.style;return i.a.createElement("div",{className:x()(G.a.circle,n),style:Object.assign({backgroundImage:"url("+a+")"},r)})}function H(e){var t=e.speakers,a=t.filter(function(e){return e.link});return i.a.createElement("div",{className:G.a.avatars},a.map(function(e,n){var r,s={};if(t.length>1){var l=75/a.length,o=25+l+"%",d=n*l+"%";s={width:o,paddingTop:o,borderRadius:o,position:"absolute",top:d,left:d}}return i.a.createElement(q,{key:e.id,style:s,className:x()(G.a.avatars__portrait,(r={},r[G.a.avatars__portraitSingle]=1===a.length,r)),src:"https://avatars.io/twitter/"+e.link.split("/").pop()})}))}function Y(e){var t=e.talks,a=void 0===t?[]:t;return i.a.createElement("div",{className:G.a.talks},a.map(function(e){return i.a.createElement("div",{key:e.id,className:G.a.talk},i.a.createElement(H,{speakers:e.speakers}),i.a.createElement("div",null,i.a.createElement("h3",{className:G.a.talk__title},e.title),i.a.createElement("p",{className:G.a.talk__description},e.description),i.a.createElement("div",{className:G.a.talk__speakers},i.a.createElement(R.a,{icon:z.a})," ",e.speakers.map(function(e){return e.link?i.a.createElement("a",{key:e.id,href:e.link},e.link.split("/").pop()):e.name}).reduce(function(e,t){return[e,", ",t]}))))}))}function K(){return i.a.createElement(l.StaticQuery,{query:"4067936206",render:function(e){var t=e.allMarkdownRemark.edges[0].node.frontmatter.talks;return i.a.createElement(Y,{talks:t})},data:D})}q.propTypes={src:o.string,style:o.object,className:o.string},H.propTypes={speakers:o.array},Y.propTypes={talks:o.array};var Q=a(250),V=a(251),X=a.n(V);function Z(e){var t=e.ticketsUrl;return t?i.a.createElement("div",{className:X.a.buttons},i.a.createElement("a",{className:X.a.buttonDark,href:t},"Réserver votre place")):null}function $(){return i.a.createElement(l.StaticQuery,{query:"3022301661",render:function(e){var t=e.allMarkdownRemark.edges[0].node.frontmatter.ticketsUrl;return i.a.createElement(Z,{ticketsUrl:t})},data:Q})}Z.propTypes={ticketsUrl:o.string};a(252);function ee(){return i.a.createElement("div",null,i.a.createElement(S,null),i.a.createElement(O,null),i.a.createElement(K,null),i.a.createElement($,null))}a(253);var te=a(255),ae=a(260),ne=(a(86),a(87),a(256)),ie=a.n(ne);function re(e){var t=e.talks;return i.a.createElement("ul",{className:ie.a.talks},t.map(function(e){return i.a.createElement("li",{key:e.id},i.a.createElement("p",{className:ie.a.talk__title},e.title),e.speakers&&e.speakers.map(function(e){return e.link?i.a.createElement("a",{className:ie.a.talk__speaker,key:e.id,href:e.link},e.link.includes("twitter")?"@"+e.link.split("/").pop():e.name):e.name}).reduce(function(e,t){return[e,", ",t]}))}))}function se(e){var t=e.meetups,a=t.length-1;return i.a.createElement(n.Fragment,null,i.a.createElement(L,{className:ie.a.oldMeetups__hero},i.a.createElement("div",null,i.a.createElement("h3",{className:ie.a.oldMeetups__title},"Évènements passés"),i.a.createElement("p",{className:ie.a.oldMeetups__description},t.length," meetups depuis janvier 2012"))),i.a.createElement("div",null,t.map(function(e,t){var r,s="url("+Object(l.withPrefix)(e.image)+")";return i.a.createElement(n.Fragment,{key:e.id},i.a.createElement("div",{className:x()(ie.a.meetup,(r={},r[ie.a.meetupBordered]=a!==t,r))},i.a.createElement("div",{className:ie.a.hideOnMobile},i.a.createElement("div",{className:ie.a.meetup__date},i.a.createElement(w,{date:e.date,fontSize:.5}),i.a.createElement("div",{className:ie.a.meetup__image,role:"img","aria-label":"image relative au sujet du meetup",style:{backgroundImage:s}}))),i.a.createElement("div",{className:ie.a.meetup__content},i.a.createElement("div",{className:ie.a.meetup__header},i.a.createElement("h4",{className:ie.a.meetup__title,title:e.title},e.title),i.a.createElement("div",{className:ie.a.meetup__sponsors},i.a.createElement("p",null,e.sponsor&&i.a.createElement(n.Fragment,null,i.a.createElement("span",null,"Sponsorisé par ",i.a.createElement("b",null,e.sponsor.name)),i.a.createElement("br",null)),e.venue&&i.a.createElement("span",null,"Hébergé par ",i.a.createElement("b",null,e.venue.name))))),i.a.createElement(re,{talks:e.talks}),i.a.createElement(m.a,{maxWidth:767},i.a.createElement("div",{className:ie.a.meetup__date},i.a.createElement("p",null,e.date))))))})))}re.propTypes={talks:o.array},se.propTypes={meetups:o.array};var le=Object(b.a)(new Date,"dd/MM/yyyy");function oe(){return i.a.createElement(l.StaticQuery,{query:"167783389",render:function(e){var t=e.allMarkdownRemark.edges.map(function(e){return e.node.frontmatter}).sort(function(e,t){var a=le(e.date),n=le(t.date);return Object(ae.a)(a,n)});return i.a.createElement(se,{meetups:t})},data:te})}var de=a(257),me=a.n(de);function ce(){return i.a.createElement(n.Fragment,null,i.a.createElement(L,{className:me.a.sponsors__hero},i.a.createElement("h3",{className:me.a.sponsors__title},"Sponsors 2019")),i.a.createElement("div",{className:me.a.sponsors__logos},i.a.createElement("img",{alt:"logo de alakarteio",className:me.a.sponsors__logo,src:Object(l.withPrefix)("/images/sponsor/alakarteio.png")})))}t.default=function(){return i.a.createElement(r.a,null,i.a.createElement(ee,null),i.a.createElement(ce,null),i.a.createElement(oe,null))}},220:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{frontmatter:{id:"1bcdfd34-6185-40e3-8085-89fa931fe953",title:"MEETUP 36",date:"17/01/2019",image:"/images/meetup/axe-core.png",sponsor:{id:"288948c9-6777-478d-ac82-1928fd5de4e1",name:"alakarteio"},venue:{id:"a5e77240-30eb-4384-9380-f7f3cf86e867",name:"Pôle Emploi"}}}}]}}}},226:function(e,t,a){e.exports={date:"FullDate-module--date--3f0WX",date__column:"FullDate-module--date__column--3zSXR",date__day:"FullDate-module--date__day--3iWhB",date__month:"FullDate-module--date__month--2Ap38",date__year:"FullDate-module--date__year--14A94"}},237:function(e,t,a){e.exports={titlebar:"TitleBar-module--titlebar--2iKsJ",titlebar__imageWrapper:"TitleBar-module--titlebar__image-wrapper--3MGPV",titlebar__infos:"TitleBar-module--titlebar__infos--3ovIa",date:"TitleBar-module--date--JdmlH",date__day:"TitleBar-module--date__day--26wMm",date__month:"TitleBar-module--date__month--3U1TB",date__year:"TitleBar-module--date__year--xYKu7"}},238:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{frontmatter:{venue:{latitude:47.2087549,longitude:-1.5381854}}}}]}}}},239:function(e,t,a){e.exports={wrapperFullWidth:"FullWidthContainer-module--wrapper-full-width--teSlX",wrapperFullWidth__background:"FullWidthContainer-module--wrapper-full-width__background--2oW5C",wrapperFullWidth__children:"FullWidthContainer-module--wrapper-full-width__children--2Y75z"}},245:function(e,t,a){e.exports={place:"Place-module--place--Gd0Qj",place__map:"Place-module--place__map--5d68b"}},247:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{frontmatter:{talks:[{id:"c3ec282d-92c8-468c-9a39-2456ed29e1a3",title:"Axe-Core et React : l'accessibilité, ça se teste !",description:"L'accessibilité est un sujet vaste, qui concerne tout le monde. Il existe aujourd'hui beaucoup d'outils pour tester l'accessibilité d'un site, et nous allons présenter l'un d'entre eux : Axe-Core. Utilisé avec React et Jest, il permet (entre autres) de faire des tests unitaires sur l'accessibilité.",speakers:[{id:"544ee986-98fe-4dcf-9034-6600fc026aea",name:"Mireille Campourcy ",link:"https://twitter.com/mireille_cmpcy"},{id:"1b2fb6c4-96b1-411f-9756-37315d4a3d5d",name:"Benoît Deglane",link:null}]},{id:"c29fd8aa-92f0-46ad-b4c6-cf18537e0507",title:"LA NOUVELLE API CONTEXT DE REACT",description:"La version 16.3 de React est arrivé, avec elle la nouvelle API context. Cette API existait déjà auparavant notamment pour partager des propriétés dans tous nos composants. Mais il y avait une problématique de taille, si une valeur du contexte changeais et qu'un composant intermédiaire bloquait ce changement, les enfants n'était pas mis à jour. Dans une application complexe ça peut devenir compliqué à maintenir.\nDorénavant il est possible de créer plusieurs contextes et y avoir accès à n'importe quel endroit de notre arbre de composant sans problématique de re-rendu des composants.\nDans ce talk nous allons donc voir comment mettre en place plusieurs contextes et essayer de se passer d'une bibliothéque de gestion d'état comme Redux.",speakers:[{id:"11506afc-7e1b-412c-adf6-a57b4da8e0bd",name:"Antoine Cellier ",link:"https://twitter.com/AntoineCellier3"},{id:"08ea7040-f397-4263-a141-945d71d0bc19",name:"Julien Tanguy",link:"https://twitter.com/jutanguy"}]}]}}}]}}}},249:function(e,t,a){e.exports={circle:"Talks-module--circle--2n8F0",talks:"Talks-module--talks--3P769",talk:"Talks-module--talk--26roO",talk__title:"Talks-module--talk__title--2wChb",talk__description:"Talks-module--talk__description--u_5Xp",avatars:"Talks-module--avatars--10Jh8",avatars__portraitSingle:"Talks-module--avatars__portrait--single--ndFOL",talk__speakers:"Talks-module--talk__speakers--ED0ns"}},250:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{frontmatter:{id:"1bcdfd34-6185-40e3-8085-89fa931fe953",ticketsUrl:"https://www.eventbrite.fr/e/billets-nantesjs-meetup-36-54638426003<Paste>"}}}]}}}},251:function(e,t,a){e.exports={buttonDark:"Buttons-module--button--dark--NsO3p",buttons:"Buttons-module--buttons--23-sB"}},252:function(e,t,a){},255:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{frontmatter:{id:"25bf5ef5-f576-47fb-b1b4-e260e04b4041",status:"done",date:"09/01/2012",image:"/images/meetup/eniac-computer.jpg",title:"MEETUP 01",sponsor:null,venue:{name:"La Cantine"},talks:[{title:"NantesJS premier meetup - Welcome",speakers:[{id:"ded7a100-4739-4b25-81c7-14202b4248d0",name:"Alexandre Morgaut",link:"https://twitter.com/amorgaut"}]},{title:"Server-side JavaScript : How To Start ?",speakers:[{id:"dba26094-d3a3-46e5-acc0-17592b786227",name:"Quentin Adam",link:"https://twitter.com/waxzce"}]},{title:"State of the art: server-side JavaScript",speakers:[{id:"ded7a100-4739-4b25-81c7-14202b4248d0",name:"Alexandre Morgaut",link:"https://twitter.com/amorgaut"}]},{title:"Javascript dans le cadre du développement d'applications pour TV connectées",speakers:[{id:"33530598-56be-4059-962d-ef0338b1360b",name:"Loïc Guillois",link:"https://twitter.com/loic_guillois"}]}]}}},{node:{frontmatter:{id:"73137de2-82e6-49e0-a6e3-1ebd0baf4486",status:"done",date:"15/02/2012",image:"/images/meetup/harwell-witch-computer.jpg",title:"MEETUP 02",sponsor:null,venue:{name:"La Cantine"},talks:[{title:"I/O - Framework pour faire des applis découplées en node.js",speakers:[{id:"6b6497c6-1490-49c9-95ac-cc5f0d301359",name:"Thomas Moyse",link:"https://twitter.com/t8g"}]},{title:"Pattern objet JavaScript : le pouvoir des closures et du prototype",speakers:[{id:"ded7a100-4739-4b25-81c7-14202b4248d0",name:"Alexandre Morgaut",link:"https://twitter.com/amorgaut"}]},{title:"JS everywhere with Wakanda (version courte)",speakers:[{id:"ded7a100-4739-4b25-81c7-14202b4248d0",name:"Alexandre Morgaut",link:"https://twitter.com/amorgaut"}]}]}}},{node:{frontmatter:{id:"c15a320f-72e7-41e4-b603-f1e4d5c34197",status:"done",date:"21/03/2012",image:"/images/meetup/avidac-computer.jpg",title:"MEETUP 03",sponsor:null,venue:{name:"La Cantine"},talks:[{title:"Accueil & actualité du Web",speakers:[{id:"ded7a100-4739-4b25-81c7-14202b4248d0",name:"Alexandre Morgaut",link:"https://twitter.com/amorgaut"},{id:"292cf745-203e-488d-b6e7-79cb8a586781",name:"Yoann Digue",link:null}]},{title:"Analyse d'un test de recrutement de développeur Front-end",speakers:[{id:"ded7a100-4739-4b25-81c7-14202b4248d0",name:"Alexandre Morgaut",link:"https://twitter.com/amorgaut"}]}]}}},{node:{frontmatter:{id:"1dfd86b7-93fc-4b2b-8c9e-44446f75d4d2",status:"done",date:"20/06/2012",image:"/images/meetup/fnb-national-center-computer.jpg",title:"MEETUP 04",sponsor:null,venue:{name:"La Cantine"},talks:[{title:"Welcome / JS News",speakers:[{id:"ded7a100-4739-4b25-81c7-14202b4248d0",name:"Alexandre Morgaut",link:"https://twitter.com/amorgaut"},{id:"6b6497c6-1490-49c9-95ac-cc5f0d301359",name:"Thomas Moyse",link:"https://twitter.com/t8g"}]},{title:"AngularJS",speakers:[{id:"6b6497c6-1490-49c9-95ac-cc5f0d301359",name:"Thomas Moyse",link:"https://twitter.com/t8g"}]},{title:"JS Remote Debugging",speakers:[{id:"799011a8-8392-4a3b-8fff-7e2a057fa9ca",name:"Thomas Gratier",link:"https://twitter.com/thomasg77"}]}]}}},{node:{frontmatter:{id:"be81a560-2155-4947-9286-67f89af48b6d",status:"done",date:"18/04/2013",image:"/images/meetup/univac-computer.jpg",title:"MEETUP 05",sponsor:null,venue:{name:"KNPLabs"},talks:[{title:"Présentation et échanges sur FranceJS",speakers:[{id:"6b6497c6-1490-49c9-95ac-cc5f0d301359",name:"Thomas Moyse",link:"https://twitter.com/t8g"}]},{title:"AngularJS",speakers:[{id:"6b6497c6-1490-49c9-95ac-cc5f0d301359",name:"Thomas Moyse",link:"https://twitter.com/t8g"}]},{title:"W3C System Application and other APIs",speakers:[{id:"ded7a100-4739-4b25-81c7-14202b4248d0",name:"Alexandre Morgaut",link:"https://twitter.com/amorgaut"}]}]}}},{node:{frontmatter:{id:"026f549f-c8d1-4c7d-bd19-c2d361539e06",status:"done",date:"15/10/2013",image:"/images/meetup/dec-pdp-computer.jpg",title:"MEETUP 06",sponsor:null,venue:{name:"Clever Age"},talks:[{title:"Les meilleures ressources pour du JS front & back",speakers:[{id:"a6e17615-fbc7-43a7-a6c1-9b82d4a10810",name:"Bruno Heridet",link:"https://twitter.com/delapouite"}]},{title:"Les stars du JS et les personnes à surveiller",speakers:[{id:"a6e17615-fbc7-43a7-a6c1-9b82d4a10810",name:"Bruno Heridet",link:"https://twitter.com/delapouite"}]},{title:"Les rivalités et autres potins",speakers:[{id:"a6e17615-fbc7-43a7-a6c1-9b82d4a10810",name:"Bruno Heridet",link:"https://twitter.com/delapouite"}]}]}}},{node:{frontmatter:{id:"77fb5995-95d3-4c22-904c-6b22dbce9ab8",status:"done",date:"19/11/2013",image:"/images/meetup/gruntjs.png",title:"MEETUP 07",sponsor:null,venue:{name:"Smile Nantes"},talks:[{title:"Workshop : GruntJS",speakers:[{id:"24bff0b1-9c59-4077-8aab-a12ededeffe0",name:"Xavier Seignard",link:"https://twitter.com/xavier_seignard"},{id:"6b6497c6-1490-49c9-95ac-cc5f0d301359",name:"Thomas Moyse",link:"https://twitter.com/t8g"}]}]}}},{node:{frontmatter:{id:"1fc40bf8-7850-458b-b403-15d861784f74",status:"done",date:"28/01/2014",image:"/images/meetup/hologram-man.jpg",title:"MEETUP 08",sponsor:null,venue:{name:"Stereolux"},talks:[{title:"Migration jQuery -> AngularJS à DoYouBuzz",speakers:[{id:"7f851b41-b88d-43aa-9b81-f757ae95542a",name:"Thomas Belin",link:"https://twitter.com/atomrc"}]}]}}},{node:{frontmatter:{id:"d5804174-e4e0-4654-9b86-d0bb8aba55d8",status:"done",date:"17/02/2014",image:"/images/meetup/casperjs.png",title:"MEETUP 09",sponsor:null,venue:{name:"Epitech"},talks:[{title:"Workshop : CasperJS by CasperJS",speakers:[{id:"3abad518-63fb-4537-9b7e-d219eff2a44a",name:"Nicolas Perriault (aka CasperJS)",link:"https://twitter.com/n1k0"}]}]}}},{node:{frontmatter:{id:"6c394ea4-6dab-4f12-827b-3fe2860ab2ea",status:"done",date:"23/09/2014",image:"/images/meetup/sigmajs.png",title:"MEETUP 10",sponsor:null,venue:{name:"Eodim"},talks:[{title:"SigmaJS",speakers:[{id:"186455bb-3541-4776-80c0-f24d2cbf6f76",name:"Alexis Jacomy",link:"https://twitter.com/jacomyal"}]}]}}},{node:{frontmatter:{id:"1ef542f6-45ab-420a-b059-a4ecc1ae650c",status:"done",date:"17/03/2015",image:"/images/meetup/gremlin.png",title:"MEETUP 11",sponsor:{name:"La Cantine"},venue:{name:"La Cantine"},talks:[{title:"Bases de données graphe (framework TinkerPop, langage Gremlin) et leur utilisation avec JavaScript/Node.js",speakers:[{id:"c9f92b3e-c172-4803-bac9-f5900bc4ba37",name:"Jean-Baptiste Musso",link:"https://twitter.com/jbmusso"}]}]}}},{node:{frontmatter:{id:"9a48e4ae-8824-49e4-bb21-b35ec21c31ea",status:"done",date:"17/09/2015",image:"/images/meetup/ionic.svg",title:"MEETUP 12",sponsor:{name:"Wiztivi"},venue:{name:"Atelier Iceberg"},talks:[{title:"Présentation du Framework Ionic",speakers:[{id:"0837e20e-f77b-4f26-92c6-0f0452d6f049",name:"Alain Boudard",link:"https://twitter.com/aboudard"}]},{title:"Lightning talk : React",speakers:[{id:"a4c312fc-487b-45df-b50a-d94e1f8a633a",name:"Antoine Cellier",link:null}]},{title:"Lightning talk : Déploiement de projet front avec Lidlet",speakers:[{id:"c5b6b163-5c85-4fe0-99a9-c718c4eb3532",name:"Jonathan Redoute",link:null}]}]}}},{node:{frontmatter:{id:"0c4d540c-e1e5-4b49-8217-42c4ff81f3e5",status:"done",date:"15/10/2015",image:"/images/meetup/react.svg",title:"MEETUP 13",sponsor:{name:"Conserto"},venue:{name:"Atelier Iceberg"},talks:[{title:"Live coding sur le Framework React Native",speakers:[{id:"44ecb2f3-386a-49d0-82a1-3ec8bdde41a0",name:"Axel Cateland",link:"https://twitter.com/catelandaxel"}]},{title:"Lightning talk : Bacon.js",speakers:[{id:"a44a0331-c3d0-4a5c-a254-5a194cd43f6d",name:"Rodolphe Belouin",link:"https://twitter.com/rbelouin"}]},{title:"Lightning talk : Webpack (Slides)",speakers:[{id:"6b6497c6-1490-49c9-95ac-cc5f0d301359",name:"Thomas Moyse",link:"https://twitter.com/t8g"}]}]}}},{node:{frontmatter:{id:"c4431f93-a473-48c0-92f7-4ddb6a7e833b",status:"done",date:"19/11/2015",image:"/images/meetup/flux.svg",title:"MEETUP 14",sponsor:{name:"Seyos"},venue:{name:"iAdvize"},talks:[{title:"Flux : les doigts dans le Flux ! (Slides)",speakers:[{id:"7f851b41-b88d-43aa-9b81-f757ae95542a",name:"Thomas Belin",link:"https://twitter.com/atomrc"}]},{title:"Lightning talk : Meteor",speakers:[{id:"721a11a5-add9-4087-8fe9-d334c7b99a8f",name:"Yann Danthu",link:"https://twitter.com/YannDanthu"}]}]}}},{node:{frontmatter:{id:"2bbde6a3-4c70-40a4-adf1-dce339acc675",status:"done",date:"19/11/2015",image:"/images/meetup/lambda.svg",title:"MEETUP 15",sponsor:{name:"DoYouBuzz"},venue:{name:"Startup Palace"},talks:[{title:"Un peu de programmation fonctionnelle en JS",speakers:[{id:"4cb5f960-c645-48cb-82db-cd6118b6e35e",name:"David Sferruzza",link:"https://twitter.com/d_sferruzza"}]},{title:"Lightning talk : Grid Stylesheet",speakers:[{id:"84c2cbb6-59b6-4e28-8c6d-758aeda85d67",name:"Antoine Banctel-Chevrel",link:"http://twitter.com/chevreuil"}]}]}}},{node:{frontmatter:{id:"fd3aabba-2e39-40bd-b996-d1e300128fc9",status:"done",date:"21/01/2016",image:"/images/meetup/camembert.jpg",title:"MEETUP 16",sponsor:{name:"Akeneo"},venue:{name:"Clever Age"},talks:[{title:"Beyond Flux: going full cycle with Functional Reactive Programming",speakers:[{id:"d17e7a79-2da2-4ef3-a941-2c58dbade30e",name:"Clément Delafargue",link:"https://twitter.com/clementd"}]},{title:"Lightning talk : Beyond flash ;)",speakers:[{id:"921ff022-b3bc-4960-9803-93e1ae6b4742",name:"Pierre Chabiland",link:"https://twitter.com/pierrechabiland"}]}]}}},{node:{frontmatter:{id:"13d44bd6-0b75-48cb-93ab-c9a1186f0f9b",status:"done",date:"18/02/2016",image:"/images/meetup/angular2.png",title:"MEETUP 17",sponsor:{name:"Zenika Nantes"},venue:{name:"Zenika Nantes"},talks:[{title:"Migration vers Angular 2",speakers:[{id:"9935c0c0-c6f5-4e4d-8b23-ad3a9a62a584",name:"Laurent Maillet",link:"https://twitter.com/Nebounet"}]},{title:"Lightning talk : Pourquoi le développement d'applications Web n'est pas encore résolu ?",speakers:[{id:"186455bb-3541-4776-80c0-f24d2cbf6f76",name:"Alexis Jacomy",link:"https://twitter.com/jacomyal"}]},{title:"Lightning talk : Retour d'expérience sur la stack MEAN",speakers:[{id:"67fcfbca-873f-4bbb-820c-75d73eb199f5",name:"Pierre Medard",link:null}]}]}}},{node:{frontmatter:{id:"daf13614-d944-4ad3-99d2-3ea9b5e1132a",status:"done",date:"17/03/2016",image:"/images/meetup/pattern-matching.jpg",title:"MEETUP 18",sponsor:{name:"ByteClub"},venue:{name:"Lengow"},talks:[{title:"Implémentation de Pattern Matching en JavaScript",speakers:[{id:"2c4d342e-c21e-42de-9272-c064c0ead764",name:"FG Ribreau",link:"https://twitter.com/FGRibreau"}]},{title:"Présentation de elm",speakers:[{id:"f3986b42-fc21-428f-a286-7f28aa216b54",name:"Julien Tanguy",link:"https://twitter.com/jutanguy"}]}]}}},{node:{frontmatter:{id:"385ee451-50dd-4887-976c-9eb84cb45b31",status:"done",date:"19/05/2016",image:"/images/meetup/ionic.png",title:"MEETUP 19",sponsor:{name:"Lucca"},venue:{name:"Lucca"},talks:[{title:"Ionic",speakers:[{id:"33530598-56be-4059-962d-ef0338b1360b",name:"Loïc Guillois",link:"https://twitter.com/loic_guillois"}]},{title:"Reconnaissance d'écriture",speakers:[{id:"ca47363a-a28d-49df-af9d-99d851f68814",name:"Pierre Alban Dewitte",link:"http://padewitte.tumblr.com/"}]},{title:"Transducers en transat",speakers:[{id:"a6e17615-fbc7-43a7-a6c1-9b82d4a10810",name:"Bruno Heridet",link:"http://delapouite.com/"}]}]}}},{node:{frontmatter:{id:"a9239673-1814-4d78-8f59-96816b2532f0",status:"done",date:"17/01/2017",image:"/images/meetup/ionic2.png",title:"MEETUP 20",sponsor:{name:"MyScript"},venue:{name:"Akeneo"},talks:[{title:"Ionic2",speakers:[{id:"1d3d2b61-3686-46f2-8168-35398bb98f58",name:"PeekMo",link:"https://twitter.com/PeekMo"}]},{title:"Introduction à D3",speakers:[{id:"ce583d28-82ab-4b0f-b651-b0ec57f74c86",name:"François Robichet",link:"https://twitter.com/calvein"}]},{title:"La dataviz sans D3",speakers:[{id:"186455bb-3541-4776-80c0-f24d2cbf6f76",name:"Alexis Jacomy",link:"https://twitter.com/jacomyal"}]}]}}},{node:{frontmatter:{id:"bc5ccdd0-854c-41bb-9287-9ab015c5e9ec",status:"done",date:"20/04/2017",image:"/images/meetup/hp-minicomputer.jpg",title:"MEETUP 21",sponsor:{name:"Seyos"},venue:{name:"La fourchette"},talks:[{title:"Comment manipuler une page web avec une API de marketing automation",speakers:[{id:"1ca0c4e7-079a-4445-ab9d-17237d3a131b",name:"Aleth Gueguen",link:"https://twitter.com/pl4n3th"}]},{title:"Purescript: des sensations pures",speakers:[{id:"d17e7a79-2da2-4ef3-a941-2c58dbade30e",name:"Clément Delafargue",link:"https://twitter.com/clementd"}]},{title:"Les tests en JavaScript®",speakers:[{id:"6f92da5d-6b48-4374-9f3c-eaeda7d7edac",name:"Alvin Berthelot",link:"https://twitter.com/alvinberthelot"}]}]}}},{node:{frontmatter:{id:"8ae1f422-02c6-45bc-a54c-8f1cf45ee486",status:"done",date:"18/05/2017",image:"/images/meetup/react.svg",title:"MEETUP 22",sponsor:{name:"Externatic"},venue:{name:"Groupe Creative"},talks:[{title:"React, Redux, JS et no-JS",speakers:[{id:"daabff2e-8fde-46eb-ae3e-8cefdf0c45de",name:"Samuel Bouchet",link:"https://twitter.com/Lythom"}]},{title:"Npm vs Yarn",speakers:[{id:"e365a404-e02d-49e1-b593-42a8bcc9dc38",name:"Frank Abgrall",link:"https://twitter.com/FranckAbgrall"}]},{title:"Étendre word et excel avec javascript c'est possible",speakers:[{id:"80a7a393-6207-4d9a-8d7e-64bbabc29c2f",name:"Pierre-Alban Dewitte",link:"https://twitter.com/padewitte"}]}]}}},{node:{frontmatter:{id:"a644232d-fdac-4b4f-9d5f-fd6abe08b209",status:"done",date:"15/06/2017",image:"/images/meetup/computer.jpg",title:"MEETUP 23",sponsor:{name:"Clever Cloud"},venue:{name:"UmanIT"},talks:[{title:"Lodasheries pour un JS plus clair",speakers:[{id:"44e269d4-d488-4366-bdad-a8f9c2e2785c",name:"Hugo Wood",link:"https://twitter.com/mercury_wood"}]},{title:"Gérer ses dépendances avec Webpack",speakers:[{id:"f3986b42-fc21-428f-a286-7f28aa216b54",name:"Julien Tanguy",link:"https://twitter.com/jutanguy"}]},{title:"Code splitting d'une Single Page App 2016/2017",speakers:[{id:"0d850b3a-b444-46c3-b3c2-d4de616736c1",name:"David Epely",link:"https://twitter.com/AllTheDey"}]}]}}},{node:{frontmatter:{id:"0401bc38-6a34-4368-a5c8-f1b557edffe6",status:"done",date:"21/09/2017",image:"/images/meetup/hipster.jpg",title:"MEETUP 24",sponsor:{name:"The Tribe"},venue:{name:"Externatic"},talks:[{title:"La dataviz pour les hipsters",speakers:[{id:"186455bb-3541-4776-80c0-f24d2cbf6f76",name:"Alexis Jacomy",link:"https://twitter.com/jacomyal"}]},{title:"Un bon Brunch dans une bonne auberge",speakers:[{id:"921ff022-b3bc-4960-9803-93e1ae6b4742",name:"Pierre Chabiland",link:"https://twitter.com/PierreChabiland"}]}]}}},{node:{frontmatter:{id:"cdabd083-8d6e-4b84-b81f-c420519cb993",status:"done",date:"26/10/2017",image:"/images/meetup/world.jpg",title:"MEETUP 25",sponsor:{name:"Seyos"},venue:{name:"Lone Stone"},talks:[{title:"Baobab.js, ou comment gérer simplement son état applicatif",speakers:[{id:"20b73458-1f41-43c5-a4a3-b46185301f9e",name:"Jérémy Lesceau",link:"https://twitter.com/JLesceau"}]},{title:"Promenade au pays de la cartographie",speakers:[{id:"b6085f0d-a54b-4b66-8288-649f5e71c1e6",name:"Nicolas Lelong",link:"https://twitter.com/rotoglup"}]}]}}},{node:{frontmatter:{id:"14866e9d-a8dd-4b32-b6c9-d4bbb36c2deb",status:"done",date:"16/11/2017",image:"/images/meetup/cycle.png",title:"MEETUP 26",sponsor:{name:"Zenika"},venue:{name:"Lucca"},talks:[{title:"DoYouBuzz v3 : de la programmation impérative à la programmation réactive",speakers:[{id:"7f851b41-b88d-43aa-9b81-f757ae95542a",name:"Thomas Belin",link:"https://twitter.com/atomrc"}]},{title:"Introduction à React Native",speakers:[{id:"63574bff-912c-47c0-927b-6e3442fd8535",name:"Nicolas Kerdelhué",link:"https://twitter.com/zakarby"}]}]}}},{node:{frontmatter:{id:"d18bc624-580c-4ab7-a6cd-c57c3711e356",status:"done",date:"18/01/2018",image:"/images/meetup/web-assembly.png",title:"MEETUP 27",sponsor:{name:"La fourchette"},venue:{name:"La fourchette"},talks:[{title:"Past, Present, and Future of Web Assembly",speakers:[{id:"ded7a100-4739-4b25-81c7-14202b4248d0",name:"Alexandre Morgaut",link:"https://twitter.com/amorgaut"}]},{title:"DotJS 2017 - rétrospective",speakers:[{id:"6e17d7bb-d42a-48c8-ba4d-a406b4d2ae7c",name:"Yvonnick FRIN",link:"https://twitter.com/YvonnickFrin"}]}]}}},{node:{frontmatter:{id:"ee44317d-26e8-4d1c-bb44-f5ff69a1d5c7",status:"done",date:"15/02/2018",image:"/images/meetup/rxjs.png",title:"MEETUP 28",sponsor:{name:"KNP Labs"},venue:{name:"Le phare"},talks:[{title:"MythBusters : RxJS",speakers:[{id:"366025b6-eee7-49ef-a70c-898b82c71902",name:"Thomas Moyse",link:"https://twitter.com/t8g"},{id:"5da44081-c860-402a-a546-47c673dca587",name:"Alvin Berthelot",link:"https://twitter.com/alvinberthelot"}]},{title:"Vim + Js : parce que pourquoi pas !",speakers:[{id:"54157258-eaca-433e-a870-e42908705d47",name:"Sylvain Bannier",link:"https://twitter.com/bannier"}]}]}}},{node:{frontmatter:{id:"13f90e0d-bd0c-4915-b7bb-4bc50c0b2b8c",status:"done",date:"15/03/2018",image:"/images/meetup/graphql.png",title:"MEETUP 29",sponsor:{name:"GraphDB"},venue:{name:"Externatic"},talks:[{title:"GRAND Stack: GraphQL, React, Apollo, and Neo4j",speakers:[{id:"721175f9-772d-45e0-b1d2-4d12bcbc6db7",name:"Benoît Simard",link:"https://twitter.com/logisima"}]},{title:"My journey into Clojure",speakers:[{id:"62b4dbf6-6137-4151-8211-6525362e7195",name:"Alexis Jacomy",link:"https://twitter.com/jacomyal"}]}]}}},{node:{frontmatter:{id:"20dd8ab1-c862-415a-abaf-ebf6b320491b",status:"done",date:"19/04/2018",image:"/images/meetup/vintage_computers_01.jpg",title:"MEETUP 30",sponsor:{name:"Seyos"},venue:{name:"READi Design Lab"},talks:[{title:"Le JavaScript comme instrument de recherche en Sciences Humaines et Sociales",speakers:[{id:"5dc5572e-0036-486f-83cb-3f18a5ffc3de",name:"Paul Girard",link:"https://twitter.com/paulanomalie"},{id:"e2dbe289-29a4-4f23-b320-10b30cf7b62b",name:"Guillaume Plique",link:"https://twitter.com/yomguithereal"}]},{title:"La galaxie RxJS",speakers:[{id:"065811f4-617b-4205-b40e-3635bd4b13b5",name:"Cédric Soulas",link:"https://twitter.com/cedricsoulas"}]}]}}},{node:{frontmatter:{id:"a0c038f2-849f-4203-a0a2-5ad97217b85d",status:"done",date:"17/05/2018",image:"/images/meetup/kata.gif",title:"MEETUP 31",sponsor:{name:"ByteClub"},venue:{name:"Zenika"},talks:[{title:"Katas rapides sous contraintes",speakers:[{id:"7138c9f2-86a7-4d66-8742-a766da34c342",name:"Xavier Detant",link:"https://twitter.com/xdetant"}]}]}}},{node:{frontmatter:{id:"f21adb13-f98a-4cd3-9932-f93be4c334e6",status:"done",date:"14/06/2018",image:"/images/meetup/vintage_computers_02.jpg",title:"MEETUP 32",sponsor:{name:"Pôle Emploi"},venue:{name:"Pôle Emploi"},talks:[{title:"L’immuabilité en Javascript",speakers:[{id:"4c4bb0d7-c346-4230-bc4a-0b807a07c80c",name:"Nicolas Lepage",link:"https://twitter.com/njblepage"},{id:"623af3ae-8da8-4aed-bb7c-486708213ba1",name:"Yvonnick Frin",link:"https://twitter.com/YvonnickFrin"}]},{title:"Reselect et données immuables",speakers:[{id:"3ac6df81-7112-4690-b7c4-a157c6601326",name:"Samuel Bouchet",link:"https://twitter.com/lythom"}]}]}}},{node:{frontmatter:{id:"955c904b-550d-4009-85c1-a3c8c0ddf741",status:"done",date:"20/09/2018",image:"/images/meetup/houdini.png",title:"MEETUP 33",sponsor:{name:"AB Tasty"},venue:{name:"La fourchette"},talks:[{title:"Faisons de la magie grace à Houdini CSS",speakers:[{id:"69523033-ffbe-4a8f-bbb6-77a48fba387b",name:"Jean-François Garreau",link:"https://twitter.com/jefbinomed"}]},{title:"La gestion des erreurs dans une appli web (React) ou mobile (React Native)",speakers:[{id:"d50710fb-b95e-4582-920d-5a928b3ac372",name:"Pierre Pinard",link:"https://twitter.com/pierrepinard_2"}]}]}}},{node:{frontmatter:{id:"1b509bae-ecc8-4ef4-985b-19c9661ec901",status:"done",date:"25/10/2018",image:"/images/meetup/gamestation.jpg",title:"MEETUP 34",sponsor:{name:"Externatic"},venue:{name:"Nickel"},talks:[{title:"Journey through multiplayer online game development with JS",speakers:[{id:"432f6f03-3af5-4625-8cf4-6b65e55ce4c8",name:"Samuel Hurel",link:"https://twitter.com/IcanDivideBy0"}]},{title:"Du JS et des LEGO",speakers:[{id:"a9125e0e-86f7-464f-aa6e-b811ed4f9015",name:"Pierre Chabiland",link:"https://twitter.com/pierrechabiland"}]}]}}},{node:{frontmatter:{id:"ab36d815-3e69-4722-b1e2-9c42f5fb9144",status:"done",date:"15/11/2018",image:"/images/meetup/drone_js.png",title:"MEETUP 35",sponsor:{name:"A5Sys"},venue:{name:"Beekast"},talks:[{title:"Behind the drones: comment organiser un concours de programmation de drones avec Node.js",speakers:[{id:"5ab13e18-cd7f-4b6b-80c1-dd6ab224a9a1",name:"Vincent Voyer",link:"https://twitter.com/vvoyer"}]},{title:"REX dotJS 2018",speakers:[{id:"4b953f6a-ea3e-43c3-bdc3-4296c46f25ac",name:"Thomas Moyse",link:"https://twitter.com/t8g"},{id:"acb5a73b-ca8f-46f5-8991-5fadb88a3b74",name:"Yvonnick Frin",link:"https://twitter.com/YvonnickFrin"},{id:"7f3d414e-e8ce-43a5-90b6-725aad69359a",name:"Kseniia Saevich",link:"https://twitter.com/Kseniya_Saevich"},{id:"4a14efed-1516-4fcb-a7cf-2d65ed6c5a03",name:"Olivia Bruce",link:"https://twitter.com/OliJBruce"},{id:"a33340c6-0826-4dd3-8ae5-bbee1de527af",name:"Delphine Millet",link:"https://twitter.com/MilletDelphine"},{id:"e9624115-2b24-46c8-930c-5d38b35a9131",name:"Fabien JUIF",link:"https://twitter.com/fabienjuif"}]}]}}},{node:{frontmatter:{id:"07b5785f-ddce-42a7-b007-163a2ea5f909",status:"done",date:"04/07/2018",image:"/images/meetup/casque.png",title:"Le meetup dont vous êtes le héros",sponsor:{name:"Gens de confiance"},venue:{name:"Akeneo"},talks:[{title:"",speakers:[{id:"eaa2aa1e-21ea-4b1a-b931-a56165d29911",name:"Vous",link:null}]}]}}},{node:{frontmatter:{id:"a38fc14d-fe47-4658-871b-4bfe5223f394",status:"done",date:"20/07/2017",image:"/images/meetup/casque.png",title:"Le meetup dont vous êtes le héros",sponsor:{name:"La fourchette"},venue:{name:"Akeneo"},talks:[{title:"Votre talk",speakers:[{id:"38eb5e9b-1a3c-42e4-b71f-950dbfed6f41",name:"Vous",link:null}]}]}}},{node:{frontmatter:{id:"7f4d5838-c921-427f-8d0c-55b4f63b47c2",status:"done",date:"07/04/2016",image:"/images/meetup/phaser.png",title:"WORKSHOP 1",sponsor:null,venue:{name:"DojoCrea Nantes"},talks:[{title:"Workshop Phaser",speakers:[{id:"6f92da5d-6b48-4374-9f3c-eaeda7d7edac",name:"Alvin Berthelot",link:"https://twitter.com/alvinberthelot"},{id:"921ff022-b3bc-4960-9803-93e1ae6b4742",name:"Pierre Chabiland",link:"https://twitter.com/pierrechabiland"}]}]}}}]}}}},256:function(e,t,a){e.exports={oldMeetups__hero:"OldMeetups-module--old-meetups__hero--1HJsW",oldMeetups__title:"OldMeetups-module--old-meetups__title--KX1NF",oldMeetups__description:"OldMeetups-module--old-meetups__description--3Wq_k",meetup:"OldMeetups-module--meetup--16yOE",meetup__header:"OldMeetups-module--meetup__header--3TsFV",meetup__date:"OldMeetups-module--meetup__date--1nVcW",meetup__title:"OldMeetups-module--meetup__title--1Z8OK",meetup__content:"OldMeetups-module--meetup__content--3CN4m",talk__title:"OldMeetups-module--talk__title--1Ds21",talk__speaker:"OldMeetups-module--talk__speaker--1ewxQ",talks:"OldMeetups-module--talks--3z3DW",meetup__sponsors:"OldMeetups-module--meetup__sponsors--1TQKI",meetupBordered:"OldMeetups-module--meetup--bordered--3Letn",meetup__image:"OldMeetups-module--meetup__image--1JAT4",hideOnMobile:"OldMeetups-module--hideOnMobile--KR4y9"}},257:function(e,t,a){e.exports={sponsors__hero:"Sponsors-module--sponsors__hero--2sT39",sponsors__title:"Sponsors-module--sponsors__title--rFkfw",sponsors__logo:"Sponsors-module--sponsors__logo--3sBLW"}}}]);
//# sourceMappingURL=component---src-pages-index-js-970ebda8d1857b6a461e.js.map