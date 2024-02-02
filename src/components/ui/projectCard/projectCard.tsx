import { JSX } from 'react'

import { ChevronRightFilled } from '@/assets/icons'
import { Button, Card, Chip, Typography } from '@/components/ui'

import s from './projectCard.module.scss'

export const ProjectCard = ({
  chips,
  className,
  description,
  img,
  link,
  name,
  price,
  releaseDate,
  ...rest
}: Props): JSX.Element => {
  return (
    <Card {...rest} className={`${s.card} ${className || ''}`}>
      {link ?? (
        <Button as={'a'} className={s.link} href={''} variant={'link'}>
          <span>Перейти к проекту</span>
          <ChevronRightFilled />
        </Button>
      )}
      <div className={s.imgAndProjectInf}>
        <img alt={'img'} className={s.img} src={img} />
        <div className={s.projectInfo}>
          <Typography className={s.name} variant={'h2'}>
            {name}
          </Typography>
          <div className={s.releaseDate}>
            <Typography className={s.grey} variant={'caption'}>
              Дата релиза:{' '}
            </Typography>
            <Typography className={s.black} variant={'caption'}>
              {releaseDate}
            </Typography>
          </div>
          <div className={s.releaseDate}>
            <Typography className={s.grey} variant={'caption'}>
              Стоимость проекта:{' '}
            </Typography>
            <Typography className={s.black} variant={'caption'}>
              {price}
            </Typography>
          </div>
        </div>
      </div>
      <Typography className={s.description} variant={'bodyRegular2'}>
        {description}
      </Typography>
      <div className={s.chips}>
        {chips.map((el, i) => (
          <Chip key={i}>{el}</Chip>
        ))}
      </div>
    </Card>
  )
}

interface Props {
  chips: string[]
  className?: string
  description: string
  img: string
  link?: string
  name: string
  price: string
  releaseDate: string
}
