import{u as n,_ as a,o as l,b as c,a as s,t as u,F as d}from"./index.0b9499cf.js";const g={setup(){return{store:n()}},methods:{getStore(){console.log(this.store)}}};function i(r,o,p,t,f,m){var e;return l(),c(d,null,[s("button",{onClick:o[0]||(o[0]=_=>t.store.logout())},"Logout"),s("h1",null,"Dashboard of "+u((e=t.store.loggedInUser)==null?void 0:e.name),1)],64)}const b=a(g,[["render",i]]);export{b as default};
