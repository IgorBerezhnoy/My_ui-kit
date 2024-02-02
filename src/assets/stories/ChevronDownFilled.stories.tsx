import type { Meta, StoryObj } from '@storybook/react'

import { ChevronDownFilled } from '@/assets/icons'

const meta = {
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
  component: ChevronDownFilled,
  tags: ['autodocs'],
  title: 'Icons/ChevronDownFilled',
} satisfies Meta<typeof ChevronDownFilled>

export default meta
type Story = StoryObj<typeof meta>

export const icon: Story = {
  args: {},
}
