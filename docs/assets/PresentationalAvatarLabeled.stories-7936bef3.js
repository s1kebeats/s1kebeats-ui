import{d as u,o as r,g as i,m as o,k as l,c as e}from"./vue.esm-bundler-af39f383.js";import{_ as v,f as p}from"./index-d1dbe786.js";const f={"data-testid":"presentationalAvatarLabeled",class:"flex items-center gap-[5px] h-[56px]"},g={key:0,"data-testid":"presentationalAvatarLabelRight",class:"link desktop-text-xs text-grayscale-body py-[5px] px-[10px]"},x={key:1,"data-testid":"presentationalAvatarLabelLeft",class:"link desktop-text-xs text-grayscale-body py-[5px] px-[10px]"},s=u({__name:"PresentationalAvatarLabeled",props:{username:{},image:{},size:{},position:{default:"left"}},setup(t){return(a,z)=>(r(),i("div",f,[a.position==="right"?(r(),i("span",g," @"+o(a.username),1)):l("",!0),e(v,{"data-testid":"presentationalAvatar",username:a.username,image:a.image,class:"m-[4px]",size:a.size},null,8,["username","image","size"]),a.position==="left"?(r(),i("span",x," @"+o(a.username),1)):l("",!0)]))}});s.__docgenInfo={exportName:"default",displayName:"PresentationalAvatarLabeled",description:"",tags:{},props:[{name:"position",defaultValue:{func:!1,value:"'left'"}}],sourceFiles:["C:/Users/datse/Documents/Code/NewProjects/s1kebeats/s1kebeats_ui/src/components/PresentationalAvatar/PresentationalAvatarLabeled.vue"]};const k={component:s},h=["sm","md"],n=()=>e("div",{class:"flex flex-col gap-5"},[h.map(t=>e("div",null,[e("div",{class:"flex items-center gap-5"},[e(s,{size:t,username:"JohnDoe",position:"left"},null),e(s,{size:t,username:"JohnDoe",position:"right"},null)]),e("div",{class:"flex gap-5"},[e(s,{size:t,username:"JohnDoe",image:p.image.avatar(),position:"left"},null),e(s,{size:t,image:p.image.avatar(),username:"JohnDoe",position:"right"},null)])]))]);var m,d,c;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`() => <div class="flex flex-col gap-5">\r
    {avatarSizes.map(size => {
    return <div>\r
          <div class="flex items-center gap-5">\r
            <PresentationalAvatarLabeled size={size} username="JohnDoe" position="left" />\r
            <PresentationalAvatarLabeled size={size} username="JohnDoe" position="right" />\r
          </div>\r
          <div class="flex gap-5">\r
            <PresentationalAvatarLabeled size={size} username="JohnDoe" image={faker.image.avatar()} position="left" />\r
            <PresentationalAvatarLabeled size={size} image={faker.image.avatar()} username="JohnDoe" position="right" />\r
          </div>\r
        </div>;
  })}\r
  </div>`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const A=["Presentation"];export{n as Presentation,A as __namedExportsOrder,k as default};
//# sourceMappingURL=PresentationalAvatarLabeled.stories-7936bef3.js.map
