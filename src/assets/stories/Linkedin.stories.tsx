import type { Meta, StoryObj } from '@storybook/react'

import { Linkedin } from '@/assets/icons'

const meta = {
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
  component: Linkedin,
  tags: ['autodocs'],
  title: 'Icons/Linkedin',
} satisfies Meta<typeof Linkedin>

export default meta
type Story = StoryObj<typeof meta>

export const icon: Story = {
  args: {},
}
