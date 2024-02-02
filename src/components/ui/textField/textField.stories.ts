import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from '@/components/ui/textField/textField'

import s from './textField.module.scss'

const meta: Meta<typeof TextField> = {
  argTypes: {
    onChange: {
      action: 'Change',
    },
  },
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/UI/TextField',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof TextField>

export const Default: Story = {
  args: {
    className: s.storyBook,
    label: 'TextField',
  },
}
export const DefaultWithValue: Story = {
  args: {
    className: s.storyBook,
    label: 'TextField',
    value: 'TextField',
  },
}
export const Disabled: Story = {
  args: {
    className: s.storyBook,
    disabled: true,
    label: 'TextField',
    value: 'TextField',
  },
}
