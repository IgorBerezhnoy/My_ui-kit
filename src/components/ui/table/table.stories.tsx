import type { Meta, StoryObj } from '@storybook/react'

import { Chip, Typography } from '@/components/ui'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from '@/components/ui/table/table'

import s from './table.module.scss'

const meta = {
  component: Table,
  tags: ['autodocs'],
  title: 'Components/UI/Table',
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>
const data = [
  {
    id: '1',
    img: 'https://personalcar.in/assets/images/testimonial/20220816100621user.png',
    linkedIn: 'LinkedIn',
    name: 'Prabodhan Fitzgerald',
    offerHeap: 'OfferHeap',
    position: 'Front-End',
    responsibilities: 'Оптимизация загрузки и отображения веб-страницы дл... Показать еще',
    status: 'active',
    technologies: ['#Jira', '#Jira', '#Jira'],
  },
  {
    id: '2',
    img: 'https://personalcar.in/assets/images/testimonial/20220816100621user.png',
    linkedIn: 'LinkedIn',
    name: 'Prabodhan Fitzgerald',
    offerHeap: 'OfferHeap',
    position: 'Front-End',
    responsibilities: 'Оптимизация загрузки и отображения веб-страницы дл... Показать еще',
    status: 'employed',
    technologies: ['#Jira', '#Jira', '#Jira'],
  },
  {
    id: '3',
    img: 'https://personalcar.in/assets/images/testimonial/20220816100621user.png',
    linkedIn: 'LinkedIn',
    name: 'Prabodhan Fitzgerald',
    offerHeap: 'OfferHeap',
    position: 'Front-End',
    responsibilities: 'Оптимизация загрузки и отображения веб-страницы дл... Показать еще',
    status: 'notActive',
    technologies: ['#Jira', '#Jira', '#Jira'],
  },
]

export const TableDecks: Story = {
  args: {
    children: (
      <>
        <TableHead>
          <TableRow>
            <TableHeadCell>Участник</TableHeadCell>
            <TableHeadCell>Статус</TableHeadCell>
            <TableHeadCell>Позиция</TableHeadCell>
            <TableHeadCell>OfferHeap</TableHeadCell>
            <TableHeadCell>LinkedIn</TableHeadCell>
            <TableHeadCell>Технологии</TableHeadCell>
            <TableHeadCell>Обязанности</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(el => {
            return (
              <TableRow key={el.id}>
                <TableCell>
                  {
                    <div className={s.imgAndName}>
                      <img alt={'img'} className={s.userImg} src={el.img} />
                      <span>{el.name}</span>
                    </div>
                  }
                </TableCell>
                <TableCell>
                  <span
                    className={`${s.status} ${
                      // eslint-disable-next-line no-nested-ternary
                      el.status == 'active'
                        ? s.active
                        : el.status === 'employed'
                        ? s.employed
                        : s.notActive
                    }`}
                  ></span>
                  <Typography variant={'bodyRegular2'}>{el.status}</Typography>
                </TableCell>
                <TableCell>
                  <Typography variant={'bodyRegular2'}>{el.position}</Typography>
                </TableCell>
                <TableCell>
                  <Typography as={'a'} href={'#'} variant={'subtitleLink2'}>
                    {el.offerHeap}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography as={'a'} href={'#'} variant={'subtitleLink2'}>
                    {el.linkedIn}
                  </Typography>
                </TableCell>
                <TableCell>
                  {el.technologies.map((el, i) => (
                    <Chip className={s.chip} key={i}>
                      {el}
                    </Chip>
                  ))}
                </TableCell>
                <TableCell>
                  <Typography className={s.responsibilities} variant={'bodyRegular2'}>
                    {el.responsibilities.length > 50 ? (
                      <>
                        {el.responsibilities.slice(0, 50)}...
                        <Typography variant={'subtitleLink2'}> Показать еще</Typography>
                      </>
                    ) : (
                      el.responsibilities
                    )}
                  </Typography>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </>
    ),
  },
}
