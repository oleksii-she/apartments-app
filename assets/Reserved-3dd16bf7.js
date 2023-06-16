import{_ as F,ab as H,b as V,d as h,q as T,o as r,c as o,a as e,F as z,B as O,E as q,Q as j,t as c,x as b,a8 as C,e as P,v as Q,g as f,p as J,k as K,l as U,a7 as W,n as X,ai as Y,aj as Z,f as l,m as i,ak as N,h as k,y as S}from"./index-9af845ab.js";import{B as ee}from"./BackBtn-ceffcd98.js";const se={class:"wrapper"},te={class:"reserve-list"},re=["onClick"],oe={class:"reserve__top"},ne={class:"reserve__title"},ae={key:0},de={class:"reserve__description"},le={__name:"reserveMessageList",props:{reserves:Array,handlerIdGet:{type:Function,default:()=>{}}},setup(t){const g=t,p=H(),s=V(),I=h(null);T(()=>{I.value=p.params.id});const _=a=>{const u=C(),d=C(a);return d.isSame(u,"day")?d.format("HH:mm:ss"):d.format("MM.DD")},m=a=>{g.handlerIdGet(a),s.push(`/myaccount/reserved/${a}`)};return(a,u)=>(r(),o("div",se,[e("ul",te,[(r(!0),o(z,null,O(t.reserves,d=>(r(),o("li",{class:"reserve-list__item",key:d._id},[e("div",{class:j(["reserve",{"reserve-active":I.value===d._id}]),onClick:A=>m(d._id)},[e("div",oe,[e("p",ne,c(d.name),1),e("p",null,c(_(d.updatedAt)),1)]),d.apartmentName?(r(),o("p",ae,c(d.apartmentName),1)):b("",!0),e("p",de,c(d.description),1)],10,re)]))),128)),q(a.$slots,"default",{},void 0,!0)])]))}},D=F(le,[["__scopeId","data-v-f80bb944"]]);const G=t=>(J("data-v-107b01af"),t=t(),K(),t),ie=U+"#icon-reserved",ce=U+"#icon-delete",ve={key:0,class:"wrapper-info"},_e={class:"header"},ue={class:"info"},fe={class:"info__header-text"},he={class:"info__email-link",href:"mailto:{{ reserveInfo.email }}"},pe={class:"button-box"},me=G(()=>e("use",{"xlink:href":ie},null,-1)),ge=[me],Ie=G(()=>e("button",{type:"",class:"button"},[e("svg",{class:"button__icon"},[e("use",{"xlink:href":ce})])],-1)),ye=["src"],be={class:"price-date"},ke={class:"price-date__text"},$e={class:"price-date__text"},xe={class:"price-date__text"},Re={class:"price-date__text"},we={class:"description-box"},Me={class:"description-box__date"},Se={class:"description-box__description"},De={key:1,class:"wrapper-info-default"},Te=G(()=>e("div",null,[e("h2",null,"Select a message to read it")],-1)),Ce=[Te],Be={__name:"reserveMessageInfo",props:{reserveInfo:Object,updateReserve:{type:Function,default:()=>{}}},setup(t){const g=t,p=h(null);T(async()=>{if(g.reserveInfo&&typeof g.reserveInfo.reserved<"u"){const _=g.reserveInfo.reserved;p.value=_}});const s=_=>{const m=C(),a=C(_);return a.isSame(m,"day")?a.format("HH:mm:ss"):a.format("MM.DD")},I=_=>{p.value=!0,g.updateReserve(_)};return(_,m)=>{const a=P("RouterLink");return t.reserveInfo?(r(),o("div",ve,[e("div",_e,[e("div",ue,[e("p",fe,"Name: "+c(t.reserveInfo.name),1),e("a",he,c(t.reserveInfo.email),1)]),e("div",pe,[e("button",{type:"",class:"button",onClick:m[0]||(m[0]=u=>I(t.reserveInfo.apartmentId))},[(r(),o("svg",{class:j(["button__icon-reserved",{"button__icon-reserved---active":p.value}])},ge,2))]),Ie])]),e("div",null,[t.reserveInfo.apartmentId?(r(),Q(a,{key:0,to:{name:"review-page",params:{id:t.reserveInfo.apartmentId}},class:"wrapper-info__apartment-link"},{default:f(()=>[e("img",{src:t.reserveInfo.coverImage,alt:"",width:"64"},null,8,ye),e("p",null,c(t.reserveInfo.apartmentName),1)]),_:1},8,["to"])):b("",!0)]),e("div",null,[e("div",be,[e("div",null,[e("p",ke,"sum: "+c(t.reserveInfo.sum)+"$",1),e("p",$e,"number of days: "+c(t.reserveInfo.numberOfDays),1)]),e("div",null,[e("p",xe,"Start date: "+c(t.reserveInfo.startDate)+"$",1),e("p",Re,"End date: "+c(t.reserveInfo.endDate),1)])])]),e("div",we,[e("p",Me,c(s(t.reserveInfo.updatedAt)),1),e("p",Se,c(t.reserveInfo.description),1)])])):(r(),o("div",De,Ce))}}},E=F(Be,[["__scopeId","data-v-107b01af"]]);const Ge={class:"container"},Ae={key:0,class:"reserved-wrapper reserved-mobile"},Le={key:0},Ne={key:0,class:"reserved-box"},Ee=e("h2",{style:{"text-align":"center","margin-bottom":"20px"}},"In reserve",-1),Fe={key:0},He={key:1,class:"reserved-box"},je=e("h2",{style:{"text-align":"center","margin-bottom":"20px"}},"Reserved",-1),Pe={key:0},Ue={key:1,class:"reserved-wrapper__info"},Ve={key:1,class:"reserved-wrapper"},ze={key:0,class:"reserved-box"},Oe=e("h2",null,"In reserve",-1),qe={key:0},Qe={key:1,class:"reserved-box"},Je=e("h2",null,"Reserved",-1),Ke={key:0},We={class:"reserved-wrapper__info"},Ze={__name:"Reserved",setup(t){const g=H(),{id:p}=g.params,s=W(),I=X(),_=h(null),m=h(!1),a=h(1);h(null);const u=h(!1),{isMobile:d}=Y(),A=h(null),B=h(!1);h(""),T(async()=>{await s.fetchGetAllReserve(),s.reserves.length!==s.totalReservePost&&await s.fetchGetAllReserve(a.value)}),T(async()=>{let v=_.value;v||(v=p),s.reserversIdInfo(v);const n=s.reservesReserved.find(y=>y._id===p);n&&(console.log("===================================="),console.log(n),console.log("===================================="),u.value=!0)});const $=()=>{m.value=!m.value},x=v=>{s.reserves<=9||v&&(s.reserves.length!==s.totalReservePost&&(a.value=1),console.log(v))},R=v=>{_.value=v,s.reserversIdInfo(p),v&&(B.value=!0)},L=async v=>{try{const n=await I.updateApartmentReserved(v,{reserved:!0});A.value=n.reserved,await s.fetchGetAllReserve()}catch(n){console.log(n.message)}};return(v,n)=>{const y=P("UButton"),w=Z("observe-visibility");return r(),o("div",Ge,[l(N,{loading:i(s).loading},null,8,["loading"]),i(d)?(r(),o("div",Ae,[B.value?(r(),o("div",Ue,[l(ee,{class:"button-back",onClick:n[2]||(n[2]=M=>B.value=!1)},{default:f(()=>[k("back")]),_:1}),l(E,{reserveInfo:i(s).reserveId,updateReserve:L},null,8,["reserveInfo"])])):(r(),o("div",Le,[u.value?(r(),o("div",Ne,[l(y,{style:{width:"150px",height:"50px"},onClick:n[0]||(n[0]=M=>u.value=!1)},{default:f(()=>[k("Reserved")]),_:1}),Ee,l(D,{reserves:i(s).reservesReserved,hideModalToggle:$,handlerIdGet:R},{default:f(()=>[i(s).reserves.length?S((r(),o("div",Fe,null,512)),[[w,x]]):b("",!0)]),_:1},8,["reserves"])])):(r(),o("div",He,[l(y,{style:{width:"150px",height:"50px"},onClick:n[1]||(n[1]=M=>u.value=!0)},{default:f(()=>[k("In reserve")]),_:1}),je,l(D,{reserves:i(s).reserves,hideModalToggle:$,handlerIdGet:R},{default:f(()=>[i(s).reserves.length?S((r(),o("div",Pe,null,512)),[[w,x]]):b("",!0)]),_:1},8,["reserves"])]))]))])):(r(),o("div",Ve,[u.value?(r(),o("div",ze,[l(y,{style:{width:"250px"},onClick:n[3]||(n[3]=M=>u.value=!1)},{default:f(()=>[k("Reserved")]),_:1}),Oe,l(D,{reserves:i(s).reservesReserved,hideModalToggle:$,handlerIdGet:R},{default:f(()=>[i(s).reserves.length>9?S((r(),o("div",qe,null,512)),[[w,x]]):b("",!0)]),_:1},8,["reserves"])])):(r(),o("div",Qe,[l(y,{style:{width:"250px"},onClick:n[4]||(n[4]=M=>u.value=!0)},{default:f(()=>[k("In reserve")]),_:1}),Je,l(D,{reserves:i(s).reserves,hideModalToggle:$,handlerIdGet:R},{default:f(()=>[i(s).reserves.length>9?S((r(),o("div",Ke,null,512)),[[w,x]]):b("",!0)]),_:1},8,["reserves"])])),l(N,{loading:i(s).loading},null,8,["loading"]),e("div",We,[l(E,{reserveInfo:i(s).reserveId,updateReserve:L},null,8,["reserveInfo"])])]))])}}};export{Ze as default};
