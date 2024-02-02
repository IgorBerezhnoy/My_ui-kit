import{j as e}from"./jsx-runtime-ffb262ed.js";import"./button-04a14efd.js";import{T as m,a as h,b as t,c as s,d as T,e as n,s as r,C as g}from"./table-1db7dcef.js";import"./textField-e67a9db3.js";import{T as l}from"./typography-7e81127d.js";import"./textArea-98c7220a.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./YandexLang-e0993ad9.js";import"./FullScreen-9ea9ac2e.js";import"./PersonAddFilled-3c72f740.js";import"./extends-98964cd2.js";import"./index-d3ea75b5.js";const F={component:m,tags:["autodocs"],title:"Components/UI/Table"},y=[{id:"1",img:"https://personalcar.in/assets/images/testimonial/20220816100621user.png",linkedIn:"LinkedIn",name:"Prabodhan Fitzgerald",offerHeap:"OfferHeap",position:"Front-End",responsibilities:"Оптимизация загрузки и отображения веб-страницы дл... Показать еще",status:"active",technologies:["#Jira","#Jira","#Jira"]},{id:"2",img:"https://personalcar.in/assets/images/testimonial/20220816100621user.png",linkedIn:"LinkedIn",name:"Prabodhan Fitzgerald",offerHeap:"OfferHeap",position:"Front-End",responsibilities:"Оптимизация загрузки и отображения веб-страницы дл... Показать еще",status:"employed",technologies:["#Jira","#Jira","#Jira"]},{id:"3",img:"https://personalcar.in/assets/images/testimonial/20220816100621user.png",linkedIn:"LinkedIn",name:"Prabodhan Fitzgerald",offerHeap:"OfferHeap",position:"Front-End",responsibilities:"Оптимизация загрузки и отображения веб-страницы дл... Показать еще",status:"notActive",technologies:["#Jira","#Jira","#Jira"]}],i={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(h,{children:e.jsxs(t,{children:[e.jsx(s,{children:"Участник"}),e.jsx(s,{children:"Статус"}),e.jsx(s,{children:"Позиция"}),e.jsx(s,{children:"OfferHeap"}),e.jsx(s,{children:"LinkedIn"}),e.jsx(s,{children:"Технологии"}),e.jsx(s,{children:"Обязанности"})]})}),e.jsx(T,{children:y.map(a=>e.jsxs(t,{children:[e.jsx(n,{children:e.jsxs("div",{className:r.imgAndName,children:[e.jsx("img",{alt:"img",className:r.userImg,src:a.img}),e.jsx("span",{children:a.name})]})}),e.jsxs(n,{children:[e.jsx("span",{className:`${r.status} ${a.status=="active"?r.active:a.status==="employed"?r.employed:r.notActive}`}),e.jsx(l,{variant:"bodyRegular2",children:a.status})]}),e.jsx(n,{children:e.jsx(l,{variant:"bodyRegular2",children:a.position})}),e.jsx(n,{children:e.jsx(l,{as:"a",href:"#",variant:"subtitleLink2",children:a.offerHeap})}),e.jsx(n,{children:e.jsx(l,{as:"a",href:"#",variant:"subtitleLink2",children:a.linkedIn})}),e.jsx(n,{children:a.technologies.map((c,b)=>e.jsx(g,{className:r.chip,children:c},b))}),e.jsx(n,{children:e.jsx(l,{className:r.responsibilities,variant:"bodyRegular2",children:a.responsibilities.length>50?e.jsxs(e.Fragment,{children:[a.responsibilities.slice(0,50),"...",e.jsx(l,{variant:"subtitleLink2",children:" Показать еще"})]}):a.responsibilities})})]},a.id))})]})}};var o,d,p;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: <>\r
        <TableHead>\r
          <TableRow>\r
            <TableHeadCell>Участник</TableHeadCell>\r
            <TableHeadCell>Статус</TableHeadCell>\r
            <TableHeadCell>Позиция</TableHeadCell>\r
            <TableHeadCell>OfferHeap</TableHeadCell>\r
            <TableHeadCell>LinkedIn</TableHeadCell>\r
            <TableHeadCell>Технологии</TableHeadCell>\r
            <TableHeadCell>Обязанности</TableHeadCell>\r
          </TableRow>\r
        </TableHead>\r
        <TableBody>\r
          {data.map(el => {
          return <TableRow key={el.id}>\r
                <TableCell>\r
                  {<div className={s.imgAndName}>\r
                      <img alt={'img'} className={s.userImg} src={el.img} />\r
                      <span>{el.name}</span>\r
                    </div>}\r
                </TableCell>\r
                <TableCell>\r
                  <span className={\`\${s.status} \${
              // eslint-disable-next-line no-nested-ternary
              el.status == 'active' ? s.active : el.status === 'employed' ? s.employed : s.notActive}\`}></span>\r
                  <Typography variant={'bodyRegular2'}>{el.status}</Typography>\r
                </TableCell>\r
                <TableCell>\r
                  <Typography variant={'bodyRegular2'}>{el.position}</Typography>\r
                </TableCell>\r
                <TableCell>\r
                  <Typography as={'a'} href={'#'} variant={'subtitleLink2'}>\r
                    {el.offerHeap}\r
                  </Typography>\r
                </TableCell>\r
                <TableCell>\r
                  <Typography as={'a'} href={'#'} variant={'subtitleLink2'}>\r
                    {el.linkedIn}\r
                  </Typography>\r
                </TableCell>\r
                <TableCell>\r
                  {el.technologies.map((el, i) => <Chip className={s.chip} key={i}>\r
                      {el}\r
                    </Chip>)}\r
                </TableCell>\r
                <TableCell>\r
                  <Typography className={s.responsibilities} variant={'bodyRegular2'}>\r
                    {el.responsibilities.length > 50 ? <>\r
                        {el.responsibilities.slice(0, 50)}...\r
                        <Typography variant={'subtitleLink2'}> Показать еще</Typography>\r
                      </> : el.responsibilities}\r
                  </Typography>\r
                </TableCell>\r
              </TableRow>;
        })}\r
        </TableBody>\r
      </>
  }
}`,...(p=(d=i.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const O=["TableDecks"];export{i as TableDecks,O as __namedExportsOrder,F as default};
//# sourceMappingURL=table.stories-af793c6c.js.map
