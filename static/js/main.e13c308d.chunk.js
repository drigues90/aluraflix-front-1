(this.webpackJsonpaluraflix=this.webpackJsonpaluraflix||[]).push([[0],{43:function(n,e,t){n.exports=t.p+"static/media/Logo.b1f5d75a.png"},45:function(n,e,t){n.exports=t(90)},50:function(n,e,t){},67:function(n,e,t){},89:function(n,e,t){},90:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(20),i=t.n(o),c=(t(50),t(11)),l=t(3),u=t(12),s=t(1),p=t(2);function d(){var n=Object(s.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n"]);return d=function(){return n},n}function m(){var n=Object(s.a)(["\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  padding-top: 56.25%;\n  @media (max-width: 800px) {\n    display: none;\n  }\n"]);return m=function(){return n},n}var f=p.b.div(m()),g=p.b.iframe(d());var b=function(n){var e=n.youtubeID;return r.a.createElement(f,null,r.a.createElement(g,{title:"Titulo do Iframe",src:"https://www.youtube.com/embed/".concat(e,"?autoplay=0&mute=1"),frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))};function h(){var n=Object(s.a)(["\n  font-family: 'Roboto', sans-serif;\n  box-sizing: border-box;\n  cursor: pointer;\n  padding: 16px 24px;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  outline: none;\n  border-radius: 5px;\n  text-decoration: none;\n  display: inline-block;\n  border: 1px solid transparent;\n  color: var(--black);\n  background: var(--white);\n  border-color: var(--black);\n  transition: opacity .3s;\n  display: none;\n  margin: 0 auto;\n  @media (max-width: 800px) {\n    display: block;\n  }\n"]);return h=function(){return n},n}function v(){var n=Object(s.a)(["\n  height: 80vh;\n  position: relative;\n  color: #fff;\n  background-image: ",'; \n  background-size: cover;\n  background-position: center;\n  @media (max-width: 800px) {\n    height: auto;\n    min-height: 50vh;\n  }\n\n  &:after,\n  &:before {\n    content: "";\n    display: block;\n    position: absolute;\n    left: 0;\n    right: 0;\n    margin: auto;\n    height: 20%;\n  }\n\n  &:before {\n    top: 0;\n    height: 100%;\n    background: rgba(0,0,0,0.5);\n  }\n\n  &:after {\n    bottom: 0;\n    background: linear-gradient(0deg, #000000 0%, transparent 100%);\n  }\n']);return v=function(){return n},n}function x(){var n=Object(s.a)(["\n  font-style: normal;\n  font-weight: 300;\n  font-size: 40px;\n  line-height: 1;\n  margin-top: 0;\n  margin-bottom: 32px;\n\n  @media (max-width: 800px) {\n    font-size: 32px;\n    text-align: center;\n  }\n"]);return x=function(){return n},n}function E(){var n=Object(s.a)(["\n  @media (max-width: 800px) {\n    display: none;\n  }\n"]);return E=function(){return n},n}function w(){var n=Object(s.a)(["\n  font-family: Roboto;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 60px;\n  line-height: 70px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  display: inline-block; \n  padding: 25px;\n  line-height: 1;\n  border-radius: 4px;\n\n  @media (max-width: 800px) {\n    display: none;\n    font-size: 18px;\n    padding: 10px;\n  }\n"]);return w=function(){return n},n}function y(){var n=Object(s.a)(["\n  width: 50%;\n  display: inline-block;\n  margin-bottom: 50px;\n  @media (max-width: 800px) {\n    width: 100%;\n  }\n"]);return y=function(){return n},n}function k(){var n=Object(s.a)(["\n  margin-left: 5%;\n  margin-right: 5%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  z-index: 10;\n  @media (max-width: 800px) {\n    padding-top: 100px;\n    flex-direction: column;\n  }\n"]);return k=function(){return n},n}var j=p.b.section(k());j.Item=p.b.div(y()),j.Category=p.b.h1(w()),j.Description=p.b.p(E()),j.Title=p.b.h2(x());var O=p.b.section(v(),(function(n){var e=n.backgroundImage;return"url(".concat(e,")")})),C=p.b.button(h());function z(n){var e=n.videoTitle,t=n.videoDescription,a=n.url,o=a.replace(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,"$7"),i="https://img.youtube.com/vi/".concat(o,"/maxresdefault.jpg");return r.a.createElement(O,{backgroundImage:i},r.a.createElement(j,null,r.a.createElement(j.Item,null,r.a.createElement(j.Title,null,e),r.a.createElement(j.Description,null,t)),r.a.createElement(j.Item,null,r.a.createElement(b,{youtubeID:o}),r.a.createElement(C,null,"Assistir"))))}function L(){var n=Object(s.a)(["\n  color: white;\n  min-height: 197px;\n  margin-left: 5%;\n  margin-bottom: 16px;\n"]);return L=function(){return n},n}function A(){var n=Object(s.a)(["\n  margin: 0;\n  padding-left: 0;\n  padding-bottom: 32px;\n  list-style: none;\n  display: flex;\n  overflow-x: auto;\n  flex-direction: row;\n  \n  li {\n    margin-right: 16px;\n  }\n"]);return A=function(){return n},n}function D(){var n=Object(s.a)(["\n  margin-left: 16px;\n  text-decoration: none;\n  transition: opacity .3s;\n  &:hover,\n  &:focus {\n    opacity: .5;\n  }\n  @media (max-width: 800px) {\n    display: block;\n    margin-bottom: 16px;\n    margin-left: 0;\n  }\n"]);return D=function(){return n},n}function I(){var n=Object(s.a)(["\n  font-style: normal;\n  font-weight: normal;\n  font-size: 35px;\n  line-height: 1;\n  margin-bottom: 16px;\n  display: inline-block;\n  padding: 20px;\n  background: red;\n  line-height: 1;\n  border-radius: 4px;\n\n  @media (max-width: 800px) {\n    font-size: 18px;\n    padding: 10px;\n  }\n"]);return I=function(){return n},n}var F=p.b.h3(I()),_=p.b.a(D()),N=(p.b.ul(A()),p.b.section(L()));function S(){var n=Object(s.a)(["\n  border: 2px solid;\n  border-radius: 4px;\n  text-decoration: none;\n  overflow: hidden;\n  cursor: pointer;\n  color: white;\n  flex: 0 0 298px;\n  width: 298px;\n  height: 197px;\n  background-image: ",';\n  background-size: cover;\n  background-position: center;\n  border-radius: 10px;\n  position: relative;\n  display: flex;\n  align-items: flex-end;\n  padding: 16px;\n\n  transition: opacity .3s;\n\n  &:after {\n    content: "";\n    display: block;\n    background: rgba(0,0,0,0.5);\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    top: 0;\n    right: 0;\n    margin: auto;\n    opacity: 0;\n  }\n\n  &:hover,\n  &:focus {\n    /* opacity: .5; */\n    &:after {\n      opacity: 1;\n    }\n    h2 {\n      opacity: 1;\n    }\n  }\n  \n  &:not(:first-child) {\n    margin-left: 20px;\n  }\n\n  h2 {\n    position: relative;\n    z-index: 2;\n    opacity: 0;\n    transition: opacity .3s;\n  }\n']);return S=function(){return n},n}var T=p.b.a(S(),(function(n){var e=n.url;return"url(".concat(e,")")}));var B=function(n){var e=n.videoTitle,t=n.videoURL,a=n.categoryColor,o="https://img.youtube.com/vi/".concat(t.replace(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,"$7"),"/hqdefault.jpg");return r.a.createElement(T,{url:o,href:t,target:"_blank",style:{borderColor:a||"red"},title:e},r.a.createElement("h2",null,e))},R=t(42),V=t.n(R);function U(){var n=Object(s.a)(["\n  margin-right: 16px;\n  img {\n    margin: 16px;\n    width: 298px;\n    height: 197px;\n    object-fit: cover;\n  }\n"]);return U=function(){return n},n}function P(){var n=Object(s.a)(["\n  padding: 0;\n  margin: 0;\n  .slick-prev,\n  .slick-next {\n    z-index: 50;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    width: 30px;\n    height: 30px;\n    transform: initial;\n    &:before {\n      font-size: 30px;\n    }\n  }\n  \n  .slick-prev {\n    left: 0;\n  }\n  .slick-next {\n    right: 16px;\n  }\n"]);return P=function(){return n},n}var q=p.b.ul(P()),K=p.b.li(U()),W=function(n){var e=n.children;return r.a.createElement(q,null,r.a.createElement(V.a,{dots:!1,infinite:!1,speed:300,centerMode:!1,variableWidth:!0,adaptiveHeight:!0},e))};var J=function(n){var e=n.ignoreFirstVideo,t=n.category,a=t.titulo,o=t.cor,i=t.link_extra,c=t.videos;return r.a.createElement(N,null,a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(F,{style:{backgroundColor:o||"red"}},a),i&&r.a.createElement(_,{href:i.url,target:"_blank"},i.text)),r.a.createElement(W,null,c.map((function(n,t){return e&&0===t?null:r.a.createElement(K,{key:n.titulo},r.a.createElement(B,{videoTitle:n.titulo,videoURL:n.url,categoryColor:o}))}))))},M=t(43),Y=t.n(M);t(67);function $(){var n=Object(s.a)(["\n  color: var(--white);\n  border: 1px solid var(--white);\n  background: var(--black);\n  box-sizing: border-box;\n  cursor: pointer;\n  padding: 16px 24px;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 16px;\n  outline: none;\n  border-radius: 5px;\n  text-decoration: none;\n  display: inline-block;\n  transition: opacity .3s;\n\n  &:hover,\n  &:focus {\n    opacity: .5;\n  }\n"]);return $=function(){return n},n}var H=p.b.button($());var G=function(n){var e;return e=n.isLoggedIn?r.a.createElement(H,{as:c.b,className:"ButtonLink",to:"/cadastro/video"},"Novo v\xeddeo"):r.a.createElement(H,{as:c.b,className:"ButtonLink",to:"/login"},"Login"),r.a.createElement("nav",{className:"Menu"},r.a.createElement(c.b,{to:"/"},r.a.createElement("img",{className:"Logo",src:Y.a,alt:"AluraFlix logo"})),e)};function Q(){var n=Object(s.a)(["\n  background: var(--black);\n  border-top: 2px solid var(--primary);\n  padding-left: 16px;\n  padding-right: 16px;\n  padding-top: 32px;\n  padding-bottom: 32px;\n  color: var(--white);\n  text-align: center;\n  @media (max-width: 800px) {\n    margin-bottom: 50px;\n  }\n"]);return Q=function(){return n},n}var X=p.b.footer(Q());var Z=function(){return r.a.createElement(X,null,r.a.createElement("a",{href:"https://www.alura.com.br/"},r.a.createElement("img",{src:"https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg",alt:"Logo Alura"})),r.a.createElement("p",null,"Orgulhosamente criado durante a"," ",r.a.createElement("a",{href:"https://www.alura.com.br/"},"Imers\xe3o React da Alura")))},nn="@aluraflix-token",en=function(n){localStorage.setItem(nn,n)};function tn(){var n=Object(s.a)(["\n    padding: ",";\n  "]);return tn=function(){return n},n}function an(){var n=Object(s.a)(["\n  background-color: var(--black);\n  color: var(--white);\n  flex: 1;\n  padding-top: 50px;\n  padding-left: 5%;\n  padding-right: 5%;\n  ","\n"]);return an=function(){return n},n}var rn=p.b.main(an(),(function(n){var e=n.paddingAll;return Object(p.a)(tn(),e)}));var on=function(n){var e=n.children,t=n.paddingAll;return r.a.createElement(r.a.Fragment,null,r.a.createElement(G,{isLoggedIn:null!==localStorage.getItem(nn)}),r.a.createElement(rn,{paddingAll:t},e),r.a.createElement(Z,null))},cn=t(5),ln=t.n(cn),un=t(10),sn={URL_BACKEND_TOP:window.location.hostname.includes("localhost")?"http://localhost:8080":"https://aluraflix-backend-challenge.herokuapp.com"},pn="".concat(sn.URL_BACKEND_TOP,"/categorias");var dn={getAllWithVideos:function(){return fetch("".concat(pn,"?_embed=videos")).then(function(){var n=Object(un.a)(ln.a.mark((function n(e){var t;return ln.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.ok){n.next=5;break}return n.next=3,e.json();case 3:return t=n.sent,n.abrupt("return",t);case 5:throw new Error("N\xe3o foi poss\xedvel pegar os dados :(");case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())},getAll:function(){return fetch("".concat(pn)).then(function(){var n=Object(un.a)(ln.a.mark((function n(e){var t;return ln.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.ok){n.next=5;break}return n.next=3,e.json();case 3:return t=n.sent,n.abrupt("return",t);case 5:throw new Error("N\xe3o foi poss\xedvel pegar os dados :(");case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}};var mn=function(){var n=Object(a.useState)([]),e=Object(u.a)(n,2),t=e[0],o=e[1];return Object(a.useEffect)((function(){dn.getAllWithVideos().then((function(n){console.log(n[0].videos[0]),o(n)})).catch((function(n){console.log(n.message)}))}),[]),r.a.createElement(on,{paddingAll:0},0===t.length&&r.a.createElement("div",null,"Loading..."),t.map((function(n,e){return 0===e?r.a.createElement("div",{key:n.id},r.a.createElement(z,{videoTitle:t[0].videos[0].titulo,url:t[0].videos[0].url,videoDescription:t[0].videos[0].description}),r.a.createElement(J,{ignoreFirstVideo:!0,category:t[0]})):r.a.createElement(J,{key:n.id,category:n})})))},fn=t(22),gn=t(28);var bn=function(n){var e=Object(a.useState)(n),t=Object(u.a)(e,2),r=t[0],o=t[1];return{values:r,handleChange:function(n){var e,t;e=n.target.getAttribute("name"),t=n.target.value,o(Object(gn.a)(Object(gn.a)({},r),{},Object(fn.a)({},e,t)))},clearForm:function(){o(n)}}};function hn(){var n=Object(s.a)(['\n    &:not([type="color"]) + span {\n      transform: scale(.6) translateY(-10px);\n    }\n  ']);return hn=function(){return n},n}function vn(){var n=Object(s.a)(['\n  background: #53585D;\n  color: #F5F5F5;\n  display: block;\n  width: 100%;\n  height: 57px;\n  font-size: 18px;\n  \n  outline: 0;\n  border: 0;\n  border-top: 4px solid transparent;\n  border-bottom: 4px solid #53585D;\n  \n  padding: 16px 16px;\n  margin-bottom: 45px;\n  \n  resize: none;\n  border-radius: 4px;\n  transition: border-color .3s;\n  \n  &:focus {\n    border-bottom-color: var(--primary);\n  }\n\n  &:focus:not([type="color"]) + span {\n    transform: scale(.6) translateY(-10px);\n  }\n\n  ',"\n"]);return vn=function(){return n},n}function xn(){var n=Object(s.a)(["\n  color: #E5E5E5;\n  height: 57px;\n  position: absolute; \n  top: 0;\n  left: 16px;\n  \n  display: flex;\n  align-items: center;\n  \n  transform-origin: 0% 0%;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 300;\n  \n  transition: .1s ease-in-out;\n"]);return xn=function(){return n},n}function En(){var n=Object(s.a)([""]);return En=function(){return n},n}function wn(){var n=Object(s.a)(['\n  position: relative; \n  textarea {\n    min-height: 150px;\n  }\n\n  input[type="color"] {\n    padding-left: 56px;\n  }\n']);return wn=function(){return n},n}var yn=p.b.div(wn()),kn=p.b.label(En());kn.Text=p.b.span(xn());var jn=p.b.input(vn(),(function(n){return n.hasValue&&Object(p.a)(hn())}));function On(n){var e=n.label,t=n.type,a=n.name,o=n.value,i=n.onChange,c=n.suggestions,l="id_".concat(a),u="textarea"===t?"textarea":"input",s=Boolean(o.length),p=Boolean(c.length);return r.a.createElement(yn,null,r.a.createElement(kn,{htmlFor:l},r.a.createElement(jn,{as:u,id:l,type:t,value:o,name:a,hasValue:s,onChange:i,autoComplete:p?"off":"on",list:p?"suggestionFor_".concat(l):void 0}),r.a.createElement(kn.Text,null,e,":"),p&&r.a.createElement("datalist",{id:"suggestionFor_".concat(l)},c.map((function(n){return r.a.createElement("option",{value:n,key:"suggestionFor_".concat(l,"_option").concat(n)},n)})))))}On.defaultProps={type:"text",value:"",onChange:function(){},suggestions:[]};var Cn=On,zn=t(44),Ln=t.n(zn).a.create({baseURL:"".concat(sn.URL_BACKEND_TOP)});Ln.interceptors.request.use(function(){var n=Object(un.a)(ln.a.mark((function n(e){var t;return ln.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(t=localStorage.getItem(nn))&&(e.headers.Authorization="Bearer ".concat(t)),n.abrupt("return",e);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}());var An=Ln;function Dn(){return(Dn=Object(un.a)(ln.a.mark((function n(e){var t;return ln.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,An.post("/videos",e);case 2:return t=n.sent,n.prev=3,n.abrupt("return",t.data);case 7:throw n.prev=7,n.t0=n.catch(3),new Error("N\xe3o foi possivel processar sua requisicao:(");case 10:case"end":return n.stop()}}),n,null,[[3,7]])})))).apply(this,arguments)}var In={create:function(n){return Dn.apply(this,arguments)}};var Fn=function(){var n=Object(l.f)(),e=Object(a.useState)([]),t=Object(u.a)(e,2),o=t[0],i=t[1],c=o.map((function(n){return n.titulo})),s=bn({titulo:"Video padr\xe3o",descricao:"Descri\xe7\xe3o padr\xe3o",url:"https://www.youtube.com/watch?v=jOAU81jdi-c",categoria:"Livre"}),p=s.handleChange,d=s.values;return Object(a.useEffect)((function(){dn.getAll().then((function(n){i(n)}))}),[]),r.a.createElement(on,null,r.a.createElement("h1",null,"Cadastro de Video"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=o.find((function(n){return n.titulo===d.categoria}));In.create({titulo:d.titulo,descricao:d.descricao,url:d.url,categoriaId:null==t?1:t.id}).then((function(){console.log("Cadastrou com sucesso!"),n.push("/")}))}},r.a.createElement(Cn,{label:"T\xedtulo do V\xeddeo",name:"titulo",value:d.titulo,onChange:p}),r.a.createElement(Cn,{label:"Descri\xe7\xe3o do V\xeddeo",name:"descricao",value:d.descricao,onChange:p}),r.a.createElement(Cn,{label:"URL",name:"url",value:d.url,onChange:p}),r.a.createElement(Cn,{label:"Categoria",name:"categoria",value:d.categoria,onChange:p,suggestions:c}),r.a.createElement(H,{type:"submit"},"Cadastrar")),r.a.createElement("br",null),r.a.createElement("br",null))},_n=t(29);var Nn=function(){var n=bn({nome:"",descricao:"",cor:""}),e=n.handleChange,t=n.values,o=n.clearForm,i=Object(a.useState)([]),l=Object(u.a)(i,2),s=l[0],p=l[1];return Object(a.useEffect)((function(){var n=window.location.hostname.includes("localhost")?"http://localhost:8080/categorias":"https://devsoutinhoflix.herokuapp.com/categorias";fetch(n).then(function(){var n=Object(un.a)(ln.a.mark((function n(e){var t;return ln.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.json();case 2:t=n.sent,p(Object(_n.a)(t));case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}),[]),r.a.createElement(on,null,r.a.createElement("h1",null,"Cadastro de Categoria:",t.nome),r.a.createElement("form",{onSubmit:function(n){n.preventDefault(),p([].concat(Object(_n.a)(s),[t])),o()}},r.a.createElement(Cn,{label:"Nome da Categoria",name:"nome",value:t.nome,onChange:e}),r.a.createElement(Cn,{label:"Descri\xe7\xe3o",type:"textarea",name:"descricao",value:t.descricao,onChange:e}),r.a.createElement(Cn,{label:"Cor",type:"color",name:"cor",value:t.cor,onChange:e}),r.a.createElement(H,null,"Cadastrar")),0===s.length&&r.a.createElement("div",null,"Loading..."),r.a.createElement("ul",null,s.map((function(n){return r.a.createElement("li",{key:"".concat(n.titulo)},n.titulo)}))),r.a.createElement(c.b,{to:"/"},"Ir para home"))};function Sn(){return(Sn=Object(un.a)(ln.a.mark((function n(e){var t;return ln.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,An.post("/login",e);case 2:return t=n.sent,n.prev=3,en(t.data.token),n.abrupt("return",t);case 8:throw n.prev=8,n.t0=n.catch(3),new Error("N\xe3o foi possivel entrar no sistema :(");case 11:case"end":return n.stop()}}),n,null,[[3,8]])})))).apply(this,arguments)}var Tn={create:function(n){return Sn.apply(this,arguments)}};t(89);var Bn=function(){var n=Object(a.useState)([]),e=Object(u.a)(n,2),t=e[0],o=e[1],i=Object(l.f)(),c=bn({usuario:"admin@email.com",senha:"123456"}),s=c.handleChange,p=c.values;return r.a.createElement(on,null,r.a.createElement("h1",null,"Login"),t.error&&r.a.createElement("h3",{className:"msg-error"},t.error),r.a.createElement("form",{onSubmit:function(n){n.preventDefault(),o({error:""}),Tn.create({usuario:p.usuario,senha:p.senha}).then((function(){console.log("Cadastrou com sucesso!"),i.push("/")})).catch((function(n){console.log(n),o({error:"usuario ou senha invalidos"})}))}},r.a.createElement(Cn,{label:"Usuario",name:"usuario",required:"true",value:p.usuario,onChange:s}),r.a.createElement(Cn,{label:"Senha",name:"senha",type:"password",value:p.senha,onChange:s}),r.a.createElement(H,{type:"submit"},"Entrar")),r.a.createElement("br",null),r.a.createElement("br",null))};i.a.render(r.a.createElement(c.a,{basename:window.location.pathname||""},r.a.createElement(l.c,null,r.a.createElement(l.a,{path:"/",component:mn,exact:!0}),r.a.createElement(l.a,{path:"/login",component:Bn}),r.a.createElement(l.a,{path:"/cadastro/video",component:Fn}),r.a.createElement(l.a,{path:"/cadastro/categoria",component:Nn}),r.a.createElement(l.a,{component:function(){return r.a.createElement("div",null,"P\xe1gina 404")}}))),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.e13c308d.chunk.js.map