import{d as u,A as c,o as d,k as f,c as s}from"./vue.esm-bundler-afbd5a6e.js";import{_ as g}from"./TextInput-2e0a6f5c.js";import"./iconify-751254ff.js";const o=u({__name:"EmailInput",props:{size:{},name:{},preset:{},disabled:{type:Boolean},message:{},state:{},callback:{},debounce:{type:Boolean},type:{},autocomplete:{},icon:{type:Boolean,default:!0}},emits:["updateValue"],setup(a,{emit:t}){const i=a;function l(e){t("updateValue",e)}return c(()=>{i.preset&&l(i.preset)}),(e,y)=>(d(),f(g,{"data-testid":"textInputComponent",size:e.size,name:e.name,label:"Введите электронную почту",icon:e.icon?"material-symbols:alternate-email-rounded":null,preset:e.preset,disabled:e.disabled,message:e.message,state:e.state,debounce:e.debounce,onUpdateValue:l,autocomplete:e.autocomplete,type:"email"},null,8,["size","name","icon","preset","disabled","message","state","debounce","autocomplete"]))}});o.__docgenInfo={exportName:"default",displayName:"EmailInput",description:"",tags:{},props:[{name:"icon",defaultValue:{func:!1,value:"true"}}],events:[{name:"updateValue",type:{names:["string"]}}],sourceFiles:["C:/Users/datse/Documents/Code/NewProjects/s1kebeats/s1kebeats_ui/src/components/EmailInput/EmailInput.vue"]};const E={component:o},b=[null,"success","error"],v=["sm","md","lg","xl"],n=()=>s("div",{class:"inline-grid grid-cols-2 gap-5"},[b.map(a=>s("div",{class:"flex flex-col gap-5 items-start"},[v.map(t=>s("div",{class:"flex items-center gap-5"},[s(o,{name:"input",state:a,size:t,key:t+a},null),s(o,{icon:!1,name:"input",state:a,size:t,key:t+a},null)]))]))]);var r,p,m;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`() => <div class="inline-grid grid-cols-2 gap-5">\r
    {emailInputStates.map(state => {
    return <div class="flex flex-col gap-5 items-start">\r
          {emailInputSizes.map(size => {
        return <div class="flex items-center gap-5">\r
                <EmailInput name="input" state={state} size={size} key={size! + state!} />\r
                <EmailInput icon={false} name="input" state={state} size={size} key={size! + state!} />\r
              </div>;
      })}\r
        </div>;
  })}\r
  </div>`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const V=["Presentation"];export{n as Presentation,V as __namedExportsOrder,E as default};
//# sourceMappingURL=EmailInput.stories-bab31a15.js.map
