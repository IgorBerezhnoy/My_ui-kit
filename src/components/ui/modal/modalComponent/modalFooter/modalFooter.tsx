import { DetailedHTMLProps, HTMLAttributes } from 'react'

import s from './modalFooter.module.scss'

export const ModalFooter = ({ children, className }: Props) => {
  return <div className={`${s.wrapper} ${className}`}>{children}</div>
}

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
