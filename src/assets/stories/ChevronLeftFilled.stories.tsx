import type { Meta, StoryObj } from '@storybook/react'

import { ChevronLeftFilled } from '@/assets/icons'

const meta = {
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
  component: ChevronLeftFilled,
  tags: ['autodocs'],
  title: 'Icons/ChevronLeftFilled',
} satisfies Meta<typeof ChevronLeftFilled>

export default meta
type Story = StoryObj<typeof meta>

export const icon: Story = {
  args: {},
}
