import{c as o,a as i}from"./vue.esm-bundler-afbd5a6e.js";import{_ as n}from"./Button-3ce56539.js";import"./LoadingSpinner-58799216.js";import"./iconify-751254ff.js";const B={component:n},d=["primary","secondary","subtle","ghost"],l=["xs","sm","md","lg","xl"],r=()=>o("div",{class:"grid gap-5"},[d.map(t=>o("div",{class:"flex flex-col gap-5 items-start"},[l.map(e=>o("div",{class:"flex gap-5"},[o(n,{icon:"material-symbols:add-rounded",position:"right","ui-type":t,size:e,key:e+t},{default:()=>[i("Button")]}),o(n,{icon:"material-symbols:add-rounded",loading:!0,position:"right","ui-type":t,size:e,key:e+t},{default:()=>[i("Button")]}),o(n,{"ui-type":t,size:e,key:e+t},{default:()=>[i("Button")]}),o(n,{loading:!0,"ui-type":t,size:e,key:e+t},{default:()=>[i("Button")]}),o(n,{icon:"material-symbols:add-rounded",position:"left","ui-type":t,size:e,key:e+t},{default:()=>[i("Button")]}),o(n,{loading:!0,icon:"material-symbols:add-rounded",position:"left","ui-type":t,size:e,key:e+t},{default:()=>[i("Button")]}),o(n,{icon:"material-symbols:close-rounded","ui-type":t,size:e,key:e+t},null),o(n,{loading:!0,icon:"material-symbols:add-rounded","ui-type":t,size:e,key:e+t},null)]))]))]);var s,a,u;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`() => <div class="grid gap-5">\r
    {buttonUiTypes.map(uiType => {
    return <div class="flex flex-col gap-5 items-start">\r
          {buttonSizes.map(size => {
        return <div class="flex gap-5">\r
                <Button icon="material-symbols:add-rounded" position="right" ui-type={uiType} size={size} key={size! + uiType!}>\r
                  Button\r
                </Button>\r
                <Button icon="material-symbols:add-rounded" loading={true} position="right" ui-type={uiType} size={size} key={size! + uiType!}>\r
                  Button\r
                </Button>\r
                <Button ui-type={uiType} size={size} key={size! + uiType!}>\r
                  Button\r
                </Button>\r
                <Button loading={true} ui-type={uiType} size={size} key={size! + uiType!}>\r
                  Button\r
                </Button>\r
                <Button icon="material-symbols:add-rounded" position="left" ui-type={uiType} size={size} key={size! + uiType!}>\r
                  Button\r
                </Button>\r
                <Button loading={true} icon="material-symbols:add-rounded" position="left" ui-type={uiType} size={size} key={size! + uiType!}>\r
                  Button\r
                </Button>\r
                <Button icon="material-symbols:close-rounded" ui-type={uiType} size={size} key={size! + uiType!} />\r
                <Button loading={true} icon="material-symbols:add-rounded" ui-type={uiType} size={size} key={size! + uiType!} />\r
              </div>;
      })}\r
        </div>;
  })}\r
  </div>`,...(u=(a=r.parameters)==null?void 0:a.docs)==null?void 0:u.source}}};const g=["Presentation"];export{r as Presentation,g as __namedExportsOrder,B as default};
//# sourceMappingURL=Button.stories-710817cc.js.map
