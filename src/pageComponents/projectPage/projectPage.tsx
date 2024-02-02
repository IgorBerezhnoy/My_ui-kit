import { JSX } from 'react'

import { ChevronLeftFilled, ChevronRightFilled } from '@/assets'
import { Card, Chip, Image, Select, Slider, Typography } from '@/components/ui'
import { UsersTable } from '@/components/ui/table/usersTable'
import { UserTablePropsType } from '@/components/ui/table/usersTable.stories'

import s from './projectPage.module.scss'

export const ProjectPage = ({
  chips,
  className,
  description,
  images,
  img,
  link,
  name,
  price,
  releaseDate,
  table,
  ...rest
}: Props): JSX.Element => {
  return (
    <Card {...rest} className={`${s.container} ${className || ''}`}>
      <div className={s.imgAndProjectInf}>
        {img ? (
          <img alt={'img'} className={s.logoProject} src={img} />
        ) : (
          <div className={s.circle}></div>
        )}
        <div className={s.projectInfo}>
          <Typography className={s.name} variant={'h1'}>
            {name}
          </Typography>
          <div className={s.releaseDate}>
            <Typography className={s.grey} variant={'caption'}>
              Стоимость проекта:{' '}
            </Typography>
            <Typography className={s.black} variant={'caption'}>
              {price}
            </Typography>
          </div>
          <div className={s.releaseDate}>
            <Typography className={s.grey} variant={'caption'}>
              Дата старта разработки:{' '}
            </Typography>
            <Typography className={s.black} variant={'caption'}>
              {releaseDate}
            </Typography>
          </div>
          <div className={s.releaseDate}>
            <Typography className={s.grey} variant={'caption'}>
              Дата релиза:{' '}
            </Typography>
            <Typography className={s.black} variant={'caption'}>
              {releaseDate}
            </Typography>
          </div>
        </div>
      </div>
      {link ?? (
        <Typography as={'a'} className={s.link} href={''} variant={'subtitleLink1'}>
          Веб сайт проекта
          <ChevronRightFilled />
        </Typography>
      )}
      <div className={s.stack}>
        <Typography variant={'h3'}>Стек технологий</Typography>
        <div className={s.chips}>
          {chips.map((el, i) => (
            <Chip className={s.chip} key={i}>
              {el}
            </Chip>
          ))}
        </div>
      </div>
      <div className={s.aboutProject}>
        <div>
          <Typography variant={'h3'}>О проекте:</Typography>
        </div>
        <Typography variant={'bodyRegular2'}>{description}</Typography>
      </div>
      <Slider images={images} />
      <div className={s.table}>
        <Typography className={s.teamsTittle} variant={'h3'}>
          Участники команды
        </Typography>
        <UsersTable data={table} />
        <div className={s.pagination}>
          <Typography className={s.grey} variant={'caption'}>
            Rows per page:
          </Typography>
          <span className={s.select}>
            <Select
              options={[
                { title: '5', value: '5' },
                { title: '8', value: '8' },
                { title: '10', value: '10' },
              ]}
              value={'5'}
            />
          </span>
          <Typography className={s.quantity} variant={'caption'}>
            1-5 of 13
          </Typography>
          <ChevronLeftFilled className={s.chevronLeftFilled} />
          <ChevronRightFilled />
        </div>
      </div>
    </Card>
  )
}

interface Props {
  chips: string[]
  className?: string
  dateStart: string
  description: string
  images: Image[]
  img: string
  link?: string
  name: string
  price: string
  releaseDate: string
  table: UserTablePropsType
}
