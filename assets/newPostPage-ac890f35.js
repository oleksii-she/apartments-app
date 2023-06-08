import{S as le,C as ie}from"./containerAuth-b359c9fd.js";import{_ as ce,u as re,r as j,n as ue,b as de,d as w,q as pe,s as O,e as F,o as r,c as u,f as d,a as t,v as H,g,P as me,M as _e,x as f,y as ge,z as he,F as S,B as R,t as ve,m as W,h as fe,i as ye,C as Ve,D as ke,p as Ce,k as Ie,A as we,l as N}from"./index-04255bca.js";let b;const Ue=new Uint8Array(16);function xe(){if(!b&&(b=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!b))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return b(Ue)}const i=[];for(let s=0;s<256;++s)i.push((s+256).toString(16).slice(1));function Pe(s,n=0){return(i[s[n+0]]+i[s[n+1]]+i[s[n+2]]+i[s[n+3]]+"-"+i[s[n+4]]+i[s[n+5]]+"-"+i[s[n+6]]+i[s[n+7]]+"-"+i[s[n+8]]+i[s[n+9]]+"-"+i[s[n+10]]+i[s[n+11]]+i[s[n+12]]+i[s[n+13]]+i[s[n+14]]+i[s[n+15]]).toLowerCase()}const Se=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),q={randomUUID:Se};function be(s,n,e){if(q.randomUUID&&!n&&!s)return q.randomUUID();s=s||{};const v=s.random||(s.rng||xe)();if(v[6]=v[6]&15|64,v[8]=v[8]&63|128,n){e=e||0;for(let y=0;y<16;++y)n[e+y]=v[y];return n}return Pe(v)}const c=s=>(Ce("data-v-e99f31c1"),s=s(),Ie(),s),z=N+"#icon-cancel-circle",Y=N+"#icon-create__img",De=N+"#icon-camera",Ae=["onSubmit"],Le=c(()=>t("h2",{class:"title__form-create"},"Create an ad",-1)),Be={class:"top__wrapper"},Fe=c(()=>t("p",{class:"title-input"},"The name of the ad",-1)),Re=c(()=>t("p",{class:"title-input"},"Country",-1)),Ne={key:0,class:"countries-list"},Me=["onClick"],Ee={class:"countries-list__text"},$e=c(()=>t("p",{class:"title-input"},"Місто",-1)),Te={class:"average__wrapper"},je={class:"main__photo"},Oe=c(()=>t("h3",{style:{marginBottom:"7px"}},"Main photo",-1)),He={for:"",class:"cover-img__wrapper"},We=c(()=>t("svg",{class:"clear-img__icon"},[t("use",{"xlink:href":z})],-1)),qe=[We],ze={class:"img__box"},Ye=["src"],Ge={key:1,class:"icon"},Je=c(()=>t("use",{"xlink:href":Y},null,-1)),Ke=[Je],Qe={class:"input-block__right"},Xe={class:"input-wrapper"},Ze=c(()=>t("p",{class:"title-input"},"Number of rooms",-1)),et=c(()=>t("p",{class:"title-input"},"Address",-1)),tt={class:"price"},st=c(()=>t("p",{class:"title-input"},"Price per night",-1)),ot={class:"price__wrapper"},at=c(()=>t("h2",{class:"price__title"},"$",-1)),nt={class:"price"},lt=c(()=>t("p",{class:"title-input"},"Price from three nights",-1)),it={class:"price__wrapper"},ct=c(()=>t("h2",{class:"price__title"},"$",-1)),rt=c(()=>t("p",{class:"title-input"},"Describe the apartments",-1)),ut=Ve('<div data-v-e99f31c1><p class="title-input" data-v-e99f31c1>Apartment class</p><select name="select" class="select" data-v-e99f31c1><option value="Economy" data-v-e99f31c1>Economy</option><option value="Comfort" selected data-v-e99f31c1>Comfort</option><option value="Business" data-v-e99f31c1>Business</option><option value="Premium" data-v-e99f31c1>Premium</option><option value="Lux" data-v-e99f31c1>Lux</option></select></div>',1),dt={class:"bottom-wrapper"},pt={key:0,for:"",class:"img__file-wrapper"},mt={key:0,class:"icon"},_t=c(()=>t("use",{"xlink:href":Y},null,-1)),gt=[_t],ht=c(()=>t("svg",{class:""},[t("use",{"xlink:href":De})],-1)),vt=[ht],ft=["src"],yt=["onClick"],Vt=c(()=>t("svg",{class:"clear-img__icon"},[t("use",{"xlink:href":z})],-1)),kt=[Vt],Ct={__name:"createPost",setup(s){const n=re(),e=j({name:"",location:"",country:"",address:"",rooms:1,price:40,longStayPrice:30,description:"",images:[],coverImage:"",apartmentClass:""}),v=ue(),y=de(),D=we({position:"top"}),A=w(!1),k=w(null),U=w(!0),M=w(null),V=w(!1);pe(()=>{n.phone==="+380000000000"?V.value=!0:V.value=!1});const G=async()=>{try{const l=await ke(e.country);!l||l===null?(U.value=!1,k.value=""):(U.value=!0,k.value=l)}catch(l){console.log(l.message)}},J=l=>{U.value=!1,e.country=l,k.value=null},E=["../assets/svg/sprite.svg#icon-cancel-circle","@/assets/svg/sprite.svg#icon-create__img","@/assets/svg/sprite.svg#icon-create__img","@/assets/svg/sprite.svg#icon-create__img","@/assets/svg/sprite.svg#icon-create__img"],L=j([...E]),K=O(()=>e.coverImage?URL.createObjectURL(e.coverImage):null),Q=O(()=>e.images?e.images.map(l=>{if(!(e.images.length>6))return{id:l.id,path:URL.createObjectURL(l.file),name:l.name}}):null),X=l=>{const o=l.target.files[0];o&&(e.coverImage=o)},Z=l=>{const o=l.target.files[0];new FormData().append("image",o),!(!o||e.images.length>5)&&o&&(L.splice(0,1),e.images.push({id:be(),file:o}))},ee=()=>{e.coverImage&&(e.coverImage=null)},te=l=>{e.images=e.images.filter(o=>o.id!==l),e.images.length!==5&&L.push(E[0])},se=()=>{const l=M.value;l&&l.click()},oe=async l=>{const{name:o,location:C,country:m,address:x,rooms:a,price:I,longStayPrice:B,description:$,images:ne,coverImage:T}=e,P=ne.map(h=>h.file),_={coverImage:T,images:P,apartmentClass:l.target.select.value,name:o,location:C,country:m,address:x,rooms:Number(a),price:Number(I),longStayPrice:Number(B),description:$};console.log(_);const p=new FormData;p.append("apartmentClass",_.apartmentClass);for(let h=0;h<P.length;h++)p.append("images",P[h],P[h].name);if(p.append("coverImage",_.coverImage),p.append("name",_.name),p.append("location",_.location),p.append("country",_.country),p.append("address",_.address),p.append("rooms",_.rooms),p.append("price",_.price),p.append("longStayPrice",_.longStayPrice),p.append("description",_.description),!o||!C||!m||!x||!a||!I||!B||!$||!T)return D.warning("Make sure all fields are filled");try{return A.value=!0,await v.addApartmentPost(p),A.value=!1,y.push({name:"apartments"}),D.success("data successfully added")}catch(h){return console.log(h.message),D.error(h.message)}},ae=()=>(y.push({name:"apartments"}),V.value=!V.value);return(l,o)=>{const C=F("ULoader"),m=F("UInput"),x=F("UButton");return r(),u(S,null,[d(C,{loading:A.value},null,8,["loading"]),t("form",{onSubmit:ye(oe,["prevent","stop"]),class:"form__advertisement"},[V.value?(r(),H(_e,{key:0,toggleModal:V.value,hideDialog:ae},{default:g(()=>[d(me)]),_:1},8,["toggleModal"])):f("",!0),Le,t("div",Be,[d(m,{modelValue:e.name,"onUpdate:modelValue":o[0]||(o[0]=a=>e.name=a),placeholder:"Назва оголошення",class:"uinput"},{default:g(()=>[Fe]),_:1},8,["modelValue"]),t("div",null,[d(m,{modelValue:e.country,"onUpdate:modelValue":o[1]||(o[1]=a=>e.country=a),placeholder:"Country",class:"uinput",onInput:G},{default:g(()=>[Re]),_:1},8,["modelValue"]),k.value!==null?ge((r(),u("ul",Ne,[(r(!0),u(S,null,R(k.value,(a,I)=>(r(),u("li",{key:I,class:"countries-list__item",onClick:B=>J(a.name.common)},[t("p",Ee,ve(a.name.common),1)],8,Me))),128))],512)),[[he,U.value]]):f("",!0)]),d(m,{modelValue:e.location,"onUpdate:modelValue":o[2]||(o[2]=a=>e.location=a),placeholder:"Місто",class:"uinput"},{default:g(()=>[$e]),_:1},8,["modelValue"])]),t("div",Te,[t("div",je,[Oe,t("label",He,[e.coverImage?(r(),u("button",{key:0,class:"clear-img",onClick:ee},qe)):f("",!0),t("div",ze,[e.coverImage?(r(),u("img",{key:0,src:W(K),alt:"",class:"image"},null,8,Ye)):f("",!0)]),e.coverImage?f("",!0):(r(),u("svg",Ge,Ke)),t("input",{type:"file",name:"coverImage",accept:"image/*",class:"input__file__hidden",multiple:"",onChange:X},null,32)])]),t("div",Qe,[t("div",Xe,[d(m,{modelValue:e.rooms,"onUpdate:modelValue":o[3]||(o[3]=a=>e.rooms=a),placeholder:"Кількість кімнат",class:"uinput",type:"number"},{default:g(()=>[Ze]),_:1},8,["modelValue"]),d(m,{modelValue:e.address,"onUpdate:modelValue":o[4]||(o[4]=a=>e.address=a),placeholder:"Адреса",class:"uinput"},{default:g(()=>[et]),_:1},8,["modelValue"]),t("div",tt,[st,t("div",ot,[at,d(m,{modelValue:e.price,"onUpdate:modelValue":o[5]||(o[5]=a=>e.price=a),placeholder:"Price per night",class:"uinput",type:"number"},null,8,["modelValue"])])]),t("div",nt,[lt,t("div",it,[ct,d(m,{modelValue:e.longStayPrice,"onUpdate:modelValue":o[6]||(o[6]=a=>e.longStayPrice=a),placeholder:"Price from three nights",class:"uinput",type:"number",style:{width:"70px"}},null,8,["modelValue"])])])]),d(m,{modelValue:e.description,"onUpdate:modelValue":o[7]||(o[7]=a=>e.description=a),placeholder:"Опишіть апартаменти",type:"textarea",class:"uinput"},{default:g(()=>[rt]),_:1},8,["modelValue"]),ut])]),t("div",dt,[e.images.length!==6?(r(),u("label",pt,[e.images?(r(),u("svg",mt,gt)):f("",!0),t("input",{type:"file",name:"images",accept:"image/*",class:"input__file__hidden",onChange:Z,ref_key:"input",ref:M},null,544)])):f("",!0),(r(!0),u(S,null,R(L,a=>(r(),u("div",{key:a},[t("div",{class:"img__file-wrapper",onClick:se},vt)]))),128)),(r(!0),u(S,null,R(W(Q),a=>(r(),u("div",{key:a.id,class:"img__box"},[t("img",{src:a.path,alt:"",class:"images"},null,8,ft),t("button",{onClick:I=>te(a.id),class:"clear-img"},kt,8,yt)]))),128))]),V.value?f("",!0):(r(),H(x,{key:1},{default:g(()=>[fe("Create an ad")]),_:1}))],40,Ae)],64)}}},It=ce(Ct,[["__scopeId","data-v-e99f31c1"]]),xt={__name:"newPostPage",setup(s){return(n,e)=>(r(),u("main",null,[d(le,null,{default:g(()=>[d(ie,{class:"container"},{default:g(()=>[d(It)]),_:1})]),_:1})]))}};export{xt as default};
