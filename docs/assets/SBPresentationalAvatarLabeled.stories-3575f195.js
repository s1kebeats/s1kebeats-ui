import{d as u,o as r,f as i,s as o,j as l,c as e}from"./vue.esm-bundler-afbd5a6e.js";import{_ as f,f as m}from"./index-3e25c6cc.js";const v={"data-testid":"presentationalAvatarLabeled",class:"flex items-center gap-[5px] h-[56px]"},g={key:0,"data-testid":"presentationalAvatarLabelRight",class:"font-semibold text-sm text-grayscale-body py-[5px] px-[10px]"},h={key:1,"data-testid":"presentationalAvatarLabelLeft",class:"font-semibold text-sm text-grayscale-body py-[5px] px-[10px]"},s=u({__name:"SBPresentationalAvatarLabeled",props:{username:{},image:{},size:{},position:{default:"left"}},setup(t){return(a,b)=>(r(),i("div",v,[a.position==="right"?(r(),i("span",g," @"+o(a.username),1)):l("",!0),e(f,{"data-testid":"presentationalAvatar",username:a.username,image:a.image,class:"m-[4px]",size:a.size},null,8,["username","image","size"]),a.position==="left"?(r(),i("span",h," @"+o(a.username),1)):l("",!0)]))}});s.__docgenInfo={exportName:"default",displayName:"SBPresentationalAvatarLabeled",description:"",tags:{},props:[{name:"position",defaultValue:{func:!1,value:"'left'"}}],sourceFiles:["C:/Users/datse/Documents/Code/NewProjects/s1kebeats/s1kebeats-ui/src/components/SBPresentationalAvatar/SBPresentationalAvatarLabeled.vue"]};const A={component:s},x=["sm","md"],n=()=>e("div",{class:"flex flex-col gap-5"},[x.map(t=>e("div",null,[e("div",{class:"flex items-center gap-5"},[e(s,{size:t,username:"JohnDoe",position:"left"},null),e(s,{size:t,username:"JohnDoe",position:"right"},null)]),e("div",{class:"flex gap-5"},[e(s,{size:t,username:"JohnDoe",image:m.image.avatar(),position:"left"},null),e(s,{size:t,image:m.image.avatar(),username:"JohnDoe",position:"right"},null)])]))]);var p,d,c;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`() => <div class="flex flex-col gap-5">\r
    {avatarSizes.map(size => {
    return <div>\r
          <div class="flex items-center gap-5">\r
            <SBPresentationalAvatarLabeled size={size} username="JohnDoe" position="left" />\r
            <SBPresentationalAvatarLabeled size={size} username="JohnDoe" position="right" />\r
          </div>\r
          <div class="flex gap-5">\r
            <SBPresentationalAvatarLabeled size={size} username="JohnDoe" image={faker.image.avatar()} position="left" />\r
            <SBPresentationalAvatarLabeled size={size} image={faker.image.avatar()} username="JohnDoe" position="right" />\r
          </div>\r
        </div>;
  })}\r
  </div>`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const S=["Presentation"];export{n as Presentation,S as __namedExportsOrder,A as default};
//# sourceMappingURL=SBPresentationalAvatarLabeled.stories-3575f195.js.map
