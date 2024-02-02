import { DetailedHTMLProps, InputHTMLAttributes, JSX } from 'react'

import s from './textField.module.scss'

export const TextField = ({ className, disabled, label, ...rest }: Props): JSX.Element => {
  return (
    <span className={`${s.wrapper} ${disabled ? s.disabled : ''}`}>
      {label && <label className={`${s.label} ${disabled ? s.disabled : ''}`}>{label}</label>}
      <input className={s.input} disabled={disabled} {...rest} />
    </span>
  )
}

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string
}
