import type { Meta, StoryObj } from '@storybook/react'

import { CancelFilled } from '@/assets/icons'

import s from './chip.module.scss'

import { Chip } from './'

const meta = {
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
  component: Chip,
  tags: ['autodocs'],
  title: 'Components/UI/Chip',
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <>#Jira</>,
  },
}
export const DefaultIcon: Story = {
  args: {
    children: (
      <span className={s.storybook}>
        #Jira
        <span className={s.icon}>
          <CancelFilled onClick={() => console.log('aaaaaaaaaa')} />
        </span>
      </span>
    ),
  },
}
