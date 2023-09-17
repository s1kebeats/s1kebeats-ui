import{d as m,A as c,o as d,k as f,u as g,c as s}from"./vue.esm-bundler-afbd5a6e.js";import{_ as v}from"./SBTextInput-fee5a60a.js";import"./iconify-751254ff.js";const o=m({__name:"SBEmailInput",props:{size:{},name:{},preset:{},disabled:{type:Boolean},message:{},state:{},callback:{},debounce:{type:Boolean},type:{},autocomplete:{},icon:{type:Boolean,default:!0}},emits:["update:value"],setup(a,{emit:t}){const i=a;function l(e){t("update:value",e)}return c(()=>{i.preset&&l(i.preset)}),(e,b)=>(d(),f(g(v),{"data-testid":"textInputComponent",size:e.size,name:e.name,label:"Введите электронную почту",icon:e.icon?"material-symbols:alternate-email-rounded":null,preset:e.preset,disabled:e.disabled,message:e.message,state:e.state,debounce:e.debounce,"onUpdate:value":l,autocomplete:e.autocomplete,type:"email"},null,8,["size","name","icon","preset","disabled","message","state","debounce","autocomplete"]))}});o.__docgenInfo={exportName:"default",displayName:"SBEmailInput",description:"",tags:{},props:[{name:"icon",defaultValue:{func:!1,value:"true"}}],events:[{name:"update:value",type:{names:["string"]}}],sourceFiles:["C:/Users/datse/Documents/Code/NewProjects/s1kebeats/s1kebeats-ui/src/components/SBEmailInput/SBEmailInput.vue"]};const E={component:o},B=[null,"success","error"],S=["sm","md","lg","xl"],n=()=>s("div",{class:"inline-grid grid-cols-2 gap-5"},[B.map(a=>s("div",{class:"flex flex-col gap-5 items-start"},[S.map(t=>s("div",{class:"flex items-center gap-5"},[s(o,{name:"input",state:a,size:t,key:t+a},null),s(o,{icon:!1,name:"input",state:a,size:t,key:t+a},null)]))]))]);var r,p,u;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`() => <div class="inline-grid grid-cols-2 gap-5">\r
    {SBEmailInputStates.map(state => {
    return <div class="flex flex-col gap-5 items-start">\r
          {SBEmailInputSizes.map(size => {
        return <div class="flex items-center gap-5">\r
                <SBEmailInput name="input" state={state} size={size} key={size! + state!} />\r
                <SBEmailInput icon={false} name="input" state={state} size={size} key={size! + state!} />\r
              </div>;
      })}\r
        </div>;
  })}\r
  </div>`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const k=["Presentation"];export{n as Presentation,k as __namedExportsOrder,E as default};
//# sourceMappingURL=SBEmailInput.stories-16696ef0.js.map
