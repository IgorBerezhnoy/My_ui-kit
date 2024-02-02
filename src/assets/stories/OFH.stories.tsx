import type { Meta, StoryObj } from '@storybook/react'

import { OFH } from '@/assets/icons'

const meta = {
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
  component: OFH,
  tags: ['autodocs'],
  title: 'Icons/OFH',
} satisfies Meta<typeof OFH>

export default meta
type Story = StoryObj<typeof meta>

export const icon: Story = {
  args: {},
}
