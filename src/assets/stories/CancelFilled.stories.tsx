import type { Meta, StoryObj } from '@storybook/react'

import { CancelFilled } from '@/assets/icons'

const meta = {
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
  component: CancelFilled,
  tags: ['autodocs'],
  title: 'Icons/CancelFilled',
} satisfies Meta<typeof CancelFilled>

export default meta
type Story = StoryObj<typeof meta>

export const icon: Story = {
  args: {},
}
