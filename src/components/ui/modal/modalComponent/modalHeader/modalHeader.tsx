import { ReactNode } from 'react'

import { Typography } from '@/components/ui'
import * as Dialog from '@radix-ui/react-dialog'

import s from './modalHeader.module.scss'

export const ModalHeader = ({ description, title }: Props) => {
  return (
    <div className={s.wrapper}>
      {title && (
        <Dialog.Title className={s.title}>
          <Typography as={'span'} variant={'h2'}>
            {title}
          </Typography>
        </Dialog.Title>
      )}
      {description && (
        <Dialog.Description className={s.description}>{description}</Dialog.Description>
      )}
    </div>
  )
}

interface Props {
  description?: ReactNode
  title?: ReactNode
}
