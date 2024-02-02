import type { Meta, StoryObj } from '@storybook/react'

import { Add } from '@/assets/icons'

const meta = {
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
  component: Add,
  tags: ['autodocs'],
  title: 'Icons/Add',
} satisfies Meta<typeof Add>

export default meta
type Story = StoryObj<typeof meta>

export const icon: Story = {
  args: {},
}
