import type { Meta, StoryObj } from '@storybook/react'

import { Add, ArrowBackFilled } from '@/assets/icons'

const meta = {
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
  component: ArrowBackFilled,
  tags: ['autodocs'],
  title: 'Icons/ArrowBackFilled',
} satisfies Meta<typeof Add>

export default meta
type Story = StoryObj<typeof meta>

export const icon: Story = {
  args: {},
}
