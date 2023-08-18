import{d as r,o as t,k as i,c as n}from"./vue.esm-bundler-afbd5a6e.js";import{_ as o}from"./SocialLink-5849427a.js";import"./iconify-751254ff.js";const u=r({__name:"InstagramLink",props:{username:{},size:{}},setup(s){return(e,m)=>(t(),i(o,{url:"https://instagram.com/@",username:e.username,icon:"mdi:instagram",size:e.size,"data-testid":"socialLink"},null,8,["username","size"]))}});u.__docgenInfo={exportName:"default",displayName:"InstagramLink",description:"",tags:{},sourceFiles:["C:/Users/datse/Documents/Code/NewProjects/s1kebeats/s1kebeats_ui/src/components/Social/InstagramLink.vue"]};const d=r({__name:"VkLink",props:{username:{},size:{}},setup(s){return(e,m)=>(t(),i(o,{url:"https://vk.com/",username:e.username,icon:"mdi:vk",size:e.size,"data-testid":"socialLink"},null,8,["username","size"]))}});d.__docgenInfo={exportName:"default",displayName:"VkLink",description:"",tags:{},sourceFiles:["C:/Users/datse/Documents/Code/NewProjects/s1kebeats/s1kebeats_ui/src/components/Social/VkLink.vue"]};const k=r({__name:"YoutubeLink",props:{username:{},size:{}},setup(s){return(e,m)=>(t(),i(o,{url:"https://www.youtube.com/@",username:e.username,icon:"mdi:youtube",size:e.size,"data-testid":"socialLink"},null,8,["username","size"]))}});k.__docgenInfo={exportName:"default",displayName:"YoutubeLink",description:"",tags:{},sourceFiles:["C:/Users/datse/Documents/Code/NewProjects/s1kebeats/s1kebeats_ui/src/components/Social/YoutubeLink.vue"]};const L={component:u},_=["sm","md","lg"],a=()=>n("div",{class:"flex flex-col gap-5"},[_.map(s=>n("div",{class:"flex gap-5 items-center"},[n(u,{size:s,username:"username"},null),n(d,{size:s,username:"username"},null),n(k,{size:s,username:"username"},null)]))]);var c,l,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`() => <div class="flex flex-col gap-5">\r
    {socialLinkSizes.map(size => {
    return <div class="flex gap-5 items-center">\r
          <InstagramLink size={size} username="username" />\r
          <VkLink size={size} username="username" />\r
          <YoutubeLink size={size} username="username" />\r
        </div>;
  })}\r
  </div>`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const b=["Presentation"];export{a as Presentation,b as __namedExportsOrder,L as default};
//# sourceMappingURL=Social.stories-1e76ae94.js.map