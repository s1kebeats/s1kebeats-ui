import{d as z,e as r,o as u,g as v,i as h,x as c,k as i,y as p,n as d,u as k,c as a,z as n}from"./vue.esm-bundler-af39f383.js";import{L as C}from"./LoadingSpinner-4abcabaa.js";import{I as S}from"./iconify-c502b4ab.js";const s=z({__name:"Button",props:{size:{default:"md"},type:{default:"primary"},icon:{},position:{default:"left"},loading:{type:Boolean,default:!1}},setup(t){const e=t,g=r(()=>{switch(e.size){case"sm":return"desktop-text-xs rounded-lg min-h-[48px] px-4 gap-3";case"lg":return"desktop-text-sm rounded-xl min-h-[56px] px-8 gap-4";case"xl":return"desktop-text-md rounded-2xl min-h-[60px] px-8 gap-4";default:return"desktop-text-sm rounded-xl min-h-[52px] px-6 gap-3"}}),b=r(()=>{switch(e.size){case"lg":case"xl":return"gap-4";default:return"gap-3"}}),x=r(()=>{switch(e.type){case"secondary":return"border-2 border-primary text-primary hover:text-primary-default_strong hover:border-primary-default_strong focus:border-white focus:outline-8 focus:outline focus:outline-primary-bg_strong disabled:opacity-50 active:text-grayscale-header active:border-grayscale-header";case"subtle":return"border-2 border-grayscale-line text-primary hover:border-grayscale-placeholder hover:text-primary-default_strong focus:border-white focus:outline-8 focus:outline focus:outline-grayscale-input active:border-grayscale-header active:text-grayscale-header disabled:opacity-50";case"ghost":return"text-primary hover:text-primary-default_strong focus:outline-8 focus:outline focus:outline-grayscale-input active:text-grayscale-header disabled:opacity-50";default:return"text-grayscale-bg bg-primary hover:bg-primary-default_strong focus:outline-8 focus:outline focus:outline-primary-bg_strong disabled:opacity-50 active:bg-grayscale-header"}}),B=r(()=>{switch(e.size){case"sm":return"text-[16px]";default:return"text-[24px]"}});return(o,_)=>(u(),v("button",{class:d(["relative flex items-center justify-center link transition-all disabled:cursor-not-allowed",[g.value,x.value]])},[h("div",{"data-testid":"buttonContentWrapper",class:d(["flex items-center justify-center",[b.value,{"opacity-0":o.loading}]])},[o.position==="left"?c(o.$slots,"default",{key:0}):i("",!0),o.icon?(u(),p(k(S),{key:1,"data-testid":"buttonIcon",icon:o.icon,class:d([B.value,{"opacity-0":o.loading}])},null,8,["icon","class"])):i("",!0),o.position==="right"?c(o.$slots,"default",{key:2}):i("",!0)],2),o.loading?(u(),p(C,{key:0,"data-testid":"loadingSpinner",class:"absolute",size:o.size},null,8,["size"])):i("",!0)],2))}});s.__docgenInfo={exportName:"default",displayName:"Button",description:"",tags:{},props:[{name:"size",defaultValue:{func:!1,value:"'md'"}},{name:"type",defaultValue:{func:!1,value:"'primary'"}},{name:"position",defaultValue:{func:!1,value:"'left'"}},{name:"loading",defaultValue:{func:!1,value:"false"}}],slots:[{name:"default"}],sourceFiles:["C:/Users/datse/Documents/Code/NewProjects/s1kebeats/s1kebeats_ui/src/components/Button/Button.vue"]};const j={component:s},w=["primary","secondary","subtle","ghost"],V=["sm","md","lg","xl"],l=()=>a("div",{class:"grid gap-5"},[w.map(t=>a("div",{class:"flex flex-col gap-5 items-start"},[V.map(e=>a("div",{class:"flex gap-5"},[a(s,{icon:"material-symbols:add-rounded",position:"right",type:t,size:e,key:e+t},{default:()=>[n("Button")]}),a(s,{icon:"material-symbols:add-rounded",loading:!0,position:"right",type:t,size:e,key:e+t},{default:()=>[n("Button")]}),a(s,{type:t,size:e,key:e+t},{default:()=>[n("Button")]}),a(s,{loading:!0,type:t,size:e,key:e+t},{default:()=>[n("Button")]}),a(s,{icon:"material-symbols:add-rounded",position:"left",type:t,size:e,key:e+t},{default:()=>[n("Button")]}),a(s,{loading:!0,icon:"material-symbols:add-rounded",position:"left",type:t,size:e,key:e+t},{default:()=>[n("Button")]}),a(s,{icon:"material-symbols:add-rounded",type:t,size:e,key:e+t},null),a(s,{loading:!0,icon:"material-symbols:add-rounded",type:t,size:e,key:e+t},null)]))]))]);var y,m,f;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`() => <div class="grid gap-5">\r
    {buttonTypes.map(type => {
    return <div class="flex flex-col gap-5 items-start">\r
          {buttonSizes.map(size => {
        return <div class="flex gap-5">\r
                <Button icon="material-symbols:add-rounded" position="right" type={type} size={size} key={size! + type!}>\r
                  Button\r
                </Button>\r
                <Button icon="material-symbols:add-rounded" loading={true} position="right" type={type} size={size} key={size! + type!}>\r
                  Button\r
                </Button>\r
                <Button type={type} size={size} key={size! + type!}>\r
                  Button\r
                </Button>\r
                <Button loading={true} type={type} size={size} key={size! + type!}>\r
                  Button\r
                </Button>\r
                <Button icon="material-symbols:add-rounded" position="left" type={type} size={size} key={size! + type!}>\r
                  Button\r
                </Button>\r
                <Button loading={true} icon="material-symbols:add-rounded" position="left" type={type} size={size} key={size! + type!}>\r
                  Button\r
                </Button>\r
                <Button icon="material-symbols:add-rounded" type={type} size={size} key={size! + type!} />\r
                <Button loading={true} icon="material-symbols:add-rounded" type={type} size={size} key={size! + type!} />\r
              </div>;
      })}\r
        </div>;
  })}\r
  </div>`,...(f=(m=l.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};const E=["Presentation"];export{l as Presentation,E as __namedExportsOrder,j as default};
//# sourceMappingURL=Button.stories-30cbb684.js.map
