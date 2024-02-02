import { DetailedHTMLProps, HTMLAttributes, JSX, ReactNode } from 'react'

import s from './card.module.scss'

export const Card = ({ className, ...rest }: Props): JSX.Element => {
  return <div {...rest} className={` ${className} ${s.card}`}></div>
}

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode
}
