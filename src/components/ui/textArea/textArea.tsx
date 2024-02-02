import { DetailedHTMLProps, JSX, TextareaHTMLAttributes } from 'react'

import s from './textArea.module.scss'

export const TextArea = ({ className, disabled, label, ...rest }: Props): JSX.Element => {
  return (
    <span className={`${s.wrapper} ${disabled ? s.disabled : ''}`}>
      {label && <label className={`${s.label} ${disabled ? s.disabled : ''}`}>{label}</label>}
      <textarea className={s.textarea} disabled={disabled} {...rest} />
    </span>
  )
}

interface Props
  extends DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> {
  label?: string
}
