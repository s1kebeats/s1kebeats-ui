import{c as e}from"./vue.esm-bundler-4bf50236.js";import{_ as n}from"./TextInput-f7f20313.js";import"./iconify-a8feec73.js";const d={component:n},o=[null,"success","error"],c=["sm","md","lg","xl"],a=()=>e("div",{class:"inline-grid grid-cols-2 gap-5"},[o.map(t=>e("div",{class:"flex flex-col gap-5 items-start"},[c.map(s=>e("div",{class:"flex gap-5"},[e(n,{name:"input",disabled:!0,label:"Type in your username",icon:"material-symbols:account-circle",state:t,size:s,key:s+t},null),e(n,{name:"input",label:"Type in your username",state:t,size:s,key:s+t},null)]))]))]);var r,i,l;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`() => <div class="inline-grid grid-cols-2 gap-5">\r
    {textInputStates.map(state => {
    return <div class="flex flex-col gap-5 items-start">\r
          {textInputSizes.map(size => {
        return <div class="flex gap-5">\r
                <TextInput name="input" disabled={true} label="Type in your username" icon="material-symbols:account-circle" state={state} size={size} key={size! + state!} />\r
                <TextInput name="input" label="Type in your username" state={state} size={size} key={size! + state!} />\r
              </div>;
      })}\r
        </div>;
  })}\r
  </div>`,...(l=(i=a.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const x=["Presentation"];export{a as Presentation,x as __namedExportsOrder,d as default};
//# sourceMappingURL=TextInput.stories-c9717e60.js.map
