import type { Meta, StoryObj } from '@storybook/react'

import { ChevronRightFilled } from '@/assets/icons'

const meta = {
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
  component: ChevronRightFilled,
  tags: ['autodocs'],
  title: 'Icons/ChevronRightFilled',
} satisfies Meta<typeof ChevronRightFilled>

export default meta
type Story = StoryObj<typeof meta>

export const icon: Story = {
  args: {},
}
