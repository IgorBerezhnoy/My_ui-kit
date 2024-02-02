import{j as a}from"./jsx-runtime-ffb262ed.js";import{I as B,O as k,L as D,E as W}from"./YandexLang-e0993ad9.js";import"./FullScreen-9ea9ac2e.js";import"./PersonAddFilled-3c72f740.js";import{B as n}from"./button-04a14efd.js";import{M as A,i as m,j as e,k as u,l as g,g as t,m as p,$ as l}from"./table-1db7dcef.js";import{T as s}from"./textField-e67a9db3.js";import{T as r}from"./typography-7e81127d.js";import{T as F}from"./textArea-98c7220a.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./extends-98964cd2.js";import"./index-d3ea75b5.js";const J={argTypes:{},component:A,tags:["autodocs"],title:"Components/UI/Modal"},S=[{title:"Новый",value:"first"},{title:"Существующий",value:"second"}],i={args:{children:a.jsxs(m,{className:e.card,children:[a.jsx(u,{title:"Добавление участника"}),a.jsx(g,{children:a.jsx(t,{fullWidth:!0,label:"Участник",options:S,value:"first"})}),a.jsxs(p,{className:e.footer,children:[a.jsx(l,{className:`${e.button} ${e.red}`,children:a.jsx(r,{"aria-label":"Close",variant:"subtitle1",children:"Отменить"})}),a.jsx(l,{className:`${e.button} ${e.blue}`,children:a.jsx(r,{"aria-label":"Close",variant:"subtitle1",children:"Продолжить"})})]})]}),trigger:a.jsx(n,{children:"Some trigger"})}},o={args:{children:a.jsxs(m,{className:e.card,children:[a.jsx(u,{title:"Добавление участника"}),a.jsxs(g,{className:e.mainContent,children:[a.jsx(t,{fullWidth:!0,label:"Участник",options:S,value:"second"}),a.jsx(t,{fullWidth:!0,label:"Имя участника",options:[{title:"Prabodhan Fitzgerald",value:"Prabodhan Fitzgerald"}],value:"Prabodhan Fitzgerald"})]}),a.jsxs(p,{className:e.footer,children:[a.jsx(l,{className:`${e.button} ${e.red}`,children:a.jsx(r,{"aria-label":"Close",variant:"subtitle1",children:"Отменить"})}),a.jsx(l,{className:`${e.button} ${e.blue}`,children:a.jsx(r,{"aria-label":"Close",variant:"subtitle1",children:"Продолжить"})})]})]}),trigger:a.jsx(n,{children:"Some trigger"})}},d={args:{children:a.jsxs(m,{className:e.card,children:[a.jsx(u,{title:"Редактирование участника"}),a.jsxs(g,{className:e.mainContent,children:[a.jsxs("div",{className:e.imageAndButton,children:[a.jsx("img",{alt:"user photo",className:e.img,src:"https://personalcar.in/assets/images/testimonial/20220816100621user.png"}),a.jsxs(n,{children:[a.jsx(B,{}),"Загрузить фото"]})]}),a.jsx(s,{label:"Имя",value:"Fitzgerald"}),a.jsx(s,{label:"Фамилия",value:"Prabodhan"}),a.jsx(t,{fullWidth:!0,label:"Статус",options:[{title:"Активный",value:"active"}],value:"active"}),a.jsx(s,{label:"OfferHeap",value:"https://"}),a.jsx(s,{label:"LinkedIn",value:"https://"}),a.jsx(s,{label:"Укажите технологию",value:"React"}),a.jsx(s,{label:"Позиция",value:"Front-End"}),a.jsx(F,{label:"Обязанности на проекте",rows:3,value:"Оптимизация загрузки и отображения веб-страницы для улучшения скорости загрузки и реакции пользовательского интерфейса."})]}),a.jsxs(p,{className:e.footer,children:[a.jsx(l,{className:`${e.button} ${e.red}`,children:a.jsx(r,{"aria-label":"Close",variant:"subtitle1",children:"Отменить"})}),a.jsx(l,{className:`${e.button} ${e.blue}`,children:a.jsx(r,{"aria-label":"Close",variant:"subtitle1",children:"Продолжить"})})]})]}),trigger:a.jsx(n,{children:"Some trigger"})}},c={args:{children:a.jsxs(m,{className:e.card,children:[a.jsx(u,{title:"Добавление участника"}),a.jsxs(g,{className:e.mainContent,children:[a.jsxs("div",{className:e.imageAndInfo,children:[a.jsx("img",{alt:"user photo",className:e.img,src:"https://personalcar.in/assets/images/testimonial/20220816100621user.png"}),a.jsxs("div",{className:e.nameAndLinks,children:[a.jsx(r,{variant:"h3",children:"Prabodhan Fitzgerald"}),a.jsxs("div",{className:e.links,children:[a.jsxs("div",{className:e.link,children:[a.jsx(r,{variant:"caption",children:"OfferHeap:"}),a.jsx(k,{className:e.ofh})]})," ",a.jsxs("div",{className:e.link,children:[a.jsx(r,{variant:"caption",children:"LinkedIn:"}),a.jsx(D,{})]})]}),a.jsxs(n,{variant:"secondary",children:[a.jsx(W,{}),"Внести изменения"]})]})]}),a.jsx(t,{fullWidth:!0,label:"Статус",options:[{title:"Активный",value:"active"}],value:"active"}),a.jsx(s,{label:"Укажите технологию",value:"React"}),a.jsx(s,{label:"Позиция",value:"Front-End"}),a.jsx(F,{label:"Обязанности на проекте",rows:3,value:"Оптимизация загрузки и отображения веб-страницы для улучшения скорости загрузки и реакции пользовательского интерфейса."})]}),a.jsxs(p,{className:e.footer,children:[a.jsx(l,{className:`${e.button} ${e.red}`,children:a.jsx(r,{"aria-label":"Close",variant:"subtitle1",children:"Отменить"})}),a.jsx(l,{className:`${e.button} ${e.blue}`,children:a.jsx(r,{"aria-label":"Close",variant:"subtitle1",children:"Продолжить"})})]})]}),trigger:a.jsx(n,{children:"Some trigger"})}};var h,b,v;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: <Card className={s.card}>\r
        <ModalHeader title={'Добавление участника'} />\r
        <ModalMainContent>\r
          <Select fullWidth label={'Участник'} options={initialState} value={'first'} />\r
        </ModalMainContent>\r
        <ModalFooter className={s.footer}>\r
          <Dialog.Close className={\`\${s.button} \${s.red}\`}>\r
            <Typography aria-label={'Close'} variant={'subtitle1'}>\r
              Отменить\r
            </Typography>\r
          </Dialog.Close>\r
          <Dialog.Close className={\`\${s.button} \${s.blue}\`}>\r
            <Typography aria-label={'Close'} variant={'subtitle1'}>\r
              Продолжить\r
            </Typography>\r
          </Dialog.Close>\r
        </ModalFooter>\r
      </Card>,
    trigger: <Button>Some trigger</Button>
  }
}`,...(v=(b=i.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var x,j,N;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: <Card className={s.card}>\r
        <ModalHeader title={'Добавление участника'} />\r
        <ModalMainContent className={s.mainContent}>\r
          <Select fullWidth label={'Участник'} options={initialState} value={'second'} />\r
          <Select fullWidth label={'Имя участника'} options={[{
          title: 'Prabodhan Fitzgerald',
          value: 'Prabodhan Fitzgerald'
        }]} value={'Prabodhan Fitzgerald'} />\r
        </ModalMainContent>\r
        <ModalFooter className={s.footer}>\r
          <Dialog.Close className={\`\${s.button} \${s.red}\`}>\r
            <Typography aria-label={'Close'} variant={'subtitle1'}>\r
              Отменить\r
            </Typography>\r
          </Dialog.Close>\r
          <Dialog.Close className={\`\${s.button} \${s.blue}\`}>\r
            <Typography aria-label={'Close'} variant={'subtitle1'}>\r
              Продолжить\r
            </Typography>\r
          </Dialog.Close>\r
        </ModalFooter>\r
      </Card>,
    trigger: <Button>Some trigger</Button>
  }
}`,...(N=(j=o.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var C,y,f;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: <Card className={s.card}>\r
        <ModalHeader title={'Редактирование участника'} />\r
        <ModalMainContent className={s.mainContent}>\r
          <div className={s.imageAndButton}>\r
            <img alt={'user photo'} className={s.img} src={'https://personalcar.in/assets/images/testimonial/20220816100621user.png'} />\r
            <Button>\r
              <Ic_image />\r
              Загрузить фото\r
            </Button>\r
          </div>\r
          <TextField label={'Имя'} value={'Fitzgerald'} />\r
          <TextField label={'Фамилия'} value={'Prabodhan'} />\r
          <Select fullWidth label={'Статус'} options={[{
          title: 'Активный',
          value: 'active'
        }]} value={'active'} />\r
          <TextField label={'OfferHeap'} value={'https://'} />\r
          <TextField label={'LinkedIn'} value={'https://'} />\r
          <TextField label={'Укажите технологию'} value={'React'} />\r
          <TextField label={'Позиция'} value={'Front-End'} />\r
          <TextArea label={'Обязанности на проекте'} rows={3} value={'Оптимизация загрузки и отображения веб-страницы для улучшения скорости загрузки и реакции пользовательского интерфейса.'} />\r
        </ModalMainContent>\r
        <ModalFooter className={s.footer}>\r
          <Dialog.Close className={\`\${s.button} \${s.red}\`}>\r
            <Typography aria-label={'Close'} variant={'subtitle1'}>\r
              Отменить\r
            </Typography>\r
          </Dialog.Close>\r
          <Dialog.Close className={\`\${s.button} \${s.blue}\`}>\r
            <Typography aria-label={'Close'} variant={'subtitle1'}>\r
              Продолжить\r
            </Typography>\r
          </Dialog.Close>\r
        </ModalFooter>\r
      </Card>,
    trigger: <Button>Some trigger</Button>
  }
}`,...(f=(y=d.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var T,$,M;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: <Card className={s.card}>\r
        <ModalHeader title={'Добавление участника'} />\r
        <ModalMainContent className={s.mainContent}>\r
          <div className={s.imageAndInfo}>\r
            <img alt={'user photo'} className={s.img} src={'https://personalcar.in/assets/images/testimonial/20220816100621user.png'} />\r
            <div className={s.nameAndLinks}>\r
              <Typography variant={'h3'}>Prabodhan Fitzgerald</Typography>\r
              <div className={s.links}>\r
                <div className={s.link}>\r
                  <Typography variant={'caption'}>OfferHeap:</Typography>\r
                  <OFH className={s.ofh} />\r
                </div>{' '}\r
                <div className={s.link}>\r
                  <Typography variant={'caption'}>LinkedIn:</Typography>\r
                  <Linkedin />\r
                </div>\r
              </div>\r
              <Button variant={'secondary'}>\r
                <EditBlack />\r
                Внести изменения\r
              </Button>\r
            </div>\r
          </div>\r
          <Select fullWidth label={'Статус'} options={[{
          title: 'Активный',
          value: 'active'
        }]} value={'active'} />\r
          <TextField label={'Укажите технологию'} value={'React'} />\r
          <TextField label={'Позиция'} value={'Front-End'} />\r
          <TextArea label={'Обязанности на проекте'} rows={3} value={'Оптимизация загрузки и отображения веб-страницы для улучшения скорости загрузки и реакции пользовательского интерфейса.'} />\r
        </ModalMainContent>\r
        <ModalFooter className={s.footer}>\r
          <Dialog.Close className={\`\${s.button} \${s.red}\`}>\r
            <Typography aria-label={'Close'} variant={'subtitle1'}>\r
              Отменить\r
            </Typography>\r
          </Dialog.Close>\r
          <Dialog.Close className={\`\${s.button} \${s.blue}\`}>\r
            <Typography aria-label={'Close'} variant={'subtitle1'}>\r
              Продолжить\r
            </Typography>\r
          </Dialog.Close>\r
        </ModalFooter>\r
      </Card>,
    trigger: <Button>Some trigger</Button>
  }
}`,...(M=($=c.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};const K=["AddNewUser","AddNewUserWithName","EditingUser","EditingUserWithIcons"];export{i as AddNewUser,o as AddNewUserWithName,d as EditingUser,c as EditingUserWithIcons,K as __namedExportsOrder,J as default};
//# sourceMappingURL=modal.stories-cec8717a.js.map
