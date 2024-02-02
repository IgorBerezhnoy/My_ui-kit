import{j as f}from"./jsx-runtime-ffb262ed.js";import{r as j}from"./index-76fb7be0.js";import{g as v}from"./table-1db7dcef.js";import"./_commonjsHelpers-de833af9.js";import"./YandexLang-e0993ad9.js";import"./FullScreen-9ea9ac2e.js";import"./PersonAddFilled-3c72f740.js";import"./extends-98964cd2.js";import"./index-d3ea75b5.js";import"./button-04a14efd.js";import"./textField-e67a9db3.js";import"./typography-7e81127d.js";import"./textArea-98c7220a.js";const q={component:v,tags:["autodocs"],title:"Components/UI/Select"},l=[{title:"First Select",value:"first"},{title:"Second Select",value:"second"},{title:"Third Select",value:"third"},{title:"Fourth Select",value:"fourth"}],t={args:{label:"Select",options:l,placeholder:"Select"}},r={args:{disabled:!0,label:"Select",options:l,placeholder:"Select"}},o={args:{fullWidth:!0,label:"Select",options:l,placeholder:"Select"}},A=e=>{const[W,x]=j.useState(e.options[0].value);return f.jsx(v,{onValueChange:x,value:W,...e})},a={args:{fullWidth:!0,label:"Active placeholder",options:l},render:e=>f.jsx(A,{...e})};var s,c,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Select',
    options: initialState,
    placeholder: 'Select'
  }
}`,...(i=(c=t.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var n,p,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    disabled: true,
    label: 'Select',
    options: initialState,
    placeholder: 'Select'
  }
}`,...(d=(p=r.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,m,S;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    fullWidth: true,
    label: 'Select',
    options: initialState,
    placeholder: 'Select'
  }
}`,...(S=(m=o.parameters)==null?void 0:m.docs)==null?void 0:S.source}}};var h,g,b;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    fullWidth: true,
    label: 'Active placeholder',
    options: initialState
  },
  render: args => <SelectWithHooks {...args} />
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};const w=["Default","Disabled","FullWidth","Active"];export{a as Active,t as Default,r as Disabled,o as FullWidth,w as __namedExportsOrder,q as default};
//# sourceMappingURL=Select.stories-58cb7204.js.map
