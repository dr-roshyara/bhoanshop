import{G as d}from"./GuestLayout.3207184b.js";import{S as i}from"./SubmitButton.565a6340.js";import{_ as c,r as t,o as l,g as u,w as o,a as e,b as s,e as m}from"./index.853c3fe2.js";const p={components:{GuestLayout:d,SubmitButton:i}},_={class:"mt-8 space-y-6",action:"#",method:"POST"},f=e("input",{type:"hidden",name:"remember",value:"true"},null,-1),b=e("div",{class:"rounded-md shadow-sm -space-y-px"},[e("div",null,[e("label",{for:"email-address",class:"sr-only"},"Email address"),e("input",{id:"email-address",name:"email",type:"email",autocomplete:"email",required:"true",class:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Email address"})])],-1),y={class:"flex items-center justify-between"},h={class:"text-sm"};function x(g,w,v,k,B,G){const a=t("router-link"),n=t("submit-button"),r=t("GuestLayout");return l(),u(r,{title:"Request new password"},{default:o(()=>[e("form",_,[f,b,e("div",y,[e("div",h,[s(a,{to:{name:"login"},class:"font-medium text-indigo-600 hover:text-indigo-500"},{default:o(()=>[m(" Remember your password? ")]),_:1})])]),s(n,{title:"Submit"})])]),_:1})}const L=c(p,[["render",x]]);export{L as default};
