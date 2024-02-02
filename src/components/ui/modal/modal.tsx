import { ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'

import s from './modal.module.scss'

interface Props {
  children: ReactNode
  trigger: ReactNode
}

export const Modal = ({ children, trigger }: Props) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={s.overlay} />
        <Dialog.Content className={s.content}>{children}</Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
