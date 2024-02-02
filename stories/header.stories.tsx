import type { Meta, StoryObj } from '@storybook/react'

import s from '../src/components/ui/header/header.module.scss'

import { ChevronDownFilled } from '../src/assets/icons'
import { Button, Typography } from '../src/components/ui'
import { Header } from '../src/components/ui/header'

const meta = {
  argTypes: {},
  component: Header,
  tags: ['autodocs'],
  title: 'Components/UI/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Client: Story = {
  args: {
    children: (
      <>
        <div className={s.logo}>
          <Typography as={'a'} className={s.logoLink} href={'#'} variant={'mediumText'}>
            Portfolio platform
          </Typography>
        </div>
        <div className={s.right}>
          {/*Заглушка*/}
          <div className={s.changeLang}>
            RU <ChevronDownFilled />
          </div>
        </div>
      </>
    ),
  },
}
export const Admin: Story = {
  args: {
    children: (
      <>
        <div className={s.logo}>
          <Typography as={'a'} className={s.logoLink} href={'#'} variant={'mediumText'}>
            Portfolio platform<span className={s.small}>Admin</span>
          </Typography>
        </div>
        <div className={s.right}>
          {/*Заглушка*/}
          <div className={s.changeLang}>
            RU <ChevronDownFilled />
          </div>
          <Button className={s.button}>Войти</Button>
        </div>
      </>
    ),
  },
}
export const AdminAuth: Story = {
  args: {
    children: (
      <>
        <div className={s.logo}>
          <Typography as={'a'} className={s.logoLink} href={'#'} variant={'mediumText'}>
            Portfolio platform <span className={s.small}>Admin</span>
          </Typography>
        </div>
        <div className={s.right}>
          {/*Заглушка*/}
          <div className={s.changeLang}>
            RU <ChevronDownFilled />
          </div>
          <Button className={s.button}>Выйти</Button>
        </div>
      </>
    ),
  },
}

// <div className={s.logo}>
//           <Typography as={'a'} className={s.logoLink} href={'#'} variant={'mediumText'}>
//             Portfolio platform {isAdmin && <span className={s.small}>Admin</span>}
//           </Typography>
//         </div>
//         <div className={s.right}>
//           {/*Заглушка*/}
//           <div className={s.changeLang}>
//             RU <ArrowBottom />
//           </div>
//           {!isAuth && <Button className={s.button}>Войти</Button>}
//         </div>
