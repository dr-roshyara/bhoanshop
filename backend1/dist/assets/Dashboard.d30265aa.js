import{u as n,_ as a,b as l,a as s,t as c,F as u,o as d}from"./index.cdea2ed2.js";const g={setup(){return{store:n()}},methods:{getStore(){console.log(this.store)}}};function i(r,o,p,t,f,m){var e;return d(),l(u,null,[s("button",{onClick:o[0]||(o[0]=_=>t.store.logout())},"Logout"),s("h1",null,"Dashboard of "+c((e=t.store.loggedInUser)==null?void 0:e.name),1)],64)}const b=a(g,[["render",i]]);export{b as default};
