import { DetailedHTMLProps, HTMLAttributes, JSX, ReactNode } from 'react'

import { Typography } from '@/components/ui'

import s from './chip.module.scss'

export const Chip = ({ children, className, ...rest }: Props): JSX.Element => {
  return (
    <span {...rest} className={`${s.chip} ${className || ''}`}>
      <Typography className={s.description} variant={'bodyRegular2'}>
        {children}
      </Typography>
    </span>
  )
}

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
  children: ReactNode
}
