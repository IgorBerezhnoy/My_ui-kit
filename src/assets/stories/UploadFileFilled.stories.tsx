import type { Meta, StoryObj } from '@storybook/react'

import { UploadFileFilled } from '@/assets/icons'

const meta = {
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
  component: UploadFileFilled,
  tags: ['autodocs'],
  title: 'Icons/UploadFileFilled',
} satisfies Meta<typeof UploadFileFilled>

export default meta
type Story = StoryObj<typeof meta>

export const icon: Story = {
  args: {},
}
