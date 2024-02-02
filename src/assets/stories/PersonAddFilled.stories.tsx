import type { Meta, StoryObj } from '@storybook/react'

import PersonAddFilled from '@/assets/icons/PersonAddFilled'

const meta = {
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
  component: PersonAddFilled,
  tags: ['autodocs'],
  title: 'Icons/PersonAddFilled',
} satisfies Meta<typeof PersonAddFilled>

export default meta
type Story = StoryObj<typeof meta>

export const icon: Story = {
  args: {},
}
