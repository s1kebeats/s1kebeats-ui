import{d as m,A as c,o as d,k as f,c as t}from"./vue.esm-bundler-afbd5a6e.js";import{_ as g}from"./TextInput-2e0a6f5c.js";import"./iconify-751254ff.js";const r=m({__name:"UsernameInput",props:{size:{},name:{},preset:{},disabled:{type:Boolean},message:{},state:{},callback:{},debounce:{type:Boolean},type:{},autocomplete:{},icon:{type:Boolean,default:!0}},emits:["updateValue"],setup(s,{emit:a}){const o=s;function i(e){a("updateValue",e)}return c(()=>{o.preset&&i(o.preset)}),(e,z)=>(d(),f(g,{"data-testid":"textInputComponent",size:e.size,name:e.name,label:"Введите имя пользователя",icon:e.icon?"material-symbols:account-circle":null,preset:e.preset,disabled:e.disabled,message:e.message,state:e.state,debounce:e.debounce,onUpdateValue:i,autocomplete:e.autocomplete},null,8,["size","name","icon","preset","disabled","message","state","debounce","autocomplete"]))}});r.__docgenInfo={exportName:"default",displayName:"UsernameInput",description:"",tags:{},props:[{name:"icon",defaultValue:{func:!1,value:"true"}}],events:[{name:"updateValue",type:{names:["string"]}}],sourceFiles:["C:/Users/datse/Documents/Code/NewProjects/s1kebeats/s1kebeats_ui/src/components/UsernameInput/UsernameInput.vue"]};const U={component:r},b=[null,"success","error"],v=["sm","md","lg","xl"],n=()=>t("div",{class:"inline-grid grid-cols-2 gap-5"},[b.map(s=>t("div",{class:"flex flex-col gap-5 items-start"},[v.map(a=>t("div",{class:"flex items-center gap-5"},[t(r,{name:"input",state:s,size:a,key:a+s},null),t(r,{icon:!1,name:"input",state:s,size:a,key:a+s},null)]))]))]);var p,u,l;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`() => <div class="inline-grid grid-cols-2 gap-5">\r
    {usernameInputStates.map(state => {
    return <div class="flex flex-col gap-5 items-start">\r
          {usernameInputSizes.map(size => {
        return <div class="flex items-center gap-5">\r
                <UsernameInput name="input" state={state} size={size} key={size! + state!} />\r
                <UsernameInput icon={false} name="input" state={state} size={size} key={size! + state!} />\r
              </div>;
      })}\r
        </div>;
  })}\r
  </div>`,...(l=(u=n.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const V=["Presentation"];export{n as Presentation,V as __namedExportsOrder,U as default};
//# sourceMappingURL=UsernameInput.stories-be307ec0.js.map
