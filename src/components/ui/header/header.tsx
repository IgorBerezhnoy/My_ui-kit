import { DetailedHTMLProps, HTMLAttributes, JSX, ReactNode } from 'react'

import s from './header.module.scss'

export const Header = ({ children, className, ...rest }: Props): JSX.Element => {
  return (
    <header className={`${s.header} ${className || ''}`} {...rest}>
      {children}
    </header>
  )
}

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  children: ReactNode
}
