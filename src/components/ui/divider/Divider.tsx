import { DetailedHTMLProps, HTMLAttributes } from 'react'

import s from './Divider.module.css'

export const Divider = ({ className = '', ...rest }: DividerProps) => {
  return <hr className={`${s.hr} ${className}`} {...rest} />
}

interface DividerProps extends DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement> {}
