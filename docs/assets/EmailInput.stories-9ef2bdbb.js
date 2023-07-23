import{d as f,b as p,z as g,o as v,s as z,c as i}from"./vue.esm-bundler-4bf50236.js";import{_ as b}from"./TextInput-f7f20313.js";import"./iconify-a8feec73.js";var I=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/,_=function(a){if(!a||a.length>254)return!1;var t=I.test(a);if(!t)return!1;var s=a.split("@");if(s[0].length>64)return!1;var n=s[1].split(".");return!n.some(function(r){return r.length>63})};const u=f({__name:"EmailInput",props:{size:{},name:{},preset:{},disabled:{type:Boolean},message:{},state:{},callback:{type:Function},type:{}},emits:["updateValue"],setup(a,{emit:t}){const s=a,n=p(s.message?s.message:""),r=p(s.state?s.state:null);function o(e){if(!e){n.value="",r.value=null,t("updateValue",e);return}if(_(e)){n.value="",r.value="success",t("updateValue",e);return}n.value="Введите настоящую электронную почту",r.value="error"}return g(()=>{s.preset&&o(s.preset)}),(e,V)=>(v(),z(b,{"data-testid":"textInputComponent",size:e.size,name:e.name,label:"Введите электронную почту",icon:"material-symbols:alternate-email-rounded",preset:e.preset,disabled:e.disabled,message:e.message||n.value,state:e.state||r.value,debounce:!0,onUpdateValue:o,type:"email"},null,8,["size","name","preset","disabled","message","state"]))}});u.__docgenInfo={exportName:"default",displayName:"EmailInput",description:"",tags:{},events:[{name:"updateValue",type:{names:["string"]}}],sourceFiles:["C:/Users/datse/Documents/Code/NewProjects/s1kebeats/s1kebeats_ui/src/components/EmailInput/EmailInput.vue"]};const Z={component:u},y=[null,"success","error"],k=["sm","md","lg","xl"],l=()=>i("div",{class:"inline-grid grid-cols-2 gap-5"},[y.map(a=>i("div",{class:"flex flex-col gap-5 items-start"},[k.map(t=>i(u,{name:"input",state:a,size:t,key:t+a},null))]))]);var m,c,d;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`() => <div class="inline-grid grid-cols-2 gap-5">\r
    {emailInputStates.map(state => {
    return <div class="flex flex-col gap-5 items-start">\r
          {emailInputSizes.map(size => {
        return <EmailInput name="input" state={state} size={size} key={size! + state!} />;
      })}\r
        </div>;
  })}\r
  </div>`,...(d=(c=l.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const h=["Presentation"];export{l as Presentation,h as __namedExportsOrder,Z as default};
//# sourceMappingURL=EmailInput.stories-9ef2bdbb.js.map