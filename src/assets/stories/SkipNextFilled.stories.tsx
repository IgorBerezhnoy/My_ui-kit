import type { Meta, StoryObj } from '@storybook/react'

import { SkipNextFilled } from '@/assets/icons'

const meta = {
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
  component: SkipNextFilled,
  tags: ['autodocs'],
  title: 'Icons/SkipNextFilled',
} satisfies Meta<typeof SkipNextFilled>

export default meta
type Story = StoryObj<typeof meta>

export const icon: Story = {
  args: {},
}
