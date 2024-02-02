import type { Meta, StoryObj } from '@storybook/react'

import { Divider } from '../src/components/ui/divider'

const meta = {
  argTypes: {},
  component: Divider,
  tags: ['autodocs'],
  title: 'Components/UI/Divider',
} satisfies Meta<typeof Divider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
