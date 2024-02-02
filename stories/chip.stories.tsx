import type { Meta, StoryObj } from '@storybook/react'

import s from '../src/components/ui/chip/chip.module.scss'

import { CancelFilled } from '../src/assets/icons'
import { Chip } from '../src/components/ui/chip'

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
