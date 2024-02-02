import type { Meta, StoryObj } from '@storybook/react'

import { YandexLang } from '@/assets/icons'

const meta = {
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
  component: YandexLang,
  tags: ['autodocs'],
  title: 'Icons/YandexLang',
} satisfies Meta<typeof YandexLang>

export default meta
type Story = StoryObj<typeof meta>

export const icon: Story = {
  args: {},
}
