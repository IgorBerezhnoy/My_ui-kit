import type { Meta, StoryObj } from '@storybook/react'

import { FullScreenOut } from '@/assets/icons'

const meta = {
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
  component: FullScreenOut,
  tags: ['autodocs'],
  title: 'Icons/FullScreenOut',
} satisfies Meta<typeof FullScreenOut>

export default meta
type Story = StoryObj<typeof meta>

export const icon: Story = {
  args: {},
}
