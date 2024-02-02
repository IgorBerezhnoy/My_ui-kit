import { useState } from 'react'

import { Button, Chip, Typography } from '@/components/ui'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from '@/components/ui/table/index'
import { UserTablePropsType } from '@/components/ui/table/usersTable.stories'

import s from './table.module.scss'

export const UsersTable = ({ data }: { data: UserTablePropsType }) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeadCell>
            <Typography className={s.ml_16} variant={'subtitle2'}>
              Участник
            </Typography>
          </TableHeadCell>
          <TableHeadCell>
            <Typography variant={'subtitle2'}>Статус</Typography>
          </TableHeadCell>
          <TableHeadCell>
            <Typography variant={'subtitle2'}>Позиция</Typography>
          </TableHeadCell>
          <TableHeadCell>
            <Typography variant={'subtitle2'}>OfferHeap</Typography>
          </TableHeadCell>
          <TableHeadCell>
            <Typography variant={'subtitle2'}>LinkedIn</Typography>
          </TableHeadCell>
          <TableHeadCell>
            <Typography variant={'subtitle2'}>Технологии</Typography>
          </TableHeadCell>
          <TableHeadCell>
            <Typography variant={'subtitle2'}>Обязанности</Typography>
          </TableHeadCell>
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
                    <Typography variant={'bodyRegular2'}>{el.name}</Typography>
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
              <TableCell className={s.chips}>
                {el.technologies.map((el, i) => (
                  <Chip className={s.chip} key={i}>
                    {el}
                  </Chip>
                ))}
              </TableCell>
              <TableCell>
                <Typography className={s.responsibilities} variant={'bodyRegular2'}>
                  <SeeMoreBtn responsibilities={el.responsibilities} />
                </Typography>
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
const SeeMoreBtn = ({ responsibilities }: { responsibilities: string }) => {
  const [seeLong, setSeeLong] = useState(false)

  return (
    <div className={s.seeMoreBtnWrapper}>
      {seeLong ? (
        <>
          {responsibilities}
          <Button className={s.seeMore} onClick={() => setSeeLong(false)} variant={'link'}>
            Скрыть
          </Button>
        </>
      ) : (
        <>
          {responsibilities.length > 50 ? (
            <>
              {responsibilities.slice(0, 50)}...
              <Button className={s.seeMore} onClick={() => setSeeLong(true)} variant={'link'}>
                Показать еще
              </Button>
            </>
          ) : (
            responsibilities
          )}
        </>
      )}
    </div>
  )
}
