import type { Meta, StoryObj } from '@storybook/react'

import { Card } from '@/components/ui'

const meta = {
  argTypes: {},
  component: Card,
  tags: ['autodocs'],
  title: 'Components/UI/card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <div>Hello world</div>,
  },
}
