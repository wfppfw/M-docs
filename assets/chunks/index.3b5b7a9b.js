import{f as r,o,c as _,r as i,_ as c,b as t,t as n}from"../app.f245760f.js";const d={class:"link-content"},l=r({__name:"content",props:{},setup(s){return(e,a)=>(o(),_("div",d,[i(e.$slots,"default",{},void 0,!0)]))}});const x=c(l,[["__scopeId","data-v-73f3c700"]]),p=["href","aria-controls"],u={class:"img"},f=["src"],m={class:"info"},g={class:"title"},h={class:"desc"},y=r({__name:"index",props:{img:{type:String,required:!0},desc:{type:String,required:!0},title:{type:String,required:!0},link:{type:String,required:!0}},setup(s){const e=s;return(a,v)=>(o(),_("a",{class:"my-link",rel:"noreferrer",target:"_blank",href:e.link,"aria-controls":e.desc},[t("span",u,[t("img",{src:e.img},null,8,f)]),t("span",m,[t("span",g,n(e.title),1),t("div",h,n(e.desc),1)])],8,p))}});const S=c(y,[["__scopeId","data-v-1fc200ff"]]);export{x as C,S as a};
