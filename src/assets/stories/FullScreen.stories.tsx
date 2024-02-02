import type { Meta, StoryObj } from '@storybook/react'

import FullScreen from '@/assets/icons/FullScreen'

const meta = {
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
  component: FullScreen,
  tags: ['autodocs'],
  title: 'Icons/FullScreen',
} satisfies Meta<typeof FullScreen>

export default meta
type Story = StoryObj<typeof meta>

export const icon: Story = {
  args: {},
}
