import{_ as C,u as I,a as N,r as v,b as f,w as B,c as w,o as y,d as U,e as t,f as d,g as _,h as V,i as L,p as R,j as E,k as $,l as j,m as D,A as T,S as W,C as q}from"./index-74041e06.js";import{c as z,e as F,p as P}from"./validation-ffe89d8e.js";const h=i=>(R("data-v-5d2d1a26"),i=i(),E(),i),G=D+"#icon-eyes",H=["onSubmit"],J=h(()=>d("h2",{class:"form__title"},"Реєстрація",-1)),K={class:"wrapper-password"},O=h(()=>d("svg",{class:"eyes-icon"},[d("use",{"xlink:href":G})],-1)),Q=[O],X=h(()=>d("a",{href:"https://apartments-backend.onrender.com/api/auth/google"},[d("img",{src:$,alt:"google-auth-link"})],-1)),Y={__name:"registrarion",setup(i){const m=T({position:"top"}),g=I(),b=N(),o=v({name:"",email:"",phone:"",password:"",confirmPassword:""}),u=f(!1),p=f(!1),c=f(!1),r=v({name:"",email:"",password:"",confirmPassword:""}),S=[{name:"name",validator:l=>z(l,3,10)},{name:"email",validator:F},{name:"password",validator:P},{name:"confirmPassword",validator:P}],x=f(!1);B(o,()=>{let l=!0;for(let e of S){const a=e.name,n=e.validator(o[a]);o[a]&&(n.hasPassed?r[a]="":(r[a]=n.message,l=!1))}o.confirmPassword&&(o.password!==o.confirmPassword?(r.password="Passwords do not match",r.confirmPassword="Passwords do not match",l=!1):(r.password="",r.confirmPassword="")),x.value=l});const M=async()=>{const l=/^(\+|\d{2})\d{12,15}$/,e=j(o.phone);if(!l.test(e))return m.warning("Wrongly entered number");const a={name:o.name,email:o.email,phone:e,password:o.password};if(!a.name||!a.email||!a.password||!a.phone)return m.warning("All fields must be filled");try{if(u.value)p.value=!0,await g.register(a),p.value=!1,b.push({name:"apartments"});else return m.warning("All fields must be filled")}catch{return p.value=!1,m.warning(g.statusError)}};return(l,e)=>{const a=w("ULoader"),n=w("UInput"),k=w("RouterLink"),A=w("UButton");return y(),U("form",{class:"form__auth",onSubmit:L(M,["prevent","stop"])},[J,t(a,{loading:p.value},null,8,["loading"]),t(n,{modelValue:o.name,"onUpdate:modelValue":e[0]||(e[0]=s=>o.name=s),placeholder:"Name",type:"text",errorMessage:r.name,"onUpdate:isValid":e[1]||(e[1]=s=>u.value=s)},null,8,["modelValue","errorMessage"]),t(n,{modelValue:o.email,"onUpdate:modelValue":e[2]||(e[2]=s=>o.email=s),placeholder:"Email",type:"email",errorMessage:r.email,"onUpdate:isValid":e[3]||(e[3]=s=>u.value=s)},null,8,["modelValue","errorMessage"]),t(n,{modelValue:o.phone,"onUpdate:modelValue":e[4]||(e[4]=s=>o.phone=s),placeholder:"Phone",type:"tel","onUpdate:isValid":e[5]||(e[5]=s=>u.value=s)},null,8,["modelValue"]),d("div",K,[t(n,{modelValue:o.password,"onUpdate:modelValue":e[6]||(e[6]=s=>o.password=s),placeholder:"Password",type:"password",errorMessage:r.password,showPassword:c.value},null,8,["modelValue","errorMessage","showPassword"]),d("button",{type:"button",class:"button-eyes",onClick:e[7]||(e[7]=s=>c.value=!c.value)},Q)]),t(n,{modelValue:o.confirmPassword,"onUpdate:modelValue":e[8]||(e[8]=s=>o.confirmPassword=s),placeholder:"Confirm password",type:"password",errorMessage:r.confirmPassword,showPassword:c.value},null,8,["modelValue","errorMessage","showPassword"]),X,t(k,{to:{name:"login"}},{default:_(()=>[V("Enter in another way")]),_:1}),t(A,null,{default:_(()=>[V("Зареєструвати")]),_:1})],40,H)}}},Z=C(Y,[["__scopeId","data-v-5d2d1a26"]]),se={__name:"registrationPage",setup(i){return(m,g)=>(y(),U("main",null,[t(W,null,{default:_(()=>[t(q,null,{default:_(()=>[t(Z)]),_:1})]),_:1})]))}};export{se as default};