import { DetailedHTMLProps, HTMLAttributes } from 'react'

import s from './modalMainContent.module.scss'

export const ModalMainContent = ({ children, className }: Props) => {
  return <div className={`${s.content} ${className}`}>{children}</div>
}

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
