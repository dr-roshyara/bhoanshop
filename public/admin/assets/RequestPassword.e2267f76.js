import{G as d,_ as i,r as t,o as c,c as l,w as o,a as e,j as s,k as u}from"./index.0b9499cf.js";import{S as m}from"./SubmitButton.461d0a0d.js";const p={components:{GuestLayout:d,SubmitButton:m}},_={class:"mt-8 space-y-6",action:"#",method:"POST"},f=e("input",{type:"hidden",name:"remember",value:"true"},null,-1),b=e("div",{class:"rounded-md shadow-sm -space-y-px"},[e("div",null,[e("label",{for:"email-address",class:"sr-only"},"Email address"),e("input",{id:"email-address",name:"email",type:"email",autocomplete:"email",required:"true",class:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",placeholder:"Email address"})])],-1),y={class:"flex items-center justify-between"},h={class:"text-sm"};function x(g,w,v,k,B,G){const a=t("router-link"),n=t("submit-button"),r=t("GuestLayout");return c(),l(r,{title:"Request new password"},{default:o(()=>[e("form",_,[f,b,e("div",y,[e("div",h,[s(a,{to:{name:"login"},class:"font-medium text-indigo-600 hover:text-indigo-500"},{default:o(()=>[u(" Remember your password? ")]),_:1})])]),s(n,{title:"Submit"})])]),_:1})}const q=i(p,[["render",x]]);export{q as default};
