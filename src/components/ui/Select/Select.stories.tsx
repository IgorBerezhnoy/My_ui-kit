import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { OptionType, Select, SelectProps } from './Select'

const meta: Meta<typeof Select> = {
  component: Select,
  tags: ['autodocs'],
  title: 'Components/UI/Select',
}

export default meta
type Story = StoryObj<typeof meta>

const initialState: OptionType[] = [
  { title: 'First Select', value: 'first' },
  { title: 'Second Select', value: 'second' },
  { title: 'Third Select', value: 'third' },
  { title: 'Fourth Select', value: 'fourth' },
]

export const Default: Story = {
  args: {
    label: 'Select',
    options: initialState,
    placeholder: 'Select',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Select',
    options: initialState,
    placeholder: 'Select',
  },
}

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    label: 'Select',
    options: initialState,
    placeholder: 'Select',
  },
}

const SelectWithHooks = (args: SelectProps) => {
  const [selectedItem, setSelectedItem] = useState<string>(args.options[0].value)

  return <Select onValueChange={setSelectedItem} value={selectedItem} {...args} />
}

export const Active: Story = {
  args: {
    fullWidth: true,
    label: 'Active placeholder',
    options: initialState,
  },
  render: args => <SelectWithHooks {...args} />,
}
