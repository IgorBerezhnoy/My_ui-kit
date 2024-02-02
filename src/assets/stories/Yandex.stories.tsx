import type { Meta, StoryObj } from '@storybook/react'

import { Yandex } from '@/assets/icons'

const meta = {
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
  component: Yandex,
  tags: ['autodocs'],
  title: 'Icons/Yandex',
} satisfies Meta<typeof Yandex>

export default meta
type Story = StoryObj<typeof meta>

export const icon: Story = {
  args: {},
}
