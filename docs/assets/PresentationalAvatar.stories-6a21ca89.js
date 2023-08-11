import{c as e}from"./vue.esm-bundler-afbd5a6e.js";import{_ as s,f as n}from"./index-d3fe22bd.js";const u={component:s},l=["sm","md","custom"],r=()=>e("div",{class:"flex flex-col gap-5"},[l.map(a=>a==="custom"?e("div",{class:"flex gap-5"},[e(s,{class:"text-2xl w-[100px]",size:a,username:"JohnDoe"},null),e(s,{class:"text-2xl w-[100px]",size:a,username:"JohnDoe",image:n.image.avatar()},null)]):e("div",{class:"flex gap-5"},[e(s,{size:a,username:"JohnDoe"},null),e(s,{size:a,username:"JohnDoe",image:n.image.avatar()},null)]))]);var t,o,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`() => <div class="flex flex-col gap-5">\r
    {avatarSizes.map(size => {
    if (size === 'custom') {
      return <div class="flex gap-5">\r
            <PresentationalAvatar class="text-2xl w-[100px]" size={size} username="JohnDoe" />\r
            <PresentationalAvatar class="text-2xl w-[100px]" size={size} username="JohnDoe" image={faker.image.avatar()} />\r
          </div>;
    }
    return <div class="flex gap-5">\r
          <PresentationalAvatar size={size} username="JohnDoe" />\r
          <PresentationalAvatar size={size} username="JohnDoe" image={faker.image.avatar()} />\r
        </div>;
  })}\r
  </div>`,...(i=(o=r.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const x=["Presentation"];export{r as Presentation,x as __namedExportsOrder,u as default};
//# sourceMappingURL=PresentationalAvatar.stories-6a21ca89.js.map
