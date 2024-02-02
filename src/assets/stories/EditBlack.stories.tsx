import type { Meta, StoryObj } from '@storybook/react'

import { EditBlack } from '@/assets/icons'

const meta = {
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
  component: EditBlack,
  tags: ['autodocs'],
  title: 'Icons/EditBlack',
} satisfies Meta<typeof EditBlack>

export default meta
type Story = StoryObj<typeof meta>

export const icon: Story = {
  args: {},
}
