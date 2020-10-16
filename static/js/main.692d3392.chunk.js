(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{27:function(e,a,t){},39:function(e,a,t){e.exports=t(76)},44:function(e,a,t){},45:function(e,a,t){},71:function(e,a){},72:function(e,a){},73:function(e,a){},74:function(e,a){},75:function(e,a){},76:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(36),l=t.n(r),o=(t(44),t(45),t(13)),s=(t(27),t(11)),i=["btn--primary","btn--outline","btn--test"],m=["btn--medium","btn--large"],u=function(e){var a=e.children,t=e.type,n=e.onClick,r=e.buttonStyle,l=e.buttonSize,o=i.includes(r)?r:i[0],u=m.includes(l)?l:m[0];return c.a.createElement(s.b,{to:"/react-portfolio/contact/",className:"btn-mobile"},c.a.createElement("button",{className:"btn ".concat(o," ").concat(u),onClick:n,type:t},a))};var p=function(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(!0),i=Object(o.a)(l,2),m=i[0],p=i[1],d=function(){return r(!1)},b=function(){window.innerWidth<=960?p(!1):p(!0)};return Object(n.useEffect)((function(){b()}),[]),window.addEventListener("resize",b),c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",{className:"navbar"},c.a.createElement("div",{className:"navbar-container"},c.a.createElement(s.b,{to:"/react-portfolio/",className:"navbar-logo",onClick:d},"Keegan Wedwick"),c.a.createElement("div",{className:"menu-icon",onClick:function(){return r(!t)}},c.a.createElement("i",{className:t?"fa fa-times":"fa fa-bars"})),c.a.createElement("ul",{className:t?"nav-menu active":"nav-menu"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(s.b,{to:"/react-portfolio/",className:"nav-links",onClick:d},"About")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(s.b,{to:"/react-portfolio/projects",className:"nav-links",onClick:d},"Projects")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(s.b,{to:"/react-portfolio/resume",className:"nav-links",onClick:d},"Resume")),c.a.createElement("li",null,c.a.createElement(s.b,{to:"/react-portfolio/contact/",className:"nav-links-mobile",onClick:d},"Contact Me"))),m&&c.a.createElement(u,{buttonStyle:"btn--outline"},"Contact"))))},d=t(4);var b=function(){return c.a.createElement("div",{className:"about"},c.a.createElement("h1",null,"About Me"),c.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum quae ad nisi expedita aut quis dolorem, laborum adipisci similique eum cum atque, at sit corrupti cupiditate ut totam voluptate veniam."))},f=t(15);var g=function(e){var a=e.props;return console.log(a),c.a.createElement("li",{className:"cards__item"},c.a.createElement(f.a,{className:"cards__item__link",href:a.href},c.a.createElement("figure",{className:"cards__item__pic-wrap","data-category":a.label},c.a.createElement("img",{className:"card__img",src:a.src,alt:a.alt})),c.a.createElement("div",{className:"cards__item__info"},c.a.createElement("h5",{className:"cards__item__text"},a.text))))},E=[{id:"1",src:"./assets/images/tech-blog.jpg",text:"Placeholder Project",label:"coding language",href:"https://blooming-citadel-66585.herokuapp.com/",alt:"project one placeholder"},{id:"2",src:"./assets/images/tech-blog.jpg",text:"A simple tech blog website that allows the user to sign up, post, and comment.",label:"Node.js",href:"https://blooming-citadel-66585.herokuapp.com/",alt:"project two tech blog"},{id:"3",src:"./assets/images/work-day-scheduler.jpg",text:"A Work Day Scheduler that using jquery and moment.js to check the time and adjusts the class of the hours as the time passes.",label:"Moment.js & Jquery",href:"https://kwedwick.github.io/weekday-scheduler/",alt:"project three work day scheduler"},{id:"4",src:"./assets/images/password-generator.jpg",text:"Random Password Generator using basic JavaScript to take in user input through the form.",label:"JavaScript",href:"https://kwedwick.github.io/generate-password-challenge/",alt:"project four random password generator"},{id:"5",src:"./assets/images/pwa-budget-tracker.jpg",text:"A budget tracker that uses basic PWA systems for use offline.",label:"PWA",href:"https://protected-bastion-93932.herokuapp.com/",alt:"project five progressive web application for budget tracking"}];var h=function(){return c.a.createElement("div",{className:"project"},c.a.createElement("h1",null,"Web Dev Projects"),c.a.createElement("div",{className:"cards__container"},c.a.createElement("div",{className:"cards__wrapper"},c.a.createElement("ul",{className:"cards__items"},E.map((function(e){return console.log(e),c.a.createElement(g,{props:e,key:e.id})}))))))};var v=function(){return c.a.createElement("footer",{className:"footer-container"},c.a.createElement("div",{className:"social-icons"},c.a.createElement(f.a,{className:"social-icon-link instagram",href:"https://www.instagram.com/wedkee88/",target:"_blank","aria-label":"Instagram"},c.a.createElement("i",{className:"fa fa-instagram"})),c.a.createElement(f.a,{className:"social-icon-link twitter",href:"https://github.com/kwedwick",target:"_blank","aria-label":"Twitter"},c.a.createElement("i",{className:"fa fa-github"})),c.a.createElement(f.a,{className:"social-icon-link twitter",href:"https://www.linkedin.com/in/keegan-wedwick/",target:"_blank","aria-label":"LinkedIn"},c.a.createElement("i",{className:"fa fa-linkedin"}))))},k=t(14),w=t(25);var N=function(){var e=Object(n.useState)(null),a=Object(o.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)(1),s=Object(o.a)(l,2),i=s[0];function m(e){var a=e.numPages;r(a)}return s[1],c.a.createElement("div",{className:"resume"},c.a.createElement("h1",null,"Resume"),c.a.createElement(w.a,Object(k.a)({file:"",onLoadSuccess:m},"onLoadSuccess",m),c.a.createElement(w.b,{pageNumber:i})),c.a.createElement("p",null,"Page ",i," of ",t),c.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum quae ad nisi expedita aut quis dolorem, laborum adipisci similique eum cum atque, at sit corrupti cupiditate ut totam voluptate veniam."))},j=t(24);var _=function(){var e=Object(n.useState)({name:"",email:"",message:""}),a=Object(o.a)(e,2),t=a[0],r=a[1],l=(t.name,t.email,t.message,Object(n.useState)("")),s=Object(o.a)(l,2),i=s[0],m=s[1];function u(e){var a,n=(a=e.target.name).charAt(0).toUpperCase()+a.slice(1);if("email"===e.target.name){var c=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);console.log(c),m(c?"":"Your email is invalid.")}else e.target.value.length?m(""):m(n+" is required.");i||r(Object(j.a)(Object(j.a)({},t),{},Object(k.a)({},e.target.name,e.target.value)))}return c.a.createElement("section",{className:"contact"},c.a.createElement("div",{className:"contact-div"},c.a.createElement("div",{className:"contact-wrapper"},c.a.createElement("h1",null,"Contact Me"),c.a.createElement("form",{id:"contact-form",className:"contact-container",onSubmit:function(e){e.preventDefault(),console.log(t)}},c.a.createElement("label",{htmlFor:"name"},"Name:"),c.a.createElement("input",{type:"text",name:"name",onBlur:u,defaultValue:t.name}),c.a.createElement("label",{htmlFor:"email"},"Email address:"),c.a.createElement("input",{type:"email",name:"email",onBlur:u,defaultValue:t.email}),c.a.createElement("label",{htmlFor:"message"},"Message:"),c.a.createElement("textarea",{name:"message",row:"5",onBlur:u,defaultValue:t.message}),i&&c.a.createElement("div",null,c.a.createElement("p",{className:"error-text"},i)),c.a.createElement("button",{type:"sumbit",className:"btn--outline"},"Submit")))))};var y=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(s.a,null,c.a.createElement(p,null),c.a.createElement(d.c,null,c.a.createElement(d.a,{path:"/react-portfolio/",exact:!0,component:b}),c.a.createElement(d.a,{path:"/react-portfolio/projects",component:h}),c.a.createElement(d.a,{path:"/react-portfolio/resume",component:N}),c.a.createElement(d.a,{path:"/react-portfolio/contact",component:_}))),c.a.createElement("main",null),c.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[39,1,2]]]);
//# sourceMappingURL=main.692d3392.chunk.js.map