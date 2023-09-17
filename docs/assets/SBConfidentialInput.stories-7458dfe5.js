import{d as L,l as f,e as o,w as M,m as O,o as b,f as x,g as d,p as C,n as t,c as u,u as k,j as h,q as I,v as U,s as z,x as q}from"./vue.esm-bundler-afbd5a6e.js";import{I as B}from"./iconify-751254ff.js";const H=["disabled"],A={class:"flex grow flex-col items-start justify-center overflow-hidden"},G=["autocomplete","type","name","placeholder","disabled"],J=["onClick","disabled"],g=L({__name:"SBConfidentialInput",props:{size:{default:"md"},name:{},label:{},preset:{},disabled:{type:Boolean,default:!1},message:{},state:{},callback:{},debounce:{type:Boolean,default:!1},autocomplete:{default:"off"},icon:{type:Boolean,default:!0}},emits:["update:value"],setup(r,{emit:l}){const a=r,n=f(""),T=f(null),i=f(!1),c=f(!1);function P(){c.value=!c.value}const D=o(()=>{switch(a.state){case"success":return"text-success-default_strong";case"error":return"text-danger-default_strong";default:return"text-grayscale-header"}}),y=o(()=>{switch(a.size){case"sm":return"text-[19px]";case"xl":return"text-[24px]";default:return"text-[22px]"}}),j=o(()=>{switch(a.size){case"sm":return"text-sm";case"xl":return"text-lg gap-2";default:return"text-base gap-1"}}),E=o(()=>{switch(a.state){case"success":return"text-success-default_strong";case"error":return"text-danger-default_strong";default:return"text-grayscale-label"}}),F=o(()=>{switch(a.size){case"sm":return"rounded-lg min-h-[48px] px-4 gap-3";case"lg":return"rounded-xl min-h-[56px] px-8 gap-4";case"xl":return"rounded-2xl min-h-[60px] px-8 gap-4";default:return"rounded-xl min-h-[52px] px-6 gap-3"}}),$=o(()=>{switch(a.state){case"success":return"!outline-success outline outline-[2px] !bg-success-bg";case"error":return"!outline-danger outline outline-[2px] !bg-danger-bg";default:return""}}),w=o(()=>{switch(a.state){case"success":return"text-success-default_strong";case"error":return"text-danger-default_strong";default:return"text-grayscale-label"}});let v;return M(n,()=>{if(!a.debounce){l("update:value",n.value);return}v&&clearTimeout(v),v=setTimeout(()=>{l("update:value",n.value)},500)}),O(()=>{n.value=a.preset?a.preset:""}),(e,s)=>(b(),x("div",{class:t(["flex flex-col",[j.value,{"cursor-not-allowed":e.disabled}]]),"data-testid":"confidentialInputContainer"},[d("div",{class:t(["flex items-center transition-all",[F.value,$.value,{"opacity-50":e.disabled,"bg-grayscale-bg outline-grayscale-header outline outline-[2px]":i.value,"bg-grayscale-input":!i.value}]]),"data-testid":"presentationalInput",onFocusin:s[2]||(s[2]=p=>i.value=!0),onFocusout:s[3]||(s[3]=p=>i.value=!1)},[e.icon?(b(),x("button",{key:0,"data-testid":"optionalIconButton",disabled:e.disabled,onClick:s[0]||(s[0]=C(p=>e.callback?e.callback():null,["prevent"])),class:t({"cursor-default":!e.callback,"cursor-not-allowed":e.disabled})},[u(k(B),{"data-testid":"optionalIcon",icon:"material-symbols:lock",class:t(["transition-all",[y.value,w.value,{"!text-black":i.value,"hover:text-black":e.callback}]])},null,8,["class"])],10,H)):h("",!0),d("div",A,[I(d("span",{"data-testid":"upperLabel",class:t(["w-full text-sm truncate",E.value])},z(e.label),3),[[U,n.value]]),I(d("input",{autocomplete:e.autocomplete,"data-testid":"confidentialInput",type:c.value?"text":"password",name:e.name,ref_key:"confidentialInput",ref:T,placeholder:e.label,class:t(["bg-transparent w-full truncate focus:outline-none text-grayscale-header placeholder:text-grayscale-label placeholder:truncate",{"cursor-not-allowed":e.disabled}]),"onUpdate:modelValue":s[1]||(s[1]=p=>n.value=p),disabled:e.disabled},null,10,G),[[q,n.value,void 0,{trim:!0}]])]),d("button",{class:t({"w-[19px]":e.size==="sm","w-[22px]":e.size==="md"||e.size==="lg","w-[24px]":e.size==="xl","cursor-not-allowed":e.disabled}),"data-testid":"toggleValueButton",onClick:C(P,["prevent"]),disabled:e.disabled},[u(k(B),{"data-testid":"toggleValueButtonIcon",icon:c.value?"material-symbols:visibility-outline-rounded":"material-symbols:visibility-off-outline-rounded",class:t(["transition-all hover:text-black",[y.value,w.value,{"!text-black":i.value,"hover:text-black":e.callback}]])},null,8,["icon","class"])],10,J)],34),e.message?(b(),x("span",{key:0,"data-testid":"messageHint",class:t(D.value)},z(e.message),3)):h("",!0)],2))}});g.__docgenInfo={exportName:"default",displayName:"SBConfidentialInput",description:"",tags:{},props:[{name:"size",defaultValue:{func:!1,value:"'md'"}},{name:"disabled",defaultValue:{func:!1,value:"false"}},{name:"debounce",defaultValue:{func:!1,value:"false"}},{name:"icon",defaultValue:{func:!1,value:"true"}},{name:"autocomplete",defaultValue:{func:!1,value:"'off'"}}],events:[{name:"update:value",type:{names:["string"]}}],sourceFiles:["C:/Users/datse/Documents/Code/NewProjects/s1kebeats/s1kebeats-ui/src/components/SBConfidentialInput/SBConfidentialInput.vue"]};const X={component:g},K=[null,"success","error"],Q=["sm","md","lg","xl"],m=()=>u("div",{class:"inline-grid grid-cols-2 gap-5"},[K.map(r=>u("div",{class:"flex flex-col gap-5 items-start"},[Q.map(l=>u("div",{class:"flex gap-5"},[u(g,{name:"input",label:"Type in your password",state:r,size:l,key:l+r},null),u(g,{name:"input",label:"Type in your password",icon:!1,state:r,size:l,key:l+r},null)]))]))]);var S,V,N;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`() => <div class="inline-grid grid-cols-2 gap-5">\r
    {SBConfidentialInputStates.map(state => {
    return <div class="flex flex-col gap-5 items-start">\r
          {SBConfidentialInputSizes.map(size => {
        return <div class="flex gap-5">\r
                <SBConfidentialInput name="input" label="Type in your password" state={state} size={size} key={size! + state!} />\r
                <SBConfidentialInput name="input" label="Type in your password" icon={false} state={state} size={size} key={size! + state!} />\r
              </div>;
      })}\r
        </div>;
  })}\r
  </div>`,...(N=(V=m.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};const Y=["Presentation"];export{m as Presentation,Y as __namedExportsOrder,X as default};
//# sourceMappingURL=SBConfidentialInput.stories-7458dfe5.js.map