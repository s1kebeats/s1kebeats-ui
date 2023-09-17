import{d as m,A as c,o as d,k as f,u as g,c as t}from"./vue.esm-bundler-afbd5a6e.js";import{_ as v}from"./SBTextInput-fee5a60a.js";import"./iconify-751254ff.js";const r=m({__name:"SBUsernameInput",props:{size:{},name:{},preset:{},disabled:{type:Boolean},message:{},state:{},callback:{},debounce:{type:Boolean},type:{},autocomplete:{},icon:{type:Boolean,default:!0}},emits:["update:value"],setup(s,{emit:a}){const o=s;function i(e){a("update:value",e)}return c(()=>{o.preset&&i(o.preset)}),(e,b)=>(d(),f(g(v),{"data-testid":"textInputComponent",size:e.size,name:e.name,label:"Введите имя пользователя",icon:e.icon?"material-symbols:account-circle":null,preset:e.preset,disabled:e.disabled,message:e.message,state:e.state,debounce:e.debounce,"onUpdate:value":i,autocomplete:e.autocomplete},null,8,["size","name","icon","preset","disabled","message","state","debounce","autocomplete"]))}});r.__docgenInfo={exportName:"default",displayName:"SBUsernameInput",description:"",tags:{},props:[{name:"icon",defaultValue:{func:!1,value:"true"}}],events:[{name:"update:value",type:{names:["string"]}}],sourceFiles:["C:/Users/datse/Documents/Code/NewProjects/s1kebeats/s1kebeats-ui/src/components/SBUsernameInput/SBUsernameInput.vue"]};const y={component:r},B=[null,"success","error"],S=["sm","md","lg","xl"],n=()=>t("div",{class:"inline-grid grid-cols-2 gap-5"},[B.map(s=>t("div",{class:"flex flex-col gap-5 items-start"},[S.map(a=>t("div",{class:"flex items-center gap-5"},[t(r,{name:"input",state:s,size:a,key:a+s},null),t(r,{icon:!1,name:"input",state:s,size:a,key:a+s},null)]))]))]);var p,l,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`() => <div class="inline-grid grid-cols-2 gap-5">\r
    {SBUsernameInputStates.map(state => {
    return <div class="flex flex-col gap-5 items-start">\r
          {SBUsernameInputSizes.map(size => {
        return <div class="flex items-center gap-5">\r
                <SBUsernameInput name="input" state={state} size={size} key={size! + state!} />\r
                <SBUsernameInput icon={false} name="input" state={state} size={size} key={size! + state!} />\r
              </div>;
      })}\r
        </div>;
  })}\r
  </div>`,...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const k=["Presentation"];export{n as Presentation,k as __namedExportsOrder,y as default};
//# sourceMappingURL=SBUsernameInput.stories-418a6324.js.map
